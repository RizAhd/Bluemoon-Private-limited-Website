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

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Reasons Clients Choose Us"
            title="A registered, accountable partner for important projects."
          />
          <div className="card-grid card-grid--services reason-list">
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

      <section className="section">
        <div className="container process-split">
          <div className="process-split__head">
            <SectionHeading
              eyebrow="Our Process"
              title="A clear route from consultation to handover."
              text="Each step improves visibility, reduces risk and keeps the project moving with confidence."
            />
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
