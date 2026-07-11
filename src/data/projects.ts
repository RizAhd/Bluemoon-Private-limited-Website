import type { Project } from "./types";

// Ganapathi Tamil Vidyalaya — Primary Learning Resources Centre
import ganapathi1 from "../assets/projects/ganapathi-learning-centre-1.jpg";
import ganapathi2 from "../assets/projects/ganapathi-learning-centre-2.jpg";
import ganapathi3 from "../assets/projects/ganapathi-learning-centre-3.jpg";
import ganapathi4 from "../assets/projects/ganapathi-learning-centre-4.jpg";
import ganapathi5 from "../assets/projects/ganapathi-learning-centre-5.jpg";
import ganapathi6 from "../assets/projects/ganapathi-learning-centre-6.jpg";
import ganapathi7 from "../assets/projects/ganapathi-learning-centre-7.jpg";
import ganapathi8 from "../assets/projects/ganapathi-learning-centre-8.jpg";
import ganapathi9 from "../assets/projects/ganapathi-learning-centre-9.jpg";

// Helabogan Commercial Building, Bandarawela
import helabogan1 from "../assets/projects/helabogan-commercial-1.jpg";
import helabogan2 from "../assets/projects/helabogan-commercial-2.jpg";
import helabogan3 from "../assets/projects/helabogan-commercial-3.jpg";
import helabogan4 from "../assets/projects/helabogan-commercial-4.jpg";
import helabogan5 from "../assets/projects/helabogan-commercial-5.jpg";
import helabogan6 from "../assets/projects/helabogan-commercial-6.jpg";

// Al Murshid Maha Vidyalaya — Renovation
import alMurshid1 from "../assets/projects/al-murshid-renovation-1.jpg";
import alMurshid2 from "../assets/projects/al-murshid-renovation-2.jpg";
import alMurshid3 from "../assets/projects/al-murshid-renovation-3.jpg";
import alMurshid4 from "../assets/projects/al-murshid-renovation-4.jpg";
import alMurshid5 from "../assets/projects/al-murshid-renovation-5.jpg";

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
    cover: ganapathi1,
    images: [
      ganapathi1,
      ganapathi2,
      ganapathi3,
      ganapathi4,
      ganapathi5,
      ganapathi6,
      ganapathi7,
      ganapathi8,
      ganapathi9,
    ],
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
    cover: helabogan1,
    images: [helabogan1, helabogan2, helabogan3, helabogan4, helabogan5, helabogan6],
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
    cover: alMurshid1,
    images: [alMurshid1, alMurshid2, alMurshid3, alMurshid4, alMurshid5],
    alt: "Polished granite classroom flooring completed during the Al Murshid school renovation",
    featured: true,
    tags: ["education", "renovation", "finishing", "government", "completed"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
