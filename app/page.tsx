import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CredentialStrip } from "@/components/CredentialStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesFeature } from "@/components/ServicesFeature";
import { ProjectCard } from "@/components/ProjectCard";
import { StatBand } from "@/components/StatBand";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { reasons } from "@/lib/reasons";
import { formatLKRCompact } from "@/lib/currency";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bluemoon Engineering (Pvt) Ltd | CIDA-Registered Construction Contractor, Uva Province",
  description:
    "Bluemoon Engineering (Pvt) Ltd is a CIDA-registered building & civil-engineering contractor in Welimada, Badulla, delivering schools, public buildings, roads, drainage, and renovations for government and private clients across Uva Province, Sri Lanka.",
  path: "/",
});

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  const [leadProject, ...otherProjects] = featuredProjects;

  return (
    <>
      <Hero />
      <CredentialStrip />

      <section className="section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="What We Do"
            title="Construction and civil-engineering capability, registered and proven."
            text="From institutional buildings to infrastructure and finishing works, our services are backed by CIDA grading and a real record of delivery."
          />
          <div className="card-grid card-grid--services">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p style={{ marginTop: "1.75rem" }}>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={leadProject.cover} alt={leadProject.alt} loading="lazy" />
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
          <div className="card-grid card-grid--projects">
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
