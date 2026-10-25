import type { CSSProperties } from "react";

const DIGITS = "0123456789".split("");

/** A figure whose digits roll into place, one reel per digit, when it scrolls into view. */
export function Odometer({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) {
  return (
    <span className="odo mono" data-reveal="fade">
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span className="odo__vis" aria-hidden="true">
        {prefix && <span>{prefix}</span>}
        {Array.from(value).map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className="odo__col" style={{ "--n": ch, "--i": i } as CSSProperties}>
              <span className="odo__reel">
                {DIGITS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </span>
            </span>
          ) : (
            <span key={i}>{ch}</span>
          ),
        )}
        {suffix && <span>{suffix}</span>}
      </span>
    </span>
  );
}

export type StatItem = { value: string; prefix?: string; suffix?: string; label: string };

/** Row of headline figures split by thin dividers. */
export function StatsRow({ items }: { items: StatItem[] }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <div className="stats__item" key={s.label} data-reveal="left" style={{ "--rd": `${i * 110}ms` } as CSSProperties}>
          <Odometer value={s.value} prefix={s.prefix} suffix={s.suffix} />
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
