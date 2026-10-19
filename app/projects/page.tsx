import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { CtaBand } from "@/components/CtaBand";
import { trackRecord } from "@/lib/trackRecord";
import { formatLKRFull, totalContractValue, contractCount } from "@/lib/currency";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Projects | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Completed projects by Bluemoon Engineering across Uva Province: schools, learning centres, commercial buildings and renovations, with real contract values.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Projects", "/projects")} />
      <PageHero
        eyebrow="Project Portfolio"
        title="Real projects, real clients, real delivery."
        text="Completed work across schools, public buildings, commercial projects and renovations in Welimada, Badulla, Bandarawela and beyond."
        image="/images/hero/page-projects-cranes-dusk.jpg"
        actions={["quote", "services"]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work with photography."
            text="Filter by category to review relevant experience."
          />
          <ProjectsExplorer />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Record of Work"
            title="A track record of completed contracts."
            text="Selected contracts delivered for government departments and private clients across Uva Province."
          />
          <div className="track-table-wrap" data-reveal>
            <table className="track-table">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Client</th>
                  <th scope="col">Category</th>
                  <th scope="col">Year</th>
                  <th scope="col" style={{ textAlign: "right" }}>
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {trackRecord.map((row, i) => (
                  <tr key={i}>
                    <td>{row.project}</td>
                    <td>{row.client}</td>
                    <td>{row.category}</td>
                    <td>{row.year}</td>
                    <td className="num">{formatLKRFull(row.valueLKR)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <strong>Total: {contractCount} completed contracts</strong>
                  </td>
                  <td className="num">
                    <strong>{formatLKRFull(totalContractValue)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
