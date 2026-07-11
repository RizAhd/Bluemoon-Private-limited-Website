import type { Service } from "./types";

/**
 * Services derived from the company's CIDA registered fields
 * (Building, Highway, Bridge, Water Supply & Sewerage, Irrigation & Drainage,
 * Storm-water) and its actual record of completed work.
 */
export const services: Service[] = [
  {
    title: "Building Construction",
    slug: "building-construction",
    icon: "building",
    excerpt:
      "Schools, public buildings, and commercial structures built to CIDA standards with disciplined supervision from foundation to finish.",
    highlights: ["Institutional & commercial buildings", "CIDA Grade C-6"],
    featured: true,
  },
  {
    title: "Civil & Infrastructure Works",
    slug: "civil-infrastructure",
    icon: "road",
    excerpt:
      "Roads, bridges, and drainage works delivered with engineering awareness and site-appropriate methods across hill-country terrain.",
    highlights: ["Highways, bridges & culverts", "CIDA Grade C-7"],
    featured: true,
  },
  {
    title: "Water Supply & Drainage",
    slug: "water-drainage",
    icon: "water",
    excerpt:
      "Water supply, sewerage, irrigation, and storm-water drainage systems built for reliable performance in Uva Province conditions.",
    highlights: ["Water supply & sewerage", "Irrigation & storm-water"],
    featured: true,
  },
  {
    title: "Renovation & Repairs",
    slug: "renovation-repairs",
    icon: "refresh",
    excerpt:
      "Careful upgrades and repairs for schools, clinics, and buildings — improving function, safety, and finish with minimal disruption.",
    highlights: ["Institutional renovation", "Roof, ceiling & structural repair"],
    featured: true,
  },
  {
    title: "Finishing Works",
    slug: "finishing-works",
    icon: "spark",
    excerpt:
      "Flooring, roofing, plastering, and painting completed with precision and consistency for a clean, handover-ready result.",
    highlights: ["Granite & tile flooring", "Roofing, plaster & paint"],
  },
  {
    title: "Sanitation & Toilet Units",
    slug: "sanitation-units",
    icon: "sanitation",
    excerpt:
      "Sanitary facilities and toilet units for schools and public sites, including sanitary-napkin and hygiene provisions.",
    highlights: ["School sanitation units", "Hygiene-focused delivery"],
  },
  {
    title: "Retaining Walls & Site Works",
    slug: "retaining-site-works",
    icon: "wall",
    excerpt:
      "Retaining walls, ground development, and site works engineered for slope stability and durability in hill-country settings.",
    highlights: ["Retaining & boundary walls", "Playgrounds & ground works"],
  },
  {
    title: "Government & Institutional Projects",
    slug: "government-projects",
    icon: "shield",
    excerpt:
      "Trusted delivery for provincial councils, education and health departments — with transparent process and accountable reporting.",
    highlights: ["Provincial council contracts", "Education & health sectors"],
  },
];
