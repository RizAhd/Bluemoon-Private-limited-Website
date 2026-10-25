import { lkMap } from "@/lib/lkMap";

// Pill positions (viewBox units) placed beside the island so the four
// close-together towns stay readable; a leader line joins each pill to its pin.
const callouts: { name: string; x: number; y: number; anchor: "start" | "end"; hq?: boolean }[] = [
  { name: "Nuwara Eliya", x: 76, y: 352, anchor: "end" },
  { name: "Welimada · HQ", x: 76, y: 430, anchor: "end", hq: true },
  { name: "Badulla", x: 256, y: 340, anchor: "start" },
  { name: "Bandarawela", x: 256, y: 440, anchor: "start" },
];

const townKey = (name: string) => name.replace(" · HQ", "") as keyof typeof lkMap.towns;

/** Dotted map of Sri Lanka with the hill-country service area and labelled pins. */
export function AreaMap() {
  const { w, h, base, hi, towns } = lkMap;
  return (
    <svg className="amap" viewBox={`-40 0 ${w + 80} ${h}`} role="img" aria-labelledby="amap-title">
      <title id="amap-title">Map of Sri Lanka highlighting Welimada, Badulla, Bandarawela and Nuwara Eliya in the hill country</title>
      <path d={base} className="amap__dots" />
      <path d={hi} className="amap__hi" />
      {callouts.map((c, i) => {
        const [px, py] = towns[townKey(c.name)];
        const pw = c.name.length * 6.4 + 22;
        const rx = c.anchor === "end" ? c.x - pw : c.x;
        return (
          <g key={c.name} className="amap__pin" style={{ "--i": i } as React.CSSProperties}>
            <path d={`M${px} ${py}L${c.x} ${c.y}`} className="amap__leader" />
            {c.hq && <circle cx={px} cy={py} r="9" className="amap__pulse" />}
            <circle cx={px} cy={py} r={c.hq ? 4.5 : 3.5} className="amap__dot" />
            <rect x={rx} y={c.y - 12} width={pw} height={24} rx={12} className="amap__pill" />
            <text x={rx + pw / 2} y={c.y} textAnchor="middle" dy="0.35em" className="amap__label">
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
