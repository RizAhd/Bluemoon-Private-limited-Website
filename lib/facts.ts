import { cidaGrades } from "./credentials";
import { contractCount, totalContractMillions } from "./currency";
import { siteConfig } from "./site";

/** Headline figures, all derived from the registration and the record of work. */
export const yearsOperating = 2026 - Number(siteConfig.established);

export const headlineStats = [
  { value: String(yearsOperating), suffix: "+", label: "Years in operation" },
  { value: String(contractCount), label: "Contracts completed" },
  { value: String(totalContractMillions), prefix: "Rs ", suffix: "M+", label: "Contract value delivered" },
  { value: String(cidaGrades.length), label: "CIDA-graded fields" },
];
