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

const VISIBLE = 5;

// One group per project; `start` is the group's first index in the flat lightbox list.
const groups = projects.reduce<
  {
    id: string;
    title: string;
    meta: string;
    start: number;
    images: string[];
    alt: string;
  }[]
>((acc, p) => {
  const start = acc.length
    ? acc[acc.length - 1].start + acc[acc.length - 1].images.length
    : 0;
  acc.push({
    id: p.id,
    title: p.title,
    meta: `${p.category} · ${p.location} · ${p.year}`,
    start,
    images: p.images,
    alt: p.alt,
  });
  return acc;
}, []);

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((i) =>
        i === null ? i : (i + delta + items.length) % items.length,
      ),
    [],
  );

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
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        step(e.key === "ArrowRight" ? 1 : -1);
        return;
      }
      if (e.key === "Tab" && dialog) {
        const f = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button, a[href], [tabindex]:not([tabindex="-1"])',
          ),
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
  }, [index, close, step]);

  const item = index !== null ? items[index] : null;

  return (
    <>
      <div className="gallery-groups">
        {groups.map((g) => (
          <section
            className="gallery-group"
            key={g.id}
            aria-labelledby={`g-${g.id}`}
          >
            <div className="gallery-group__head">
              <h2 id={`g-${g.id}`}>{g.title}</h2>
              <p>{g.meta}</p>
            </div>
            <div className="gallery-grid">
              {/* lead photo + four thumbnails; the rest open from the lightbox */}
              {g.images.slice(0, VISIBLE).map((img, j) => {
                const more = j === VISIBLE - 1 ? g.images.length - VISIBLE : 0;
                return (
                  <button
                    key={img}
                    type="button"
                    className="gallery-card"
                    aria-label={
                      more > 0
                        ? `Open photo ${j + 1} of ${g.images.length}, ${more} more: ${g.title}`
                        : `Open photo ${j + 1} of ${g.images.length}: ${g.title}`
                    }
                    onClick={(e) => {
                      lastFocused.current = e.currentTarget;
                      setIndex(g.start + j);
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={j === 0 ? g.alt : ""}
                      loading="lazy"
                      decoding="async"
                    />
                    {more > 0 && (
                      <span className="gallery-card__more" aria-hidden="true">
                        +{more} photos
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
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
            <button
              className="lightbox__nav lightbox__nav--prev"
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              ‹
            </button>
            <button
              className="lightbox__nav lightbox__nav--next"
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              ›
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
