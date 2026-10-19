import Link from "next/link";
import FluidHeroNavbar from "@/components/ui/woodpeck-hero-landing-animation";
import { asset } from "@/lib/asset";
import { CredentialStrip } from "@/components/CredentialStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { ProjectBento } from "@/components/ProjectBento";
import { StatBand } from "@/components/StatBand";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { reasons } from "@/lib/reasons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bluemoon Engineering | CIDA Building Contractor, Welimada",
  description:
    "CIDA-registered building and civil-engineering contractor in Welimada, Badulla. Schools, public buildings, roads, drainage and renovations across Uva Province.",
  path: "/",
});

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);

  return (
    <>
      <FluidHeroNavbar
        brandName="Bluemoon"
        brandTagline="Engineering (Private) Limited"
        showNavbar={false}
        heroImage={asset("/images/hero/home-hero-crane-frame.jpg")}
        heroImageMobile={asset("/images/hero/home-hero-crane-frame-mobile.jpg")}
        heroImageAlt="Tower crane above a reinforced-concrete building under construction"
        headlineKicker="CIDA C-6 / C-7 · Welimada, Badulla"
        headlineFirst={"Building Sri Lanka’s hill country"}
        headlineSecond="to a higher standard."
        description="Schools, public buildings, roads, drainage and renovations for government and private clients across Uva Province."
      >
        <div className="hero-fluid__actions">
          <Link className="btn btn--secondary btn--large" href="/quote">
            Request a Quote
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link className="btn btn--ghost btn--large" href="/projects">
            View Projects
          </Link>
        </div>
      </FluidHeroNavbar>
      <CredentialStrip />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Construction and civil-engineering capability, registered and proven."
            link={{ href: "/services", label: "All services" }}
          />
          <ServicesFeature items={featuredServices} linked />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Real projects for government and private clients."
            link={{ href: "/projects", label: "View all projects" }}
          />
          <ProjectBento projects={featuredProjects} />
        </div>
      </section>

      <section className="section section--dark stats-band" aria-label="Track record in numbers">
        <div className="container">
          <StatBand />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split-layout split-layout--balanced why-split">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Why Bluemoon</p>
            <h2>A registered, accountable partner for public and private work.</h2>
            <p>
              CIDA-graded capability, transparent communication and finish discipline suited to
              hill-country sites and government reporting standards.
            </p>
            <Link className="text-link" href="/why-choose-us">
              Why choose us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="card-grid card-grid--compact reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <span className="icon-badge">
                  <Icon name={reason.icon} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
