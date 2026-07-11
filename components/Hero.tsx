import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero hero--dynamic">
      <div className="hero__lines" aria-hidden="true">
        <svg className="hero__svg" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <path className="hero__line" pathLength={1} d="M0 118 H392 V300 H820 V172 H1200" />
          <path className="hero__line" pathLength={1} d="M0 470 H250 V360 H648 V520 H1200" />
          <path className="hero__line" pathLength={1} d="M600 0 V190 H900 V600" />
          <path className="hero__line" pathLength={1} d="M300 600 V430 H150 V250" />
          <path className="hero__line" pathLength={1} d="M1050 0 V150 H760" />
          <path className="hero__line" pathLength={1} d="M0 300 H170 V60" />
        </svg>
      </div>
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__pattern hero__pattern--b" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero__watermark" src="/logo-icon-white.png" alt="" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow" data-hero-item>
          CIDA C-6 / C-7 Registered · {siteConfig.region}
        </p>
        <h1 data-hero-item>
          Building Sri Lanka's <span className="hero__grad">hill country</span> to a higher standard.
        </h1>
        <p className="lead" data-hero-item>
          Schools, public buildings, roads, drainage, and renovations — delivered by a registered
          contractor with disciplined planning and accountable delivery across Uva Province.
        </p>
        <div className="hero__actions" data-hero-item>
          <Link className="btn btn--primary" href="/quote">
            Request a Quote
          </Link>
          <Link className="btn btn--ghost" href="/projects">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
