import type { CSSProperties } from "react";
import { services } from "@/lib/services";
import { sectors } from "@/lib/sectors";
import { serviceFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq } from "@/components/sections/Faq";
import { CtaForm } from "@/components/sections/CtaForm";

export const metadata = pageMetadata({
  title: "Services | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "CIDA-registered construction services in Uva Province: building, civil and infrastructure works, water supply, drainage, renovation, finishing and sanitation.",
  path: "/services",
});

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Services", "/services")} />
      <PageHero
        title="Professional Construction That Lasts"
        text="Expert building and civil works for schools, public buildings, homes and the roads between them."
        image="/images/hero/site-rebar-crew.jpg"
      />

      <section className="sec" aria-labelledby="h-all">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="h-all">Our Full Range of Construction Services</h2>
            </div>
            <p>From a single renovation to a full school block, we plan, build and supervise with the same registered standard.</p>
          </div>
          <div className="sgrid">
            {services.map((s, i) => (
              <div key={s.slug} data-reveal style={rd((i % 2) * 120)}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel sec" aria-labelledby="h-sectors">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Sectors we serve</p>
            <h2 id="h-sectors">Trusted Across Public and Private Work</h2>
          </div>
          <ul className="sectors">
            {sectors.map((s, i) => (
              <li key={s.label} data-reveal style={rd(i * 90)}>
                <Icon name={s.icon} />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--process" aria-labelledby="h-process">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Our process</p>
            <h2 id="h-process">A Simple, Proven Construction Process</h2>
          </div>
          <ProcessSteps />
          <div className="center-cta">
            <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
              {siteConfig.phoneDisplay}
            </Btn>
          </div>
        </div>
      </section>

      <Faq items={serviceFaqs} title="Questions About Our Services" />

      <CtaForm idPrefix="services" />
    </>
  );
}
