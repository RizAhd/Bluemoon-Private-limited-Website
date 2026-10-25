import { siteConfig } from "./site";

export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "Are you a registered contractor?",
    a: `Yes. ${siteConfig.companyName} is registered with the Construction Industry Development Authority (Reg. ${siteConfig.cidaReg}) and the Registrar of Companies (${siteConfig.businessReg}). We hold CIDA grade C-6 in Building and C-7 in Highway, Bridge, Water Supply & Sewerage, Irrigation & Drainage Canals and Storm-water Disposal.`,
  },
  {
    q: "Which areas do you work in?",
    a: `${siteConfig.serviceArea} Our office is in Silmiyapura, Welimada.`,
  },
  {
    q: "Do you take on both government and private work?",
    a: "Yes. Our record covers provincial council, education, health and local government contracts, as well as private building, finishing, renovation, retaining wall and roofing work.",
  },
  {
    q: "How do I request a quote?",
    a: `Send the project type, location, budget range and preferred start date through the quote form, or call or WhatsApp ${siteConfig.phoneDisplay}. We review the brief and reply with the next step, which may be a site visit.`,
  },
  {
    q: "What happens after I send a brief?",
    a: "We review the scope, visit the site where needed, prepare a grounded estimate and quotation, plan the work, then build with close supervision and hand over after inspection.",
  },
  {
    q: "When can I reach the office?",
    a: `${siteConfig.hours}. Outside those hours, WhatsApp or email and we reply on the next working day.`,
  },
];

export const serviceFaqs: Faq[] = [
  {
    q: "Can you handle a full build as well as a single phase?",
    a: "Yes. We take on complete builds from foundation to handover, and focused phases such as structure only, roofing, finishing or a renovation package.",
  },
  {
    q: "Which works are covered by your CIDA grading?",
    a: "Building work is graded C-6. Highway, bridge, water supply and sewerage, irrigation and drainage canals, and storm-water disposal are graded C-7.",
  },
  {
    q: "Do you work on steep or difficult hill-country sites?",
    a: "Most of our work is in the Uva hill country, so slope, access, drainage and weather are planned for from the first site visit, including retaining walls where the ground needs them.",
  },
  {
    q: "Can you renovate a school or clinic while it stays in use?",
    a: "Yes. Renovations are phased around school terms and clinic hours, with work areas separated so the building can keep operating.",
  },
  {
    q: "How is progress reported?",
    a: "Clients and awarding bodies receive progress updates at agreed milestones, with quality checks recorded at each critical stage of the build.",
  },
];

export const contactFaqs: Faq[] = [
  {
    q: "Do you visit the site before quoting?",
    a: "For most building and civil works, yes. A site visit lets us check terrain, access and existing structures so the quotation is grounded in the real conditions.",
  },
  {
    q: "What should I include in my enquiry?",
    a: "The project type, location, rough size, budget range and when you would like to start. Drawings or photos help, and can be sent by email or WhatsApp.",
  },
  {
    q: "How quickly will you reply?",
    a: `We reply on the next working day at the latest. For anything urgent, call ${siteConfig.phoneDisplay} during office hours.`,
  },
  {
    q: "Can I visit the office?",
    a: `Yes. The office is at ${siteConfig.addressInline}. Please call ahead so the right person is available.`,
  },
];
