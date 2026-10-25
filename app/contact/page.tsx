import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { contactFaqs } from "@/lib/faqs";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { AreaMap } from "@/components/sections/AreaMap";
import { Faq } from "@/components/sections/Faq";

export const metadata = pageMetadata({
  title: "Contact | Bluemoon Engineering (Pvt) Ltd, Welimada",
  description:
    "Contact Bluemoon Engineering in Welimada, Badulla for site visits, consultations and quotes across Uva Province. Call 077 337 0056 or email the office.",
  path: "/contact",
});

const channels = [
  { icon: "phone", label: "Call us", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneHref}` },
  { icon: "whatsapp", label: "WhatsApp", value: "Message the office", href: siteConfig.whatsapp, external: true },
  { icon: "mail", label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "map", label: "Visit us", value: siteConfig.addressInline, href: siteConfig.mapLink, external: true },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />
      <PageHero
        title="Let’s Talk About Your Next Build"
        text="Consultations, site visits and quotes anywhere in Welimada, Badulla, Bandarawela and Uva Province."
        image="/images/hero/page-contact-plans-review.jpg"
      />

      <section className="sec" aria-labelledby="h-contact">
        <div className="container contact">
          <div className="contact__photo" data-reveal="tilt">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/home/cta-tower.jpg")} alt="" loading="lazy" decoding="async" />
            <ul className="contact__list">
              {channels.map((c) => (
                <li key={c.label}>
                  <span className="contact__icon">
                    <Icon name={c.icon} />
                  </span>
                  <span>
                    <span className="contact__label">{c.label}</span>
                    <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {c.value}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="fcard" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
            <h2 id="h-contact" className="fcard__title">
              Send Us a Message
            </h2>
            <p className="fcard__sub">{siteConfig.hours}. We reply on the next working day at the latest.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="panel sec" aria-labelledby="h-areas">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Areas we serve</p>
            <h2 id="h-areas">Rooted in Welimada, Working Across Uva</h2>
            <p>{siteConfig.serviceArea}</p>
          </div>
          <div className="locate">
            <div className="amap-wrap" data-reveal>
              <AreaMap />
            </div>
            <div className="locate__map" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
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

      <Faq items={contactFaqs} title="Before You Get in Touch" />
    </>
  );
}
