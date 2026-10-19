import Link from "next/link";
import type { Project } from "@/lib/types";
import { Icon } from "./Icon";

/** Home showcase: one large tile and two smaller ones, text set over the photo. */
export function ProjectBento({ projects }: { projects: Project[] }) {
  return (
    <div className="bento" data-reveal>
      {projects.slice(0, 3).map((p, i) => (
        <Link
          key={p.id}
          href={`/projects#${p.id}`}
          className={`bento__tile${i === 0 ? " bento__tile--lead" : ""}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.cover}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="bento__img"
          />
          <span className="bento__body">
            <span className="bento__cat">{p.category}</span>
            <span className="bento__title">{p.title}</span>
            <span className="bento__loc">
              <Icon name="map" className="bento__icon" />
              {p.location} · {p.year}
            </span>
            <span className="bento__more">
              View project <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
