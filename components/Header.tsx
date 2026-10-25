"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { services } from "@/lib/services";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/Icon";
import { LogoMark } from "@/components/LogoMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Btn, Roll } from "@/components/ui/Btn";

const DESKTOP_QUERY = "(min-width: 1081px)";
// Pages that open with a full photo hero; the header sits on the photo there.
const PHOTO_HERO = ["/", "/about", "/services", "/projects", "/gallery", "/why-choose-us", "/contact", "/quote"];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) burgerRef.current?.focus();
  }, []);

  // The bar sits over the hero, then slides back in as a fixed bar once the hero is gone.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > Math.max(420, window.innerHeight * 0.7));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a, summary")?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // New page: release the menu and start at the top (or at the #section).
  useEffect(() => {
    setOpen(false);
    document.body.classList.remove("nav-open");
    const hash = window.location.hash;
    requestAnimationFrame(() => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    });
  }, [pathname]);

  const path = pathname.replace(/\/$/, "") || "/";
  const overlay = PHOTO_HERO.includes(path) && !stuck && !open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const onNavigate = () => {
    document.body.classList.remove("nav-open");
    close();
  };

  return (
    <header className={`hdr${stuck ? " is-stuck" : ""}${open ? " is-open" : ""}${overlay ? " is-overlay" : ""}`}>
      <div className="hdr__top">
        <a href={`tel:${siteConfig.phoneHref}`}>
          <Icon name="phone" />
          {siteConfig.phoneDisplay}
        </a>
        <div className="hdr__top-right">
          <span className="hdr__hours">{siteConfig.hours}</span>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Icon name="whatsapp" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.email}`}>
            <Icon name="mail" />
          </a>
          <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Office location on Google Maps">
            <Icon name="map" />
          </a>
        </div>
      </div>

      <div className="container hdr__row">
        <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`} onClick={onNavigate}>
          <LogoMark />
          <span className="brand__word">BLUEMOON</span>
        </Link>

        <nav className="hdr__nav" aria-label="Primary">
          <ul>
            {navigation.map((item) =>
              item.href === "/services" ? (
                <li className="mega" key={item.href}>
                  <Link className="hdr__link" href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                    <Roll text={item.label} />
                    <Icon name="chevDown" />
                  </Link>
                  <div className="mega__panel">
                    <div className="mega__box">
                      <div className="mega__grid">
                        {services.slice(0, 6).map((s) => (
                          <Link key={s.slug} className="mega__item" href={`/services/${s.slug}`}>
                            <span className="mega__icon">
                              <Icon name={s.icon} />
                            </span>
                            <span>
                              <strong>{s.title}</strong>
                              <span>{s.highlights[0]}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega__promo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={asset("/images/services/hero-card.jpg")} alt="" loading="lazy" decoding="async" />
                        <p>Need a custom construction quote?</p>
                        <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
                          {siteConfig.phoneDisplay}
                        </Btn>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link className="hdr__link" href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                    <Roll text={item.label} />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ThemeToggle className="hdr__theme" />

        <Btn className="hdr__cta" href="/quote" size="sm">
          Request a Quote
        </Btn>

        <button
          ref={burgerRef}
          className="hdr__burger"
          type="button"
          aria-expanded={open}
          aria-controls="mnav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="mnav" id="mnav" ref={menuRef} aria-hidden={!open}>
        <ul>
          {navigation.map((item, i) => (
            <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
              {item.href === "/services" ? (
                <details>
                  <summary tabIndex={open ? 0 : -1}>
                    {item.label}
                    <Icon name="chevDown" />
                  </summary>
                  <div className="mnav__sub">
                    <Link href="/services" onClick={onNavigate} tabIndex={open ? 0 : -1}>
                      <Icon name="arrowRight" />
                      All services
                    </Link>
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} onClick={onNavigate} tabIndex={open ? 0 : -1}>
                        <Icon name={s.icon} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={onNavigate}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="mnav__cta" style={{ "--i": navigation.length } as React.CSSProperties}>
            <Btn href="/quote" block size="lg">
              Request a Quote
            </Btn>
            <Btn href={`tel:${siteConfig.phoneHref}`} variant="dark" icon="phone" block size="lg">
              {siteConfig.phoneDisplay}
            </Btn>
          </li>
        </ul>
      </div>
    </header>
  );
}
