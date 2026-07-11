"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";

const items = projects.flatMap((p) =>
  p.images.map((img) => ({
    img,
    title: p.title,
    category: `${p.category} · ${p.location}`,
    alt: p.alt,
  })),
);

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    if (index === null) {
      document.body.style.overflow = "";
      lastFocused.current?.focus();
      return;
    }
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>(".lightbox__close")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const f = Array.from(
          dialog.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
        );
        if (!f.length) return;
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
  }, [index, close]);

  const item = index !== null ? items[index] : null;

  return (
    <>
      <div id="gallery-grid" className="gallery-grid" data-stagger>
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            className="gallery-card"
            onClick={(e) => {
              lastFocused.current = e.currentTarget;
              setIndex(i);
            }}
          >
            <img src={it.img} alt={it.alt} loading="lazy" />
            <span className="gallery-card__meta">
              <span className="gallery-card__title">{it.title}</span>
              <span>{it.category}</span>
            </span>
          </button>
        ))}
      </div>

      <div className={`lightbox${item ? " is-open" : ""}`} aria-hidden={!item}>
        <div className="lightbox__overlay" onClick={close} />
        {item && (
          <div
            className="lightbox__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            ref={dialogRef}
          >
            <button
              className="lightbox__close"
              type="button"
              aria-label="Close preview"
              onClick={close}
            >
              &times;
            </button>
            <img src={item.img} alt={item.alt} />
            <div className="lightbox__meta">
              <h2>{item.title}</h2>
              <p>{item.category}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
