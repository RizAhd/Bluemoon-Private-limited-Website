import Link from "next/link";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";

const ticks = ["CIDA registered contractor", "Government & private clients", "Established 2021"];

/** Full-height photo hero in a rounded frame; the fixed header sits on top of it. */
export function HomeHero() {
  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero__frame">
        <picture className="home-hero__media">
          <source media="(max-width: 767px)" srcSet={asset("/images/hero/home-hero-crane-frame-mobile.jpg")} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/hero/home-hero-crane-frame.jpg")}
            alt="Tower crane above a reinforced-concrete building under construction"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="home-hero__shade" />

        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__kicker" data-hero style={{ "--d": "0ms" } as React.CSSProperties}>
              CIDA C-6 / C-7 · Welimada, Badulla
            </p>
            <h1>
              <span className="home-hero__line">
                <span data-hero style={{ "--d": "80ms" } as React.CSSProperties}>
                  Building Sri&nbsp;Lanka’s hill country
                </span>
              </span>
              <span className="home-hero__line">
                <span data-hero className="home-hero__accent" style={{ "--d": "170ms" } as React.CSSProperties}>
                  to a higher standard.
                </span>
              </span>
            </h1>
            <div className="home-hero__actions" data-hero style={{ "--d": "300ms" } as React.CSSProperties}>
              <a className="btn-call" href={`tel:${siteConfig.phoneHref}`}>
                <span className="btn-call__icon">
                  <Icon name="phone" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <Link className="btn btn--ghost btn--large home-hero__ghost" href="/projects">
                View Projects
              </Link>
            </div>
          </div>

          <Link className="home-hero__card" href="/services" data-hero style={{ "--d": "420ms" } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/services/hero-card.jpg")} alt="" width={180} height={135} loading="lazy" decoding="async" />
            <span>
              <strong>From foundation work to final handover.</strong>
              <span className="home-hero__card-link">
                Explore Services
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </span>
            </span>
          </Link>
        </div>

        <div className="container home-hero__bar" data-hero style={{ "--d": "520ms" } as React.CSSProperties}>
          <ul className="home-hero__ticks">
            {ticks.map((t) => (
              <li key={t}>
                <Icon name="check" />
                {t}
              </li>
            ))}
          </ul>
          <p className="home-hero__seal">
            <span>CIDA Reg.</span> {siteConfig.cidaReg}
          </p>
        </div>
      </div>
    </section>
  );
}
