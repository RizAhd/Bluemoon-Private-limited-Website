import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/types";

export function ServicesFeature({ items }: { items: Service[] }) {
  return (
    <div className="services-list" data-reveal>
      {items.map((s, i) => (
        <Link href={`/services#${s.slug}`} className="services-row" key={s.slug}>
          <span className="services-row__num">{String(i + 1).padStart(2, "0")}</span>
          <span className="services-row__icon">
            <Icon name={s.icon} />
          </span>
          <span className="services-row__text">
            <span className="services-row__title">{s.title}</span>
            <span className="services-row__desc">{s.excerpt}</span>
          </span>
          <span className="services-row__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
