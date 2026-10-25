"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { services } from "@/lib/services";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/Icon";

const DESKTOP_QUERY = "(min-width: 1081px)";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The header is fixed. --header-h follows its live height (mobile sheet, sticky offsets);
  // --header-space keeps its full, unscrolled height so page content starts below it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const root = document.documentElement;
    const set = () => {
      const h = el.offsetHeight;
      root.style.setProperty("--header-h", `${h}px`);
      if (window.scrollY <= 8) root.style.setProperty("--header-space", `${h}px`);
    };
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Escape closes; moving focus into the menu on open.
  useEffect(() => {
    if (!open) return;
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Close if the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // New page: unlock scroll right away and start at the top (or at the #section).
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  // Transparent over the home hero photo until the page scrolls.
  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}${overlay ? " is-overlay" : ""}`}
    >
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <a href={`tel:${siteConfig.phoneHref}`}>
              <Icon name="phone" className="topbar__icon" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Icon name="mail" className="topbar__icon" />
              {siteConfig.email}
            </a>
            <span>{siteConfig.hours}</span>
          </div>
          <div className="topbar__group">
            <span>CIDA Reg. {siteConfig.cidaReg}</span>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" className="topbar__icon" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container nav-main">
        <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
          <span className="brand__mark" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand__mark-navy" src={asset("/logo-mark-navy.png")} alt="" width={47} height={48} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand__mark-white" src={asset("/logo-mark-white.png")} alt="" width={47} height={48} />
          </span>
          <span className="brand__text">
            <strong>{siteConfig.brandName}</strong>
            <span className="brand__meta">{siteConfig.brandMeta}</span>
          </span>
        </Link>

        <div className="nav-tools">
          <Link className="btn btn--secondary btn--small nav-tools__quote" href="/quote">
            Get a Quote
          </Link>
          <button
            ref={toggleRef}
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
          </button>
        </div>

        <div className="nav-panel" id="site-nav-panel">
          <nav className="site-nav" aria-label="Primary" ref={navRef}>
            {navigation.map((item, i) => {
              const link = (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : ""}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  style={{ "--i": i } as React.CSSProperties}
                  onClick={() => {
                    // release the scroll lock before navigating so the new page can scroll
                    document.body.classList.remove("nav-open");
                    close();
                  }}
                >
                  <span>{item.label}</span>
                  {item.href === "/services" && (
                    <svg className="site-nav__caret" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                  <svg className="site-nav__arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              );
              if (item.href !== "/services") return link;
              // Desktop mega menu: opens on hover or keyboard focus, pure CSS.
              return (
                <div className="mega" key={item.href}>
                  {link}
                  <div className="mega__panel">
                    <div className="mega__grid">
                      {services.map((s) => (
                        <Link key={s.slug} className="mega__item" href={`/services#${s.slug}`}>
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
                    <div className="mega__foot">
                      <span>Not sure which service fits your project?</span>
                      <Link className="btn btn--secondary btn--small" href="/quote">
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="nav-panel__footer">
            <a className="btn btn--ghost nav-phone" href={`tel:${siteConfig.phoneHref}`}>
              <Icon name="phone" className="nav-panel__icon" />
              {siteConfig.phoneDisplay}
            </a>
            <Link className="btn btn--secondary nav-cta" href="/quote" onClick={() => close()}>
              Request a Quote
            </Link>
            <div className="nav-panel__contact">
              <a className="btn btn--ghost" href={`tel:${siteConfig.phoneHref}`}>
                <Icon name="phone" className="nav-panel__icon" />
                Call
              </a>
              <a className="btn btn--ghost" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" className="nav-panel__icon" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
