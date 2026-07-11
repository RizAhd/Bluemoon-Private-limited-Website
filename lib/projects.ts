import type { Project } from "./types";

const P = "/images/projects";

export const projects: Project[] = [
  {
    id: "ganapathi-learning-centre",
    title: "Primary Learning Resources Centre — B/Ganapathi Tamil Vidyalaya",
    category: "Education",
    sector: "Schools & Education",
    client: "Deputy Chief Secretary (Engineering Services), Uva Provincial Council",
    clientType: "government",
    location: "Badulla, Uva Province",
    value: "Rs 13.09M",
    valueLKR: 13094510,
    year: "2025",
    duration: "120 days",
    status: "completed",
    description:
      "Construction of a two-storey primary learning resources centre (final stage) for B/Ganapathi Tamil Vidyalaya — a columned school block with balcony access, classrooms, plaster and paint finishing, delivered for the Uva Provincial Council engineering service.",
    cover: `${P}/ganapathi-learning-centre-1.jpg`,
    images: Array.from({ length: 9 }, (_, i) => `${P}/ganapathi-learning-centre-${i + 1}.jpg`),
    alt: "Two-storey school building constructed by Bluemoon Engineering at Ganapathi Tamil Vidyalaya",
    featured: true,
    tags: ["education", "building", "government", "completed"],
  },
  {
    id: "helabogan-commercial",
    title: "Commercial Building — Helabogan, Bandarawela",
    category: "Commercial",
    sector: "Commercial Buildings",
    client: "Local Government, Badulla",
    clientType: "government",
    location: "Bandarawela, Badulla",
    value: "Rs 9.4M",
    valueLKR: 9400000,
    year: "2024",
    duration: "",
    status: "completed",
    description:
      "A modern commercial hall on a main road in Helabogan, Bandarawela — clean rendered façade, a full-width glazed shopfront, and a landscaped stepped frontage, delivered for the Badulla local government.",
    cover: `${P}/helabogan-commercial-1.jpg`,
    images: Array.from({ length: 6 }, (_, i) => `${P}/helabogan-commercial-${i + 1}.jpg`),
    alt: "Modern glass-fronted commercial building on a main road in Bandarawela",
    featured: true,
    tags: ["commercial", "building", "government", "completed"],
  },
  {
    id: "al-murshid-renovation",
    title: "Renovation — B/Al Murshid Maha Vidyalaya",
    category: "Education",
    sector: "Renovations",
    client: "Uva Provincial Department of Education",
    clientType: "government",
    location: "Badulla, Uva Province",
    value: "Rs 2.2M",
    valueLKR: 2200000,
    year: "2024",
    duration: "",
    status: "completed",
    description:
      "Renovation of Al Murshid Maha Vidyalaya — classroom refurbishment with new plaster and two-tone painting, and premium polished granite flooring with an inlaid border, upgrading the school for the education department.",
    cover: `${P}/al-murshid-renovation-1.jpg`,
    images: Array.from({ length: 5 }, (_, i) => `${P}/al-murshid-renovation-${i + 1}.jpg`),
    alt: "Polished granite classroom flooring completed during the Al Murshid school renovation",
    featured: true,
    tags: ["education", "renovation", "finishing", "government", "completed"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
