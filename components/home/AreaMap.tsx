import { lkMap } from "@/lib/lkMap";

// Callout positions (viewBox units) placed beside the island so the four
// close-together towns stay readable; a leader line joins each label to its pin.
const callouts: { name: string; x: number; y: number; anchor: "start" | "end"; hq?: boolean }[] = [
  { name: "Nuwara Eliya", x: 70, y: 352, anchor: "end" },
  { name: "Welimada", x: 70, y: 430, anchor: "end", hq: true },
  { name: "Badulla", x: 262, y: 340, anchor: "start" },
  { name: "Bandarawela", x: 262, y: 440, anchor: "start" },
];

/** Dotted map of Sri Lanka with the hill-country service area highlighted. */
export function AreaMap() {
  const { w, h, base, hi, towns } = lkMap;
  return (
    <svg className="area-map" viewBox={`-20 0 ${w + 40} ${h}`} role="img" aria-labelledby="area-map-title">
      <title id="area-map-title">
        Map of Sri Lanka highlighting Welimada, Badulla, Bandarawela and Nuwara Eliya in the hill country
      </title>
      <path d={base} className="area-map__dots" />
      <path d={hi} className="area-map__hi" />
      {callouts.map((c, i) => {
        const [px, py] = towns[c.name as keyof typeof towns];
        const tx = c.anchor === "end" ? c.x + 4 : c.x - 4;
        return (
          <g key={c.name} className="area-map__pin" style={{ "--i": i } as React.CSSProperties}>
            <path d={`M${px} ${py}L${tx} ${c.y}`} className="area-map__leader" />
            {c.hq && <circle cx={px} cy={py} r="9" className="area-map__pulse" />}
            <circle cx={px} cy={py} r={c.hq ? 4.5 : 3.5} className="area-map__dot" />
            <g transform={`translate(${c.x} ${c.y})`}>
              <text textAnchor={c.anchor} dy="0.35em" className="area-map__label">
                {c.name}
                {c.hq ? " · HQ" : ""}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
