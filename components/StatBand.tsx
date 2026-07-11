import { stats } from "@/lib/values";

export function StatBand() {
  return (
    <div className="stat-band" data-stagger>
      {stats.map((stat, i) => (
        <article className="stat-card" key={i}>
          <span className="stat-card__value">
            {stat.prefix}
            <span data-counter={stat.value}>0</span>
            {stat.suffix}
          </span>
          <p className="stat-card__label">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
