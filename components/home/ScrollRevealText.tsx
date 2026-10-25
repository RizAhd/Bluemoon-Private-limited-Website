"use client";

import { useEffect, useRef } from "react";

type Segment = { text: string; accent?: boolean };

/** Paragraph whose words light up one after another as it scrolls through the viewport. */
export function ScrollRevealText({ segments, className }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("is-lit"));
      return;
    }
    let frame = 0;
    let lit = -1;
    const run = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the paragraph enters the lower part of the screen, 1 when it reaches the upper third
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const count = Math.round(p * words.length);
      if (count === lit) return;
      lit = count;
      words.forEach((w, i) => w.classList.toggle("is-lit", i < count));
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
    <p ref={ref} className={`reveal-text ${className ?? ""}`}>
      {segments.map((seg, si) =>
        (si > 0 ? " " + seg.text : seg.text).split(/(\s+)/).map((part, wi) =>
          /^\s+$/.test(part) || part === "" ? (
            part
          ) : (
            <span key={`${si}-${wi}`} data-w className={seg.accent ? "is-accent" : undefined}>
              {part}
            </span>
          ),
        ),
      )}
    </p>
  );
}
