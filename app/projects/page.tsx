import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { CtaBand } from "@/components/CtaBand";
import { trackRecord } from "@/lib/trackRecord";
import { formatLKRFull, totalContractValue, contractCount } from "@/lib/currency";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Completed construction projects by Bluemoon Engineering across Uva Province — schools, learning resource centres, commercial buildings, and renovations for government and private clients, with real contract values.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              Project Portfolio
            </p>
            <h1 data-hero-item>Real projects, real clients, real delivery.</h1>
            <p data-hero-item>
              A record of completed work across schools, public buildings, commercial projects, and
              renovations in Welimada, Badulla, Bandarawela, and beyond.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>
              Government projects are named by department; private projects are shown by type, value,
              and location.
            </p>
          </div>
        </div>
      </section>

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
                    <strong>Total — {contractCount} completed contracts</strong>
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
