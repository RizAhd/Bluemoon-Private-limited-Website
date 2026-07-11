import { stats } from "@/lib/values";

export function StatBand() {
  return (
    <div className="metrics" data-reveal>
      {stats.map((stat, i) => (
        <div className="metrics__item" key={i}>
          <span className="metrics__value">
            {stat.prefix}
            <span data-counter={stat.value}>0</span>
            {stat.suffix}
          </span>
          <span className="metrics__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
