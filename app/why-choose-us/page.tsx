import { asset } from "@/lib/asset";
import { reasons } from "@/lib/reasons";
import { processSteps } from "@/lib/process";
import { headlineStats } from "@/lib/facts";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { FeatureAccordion } from "@/components/sections/FeatureAccordion";
import { StickyCards } from "@/components/sections/StickyCards";
import { StatsRow } from "@/components/sections/Odometer";
import { CtaForm } from "@/components/sections/CtaForm";

export const metadata = pageMetadata({
  title: "Why Choose Us | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Why clients choose Bluemoon Engineering: CIDA registration, government-ready delivery, hill-country expertise and a clear process from consultation to handover.",
  path: "/why-choose-us",
});

const compare = [
  { k: "Registration", typical: "Hard to verify", ours: `CIDA Reg. ${siteConfig.cidaReg}, six graded fields` },
  { k: "Estimates", typical: "Rough figures that grow", ours: "Grounded estimate before work begins" },
  { k: "Site conditions", typical: "One method for every site", ours: "Planned for slope, access and weather" },
  { k: "Supervision", typical: "Crew left to it", ours: "Close supervision at every stage" },
  { k: "Reporting", typical: "Updates when chased", ours: "Progress reports at agreed milestones" },
  { k: "Handover", typical: "Loose ends left open", ours: "Inspection, snag list and clean handover" },
];

const stepIcons = ["phone", "map", "clipboard", "calendar", "hardhat", "key"];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Why Choose Us", "/why-choose-us")} />
      <PageHero
        title="Confidence Comes From Registration and Method"
        text="A construction partner backed by CIDA grading, a clear process and a real record of completed work."
        image="/images/hero/site-rebar-inspection.jpg"
      />

      <section className="sec" aria-labelledby="h-compare">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Why Bluemoon</p>
            <h2 id="h-compare">Where Most Builds Go Wrong, and How We Prevent It</h2>
            <p>Clear pricing, a real plan and one accountable team for the result.</p>
          </div>
          <div className="compare" data-reveal>
            <div className="compare__col compare__col--labels" aria-hidden="true">
              <span />
              {compare.map((r) => (
                <span key={r.k}>{r.k}</span>
              ))}
            </div>
            <div className="compare__col compare__col--typical">
              <span className="compare__head">Typical approach</span>
              {compare.map((r) => (
                <span key={r.k}>
                  <span className="compare__k">{r.k}</span>
                  {r.typical}
                </span>
              ))}
            </div>
            <div className="compare__col compare__col--ours">
              <span className="compare__head compare__brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/logo-mark-white.png")} alt="" width={47} height={48} />
                BLUEMOON
              </span>
              {compare.map((r) => (
                <span key={r.k}>
                  <span className="compare__k">{r.k}</span>
                  <Icon name="check" className="compare__tick" />
                  {r.ours}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel sec" aria-labelledby="h-reasons">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Reasons clients choose us</p>
              <h2 id="h-reasons">A Registered, Accountable Partner</h2>
              <p>Four things clients tell us matter most when the project is important.</p>
            </div>
            <Btn href="/quote">Request a Quote</Btn>
          </div>
          <FeatureAccordion items={reasons} image="/images/home/why-inspectors.jpg" alt="Site engineers checking plans" />
        </div>
      </section>

      <StickyCards
        id="h-steps"
        eyebrow="Our process"
        title="A Clear Route From First Call to Handover"
        text="Six steps that keep every project visible, low-risk and moving with confidence."
        items={processSteps.map((s, i) => ({ icon: stepIcons[i] ?? "check", title: s.eyebrow, text: s.description }))}
        cta={{ label: "Start With a Call", href: `tel:${siteConfig.phoneHref}` }}
      />

      <section className="sec sec--tight" aria-label="Bluemoon in numbers">
        <div className="container">
          <StatsRow items={headlineStats} />
        </div>
      </section>

      <CtaForm idPrefix="why" />
    </>
  );
}
