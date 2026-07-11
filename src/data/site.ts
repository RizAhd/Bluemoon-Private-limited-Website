import type { ContactChannel } from "./types";

/**
 * Single source of truth for company facts.
 * All values are the real, verified details of Bluemoon Engineering (Pvt) Ltd,
 * taken from the company's CIDA contractor registration and record of work.
 */
export const siteConfig = {
  companyName: "Bluemoon Engineering (Private) Limited",
  shortName: "Bluemoon Engineering",
  brandName: "Bluemoon",
  brandMeta: "Engineering (Pvt) Ltd",
  tagline:
    "CIDA-registered building & civil-engineering contractor delivering government and private projects across Uva Province, Sri Lanka.",
  director: "Mr. M.J.M. Aswar",
  established: "2021",

  phone: "+94 77 337 0056",
  phoneDisplay: "077 337 0056",
  phoneHref: "+94773370056",
  whatsapp: "https://wa.me/94773370056",
  email: "bluemoonengi@gmail.com",

  addressLines: [
    "Ambagaha Kubura, Silmiyapura",
    "Welimada, Badulla",
    "Uva Province, Sri Lanka",
  ],
  addressInline: "Ambagaha Kubura, Silmiyapura, Welimada, Badulla, Sri Lanka",
  addressShort: "Welimada, Badulla, Sri Lanka",
  region: "Welimada · Badulla · Bandarawela · Uva Province",
  serviceArea:
    "Serving Welimada, Badulla, Bandarawela, Nuwara Eliya and projects across Uva Province and Sri Lanka.",
  hours: "Mon – Sat · 8:30 AM – 6:00 PM",

  businessReg: "PV 00232701",
  cidaReg: "C-21184",

  description:
    "Bluemoon Engineering (Private) Limited is a CIDA-registered building and civil-engineering contractor based in Welimada, Badulla. We deliver schools, public buildings, sanitation, roads and drainage, renovations, and finishing works for government departments and private clients across Uva Province and Sri Lanka.",

  // Welimada, Badulla District (approximate coordinates for LocalBusiness schema)
  geo: { latitude: 6.9078, longitude: 80.9086 },
  mapEmbed:
    "https://www.google.com/maps?q=Welimada%2C%20Badulla%2C%20Sri%20Lanka&output=embed",
  mapLink: "https://maps.google.com/?q=Welimada,Badulla,Sri Lanka",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    title: "Call the office",
    icon: "phone",
    description: siteConfig.phoneDisplay,
    link: `tel:${siteConfig.phoneHref}`,
    linkLabel: "Call now",
  },
  {
    title: "WhatsApp",
    icon: "chat",
    description: siteConfig.phoneDisplay,
    link: siteConfig.whatsapp,
    linkLabel: "Message on WhatsApp",
    external: true,
  },
  {
    title: "Email us",
    icon: "mail",
    description: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    linkLabel: "Send email",
  },
  {
    title: "Visit us",
    icon: "map",
    description: siteConfig.addressShort,
    link: siteConfig.mapLink,
    linkLabel: "Open in Maps",
    external: true,
  },
];
