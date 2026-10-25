"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";

type Item = { icon: string; title: string; description: string };

/**
 * Photo beside a list where one item is open at a time. It moves on by itself
 * every few seconds while in view, and stops once the visitor picks an item.
 */
export function FeatureAccordion({ items, image, alt = "" }: { items: Item[]; image: string; alt?: string }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auto) return;
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(timer);
      if (e.isIntersecting) timer = window.setInterval(() => setActive((a) => (a + 1) % items.length), 4500);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [auto, items.length]);

  return (
    <div className="facc" ref={ref}>
      <div className="facc__media pz" data-reveal="tilt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(image)} alt={alt} loading="lazy" decoding="async" />
      </div>
      <ul className="facc__list" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
        {items.map((it, i) => (
          <li key={it.title} className={i === active ? "is-active" : undefined}>
            <button
              type="button"
              aria-expanded={i === active}
              onClick={() => {
                setAuto(false);
                setActive(i);
              }}
            >
              <Icon name={it.icon} />
              {it.title}
            </button>
            <div className="facc__body">
              <p>{it.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
