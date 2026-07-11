export function SectionHeading({
  eyebrow,
  title,
  text,
  index,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  index?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`section-heading${align === "center" ? " section-heading--center" : ""}`}
      data-reveal
    >
      <div className="section-heading__top">
        {index && <span className="section-heading__index">{index}</span>}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
