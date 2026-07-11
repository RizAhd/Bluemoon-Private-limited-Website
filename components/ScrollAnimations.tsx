"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("js-reveal");

    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-counter]"));

    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
      counters.forEach((el) => {
        el.textContent = el.dataset.counter ?? el.textContent;
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    reveals.forEach((el) => io.observe(el));

    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.counter) || 0;
      const duration = 1400;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => cio.observe(el));

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, [pathname]);

  return null;
}
