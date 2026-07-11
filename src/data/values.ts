import type { ValueItem, Stat } from "./types";
import { trackRecord } from "./trackRecord";

const totalMillions = Math.round(
  trackRecord.reduce((sum, r) => sum + r.valueLKR, 0) / 1_000_000,
);

export const values: ValueItem[] = [
  {
    title: "Integrity",
    icon: "shield",
    description:
      "We price responsibly, communicate honestly, and hold to the terms of every government and private contract.",
  },
  {
    title: "Quality",
    icon: "structure",
    description:
      "Work is protected through detail awareness, sound method, and supervision across every critical build stage.",
  },
  {
    title: "Accountability",
    icon: "check",
    description:
      "Transparent progress reporting and milestone visibility keep clients and awarding bodies informed throughout.",
  },
  {
    title: "Reliability",
    icon: "spark",
    description:
      "A CIDA-registered team that delivers dependable results on schedule, from Welimada across Uva Province.",
  },
];

/**
 * Honest, evidence-based statistics derived from the company's record of work.
 * (No fabricated figures.)
 */
export const stats: Stat[] = [
  { value: trackRecord.length, suffix: "+", label: "Government & private contracts delivered" },
  { value: totalMillions, suffix: "M+", prefix: "Rs ", label: "In completed construction works (LKR)" },
  { value: 6, suffix: "", label: "CIDA-registered construction fields" },
  { value: 5, suffix: "+", label: "Years serving Uva Province" },
];
