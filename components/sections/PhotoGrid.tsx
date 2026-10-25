"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

export type Photo = { src: string; alt: string; title: string; meta: string; tag: string };

/**
 * Photo grid with optional filter chips and a lightbox
 * (arrow keys to move, Escape to close, focus kept inside while open).
 */
export function PhotoGrid({ items, filters }: { items: Photo[]; filters?: string[] }) {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const shown = useMemo(() => (filter === "All" ? items : items.filter((p) => p.tag === filter)), [filter, items]);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (index === null) {
      document.body.style.overflow = "";
      lastFocused.current?.focus();
      return;
    }
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>(".lb__close")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") return step(e.key === "ArrowRight" ? 1 : -1);
      if (e.key === "Tab" && dialog) {
        const f = Array.from(dialog.querySelectorAll<HTMLElement>("button"));
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  const item = index !== null ? shown[index] : null;

  return (
    <>
      {filters && (
        <div className="pfilter" role="group" aria-label="Filter photos">
          {["All", ...filters].map((f) => (
            <button key={f} type="button" className="pfilter__btn" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
              <span className="mono">{f === "All" ? items.length : items.filter((p) => p.tag === f).length}</span>
            </button>
          ))}
        </div>
      )}
      <div className="pgrid2" key={filter}>
        {shown.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className="pcell"
            style={{ "--i": i } as React.CSSProperties}
            aria-label={`Open photo: ${p.title}`}
            onClick={(e) => {
              lastFocused.current = e.currentTarget;
              setIndex(i);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            <span className="pcell__cap">
              <span>{p.title}</span>
              <Icon name="plus" />
            </span>
          </button>
        ))}
      </div>

      <div className={`lb${item ? " is-open" : ""}`} aria-hidden={!item}>
        <div className="lb__overlay" onClick={close} />
        {item && (
          <div className="lb__dialog" role="dialog" aria-modal="true" aria-label={item.title} ref={dialogRef}>
            <button className="lb__close" type="button" aria-label="Close preview" onClick={close}>
              <Icon name="plus" />
            </button>
            <button className="lb__nav lb__nav--prev" type="button" aria-label="Previous photo" onClick={() => step(-1)}>
              <Icon name="arrowLeft" />
            </button>
            <button className="lb__nav lb__nav--next" type="button" aria-label="Next photo" onClick={() => step(1)}>
              <Icon name="arrowRight" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} />
            <div className="lb__meta">
              <h2>{item.title}</h2>
              <p>
                {item.meta} <span className="mono">{`${(index ?? 0) + 1} / ${shown.length}`}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
