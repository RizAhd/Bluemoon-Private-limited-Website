"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { navigation } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <div className="nav-utility-bar">
        <div className="container nav-utility">
          <span className="nav-utility__item">
            <strong>CIDA Reg.</strong> {siteConfig.cidaReg}
          </span>
          <span className="nav-utility__item">{siteConfig.hours}</span>
          <a className="nav-utility__item" href={`tel:${siteConfig.phoneHref}`}>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="container nav-main">
        <Link className="brand" href="/" aria-label={`${siteConfig.companyName} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.png" alt="" width={46} height={46} />
          <span className="brand__text">
            <strong>{siteConfig.brandName}</strong>
            <span className="brand__meta">{siteConfig.brandMeta}</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
        </button>

        <div className="nav-panel">
          <nav className="site-nav" id="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="btn btn--primary nav-cta" href="/quote">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
