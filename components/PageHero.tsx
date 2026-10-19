import Link from "next/link";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";

type Action = "quote" | "projects" | "services" | "call" | "whatsapp";

const actionLinks: Record<Action, { href: string; label: string; external?: boolean }> = {
  quote: { href: "/quote", label: "Request a Quote" },
  projects: { href: "/projects", label: "View Projects" },
  services: { href: "/services", label: "Our Services" },
  call: { href: `tel:${siteConfig.phoneHref}`, label: `Call ${siteConfig.phoneDisplay}`, external: true },
  whatsapp: { href: siteConfig.whatsapp, label: "WhatsApp", external: true },
};

/** Interior page banner: copy and a solid + outline button pair, photo panel on the right. */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  actions = ["quote", "projects"],
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  actions?: [Action, Action];
}) {
  return (
    <section className="page-hero page-hero--media">
      <div className="container">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__text">{text}</p>
          <div className="page-hero__actions">
            {actions.map((key, i) => {
              const a = actionLinks[key];
              const cls = `btn ${i === 0 ? "btn--secondary" : "btn--ghost"}`;
              const icon =
                key === "call" ? (
                  <Icon name="phone" className="btn__icon" />
                ) : key === "whatsapp" ? (
                  <Icon name="whatsapp" className="btn__icon" />
                ) : null;
              return a.external ? (
                <a
                  key={key}
                  className={cls}
                  href={a.href}
                  {...(key === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {icon}
                  {a.label}
                </a>
              ) : (
                <Link key={key} className={cls} href={a.href}>
                  {a.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="page-hero__media"
        style={{ backgroundImage: `url(${asset(image)})` }}
        aria-hidden="true"
      />
    </section>
  );
}
