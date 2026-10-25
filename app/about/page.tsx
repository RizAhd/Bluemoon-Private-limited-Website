import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { values } from "@/lib/values";
import { credentials, cidaGrades } from "@/lib/credentials";
import { headlineStats } from "@/lib/facts";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { StatsRow } from "@/components/sections/Odometer";
import { FeatureAccordion } from "@/components/sections/FeatureAccordion";
import { CtaForm } from "@/components/sections/CtaForm";

export const metadata = pageMetadata({
  title: "About | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Bluemoon Engineering, a CIDA-registered contractor founded in 2021 in Welimada, Badulla, delivers building and civil-engineering projects across Uva Province.",
  path: "/about",
});

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;

const trio = [
  { src: "/images/hero/site-rebar-crew.jpg", alt: "Crew fixing reinforcement on site" },
  { src: "/images/hero/hero-concrete-frame.jpg", alt: "Reinforced-concrete frame of a building under construction" },
  { src: "/images/hero/site-rebar-inspection.jpg", alt: "Engineer inspecting reinforcement before a pour" },
];

const credentialsCards = [
  { visual: "MA", name: credentials.director, role: "Director", icon: "mail", href: `mailto:${siteConfig.email}`, label: "Email the director's office" },
  { visual: credentials.cidaReg, name: "CIDA Registered", role: "Construction Industry Development Authority", icon: "badge", href: "/why-choose-us", label: "Why our registration matters" },
  { visual: credentials.businessReg, name: "Private Limited Company", role: `Incorporated ${credentials.businessRegIssued}`, icon: "doc", href: "/contact", label: "Contact the office" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("About", "/about")} />
      <PageHero
        title="Laying the Foundation for Trust"
        text="Registered in Welimada in 2021, trusted on public and private work across Uva Province."
        image="/images/hero/page-about-drafting.jpg"
      />

      {/* Intro + photo row */}
      <section className="sec" aria-labelledby="h-intro">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">About Bluemoon</p>
              <h2 id="h-intro">Building Work That Lasts a Lifetime</h2>
            </div>
            <p>
              Bluemoon Engineering (Private) Limited provides dependable construction in the Uva hill country: schools, public buildings,
              sanitation, roads and drainage, renovations and finishing works, planned carefully and supervised closely from start to handover.
            </p>
          </div>
          <div className="trio">
            {trio.map((t, i) => (
              <div className="trio__item pz" key={t.src} data-reveal="tilt" style={rd(i * 120)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(t.src)} alt={t.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What drives us */}
      <section className="panel sec" aria-labelledby="h-drives">
        <div className="container">
          <div className="drives">
            <div className="drives__copy" data-reveal>
              <p className="eyebrow">Who we are</p>
              <h2 id="h-drives">What Drives Us</h2>
              <p>
                Behind every finished build is a clear purpose. We are a registered crew that believes in honest work, clean results and showing up
                when we say we will. From school blocks to private homes, every job carries the same standard.
              </p>
              <Btn href="/services">Explore Our Services</Btn>
            </div>
            <div className="drives__photo pz" data-reveal="tilt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/hero/page-contact-plans-review.jpg")} alt="Engineers reviewing construction drawings" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="drives__stats">
            <StatsRow items={headlineStats} />
          </div>
          <div className="mv">
            <article className="mv__card" data-reveal="tilt">
              <span className="mv__icon">
                <Icon name="structure" />
              </span>
              <h3>Our Mission</h3>
              <p>To remove uncertainty from construction through transparent process, sound method and finish discipline, for public and private clients in Uva Province.</p>
            </article>
            <article className="mv__card" data-reveal="tilt">
              <span className="mv__icon">
                <Icon name="spark" />
              </span>
              <h3>Our Vision</h3>
              <p>To be a trusted Welimada-based name for quality building and civil works, known for dependable delivery across the region.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership and registration */}
      <section className="sec" aria-labelledby="h-team">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Leadership & registration</p>
            <h2 id="h-team">The Credentials Behind Every Project</h2>
          </div>
          <div className="team">
            {credentialsCards.map((c, i) => (
              <article className="team__card" key={c.name} data-reveal="tilt" style={rd(i * 110)}>
                <div className="team__visual" aria-hidden="true">
                  <span className={i === 0 ? "team__mono" : "team__code mono"}>{c.visual}</span>
                </div>
                <div className="team__bar">
                  <div>
                    <h3>{c.name}</h3>
                    <p>{c.role}</p>
                  </div>
                  <a className="team__link" href={c.href} aria-label={c.label}>
                    <Icon name={c.icon} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CIDA grading */}
      <section className="panel sec" aria-labelledby="h-grades">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">CIDA grading</p>
              <h2 id="h-grades">Graded Across Six Construction Fields</h2>
            </div>
            <p>Our Construction Industry Development Authority registration confirms verified capability in each field listed here.</p>
          </div>
          <div className="grades">
            {cidaGrades.map((g, i) => (
              <div className="grade" key={g.field} data-reveal="tilt" style={rd(i * 80)}>
                <span className="grade__code mono">{g.grade}</span>
                <span className="grade__field">{g.field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec" aria-labelledby="h-values">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Why Bluemoon</p>
              <h2 id="h-values">Construction You Can Count On</h2>
              <p>We keep it simple: quality work, honest pricing and crews who show up. Here is what guides every job.</p>
            </div>
            <Btn href="/quote">Request a Quote</Btn>
          </div>
          <FeatureAccordion items={values} image="/images/home/step-handover.jpg" alt="Completed multi-storey building" />
        </div>
      </section>

      <CtaForm idPrefix="about" />
    </>
  );
}
