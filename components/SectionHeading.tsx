import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  link,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  /** optional text link shown at the right end of the heading row */
  link?: { href: string; label: string };
}) {
  const heading = (
    <div
      className={`section-heading${align === "center" ? " section-heading--center" : ""}`}
      data-reveal
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
  if (!link) return heading;
  return (
    <div className="section-head">
      {heading}
      <Link className="text-link" href={link.href}>
        {link.label} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
