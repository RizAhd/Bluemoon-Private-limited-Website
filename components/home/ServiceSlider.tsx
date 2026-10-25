"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/sections/ServiceCard";
import type { Service } from "@/lib/types";

/** Swipeable row of service cards with arrow buttons and a progress line. */
export function ServiceSlider({ items }: { items: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const share = max > 0 ? el.clientWidth / el.scrollWidth : 1;
    barRef.current?.style.setProperty("--share", String(share));
    barRef.current?.style.setProperty("--p", String(max > 0 ? el.scrollLeft / max : 1));
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
    const card = el?.querySelector<HTMLElement>(".scard");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="slider">
      <div className="slider__track" ref={trackRef}>
        {items.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      <div className="slider__controls">
        <button type="button" className="slider__btn" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous services">
          <Icon name="arrowLeft" />
        </button>
        <span className="slider__progress" aria-hidden="true">
          <span ref={barRef} />
        </span>
        <button type="button" className="slider__btn" onClick={() => step(1)} disabled={edge.end} aria-label="Next services">
          <Icon name="arrowRight" />
        </button>
      </div>
    </div>
  );
}
