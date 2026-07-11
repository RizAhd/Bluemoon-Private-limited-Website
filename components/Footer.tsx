import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { services } from "@/lib/services";
import { credentials } from "@/lib/credentials";
import { asset } from "@/lib/asset";

export function Footer() {
  const year = 2026;
  const footerServices = services.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt={siteConfig.companyName} width={158} height={159} />
          </Link>
          <p>{siteConfig.description}</p>
          <p className="footer-cred">
            CIDA Reg. {credentials.cidaReg} · Business Reg. {credentials.businessReg}
          </p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            <li>{siteConfig.addressInline}</li>
            <li>{siteConfig.hours}</li>
          </ul>
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
