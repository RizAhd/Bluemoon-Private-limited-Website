import { sectors } from "@/lib/sectors";

export function Marquee() {
  const items = [...sectors, ...sectors];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
