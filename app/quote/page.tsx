import { QuoteForm } from "@/components/QuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Quote | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Request a construction quote from Bluemoon Engineering in Welimada, Badulla for building, civil, water & drainage, renovation, and finishing projects across Uva Province, Sri Lanka.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              Request a Quote
            </p>
            <h1 data-hero-item>Share your project brief and get a focused response.</h1>
            <p data-hero-item>
              Tell us the project type, location, budget, and timeline so we can guide you toward a
              practical quotation from our Welimada base.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>
              Every brief is reviewed with site context and scope in mind before we recommend the
              right next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-layout">
          <div className="surface-card" data-reveal>
            <p className="eyebrow">Project Details</p>
            <h2>Help us understand your scope.</h2>
            <QuoteForm />
          </div>
          <div className="contact-side">
            <div className="surface-card" data-reveal>
              <p className="eyebrow">What Happens Next</p>
              <h2>We review your brief and respond with practical guidance.</h2>
              <ul className="feature-list">
                <li>Initial scope review and feasibility understanding</li>
                <li>Recommended consultation or site visit where needed</li>
                <li>Clarification of timeline, budget, and project goals</li>
                <li>A structured quotation pathway for the next phase</li>
              </ul>
            </div>
            <div className="surface-card" data-reveal>
              <p className="eyebrow">Suitable For</p>
              <h2>Public and private construction projects.</h2>
              <p style={{ marginBottom: 0 }}>
                Use this form for building, civil, water & drainage, renovation, sanitation, retaining
                wall, and finishing requirements that need a registered contractor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
