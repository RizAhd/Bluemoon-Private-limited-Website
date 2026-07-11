import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { sectors } from "@/lib/sectors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Building construction, civil & infrastructure works, water supply & drainage, renovation, finishing, sanitation, and retaining walls — CIDA-registered construction services by Bluemoon Engineering across Uva Province.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              Our Services
            </p>
            <h1 data-hero-item>Registered construction and civil-engineering services.</h1>
            <p data-hero-item>
              From institutional buildings and infrastructure to renovation and finishing works, our
              services are backed by CIDA grading and delivered with disciplined supervision.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>
              Each service can be delivered on its own or as part of a full build, depending on the
              scope and site.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Practical capability across building and civil works."
            text="Whether leading a full build or a focused phase, we stay measured, responsive, and closely coordinated around the realities of each site."
          />
          <div className="card-grid card-grid--services">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Trusted across public and private construction."
          />
          <div className="sector-strip">
            {sectors.map((sector) => (
              <span className="sector-chip" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout split-layout--balanced">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">How We Deliver</p>
            <h2>Structured planning and close supervision for demanding sites and standards.</h2>
            <p>
              Our approach suits projects that need careful sequencing, weather-aware method, and
              strong finishing discipline — from school buildings and public works to private builds
              and renovations.
            </p>
          </div>
          <article className="surface-card" data-reveal>
            <p className="eyebrow">Service Strengths</p>
            <h2>What clients rely on most.</h2>
            <ul className="feature-list">
              <li>Grounded estimates that reduce uncertainty before work begins</li>
              <li>Method and materials matched to hill-country conditions</li>
              <li>Transparent progress reporting for government and private clients</li>
              <li>Supervision from structure through to finishing and handover</li>
            </ul>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
