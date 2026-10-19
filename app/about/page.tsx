import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { values } from "@/lib/values";
import { credentials, cidaGrades } from "@/lib/credentials";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "About | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Bluemoon Engineering, a CIDA-registered contractor founded in 2021 in Welimada, Badulla, delivers building and civil-engineering projects across Uva Province.",
  path: "/about",
});

const facts = [
  { k: "CIDA Registration", v: credentials.cidaReg },
  { k: "Business Registration", v: credentials.businessReg },
  { k: "Director", v: credentials.director },
  { k: "Established", v: siteConfig.established },
  { k: "Base", v: "Welimada, Badulla" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("About", "/about")} />
      <PageHero
        eyebrow="About Bluemoon Engineering"
        title="A registered contractor built on capability, method, and trust."
        text={`Established in ${siteConfig.established} in Welimada, Badulla, delivering building and civil-engineering work for government and private clients across Uva Province.`}
        image="/images/hero/page-about-drafting.jpg"
        actions={["quote", "projects"]}
      />

      <section className="section">
        <div className="container split-layout about-intro">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Company Introduction</p>
            <h2>Practical, accountable building and civil-engineering work.</h2>
            <p>
              Bluemoon Engineering (Private) Limited was set up to provide dependable construction in
              the Uva hill country: schools, public buildings, sanitation, roads and drainage,
              renovations and finishing works, planned carefully and supervised closely from start
              to handover.
            </p>
          </div>
          <ul className="about-facts surface-card" data-reveal>
            {facts.map((f) => (
              <li key={f.k}>
                <span>{f.k}</span>
                <strong>{f.v}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container card-grid card-grid--two-up">
          <article className="surface-card mission-card" data-reveal>
            <p className="eyebrow">Mission</p>
            <h3>Deliver construction that is well-planned, well-built, and accountable.</h3>
            <p>
              To remove uncertainty from construction through transparent process, sound method, and
              finish discipline, for public and private clients in Uva Province.
            </p>
          </article>
          <article className="surface-card mission-card" data-reveal>
            <p className="eyebrow">Vision</p>
            <h3>Be a trusted name for quality building and civil works in the region.</h3>
            <p>
              To grow a respected Welimada-based contractor known for dependable delivery across
              building, infrastructure, and renovation projects.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout grading-split">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">CIDA Grading</p>
            <h2>Graded across building and civil-engineering fields.</h2>
            <p>
              Our Construction Industry Development Authority registration confirms verified
              capability in each field listed here.
            </p>
          </div>
          <div className="surface-card grade-card" data-reveal>
            <table className="grade-table">
              <thead>
                <tr>
                  <th>Construction field</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {cidaGrades.map((g) => (
                  <tr key={g.field}>
                    <td>{g.field}</td>
                    <td>
                      <span className="grade-pill">{g.grade}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="leadership" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2>{credentials.director}, Director.</h2>
            <p className="lead">
              Under director-level oversight, Bluemoon Engineering emphasises preparation,
              accountability and finish quality: listening carefully, coordinating decisively, and
              holding to the terms of every contract.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape how we plan, build, and report."
          />
          <div className="card-grid card-grid--services reason-grid">
            {values.map((value) => (
              <article className="reason-card" key={value.title}>
                <span className="icon-badge">
                  <Icon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
