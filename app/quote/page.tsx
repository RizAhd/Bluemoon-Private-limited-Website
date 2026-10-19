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

      <section className="section section--alt">
        <div className="container contact-layout quote-layout">
          <div className="surface-card form-card" data-reveal>
            <p className="eyebrow">Project Details</p>
            <h2 className="form-card__title">Help us understand your scope.</h2>
            <QuoteForm />
          </div>
          <aside className="quote-side" data-reveal>
            <div className="surface-card">
              <p className="eyebrow">What Happens Next</p>
              <h3>We review your brief and reply with practical guidance.</h3>
              <ol className="next-steps">
                <li>Scope review and feasibility check</li>
                <li>Consultation or site visit where needed</li>
                <li>Timeline, budget and goals clarified</li>
                <li>A structured quotation for the next phase</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
