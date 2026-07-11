import { trackRecord } from "./trackRecord";

/** Full, unambiguous LKR amount, e.g. "Rs 13,094,510". */
export function formatLKRFull(value: number): string {
  return `Rs ${value.toLocaleString("en-LK")}`;
}

/** Compact LKR with an explicit unit, e.g. "Rs 13.09 M" / "Rs 950 K". */
export function formatLKRCompact(value: number): string {
  if (value >= 1_000_000) {
    return `Rs ${trimZeros(value / 1_000_000)} M`;
  }
  if (value >= 1_000) {
    return `Rs ${Math.round(value / 1_000)} K`;
  }
  return `Rs ${value.toLocaleString("en-LK")}`;
}

function trimZeros(n: number): string {
  return n.toFixed(2).replace(/\.?0+$/, "");
}

/** Accurate aggregates derived from the real record of work (no guessed numbers). */
export const totalContractValue = trackRecord.reduce((sum, r) => sum + r.valueLKR, 0);
export const contractCount = trackRecord.length;
export const totalContractMillions = Math.round(totalContractValue / 1_000_000);
