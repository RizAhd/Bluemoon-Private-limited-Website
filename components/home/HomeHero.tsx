import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";

const ticks = ["CIDA Registered", "Government & Private Work", "Supervised Delivery"];
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

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
          <div className="hhero__actions" data-hh style={d(300)}>
            <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
              {siteConfig.phoneDisplay}
            </Btn>
            <Btn href="/projects" variant="outline">
              View Projects
            </Btn>
          </div>
        </div>

        <div className="container hhero__bar" data-hh style={d(450)}>
          <ul className="hhero__ticks">
            {ticks.map((t) => (
              <li key={t}>
                <Icon name="check" />
                {t}
              </li>
            ))}
          </ul>
          <p className="hhero__seal">
            <span className="hhero__seal-icon">
              <Icon name="shield" />
            </span>
            <span>
              <span>CIDA Registered</span>
              <strong className="mono">{siteConfig.cidaReg}</strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
