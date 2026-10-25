import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { services } from "@/lib/services";
import { credentials } from "@/lib/credentials";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = 2026;
  const footerServices = services.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo-white.png")} alt={siteConfig.companyName} width={158} height={159} />
          </Link>
          <p>{siteConfig.tagline}</p>
          <p className="footer-cred">
            CIDA Reg. {credentials.cidaReg} · Business Reg. {credentials.businessReg}
          </p>
        </div>

        <nav className="footer-col footer-col--explore" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col footer-col--services">
          <h3>Services</h3>
          <ul>
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-col--contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`}>
                <Icon name="phone" className="footer-icon" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" className="footer-icon" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>
                <Icon name="mail" className="footer-icon" />
                {siteConfig.email}
              </a>
            </li>
            <li className="footer-address">
              <Icon name="map" className="footer-icon" />
              {siteConfig.addressInline}
            </li>
            <li className="footer-hours">{siteConfig.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-mark">
        <p className="footer-mark__word" aria-hidden="true">
          BLUEMOON<span>.</span>
        </p>
        <div className="footer-mark__panel">
          <p>
            <strong>Prefer to talk it through?</strong>
            Call, WhatsApp or email the Welimada office.
          </p>
          <div className="footer-mark__actions">
            <a href={`tel:${siteConfig.phoneHref}`} aria-label={`Call ${siteConfig.phoneDisplay}`}>
              <Icon name="phone" />
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.email}`}>
              <Icon name="mail" />
            </a>
            <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Open the office location in Google Maps">
              <Icon name="map" />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          &copy; {year} {siteConfig.companyName}. All rights reserved.
        </p>
        <p>Welimada · Badulla · Uva Province, Sri Lanka</p>
      </div>
    </footer>
  );
}
