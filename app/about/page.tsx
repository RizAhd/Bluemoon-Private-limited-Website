import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { values } from "@/lib/values";
import { credentials, cidaGrades } from "@/lib/credentials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Bluemoon Engineering (Pvt) Ltd is a CIDA-registered construction contractor established in 2021 in Welimada, Badulla, led by Mr. M.J.M. Aswar, delivering building and civil-engineering projects across Uva Province.",
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
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              About Bluemoon Engineering
            </p>
            <h1 data-hero-item>A registered contractor built on capability, method, and trust.</h1>
            <p data-hero-item>
              Established in {siteConfig.established} and based in Welimada, Badulla, we deliver
              construction and civil-engineering projects for government departments and private
              clients across Uva Province and Sri Lanka.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>
              A CIDA-registered team (Reg. {credentials.cidaReg}) combining building and
              infrastructure capability with disciplined delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="about-showcase" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="" width={58} height={58} />
            <p className="eyebrow">Registered Contractor</p>
            <h2>{siteConfig.companyName}</h2>
            <ul className="about-facts">
              {facts.map((f) => (
                <li key={f.k}>
                  <span>{f.k}</span>
                  <strong>{f.v}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Company Introduction</p>
            <h2>
              Building and civil-engineering work delivered with a practical, accountable approach.
            </h2>
            <p>
              Bluemoon Engineering (Private) Limited was established to provide dependable
              construction in the Uva hill country. We deliver schools, public buildings, sanitation,
              roads and drainage, renovations, and finishing works — planned carefully and supervised
              closely from start to handover.
            </p>
            <p>
              Registered with the Construction Industry Development Authority (CIDA) and the
              Registrar of Companies (Reg. {credentials.businessReg}), we work to the standards
              expected on government contracts and by private clients making meaningful investments.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container card-grid card-grid--two-up">
          <article className="surface-card" data-reveal>
            <p className="eyebrow">Mission</p>
            <h2>Deliver construction that is well-planned, well-built, and accountable.</h2>
            <p style={{ marginBottom: 0 }}>
              To remove uncertainty from construction through transparent process, sound method, and
              finish discipline — for both public and private clients in Uva Province.
            </p>
          </article>
          <article className="surface-card" data-reveal>
            <p className="eyebrow">Vision</p>
            <h2>Be a trusted name for quality building and civil works in the region.</h2>
            <p style={{ marginBottom: 0 }}>
              To grow a respected Welimada-based contractor known for dependable delivery across
              building, infrastructure, and renovation projects.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Registration & Grading"
            title="CIDA-registered and graded across building and civil-engineering fields."
            text="Our Construction Industry Development Authority registration confirms verified capability across the fields below."
          />
          <div className="split-layout" style={{ alignItems: "start" }}>
            <div className="surface-card" data-reveal style={{ padding: 0, overflow: "hidden" }}>
              <table className="grade-table">
                <thead>
                  <tr>
                    <th>Construction Field</th>
                    <th>CIDA Grade</th>
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
            <div className="split-layout__content" data-reveal>
              <p className="eyebrow">Leadership</p>
              <h2>{credentials.director}, Director.</h2>
              <p>
                Under director-level oversight, Bluemoon Engineering emphasises preparation,
                accountability, and finish quality — listening carefully, coordinating decisively,
                and holding to the terms of every contract.
              </p>
              <ul className="feature-list">
                <li>CIDA Registration: {credentials.cidaReg}</li>
                <li>Business Registration: {credentials.businessReg}</li>
                <li>Registered contractor since {credentials.registeredSince}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape how we plan, build, and report."
          />
          <div className="card-grid card-grid--compact">
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
