import Link from "next/link";
import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Btn, Chevron } from "@/components/ui/Btn";

const ticks = ["CIDA Registered", "Government & Private Work", "Supervised Delivery"];
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const Laurel = ({ flip = false }: { flip?: boolean }) => (
  <svg className="laurel" viewBox="0 0 22 40" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M17 3C9 9 6 21 11.5 37" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    {[
      [13.6, 7.2, -42],
      [10.4, 12.6, -28],
      [8.5, 18.8, -12],
      [8.4, 25.2, 6],
      [9.8, 31.4, 22],
    ].map(([x, y, r]) => (
      <ellipse key={y} cx={x} cy={y} rx="1.5" ry="3.3" transform={`rotate(${r} ${x} ${y})`} fill="currentColor" />
    ))}
  </svg>
);

/** Full-height photo hero in a rounded frame; the header sits on top of it. */
export function HomeHero() {
  return (
    <section className="hhero" aria-label="Introduction">
      <div className="hhero__frame">
        <picture className="hhero__media">
          <source media="(max-width: 767px)" srcSet={asset("/images/hero/home-hero-crane-frame-mobile.jpg")} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/hero/home-hero-crane-frame.jpg")} alt="Tower crane above a reinforced-concrete building under construction" fetchPriority="high" decoding="async" />
        </picture>

        <div className="container hhero__main">
          <div className="hhero__copy">
            <h1>
              <span className="hhero__line">
                <span data-hh style={d(60)}>
                  Building Sri&nbsp;Lanka’s Hill Country
                </span>
              </span>
              <span className="hhero__line">
                <span data-hh style={d(150)}>
                  to a Higher Standard
                </span>
              </span>
            </h1>
            <div data-hh style={d(300)}>
              <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
                {siteConfig.phoneDisplay}
              </Btn>
            </div>
          </div>

          <Link className="hhero__card" href="/services" data-hh style={d(420)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/services/hero-card.jpg")} alt="" width={180} height={150} loading="lazy" decoding="async" />
            <span>
              <strong>From Foundation Work to Final Handover.</strong>
              <span className="hhero__card-link">
                Explore Services
                <Chevron />
              </span>
            </span>
          </Link>
        </div>

        <div className="container hhero__bar" data-hh style={d(520)}>
          <ul className="hhero__ticks">
            {ticks.map((t) => (
              <li key={t}>
                <Icon name="check" />
                {t}
              </li>
            ))}
          </ul>
          <p className="hhero__seal">
            <Laurel />
            <span>
              <strong className="mono">{siteConfig.cidaReg}</strong>
              <span>CIDA Registered</span>
            </span>
            <Laurel flip />
          </p>
        </div>
      </div>
    </section>
  );
}
