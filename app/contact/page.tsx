import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { siteConfig, contactChannels } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Contact | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Contact Bluemoon Engineering in Welimada, Badulla for site visits, consultations and quotes across Uva Province. Call 077 337 0056 or email the office.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />
      <PageHero
        eyebrow="Contact Us"
        title="Start the conversation with a registered contractor."
        text="Consultations, site visits and project discussions anywhere in Welimada, Badulla, Bandarawela and Uva Province."
        image="/images/hero/page-contact-plans-review.jpg"
        actions={["call", "whatsapp"]}
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--services">
            {contactChannels.map((c) => (
              <article className="contact-card" key={c.title}>
                <span className="icon-badge">
                  <Icon name={c.icon} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <a href={c.link} {...(c.external ? { target: "_blank", rel: "noopener" } : {})}>
                  {c.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-layout">
          <div className="surface-card" data-reveal>
            <p className="eyebrow">Send an Enquiry</p>
            <h2>Tell us how we can help.</h2>
            <ContactForm />
          </div>
          <div className="contact-side">
            <div className="surface-card" data-reveal>
              <p className="eyebrow">Visit or Call</p>
              <h2>Consultations by appointment.</h2>
              <p style={{ marginBottom: 0 }}>
                We support building, civil, renovation, and finishing requirements with responsive
                guidance and clear next steps from our Welimada base.
              </p>
            </div>
            <div className="surface-card map-card" data-reveal>
              <iframe
                title={`Map of ${siteConfig.companyName}, Welimada`}
                src={siteConfig.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
