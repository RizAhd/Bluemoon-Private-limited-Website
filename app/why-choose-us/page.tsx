import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { reasons } from "@/lib/reasons";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Why Choose Us | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Why clients choose Bluemoon Engineering: CIDA registration, government-ready delivery, hill-country expertise and a clear process from consultation to handover.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Why Choose Us", "/why-choose-us")} />
      <PageHero
        eyebrow="Why Choose Us"
        title="Confidence comes from registration, method, and delivery."
        text="A construction partner backed by CIDA grading, a transparent process and a real record of completed public and private work."
        image="/images/hero/site-rebar-inspection.jpg"
        actions={["quote", "projects"]}
      />

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
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split-layout split-layout--balanced">
          <div className="split-layout__content" data-reveal>
            <p className="eyebrow">Built for Context</p>
            <h2>Method that suits real site conditions and reporting standards.</h2>
            <p>
              That matters in Uva Province, where access, weather, existing structures, and finishing
              quality all demand better forward planning, and where government contracts require
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
