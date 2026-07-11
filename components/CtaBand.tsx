import Link from "next/link";

export function CtaBand({
  title = "Planning a build, renovation, or public-works project?",
  text = "Tell us your requirement and we'll respond with a clear, practical next step and a grounded quotation pathway.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel" data-reveal>
          <p className="eyebrow">Start Your Project</p>
          <h2>{title}</h2>
          <p className="cta-panel__text">{text}</p>
          <div className="cta-panel__actions">
            <Link className="btn btn--secondary" href="/quote">
              Request a Quote
            </Link>
            <Link className="btn btn--ghost" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
