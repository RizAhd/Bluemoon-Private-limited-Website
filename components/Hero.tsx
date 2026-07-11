import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { contractCount, totalContractMillions } from "@/lib/currency";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow" data-hero-item>
            <span />
            CIDA C-6 / C-7 Registered Contractor
          </p>
          <h1 data-hero-item>
            Building Sri Lanka&apos;s <span className="gold-text">hill country</span> to a higher
            standard.
          </h1>
          <p className="hero__lead" data-hero-item>
            Schools, public buildings, roads, drainage, and renovations — delivered by a registered
            contractor with disciplined planning and accountable delivery across Uva Province.
          </p>
          <div className="hero__actions" data-hero-item>
            <Link className="btn btn--secondary" href="/quote">
              Request a Quote
            </Link>
            <Link className="btn btn--ghost" href="/projects">
              View Projects
            </Link>
          </div>
          <div className="hero__meta" data-hero-item>
            <div>
              <strong>{contractCount}+</strong>
              <span>Contracts delivered</span>
            </div>
            <div>
              <strong>Rs {totalContractMillions}M+</strong>
              <span>Completed works</span>
            </div>
            <div>
              <strong>{siteConfig.established}</strong>
              <span>Registered since</span>
            </div>
          </div>
        </div>

        <div className="hero__media" data-hero-item>
          <div className="hero__frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/helabogan-commercial-1.jpg"
              alt="Commercial building completed by Bluemoon Engineering in Bandarawela"
            />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-k">CIDA Registration</span>
            <span className="hero__badge-v">{siteConfig.cidaReg}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
