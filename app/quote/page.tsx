import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = pageMetadata({
  title: "Request a Quote | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Request a construction quote from Bluemoon Engineering, Welimada: building, civil works, water and drainage, renovation and finishing across Uva Province.",
  path: "/quote",
});

const next = [
  { icon: "clipboard", title: "Scope review", text: "We read your brief and check feasibility." },
  { icon: "map", title: "Site visit", text: "Where needed, we see the ground and access first." },
  { icon: "calendar", title: "Plan and budget", text: "Timeline, budget and priorities agreed with you." },
  { icon: "doc", title: "Quotation", text: "A structured quotation for the next phase." },
];

export default function QuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Request a Quote", "/quote")} />
      <PageHero
        title="Get Your Construction Quote"
        text="Share the project type, location, budget and timeline, and we will reply with a clear next step."
        image="/images/hero/hero-concrete-frame.jpg"
      />

      <section className="sec" aria-labelledby="h-quote">
        <div className="container quote">
          <div className="fcard" data-reveal>
            <h2 id="h-quote" className="fcard__title">
              Request Your Quote
            </h2>
            <p className="fcard__sub">Fields marked * are required. It takes about two minutes.</p>
            <QuoteForm />
          </div>
          <aside className="quote__side" aria-label="What happens next">
            <div className="fcard" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
              <p className="eyebrow">What happens next</p>
              <ol className="nextsteps">
                {next.map((n) => (
                  <li key={n.title}>
                    <span className="nextsteps__icon">
                      <Icon name={n.icon} />
                    </span>
                    <span>
                      <strong>{n.title}</strong>
                      {n.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="fcard fcard--accent" data-reveal style={{ "--rd": "200ms" } as React.CSSProperties}>
              <h3>Rather talk it through?</h3>
              <p>{siteConfig.hours}</p>
              <div className="quote__btns">
                <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone" block>
                  {siteConfig.phoneDisplay}
                </Btn>
                <Btn href={siteConfig.whatsapp} variant="dark" icon="whatsapp" block newTab>
                  WhatsApp
                </Btn>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
