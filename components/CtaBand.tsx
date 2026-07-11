import Link from "next/link";

export function CtaBand({
  title = "Planning a build, renovation, or public-works project?",
  text = "Tell us your requirement and we'll respond with a clear, practical next step and a grounded quotation pathway.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="cta-band" data-reveal>
          <div>
            <p className="eyebrow">Start Your Project</p>
            <h2>{title}</h2>
            <p className="cta-band__text">{text}</p>
          </div>
          <div className="cta-band__actions">
            <Link className="btn btn--primary" href="/quote">
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
