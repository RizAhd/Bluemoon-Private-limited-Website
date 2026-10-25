import Link from "next/link";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";
import type { Service } from "@/lib/types";

/**
 * Dark service card in a slowly turning metallic frame. On hover (or focus)
 * the site photo fades in and the summary slides up under the title.
 */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link href={`/services/${service.slug}`} className={`scard${className ? ` ${className}` : ""}`}>
      <span className="scard__ring" aria-hidden="true" />
      <span className="scard__in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="scard__img" src={asset(`/images/services/${service.slug}.jpg`)} alt="" loading="lazy" decoding="async" width={720} height={900} />
        <span className="scard__icon">
          <Icon name={service.icon} />
        </span>
        <span className="scard__body">
          <span className="scard__title">{service.title}</span>
          <span className="scard__text">{service.excerpt}</span>
        </span>
      </span>
    </Link>
  );
}
