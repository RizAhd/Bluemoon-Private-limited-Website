"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const NAVY = "#0a1826";
const GOLD = "#d6a959";
const GOLD_DEEP = "#bf8a3c";
const beam = { delay: 0.3, duration: 1, ease: "easeInOut" } as const;
const once = { once: true } as const;

/**
 * Lamp hero. The animated "lamp" is a fixed-height decorative stage pinned to
 * the top; the content flows normally below it, so it is never clipped or
 * hidden regardless of viewport height. Starts after the (sticky) nav.
 */
export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("lamp", className)}>
      <div className="lamp__stage" aria-hidden="true">
        <div className="relative flex h-full w-full items-center justify-center isolate">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={beam}
            viewport={once}
            style={{ backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)` }}
            className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible"
          >
            <div className="absolute bottom-0 left-0 z-20 h-40 w-full" style={{ background: NAVY, maskImage: "linear-gradient(to top, white, transparent)" }} />
            <div className="absolute bottom-0 left-0 z-20 h-full w-40" style={{ background: NAVY, maskImage: "linear-gradient(to right, white, transparent)" }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={beam}
            viewport={once}
            style={{ backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})` }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem]"
          >
            <div className="absolute bottom-0 right-0 z-20 h-full w-40" style={{ background: NAVY, maskImage: "linear-gradient(to left, white, transparent)" }} />
            <div className="absolute bottom-0 right-0 z-20 h-40 w-full" style={{ background: NAVY, maskImage: "linear-gradient(to top, white, transparent)" }} />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl" style={{ background: NAVY }} />
          <div className="lamp__pulse absolute inset-auto z-30 h-36 w-[28rem] -translate-y-1/2 rounded-full blur-3xl" style={{ background: GOLD_DEEP }} />
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={beam}
            viewport={once}
            className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full blur-2xl"
            style={{ background: GOLD }}
          />
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={beam}
            viewport={once}
            className="lamp__linebar absolute inset-auto z-40 h-0.5 -translate-y-[7rem]"
            style={{ background: GOLD }}
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]" style={{ background: NAVY }} />
        </div>
      </div>
      <div className="lamp__content">{children}</div>
    </section>
  );
}
