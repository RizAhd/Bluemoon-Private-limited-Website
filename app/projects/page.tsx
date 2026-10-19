import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { CtaBand } from "@/components/CtaBand";
import { trackRecord } from "@/lib/trackRecord";
import {
  formatLKRFull,
  formatLKRCompact,
  totalContractValue,
  contractCount,
} from "@/lib/currency";
import type { TrackRecordItem } from "@/lib/types";
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

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work with photography."
          />
          <div className="card-grid card-grid--projects">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} lead={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark stats-band" aria-label="Record of work in numbers">
        <div className="container">
          <div className="metrics metrics--two">
            <div className="metrics__item">
              <span className="metrics__value">{contractCount}</span>
              <span className="metrics__label">Completed contracts</span>
            </div>
            <div className="metrics__item">
              <span className="metrics__value">{formatLKRCompact(totalContractValue)}</span>
              <span className="metrics__label">Total contract value</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Record of Work"
            title="Completed contracts, government and private."
          />
          <div className="track-table-wrap" data-reveal>
            <TrackTable rows={trackRecord.slice(0, 6)} />
          </div>
          {trackRecord.length > 6 && (
            <details className="track-more">
              <summary>Show all {trackRecord.length} contracts</summary>
              <div className="track-table-wrap">
                <TrackTable rows={trackRecord.slice(6)} hideHead />
              </div>
            </details>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/** Contract table; stacks into one item per contract on phones. */
function TrackTable({ rows, hideHead = false }: { rows: TrackRecordItem[]; hideHead?: boolean }) {
  return (
    <table className="track-table">
      <colgroup>
        <col className="track-table__project" />
        <col className="track-table__client" />
        <col className="track-table__cat" />
        <col className="track-table__year" />
        <col className="track-table__value" />
      </colgroup>
      <thead className={hideHead ? "sr-only" : undefined}>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Client</th>
          <th scope="col" className="track-table__cat">
            Category
          </th>
          <th scope="col">Year</th>
          <th scope="col" className="num">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td className="track-table__name">{row.project}</td>
            <td className="track-table__meta">{row.client}</td>
            <td className="track-table__cat">{row.category}</td>
            <td className="track-table__meta">{row.year}</td>
            <td className="num">{formatLKRFull(row.valueLKR)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
