"use client";

import { useEffect, useState } from "react";

export function ProjectImageCarousel({
  images,
  alt,
  interval = 3400,
}: {
  images: string[];
  alt: string;
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [count, interval]);

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
        <div className="carousel__dots" aria-hidden="true">
          {images.map((_, i) => (
            <span key={i} className={i === idx ? "is-on" : ""} />
          ))}
        </div>
      )}
    </div>
  );
}
