import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    eyebrow: "Consultation",
    title: "Understand the requirement and scope.",
    description:
      "We start by understanding the project type, client priorities, and the practical requirements — whether it is a government tender or a private build.",
  },
  {
    step: "02",
    eyebrow: "Site Assessment",
    title: "Assess site, access, and conditions.",
    description:
      "A site visit lets us review terrain, access, slope, and hill-country conditions that shape method, materials, and sequencing.",
  },
  {
    step: "03",
    eyebrow: "Estimation",
    title: "Prepare a clear estimate and quotation.",
    description:
      "We structure a grounded cost estimate and quotation so clients and awarding bodies can make confident decisions with fewer assumptions.",
  },
  {
    step: "04",
    eyebrow: "Planning",
    title: "Plan sequence, materials, and approvals.",
    description:
      "Before mobilisation we organise work phasing, procurement, and any approvals required for the site, sector, and region.",
  },
  {
    step: "05",
    eyebrow: "Construction",
    title: "Build with supervision and quality control.",
    description:
      "The build is delivered with disciplined site supervision, progress reporting, and quality checks at every critical stage.",
  },
  {
    step: "06",
    eyebrow: "Handover",
    title: "Complete, inspect, and hand over.",
    description:
      "We close out with inspection, finishing refinement, and a clean handover — ready for use and accountable to the contract.",
  },
];
