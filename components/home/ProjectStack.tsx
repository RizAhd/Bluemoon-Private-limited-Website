"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";
import { formatLKRCompact } from "@/lib/currency";
import type { Project } from "@/lib/types";

/** Project cards that stick and stack while scrolling; the card underneath eases back. */
export function ProjectStack({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const mq = window.matchMedia("(min-width: 861px) and (prefers-reduced-motion: no-preference)");
    const cards = Array.from(list.querySelectorAll<HTMLElement>(".stack-card"));
    let frame = 0;
    const run = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next || !mq.matches) {
          card.style.removeProperty("--sink");
          return;
        }
        const a = card.getBoundingClientRect();
        const b = next.getBoundingClientRect();
        // 0 while the next card is below, 1 once it fully covers this one
        const t = Math.min(1, Math.max(0, 1 - (b.top - a.top) / a.height));
        card.style.setProperty("--sink", t.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="stack" ref={listRef}>
      {projects.map((p, i) => (
        <article className="stack-card" key={p.id} style={{ "--i": i } as React.CSSProperties}>
          <div className="stack-card__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.cover} alt={p.alt} loading="lazy" decoding="async" />
            <span className="stack-card__chip">{p.category}</span>
            <span className="stack-card__count">{p.images.length} photos</span>
          </div>
          <div className="stack-card__body">
            <p className="stack-card__meta">
              <span>
                <Icon name="spark" /> {p.year}
              </span>
              <span>
                <Icon name="map" /> {p.location}
              </span>
            </p>
            <h3>{p.title}</h3>
            <p className="stack-card__text">{p.description}</p>
            <div className="stack-card__foot">
              {p.valueLKR ? (
                <p className="stack-card__value">
                  {formatLKRCompact(p.valueLKR)} <span>contract value</span>
                </p>
              ) : null}
              <Link className="btn btn--ghost btn--small" href={`/projects#${p.id}`}>
                Project Details
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
