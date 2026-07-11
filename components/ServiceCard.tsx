import { Icon } from "./Icon";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card" id={service.slug}>
      <span className="icon-badge">
        <Icon name={service.icon} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.excerpt}</p>
      <ul className="feature-list">
        {service.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
