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
    scope: [
      { icon: "clipboard", title: "Pre-construction planning", text: "Drawings, quantities and a site plan agreed before a single trade mobilises." },
      { icon: "building", title: "Foundations and structure", text: "Footings, columns, beams and slabs built to the approved drawings and checked at every pour." },
      { icon: "hardhat", title: "Masonry, roofing and services", text: "Walls, roof structure and building services coordinated by one supervised crew." },
      { icon: "key", title: "Finishing and handover", text: "Plaster, paint and flooring, then a final inspection before the keys change hands." },
    ],
  },
  {
    title: "Civil & Infrastructure Works",
    slug: "civil-infrastructure",
    icon: "road",
    excerpt:
      "Roads, bridges, and drainage works delivered with engineering awareness and site-appropriate methods across hill-country terrain.",
    highlights: ["Highways, bridges & culverts", "CIDA Grade C-7"],
    featured: true,
    scope: [
      { icon: "map", title: "Survey and setting out", text: "Levels, alignments and drainage paths set out against the design before earthworks begin." },
      { icon: "road", title: "Roads and access", text: "Sub-base, surfacing and edging for access roads and internal paths on sloping ground." },
      { icon: "structure", title: "Bridges and culverts", text: "Culverts, small bridges and their approaches, delivered within our CIDA C-7 grading." },
      { icon: "check", title: "Inspection and reporting", text: "Progress records and quality checks for the awarding department at every stage." },
    ],
  },
  {
    title: "Water Supply & Drainage",
    slug: "water-drainage",
    icon: "water",
    excerpt:
      "Water supply, sewerage, irrigation, and storm-water drainage systems built for reliable performance in Uva Province conditions.",
    highlights: ["Water supply & sewerage", "Irrigation & storm-water"],
    featured: true,
    scope: [
      { icon: "water", title: "Water supply lines", text: "Supply mains, tanks and connections laid, jointed and tested before backfill." },
      { icon: "wall", title: "Storm-water drainage", text: "Drains, culverts and outfalls sized for hill-country rainfall and run-off." },
      { icon: "ruler", title: "Irrigation and canals", text: "Canal lining and irrigation structures, delivered within our C-7 grading." },
      { icon: "sanitation", title: "Sewerage", text: "Sewer lines and connections installed to the approved design and levels." },
    ],
  },
  {
    title: "Renovation & Repairs",
    slug: "renovation-repairs",
    icon: "refresh",
    excerpt:
      "Careful upgrades and repairs for schools, clinics, and buildings, improving function, safety, and finish with minimal disruption.",
    highlights: ["Institutional renovation", "Roof, ceiling & structural repair"],
    featured: true,
    scope: [
      { icon: "clipboard", title: "Condition survey", text: "We inspect the building first and agree the repair scope and priorities with you." },
      { icon: "refresh", title: "Roof, ceiling and structural repair", text: "Leaks, sagging ceilings and cracked elements repaired properly, not patched over." },
      { icon: "spark", title: "Interior refurbishment", text: "New plaster, paint and flooring that bring classrooms and wards back to standard." },
      { icon: "clock", title: "Phased, low-disruption work", text: "Work planned around school terms and clinic hours so buildings stay in use." },
    ],
  },
  {
    title: "Finishing Works",
    slug: "finishing-works",
    icon: "spark",
    excerpt:
      "Flooring, roofing, plastering, and painting completed with precision and consistency for a clean, handover-ready result.",
    highlights: ["Granite & tile flooring", "Roofing, plaster & paint"],
    scope: [
      { icon: "spark", title: "Flooring", text: "Granite, terrazzo and tile flooring laid level, with clean borders and joints." },
      { icon: "home", title: "Roofing and ceilings", text: "Roof sheeting, gutters and ceilings fitted for weather and for finish." },
      { icon: "ruler", title: "Plaster and render", text: "Smooth internal plaster and external render, ready for paint." },
      { icon: "check", title: "Painting and detailing", text: "Two-tone schemes, trims and a final snag list before handover." },
    ],
  },
  {
    title: "Sanitation & Toilet Units",
    slug: "sanitation-units",
    icon: "sanitation",
    excerpt:
      "Sanitary facilities and toilet units for schools and public sites, including sanitary-napkin and hygiene provisions.",
    highlights: ["School sanitation units", "Hygiene-focused delivery"],
    scope: [
      { icon: "clipboard", title: "Layout and planning", text: "Unit layouts sized for pupils or public users, with water and drainage planned in." },
      { icon: "sanitation", title: "Toilet blocks", text: "Durable, easy-to-clean toilet units built for schools and public sites." },
      { icon: "health", title: "Hygiene provisions", text: "Sanitary-napkin disposal and hygiene fittings included where the brief requires." },
      { icon: "water", title: "Water and drainage connections", text: "Supply, soakage and drainage connections completed and tested." },
    ],
  },
  {
    title: "Retaining Walls & Site Works",
    slug: "retaining-site-works",
    icon: "wall",
    excerpt:
      "Retaining walls, ground development, and site works engineered for slope stability and durability in hill-country settings.",
    highlights: ["Retaining & boundary walls", "Playgrounds & ground works"],
    scope: [
      { icon: "wall", title: "Retaining walls", text: "Rubble and concrete retaining walls built for slope stability and drainage." },
      { icon: "map", title: "Ground development", text: "Cut, fill and levelling that turns sloping land into usable ground." },
      { icon: "home", title: "Boundary walls and gates", text: "Boundary walls and entrances built to last in hill-country weather." },
      { icon: "spark", title: "Playgrounds and landscaping", text: "Playgrounds, paths and finishing works around the building." },
    ],
  },
  {
    title: "Government & Institutional Projects",
    slug: "government-projects",
    icon: "shield",
    excerpt:
      "Trusted delivery for provincial councils, education and health departments, with transparent process and accountable reporting.",
    highlights: ["Provincial council contracts", "Education & health sectors"],
    scope: [
      { icon: "doc", title: "Procurement-ready records", text: "CIDA registration, grading and company records that public tenders ask for." },
      { icon: "school", title: "Schools and education", text: "Learning centres, classrooms and renovations for provincial education departments." },
      { icon: "health", title: "Health and public buildings", text: "Clinics and public buildings delivered to the awarding body's specification." },
      { icon: "check", title: "Accountable reporting", text: "Transparent progress reporting and milestone visibility throughout the contract." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
