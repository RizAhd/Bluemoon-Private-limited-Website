import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { sectors } from "@/lib/sectors";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Services | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "CIDA-registered construction services in Uva Province: building, civil and infrastructure works, water supply, drainage, renovation, finishing and sanitation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Services", "/services")} />
      <PageHero
        eyebrow="Our Services"
        title="Registered construction and civil-engineering services."
        text="Institutional buildings, infrastructure, renovation and finishing works, backed by CIDA grading and disciplined site supervision."
        image="/images/hero/site-rebar-crew.jpg"
        actions={["quote", "projects"]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Practical capability across building and civil works."
            text="Whether leading a full build or a focused phase, we stay measured, responsive, and closely coordinated around the realities of each site."
          />
          <ServicesFeature items={services} />
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
              strong finishing discipline, from school buildings and public works to private builds
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
