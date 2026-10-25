import { ServiceCard } from "@/components/sections/ServiceCard";
import type { Service } from "@/lib/types";

/**
 * Service cards that glide past on their own (no sideways scrolling needed).
 * The row pauses while a card is hovered or focused so it can be read and opened.
 */
export function ServiceSlider({ items }: { items: Service[] }) {
  return (
    <div className="smarquee">
      <div className="smarquee__track">
        {[0, 1].map((copy) =>
          items.map((s) => (
            <div className="smarquee__item" key={`${copy}-${s.slug}`} aria-hidden={copy === 1 || undefined} inert={copy === 1 || undefined}>
              <ServiceCard service={s} />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
