import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import type { Project } from "@/lib/types";

/** Project card: photo with chips, then a bar with year, place, name and a details button. */
export function ProjectTile({ project: p, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <article className={`ptile${wide ? " ptile--wide" : ""}`}>
      <Link href={`/projects/${p.id}`} className="ptile__media pz" tabIndex={-1} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt="" loading="lazy" decoding="async" />
        <span className="chip chip--dark">{p.category}</span>
        <span className="chip chip--dark chip--right">{p.images.length} photos</span>
      </Link>
      <div className="ptile__bar">
        <div>
          <p className="meta">
            <span>
              <Icon name="calendar" />
              {p.year}
            </span>
            <span className="meta__dot" aria-hidden="true" />
            <span>
              <Icon name="map" />
              {p.location}
            </span>
          </p>
          <h3>
            <Link href={`/projects/${p.id}`}>{p.shortTitle}</Link>
          </h3>
        </div>
        <Btn href={`/projects/${p.id}`} variant="dark" size="sm" label={`Project details: ${p.shortTitle}`}>
          Project Details
        </Btn>
      </div>
    </article>
  );
}
