"use client";

import { useState } from "react";

export function ProjectImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const count = images.length;
  const go = (delta: number) => setIdx((i) => (i + delta + count) % count);

  return (
    <div className="carousel">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt={i === 0 ? alt : ""}
          className={i === idx ? "is-active" : ""}
          loading="lazy"
        />
      ))}
      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === idx ? "is-on" : ""}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
