import Link from "next/link";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";
import type { Service } from "@/lib/types";

/**
 * Service card: site photo in a slowly turning metallic frame. The photo is
 * always shown; on hover the card lifts, the photo zooms and the summary slides up.
 */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link href={`/services/${service.slug}`} className={`scard${className ? ` ${className}` : ""}`}>
      <span className="scard__ring" aria-hidden="true" />
      <span className="scard__in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="scard__img"
          src={asset(`/images/services/${service.slug}.jpg`)}
          srcSet={`${asset(`/images/services/${service.slug}-sm.jpg`)} 960w, ${asset(`/images/services/${service.slug}.jpg`)} 1400w`}
          sizes="(min-width: 1081px) 34vw, (min-width: 621px) 50vw, 86vw"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="scard__icon">
          <Icon name={service.icon} />
        </span>
        <span className="scard__body">
          <span className="scard__title">{service.title}</span>
          <span className="scard__text">{service.excerpt}</span>
          <span className="scard__more" aria-hidden="true">
            View service
            <Icon name="arrowRight" />
          </span>
        </span>
      </span>
    </Link>
  );
}
