import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { reasons } from "@/lib/reasons";
import { processSteps } from "@/lib/process";
import { credentials, cidaGrades } from "@/lib/credentials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose Us | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Why clients choose Bluemoon Engineering: CIDA registration and grading, government-ready delivery, hill-country expertise, and a clear construction process from consultation to handover.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              Why Choose Us
            </p>
            <h1 data-hero-item>Confidence comes from registration, method, and delivery.</h1>
            <p data-hero-item>
              Bluemoon Engineering gives clients a construction partner backed by CIDA grading,
              transparent process, and a real record of completed public and private work.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>
              CIDA Reg. {credentials.cidaReg} — graded across {cidaGrades.length} construction
              fields.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Reasons Clients Choose Us"
            title="A registered, accountable partner for important projects."
            text="Clients choose Bluemoon when they need proven capability, clear reporting, and dependable site leadership."
          />
          <div className="card-grid card-grid--two-up">
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

      <section className="section section--pattern">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear route from consultation to handover."
            text="Each step is structured to improve visibility, reduce risk, and keep the project progressing with confidence."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.step}>
                <span className="process-step__number">{step.step}</span>
                <span className="process-step__eyebrow">{step.eyebrow}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split-layout split-layout--balanced">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Built for Context</p>
            <h2>Method that suits real site conditions and reporting standards.</h2>
            <p>
              That matters in Uva Province, where access, weather, existing structures, and finishing
              quality all demand better forward planning — and where government contracts require
              accountable delivery.
            </p>
          </div>
          <article className="surface-card surface-card--highlight" data-reveal>
            <h3>What this means for clients</h3>
            <ul className="feature-list">
              <li>Fewer surprises through better site understanding up front</li>
              <li>Clear decision points through construction and finishing</li>
              <li>Transparent progress suited to provincial and departmental reporting</li>
              <li>A more polished result with fewer loose ends at handover</li>
            </ul>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
