import type { Faq as FaqItem } from "@/lib/faqs";

/** FAQ list on native <details>; opens smoothly where the browser supports it. */
export function Faq({
  items,
  title = "Answers to Common Construction Questions",
  id = "h-faq",
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
}) {
  return (
    <section className="sec" aria-labelledby={id}>
      <div className="container">
        <div className="head head--center" data-reveal>
          <p className="eyebrow">FAQs</p>
          <h2 id={id}>{title}</h2>
        </div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} className="faq__item" data-reveal style={{ "--rd": `${i * 70}ms` } as React.CSSProperties}>
              <summary>
                {f.q}
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
