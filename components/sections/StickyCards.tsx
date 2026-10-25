import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";

type Item = { icon: string; title: string; text: string };

/**
 * Heading pinned on the left while the cards on the right stick and stack
 * on top of each other as the page scrolls (desktop); a plain list on phones.
 */
export function StickyCards({
  eyebrow,
  title,
  text,
  items,
  cta = { label: "Request a Quote", href: "/quote" },
  id,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: Item[];
  cta?: { label: string; href: string };
  id: string;
}) {
  return (
    <section className="sec" aria-labelledby={id}>
      <div className="container stickyc">
        <div className="stickyc__head" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={id}>{title}</h2>
          <p>{text}</p>
          <Btn href={cta.href}>{cta.label}</Btn>
        </div>
        <div className="stickyc__cards">
          {items.map((it, i) => (
            <article className="stickyc__card" key={it.title} style={{ "--i": i } as CSSProperties}>
              <span className="stickyc__icon">
                <Icon name={it.icon} />
              </span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
