"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { siteConfig } from "@/lib/site";
import { contractCount, totalContractMillions } from "@/lib/currency";

export function Hero() {
  return (
    <LampContainer className="hero-lamp">
      <motion.div
        initial={{ opacity: 0.5, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: "easeInOut" }}
        className="hero-lamp__content"
      >
        <p className="hero-lamp__eyebrow">CIDA C-6 / C-7 Registered Contractor</p>
        <h1 className="hero-lamp__title">
          Building Sri Lanka&apos;s <span className="gold-text">hill country</span> to a higher
          standard.
        </h1>
        <p className="hero-lamp__lead">
          Schools, public buildings, roads, drainage, and renovations — delivered by a registered
          contractor with accountable delivery across Uva Province.
        </p>
        <div className="hero-lamp__actions">
          <Link className="btn btn--secondary" href="/quote">
            Request a Quote
          </Link>
          <Link className="btn btn--ghost" href="/projects">
            View Projects
          </Link>
        </div>
        <div className="hero-lamp__meta">
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
      </motion.div>
    </LampContainer>
  );
}
