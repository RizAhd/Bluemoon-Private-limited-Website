"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { formatLKRCompact } from "@/lib/currency";
import type { Project } from "@/lib/types";

const SLIDE_MS = 6000;

/**
 * One featured project at a time. While in view it moves on to the next project
 * by itself (pausing on hover); the dots and arrows pick one directly.
 * No scroll effects: the block keeps its place on the page.
 */
export function ProjectStack({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % projects.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [running, active, projects.length]);

  const go = (d: number) => setActive((a) => (a + d + projects.length) % projects.length);

  return (
    <div
      ref={ref}
      className={`showcase${running ? " is-running" : ""}`}
      style={{ "--slide-ms": `${SLIDE_MS}ms` } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="showcase__slides">
        {projects.map((p, i) => (
          <article
            className={`stack-card${i === active ? " is-active" : ""}`}
            key={p.id}
            aria-hidden={i !== active}
            inert={i !== active || undefined}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${projects.length}`}
          >
            <div className="stack-card__media pz">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt={p.alt} loading="lazy" decoding="async" />
              <span className="chip chip--dark">{p.category}</span>
              <span className="chip chip--dark chip--right">{p.images.length} photos</span>
            </div>
            <div className="stack-card__body">
              <p className="meta">
                <span>
                  <Icon name="calendar" />
                  {p.year}
                </span>
                <span className="meta__dot" aria-hidden="true" />
                <span>
                  <Icon name="map" />
                  {p.location}
                </span>
              </p>
              <div>
                <h3>{p.shortTitle}</h3>
                <p className="stack-card__text">{p.description}</p>
              </div>
              <div className="stack-card__foot">
                <Btn href={`/projects/${p.id}`} variant="dark" label={`Project details: ${p.shortTitle}`}>
                  Project Details
                </Btn>
                {p.valueLKR ? <p className="stack-card__value mono">{formatLKRCompact(p.valueLKR)}</p> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="showcase__nav">
        <button type="button" className="showcase__arrow" onClick={() => go(-1)} aria-label="Previous project">
          <Icon name="arrowLeft" />
        </button>
        <div className="showcase__dots">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`showcase__dot${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.shortTitle}`}
              aria-current={i === active || undefined}
            >
              <span key={i === active ? active : -1} />
            </button>
          ))}
        </div>
        <button type="button" className="showcase__arrow" onClick={() => go(1)} aria-label="Next project">
          <Icon name="arrowRight" />
        </button>
      </div>
    </div>
  );
}
