import Link from "next/link";
import FluidHeroNavbar from "@/components/ui/woodpeck-hero-landing-animation";
import { asset } from "@/lib/asset";
import { CredentialStrip } from "@/components/CredentialStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";
import { StatBand } from "@/components/StatBand";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { reasons } from "@/lib/reasons";
import { formatLKRCompact } from "@/lib/currency";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bluemoon Engineering | CIDA Building Contractor, Welimada",
  description:
    "CIDA-registered building and civil-engineering contractor in Welimada, Badulla. Schools, public buildings, roads, drainage and renovations across Uva Province.",
  path: "/",
});

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  const [leadProject, ...otherProjects] = featuredProjects;

  return (
    <>
      <FluidHeroNavbar
        brandName="Bluemoon"
        showNavbar={false}
        heroImage={asset("/images/hero/home-hero-crane-frame.jpg")}
        heroImageMobile={asset("/images/hero/home-hero-crane-frame-mobile.jpg")}
        heroImageAlt="Tower crane above a reinforced-concrete building under construction"
        headlineKicker="CIDA C-6 / C-7 registered contractor · Welimada, Badulla"
        headlineFirst="Building Sri Lanka’s hill country"
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
        <ul className="hero-fluid__facts">
          <li>CIDA Reg. {siteConfig.cidaReg}</li>
          <li>Est. {siteConfig.established}</li>
          <li>
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
          </li>
        </ul>
      </FluidHeroNavbar>
      <CredentialStrip />

      <section className="section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="What We Do"
            title="Construction and civil-engineering capability, registered and proven."
            text="From institutional buildings to infrastructure and finishing works, our services are backed by CIDA grading and a real record of delivery."
          />
          <ServicesFeature items={featuredServices} />
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn btn--ghost" href="/services">
              All Services
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Selected Work"
            title="Real projects delivered for government and private clients."
            text="A sample of completed work across schools, commercial buildings, and renovations in Uva Province."
          />
          <article className="feature-project" data-reveal>
            <div className="feature-project__media">
              <ProjectImageCarousel images={leadProject.images} alt={leadProject.alt} />
            </div>
            <div className="feature-project__body">
              <div className="feature-project__meta">
                <span className="badge">{leadProject.category}</span>
                <span className="status-badge status-badge--completed">Completed</span>
                {leadProject.valueLKR ? (
                  <span className="project-card__value">
                    {formatLKRCompact(leadProject.valueLKR)}
                  </span>
                ) : null}
              </div>
              <h3 style={{ fontSize: "clamp(1.5rem,2.4vw,2.1rem)" }}>{leadProject.title}</h3>
              <p>{leadProject.description}</p>
              <p style={{ color: "var(--color-ink-500)", fontSize: "0.9rem", margin: 0 }}>
                {leadProject.client} · {leadProject.location} · {leadProject.year}
              </p>
            </div>
          </article>
          <div className="card-grid card-grid--two-up">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <p style={{ marginTop: "1.75rem" }}>
            <Link className="btn btn--ghost" href="/projects">
              View All Projects
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            index="03"
            eyebrow="By The Numbers"
            title="A track record you can verify."
            text="Honest figures drawn directly from our record of completed work."
          />
          <StatBand />
        </div>
      </section>

      <section className="section">
        <div className="container split-layout split-layout--balanced">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Why Bluemoon</p>
            <h2>A registered, accountable partner you can trust with public and private work.</h2>
            <p>
              We combine CIDA-graded capability with transparent communication, measured planning,
              and finish discipline suited to hill-country sites and government reporting standards.
            </p>
            <Link className="btn btn--ghost" href="/why-choose-us">
              Why Choose Us
            </Link>
          </div>
          <div className="card-grid card-grid--compact">
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
