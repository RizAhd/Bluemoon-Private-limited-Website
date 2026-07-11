import type { CidaGrade } from "./types";

/**
 * Real CIDA (Construction Industry Development Authority of Sri Lanka) grading,
 * from the company's contractor registration record book (Reg. C-21184).
 * These are public trust signals for a registered contractor.
 */
export const cidaGrades: CidaGrade[] = [
  { field: "Building", grade: "C-6" },
  { field: "Highway", grade: "C-7" },
  { field: "Bridge", grade: "C-7" },
  { field: "Water Supply & Sewerage", grade: "C-7" },
  { field: "Irrigation & Drainage Canals", grade: "C-7" },
  { field: "Storm-water Disposal & Land Drainage", grade: "C-7" },
];

export const credentials = {
  authority: "Construction Industry Development Authority (CIDA), Sri Lanka",
  cidaReg: "C-21184",
  businessReg: "PV 00232701",
  businessRegIssued: "05 January 2021",
  registeredSince: "2021",
  validity: "10 March 2026",
  director: "Mr. M.J.M. Aswar",
};

/** Headline credential chips shown in the hero and footer. */
export const credentialBadges = [
  { label: "CIDA Registered", value: "C-21184" },
  { label: "Building Grade", value: "C-6" },
  { label: "Civil Works Grade", value: "C-7" },
  { label: "Est.", value: "2021" },
];
