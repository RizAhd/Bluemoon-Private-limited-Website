"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";
import type { Service } from "@/lib/types";

/** Swipeable row of service cards; the photo and summary reveal on hover or focus. */
export function ServiceSlider({ items }: { items: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 1;
    // the bar shows how much of the row is in view, sliding along as it scrolls
    const share = max > 0 ? el.clientWidth / el.scrollWidth : 1;
    barRef.current?.style.setProperty("--share", String(share));
    barRef.current?.style.setProperty("--p", String(p));
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>(".svc-card");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="svc-slider">
      <div className="svc-slider__track" ref={trackRef} tabIndex={-1}>
        {items.map((s) => (
          <Link key={s.slug} href={`/services#${s.slug}`} className="svc-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="svc-card__img" src={asset(`/images/services/${s.slug}.jpg`)} alt="" loading="lazy" decoding="async" width={720} height={900} />
            <span className="svc-card__icon">
              <Icon name={s.icon} />
            </span>
            <span className="svc-card__body">
              <span className="svc-card__title">{s.title}</span>
              <span className="svc-card__text">{s.excerpt}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="svc-slider__controls">
        <button type="button" className="svc-slider__btn" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous services">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <span className="svc-slider__progress" aria-hidden="true">
          <span ref={barRef} />
        </span>
        <button type="button" className="svc-slider__btn" onClick={() => step(1)} disabled={edge.end} aria-label="Next services">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
