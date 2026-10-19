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

      <section className="section section--alt">
        <div className="container contact-layout">
          <div className="surface-card form-card" data-reveal>
            <p className="eyebrow">Send an Enquiry</p>
            <h2 className="form-card__title">Tell us how we can help.</h2>
            <ContactForm />
          </div>
          <div className="contact-side">
            <div className="surface-card contact-list-card" data-reveal>
              <ul className="contact-list">
                {contactChannels.map((c) => (
                  <li key={c.title}>
                    <span className="contact-list__icon">
                      <Icon name={c.icon} />
                    </span>
                    <span className="contact-list__text">
                      <span className="contact-list__label">{c.title}</span>
                      <a
                        href={c.link}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {c.title === "Visit us" ? siteConfig.addressInline : c.description}
                      </a>
                    </span>
                  </li>
                ))}
                <li>
                  <span className="contact-list__icon">
                    <Icon name="check" />
                  </span>
                  <span className="contact-list__text">
                    <span className="contact-list__label">Office hours</span>
                    <span>{siteConfig.hours}</span>
                  </span>
                </li>
              </ul>
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
