import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/types";

/**
 * Service cards: icon tile, title and a short description.
 * `linked` cards (home) point to the matching card on /services, which renders them with ids.
 */
export function ServicesFeature({ items, linked = false }: { items: Service[]; linked?: boolean }) {
  return (
    <div className="card-grid card-grid--services service-grid" data-reveal>
      {items.map((s) => {
        const body = (
          <>
            <span className="icon-badge">
              <Icon name={s.icon} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.excerpt}</p>
          </>
        );
        return linked ? (
          <Link href={`/services#${s.slug}`} className="service-card service-card--link" key={s.slug}>
            {body}
          </Link>
        ) : (
          <article className="service-card" id={s.slug} key={s.slug}>
            {body}
          </article>
        );
      })}
    </div>
  );
}
