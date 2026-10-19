import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { sectors } from "@/lib/sectors";
import { Icon } from "@/components/Icon";
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

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Practical capability across building and civil works."
            text="A full build or a focused phase, planned around the realities of each site."
          />
          <ServicesFeature items={services} />
        </div>
      </section>

      <section className="section section--dark sectors-band">
        <div className="container">
          <SectionHeading eyebrow="Sectors We Serve" title="Trusted across public and private construction." />
          <ul className="sector-grid" data-reveal>
            {sectors.map((sector) => (
              <li className="sector-tile" key={sector.label}>
                <Icon name={sector.icon} className="sector-tile__icon" />
                {sector.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout split-layout--balanced">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">How We Deliver</p>
            <h2>Structured planning and close supervision on demanding sites.</h2>
            <p>
              Careful sequencing, weather-aware method and strong finishing discipline, from school
              buildings and public works to private builds and renovations.
            </p>
          </div>
          <article className="surface-card" data-reveal>
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
