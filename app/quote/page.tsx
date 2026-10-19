import { QuoteForm } from "@/components/QuoteForm";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Request a Quote | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Request a construction quote from Bluemoon Engineering, Welimada: building, civil works, water and drainage, renovation and finishing across Uva Province.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Request a Quote", "/quote")} />
      <PageHero
        eyebrow="Request a Quote"
        title="Share your project brief and get a focused response."
        text="Tell us the project type, location, budget and timeline, and we will guide you toward a practical quotation."
        image="/images/hero/hero-concrete-frame.jpg"
        actions={["call", "whatsapp"]}
      />

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
