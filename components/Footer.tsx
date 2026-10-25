import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { services } from "@/lib/services";
import { credentials } from "@/lib/credentials";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr__cols">
          <nav className="ftr__col" aria-label="Footer">
            <h2>Quick links</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ftr__col">
            <h2>Services</h2>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftr__col ftr__col--contact">
            <h2>Contact us</h2>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
              </li>
              {siteConfig.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="ftr__mid">
          <div className="ftr__wordwrap">
            <p className="ftr__word" aria-hidden="true">
              BLUEMOON<span />
            </p>
          </div>
          <div className="ftr__panel">
            <h2>Prefer to talk it through?</h2>
            <p>Call or WhatsApp the Welimada office and we will point you to the right next step.</p>
            <div className="ftr__actions">
              <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
                {siteConfig.phoneDisplay}
              </Btn>
              <Btn href="/quote" variant="dark">
                Request a Quote
              </Btn>
            </div>
            <p className="ftr__follow">Reach us on</p>
            <div className="ftr__icons">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.email}`}>
                <Icon name="mail" />
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} aria-label={`Call ${siteConfig.phoneDisplay}`}>
                <Icon name="phone" />
              </a>
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Office location on Google Maps">
                <Icon name="map" />
              </a>
            </div>
          </div>
        </div>

        <div className="ftr__bottom">
          <p>&copy; 2026 {siteConfig.companyName}. All rights reserved.</p>
          <p>
            CIDA Reg. {credentials.cidaReg} · Business Reg. {credentials.businessReg}
          </p>
          <p className="ftr__credit">
            Developed by{" "}
            <a href="https://zyflo.tech" target="_blank" rel="noopener">
              zyflo.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
