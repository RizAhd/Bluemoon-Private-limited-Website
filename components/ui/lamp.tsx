"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Navy = #0d1f33, gold beam = #d6a959 / #bf8a3c.
// Conic gradients are written as explicit CSS (robust on Tailwind v4).
const NAVY = "#0d1f33";
const GOLD = "#d6a959";
const GOLD_DEEP = "#bf8a3c";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative isolate z-0 flex w-full flex-col items-center justify-center overflow-hidden",
        className,
      )}
      style={{ background: NAVY, minHeight: "min(84vh, 780px)", paddingTop: "4.5rem" }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* left beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible text-white"
        >
          <div
            className="absolute bottom-0 left-0 z-20 h-40 w-full"
            style={{ background: NAVY, maskImage: "linear-gradient(to top, white, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 z-20 h-full w-40"
            style={{ background: NAVY, maskImage: "linear-gradient(to right, white, transparent)" }}
          />
        </motion.div>

        {/* right beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div
            className="absolute bottom-0 right-0 z-20 h-full w-40"
            style={{ background: NAVY, maskImage: "linear-gradient(to left, white, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 z-20 h-40 w-full"
            style={{ background: NAVY, maskImage: "linear-gradient(to top, white, transparent)" }}
          />
        </motion.div>

        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ background: NAVY }}
        />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: GOLD_DEEP }}
        />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ background: GOLD }}
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
          style={{ background: GOLD }}
        />
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ background: NAVY }}
        />
      </div>

      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">{children}</div>
    </div>
  );
};
