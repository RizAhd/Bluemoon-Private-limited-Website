export const siteConfig = {
  companyName: "Bluemoon Private Limited",
  shortName: "Bluemoon",
  tagline: "Constructing enduring spaces with discipline, detail, and distinction.",
  phone: "+94 77 245 1108",
  email: "hello@bluemoon.lk",
  address: "No. 18 Lake Crescent, Colombo 07, Sri Lanka",
  hours: "Mon - Sat | 8:30 AM - 6:00 PM",
  description:
    "Bluemoon Private Limited delivers premium residential, commercial, and specialist construction projects with trustworthy planning, refined execution, and elegant finishes.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
};

export const navigation = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Services", href: "services.html", page: "services" },
  { label: "Projects", href: "projects.html", page: "projects" },
  { label: "Gallery", href: "gallery.html", page: "gallery" },
  { label: "Why Choose Us", href: "process.html", page: "process" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

export const services = [
  {
    title: "Residential Construction",
    icon: "home",
    excerpt:
      "Premium homes and private residences executed with structural discipline, refined detailing, and finish quality that elevates everyday living.",
    highlights: ["Custom homes and villas", "End-to-end site management"],
    featured: true,
  },
  {
    title: "Commercial Construction",
    icon: "building",
    excerpt:
      "Corporate spaces, offices, retail environments, and commercial developments built for performance, durability, and brand-ready presentation.",
    highlights: ["Corporate-grade execution", "Schedule-conscious delivery"],
    featured: true,
  },
  {
    title: "Renovation",
    icon: "refresh",
    excerpt:
      "Thoughtful renovations that upgrade functionality, aesthetics, and property value while respecting the realities of existing structures.",
    highlights: ["Modernization strategies", "Minimal disruption planning"],
    featured: true,
  },
  {
    title: "Interior / Exterior Works",
    icon: "palette",
    excerpt:
      "Interior enhancements, facade upgrades, and exterior detailing completed with design sensitivity and close control over finish standards.",
    highlights: ["Facade and ambience upgrades", "Detail-focused finishes"],
    featured: true,
  },
  {
    title: "Project Planning",
    icon: "blueprint",
    excerpt:
      "Structured front-end planning that clarifies sequence, scope, expectations, and feasibility before site momentum begins.",
    highlights: ["Scope definition", "Execution readiness"],
  },
  {
    title: "Consultancy",
    icon: "compass",
    excerpt:
      "Practical construction guidance for clients who need experienced input on planning decisions, build strategy, quality, and risk.",
    highlights: ["Professional insight", "Decision support"],
  },
  {
    title: "Structural Work",
    icon: "structure",
    excerpt:
      "Reliable structural works delivered with engineering awareness, material quality, and careful supervision at critical build stages.",
    highlights: ["Foundation to frame", "Structural quality control"],
  },
  {
    title: "Finishing Works",
    icon: "spark",
    excerpt:
      "Premium finishing packages that bring precision, consistency, and polish to the final layers clients notice most.",
    highlights: ["Final finish refinement", "Handover-ready presentation"],
  },
];

export const projects = [
  {
    id: "harbour-crest",
    title: "Harbour Crest Residences",
    category: "residential",
    status: "completed",
    location: "Colombo",
    year: "2025",
    description:
      "A premium urban residence program focused on clean exterior lines, warm interior finishes, and disciplined build coordination.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    alt: "Luxury residential project exterior",
    featured: true,
    tags: ["residential", "completed"],
  },
  {
    id: "blueport-tower",
    title: "Blueport Business Tower",
    category: "commercial",
    status: "completed",
    location: "Kandy",
    year: "2024",
    description:
      "A commercial building delivery shaped around contemporary facade presence, efficient floor planning, and premium corporate finishes.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern commercial office building",
    featured: true,
    tags: ["commercial", "completed"],
  },
  {
    id: "lakeside-renewal",
    title: "Lakeside Villa Renewal",
    category: "renovation",
    status: "completed",
    location: "Negombo",
    year: "2025",
    description:
      "A full renovation and refinement project that transformed an aging property into a brighter and more elegant private residence.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    alt: "Renovated villa interior",
    featured: true,
    tags: ["renovation", "completed", "residential"],
  },
  {
    id: "verdant-square",
    title: "Verdant Square Office Fit-Out",
    category: "commercial",
    status: "ongoing",
    location: "Colombo",
    year: "2026",
    description:
      "An ongoing office transformation blending workflow efficiency, executive presentation, and strong detail management.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium office fit-out project",
    tags: ["commercial", "ongoing"],
  },
  {
    id: "crescent-villas",
    title: "Crescent Garden Villas",
    category: "residential",
    status: "ongoing",
    location: "Galle",
    year: "2026",
    description:
      "A multi-unit villa development with emphasis on finish continuity, refined landscaping, and dependable sequencing.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium villa development exterior",
    tags: ["residential", "ongoing"],
  },
  {
    id: "stone-lineage",
    title: "Stone Lineage Heritage Upgrade",
    category: "renovation",
    status: "ongoing",
    location: "Nuwara Eliya",
    year: "2026",
    description:
      "A careful heritage-sensitive upgrade that balances restoration, structural confidence, and contemporary usability.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    alt: "Renovation site with premium exterior detailing",
    tags: ["renovation", "ongoing"],
  },
];

export const galleryImages = [
  {
    title: "Facade progression and material alignment",
    category: "Commercial Exterior",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    alt: "Commercial building facade detail",
  },
  {
    title: "Refined living space composition",
    category: "Residential Interior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    alt: "Luxury residential interior",
  },
  {
    title: "Structural phase overview",
    category: "Site Progress",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Construction site in progress",
  },
  {
    title: "Architectural exterior lighting study",
    category: "Completed Project",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern architecture exterior",
  },
  {
    title: "Executive workplace finish palette",
    category: "Commercial Interior",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium office interior",
  },
  {
    title: "Exterior detailing and landscape edge",
    category: "Residential Exterior",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    alt: "Luxury residential facade and landscape",
  },
  {
    title: "Calm interior atmosphere with material warmth",
    category: "Finishing Works",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium interior finishing work",
  },
  {
    title: "Ongoing coordination across active site zones",
    category: "Project Delivery",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    alt: "Active construction site coordination",
  },
  {
    title: "Arrival sequence and facade presence",
    category: "Completed Project",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium villa entrance exterior",
  },
];

export const reasons = [
  {
    title: "Transparent Project Stewardship",
    icon: "shield",
    description:
      "Clients stay informed through clear communication, milestone visibility, and practical decision-making support.",
  },
  {
    title: "Premium Finish Discipline",
    icon: "spark",
    description:
      "We treat the visible final quality of a project as seriously as the hidden technical layers underneath it.",
  },
  {
    title: "Measured Planning Before Action",
    icon: "blueprint",
    description:
      "Scope, sequence, budget expectations, and site readiness are approached carefully to reduce avoidable friction later.",
  },
  {
    title: "Reliable Delivery Culture",
    icon: "check",
    description:
      "Our teams value accountability, schedule awareness, and the calm professionalism that serious clients expect.",
  },
];

export const processSteps = [
  {
    step: "01",
    eyebrow: "Consultation",
    title: "Understand the project vision and practical requirements.",
    description:
      "We begin with a focused conversation to understand the client's goals, project type, site realities, and decision priorities.",
  },
  {
    step: "02",
    eyebrow: "Site Visit",
    title: "Review the physical context and technical considerations.",
    description:
      "A site visit helps us assess access, conditions, constraints, opportunities, and the real-world context that will shape delivery.",
  },
  {
    step: "03",
    eyebrow: "Quotation",
    title: "Develop a clear response around scope and cost direction.",
    description:
      "We structure the quotation phase to support better client decisions with grounded information and fewer assumptions.",
  },
  {
    step: "04",
    eyebrow: "Planning",
    title: "Align sequence, materials, timeline, and execution readiness.",
    description:
      "Before construction advances, we organize technical details, work phasing, procurement, and key approvals where required.",
  },
  {
    step: "05",
    eyebrow: "Construction",
    title: "Execute with quality oversight and disciplined coordination.",
    description:
      "The build phase is managed through careful supervision, communication, and quality-focused progress checks.",
  },
  {
    step: "06",
    eyebrow: "Handover",
    title: "Complete, refine, and deliver with confidence.",
    description:
      "We close out with a handover mindset that prioritizes readiness, finish quality, and a confident final client experience.",
  },
];

export const testimonials = [
  {
    quote:
      "Bluemoon managed our project with a level of calm professionalism that made every decision easier. The finish quality exceeded our expectations.",
    name: "Nimal Perera",
    role: "Residential Client",
  },
  {
    quote:
      "What stood out most was the discipline in planning and the clarity of communication. We always felt the project was in capable hands.",
    name: "Shanika Fernando",
    role: "Commercial Client",
  },
  {
    quote:
      "They balanced premium aesthetics with practical delivery. Even during complex phases, the team stayed composed, responsive, and solutions-focused.",
    name: "Akhil Ramanayake",
    role: "Renovation Client",
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years of combined construction leadership" },
  { value: 120, suffix: "+", label: "Major project milestones delivered" },
  { value: 32, suffix: "+", label: "Active specialist partners and suppliers" },
  { value: 96, suffix: "%", label: "Referral and repeat-client confidence rate" },
];

export const values = [
  {
    title: "Integrity",
    icon: "shield",
    description:
      "We communicate honestly, price responsibly, and treat every project decision with professional accountability.",
  },
  {
    title: "Precision",
    icon: "structure",
    description:
      "Quality is protected through detail awareness, measured planning, and focused supervision across key delivery stages.",
  },
  {
    title: "Craftsmanship",
    icon: "spark",
    description:
      "We believe premium spaces are shaped by finish consistency, material sensitivity, and disciplined execution.",
  },
  {
    title: "Trust",
    icon: "check",
    description:
      "Long-term relationships are built when clients feel informed, respected, and confident throughout the project journey.",
  },
];

export const storyMoments = [
  {
    year: "Foundation",
    title: "A quality-first construction model",
    description:
      "Bluemoon was established with a clear objective: create a construction experience defined by structure, composure, and premium outcomes.",
  },
  {
    year: "Growth",
    title: "Broader capability across project types",
    description:
      "As client trust grew, our delivery expanded into residential, commercial, renovation, planning, and specialist support services.",
  },
  {
    year: "Today",
    title: "A trusted partner for serious clients",
    description:
      "We continue to refine our systems, workmanship standards, and client communication to deliver a stronger project experience every year.",
  },
];

export const sectors = [
  "Private Residences",
  "Luxury Villas",
  "Commercial Offices",
  "Retail Spaces",
  "Interior Fit-Outs",
  "Renovation Projects",
  "Structural Upgrades",
  "Finishing Packages",
];

export const contactHighlights = [
  {
    title: "Call Our Team",
    icon: "phone",
    description: siteConfig.phone,
    link: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    linkLabel: "Call now",
  },
  {
    title: "Email Us",
    icon: "mail",
    description: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    linkLabel: "Send email",
  },
  {
    title: "Visit Us",
    icon: "map",
    description: siteConfig.address,
    link: "https://maps.google.com/?q=Colombo%2007%20Sri%20Lanka",
    linkLabel: "Open map",
  },
  {
    title: "Working Hours",
    icon: "clock",
    description: siteConfig.hours,
    link: "quote.html",
    linkLabel: "Request appointment",
  },
];

const iconMap = {
  home: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5"/>
      <path d="M5 9.8V21h14V9.8"/>
      <path d="M9.5 21v-6h5v6"/>
    </svg>`,
  building: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 21V5.5L12 3v18"/>
      <path d="M20 21V8l-8-2"/>
      <path d="M7.5 8.5h1M7.5 12h1M7.5 15.5h1M15.5 10h1M15.5 13.5h1M15.5 17h1"/>
    </svg>`,
  refresh: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 11a8 8 0 1 0-2.3 5.7"/>
      <path d="M20 4v7h-7"/>
    </svg>`,
  palette: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12h-3Z"/>
      <circle cx="7.5" cy="9" r="1"/>
      <circle cx="9" cy="6.5" r="1"/>
      <circle cx="14.5" cy="6.5" r="1"/>
    </svg>`,
  blueprint: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 5h16v14H4z"/>
      <path d="M8 5v14M16 5v14M4 9h16M4 15h16"/>
    </svg>`,
  compass: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5"/>
      <path d="m14.7 9.3-3 5.4-2.4-2.4 5.4-3Z"/>
    </svg>`,
  structure: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 20 12 4l8 16"/>
      <path d="M7 14h10M9 10h6M6 18h12"/>
    </svg>`,
  spark: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m12 3 1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3Z"/>
      <path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/>
    </svg>`,
  shield: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.6 2.8 8.8 7 10 4.2-1.2 7-5.4 7-10V6l-7-3Z"/>
      <path d="m9.5 12 1.7 1.7L15 10"/>
    </svg>`,
  check: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m5 13 4 4L19 7"/>
    </svg>`,
  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.6 3a2 2 0 0 1-.6 1.9l-1.2 1.2a16 16 0 0 0 6.1 6.1l1.2-1.2a2 2 0 0 1 1.9-.6l3 .6A2 2 0 0 1 22 16.9Z"/>
    </svg>`,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 5h16v14H4z"/>
      <path d="m4 7 8 6 8-6"/>
    </svg>`,
  map: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/>
      <circle cx="12" cy="10" r="2.3"/>
    </svg>`,
  clock: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5"/>
      <path d="M12 7.5v5l3.4 2"/>
    </svg>`,
};

export function getIcon(name) {
  return iconMap[name] || iconMap.check;
}
