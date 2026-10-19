import Link from "next/link";

/** Full-width navy closing band; sits directly on the footer. */
export function CtaBand({
  title = "Planning a build, renovation, or public‑works project?",
  text = "Tell us what you need and we will reply with a clear next step and a grounded quotation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section--cta cta-band">
      <div className="container cta-band__inner" data-reveal>
        <div className="cta-band__copy">
          <p className="eyebrow">Start Your Project</p>
          <h2>{title}</h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link className="btn btn--secondary btn--large" href="/quote">
            Request a Quote
          </Link>
          <Link className="btn btn--ghost btn--large" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
