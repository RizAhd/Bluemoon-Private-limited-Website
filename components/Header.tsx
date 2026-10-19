"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";
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

  // Expose the header height (on :root) so the mobile sheet and the full-screen
  // home hero fill exactly the space below it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const set = () =>
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
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

  return (
    <header ref={headerRef} className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-main">
        <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-icon.png")} alt="" width={44} height={44} />
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
            {navigation.map((item, i) => (
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
                <svg className="site-nav__arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            ))}
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
