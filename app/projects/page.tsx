import type { CSSProperties } from "react";
import { projects } from "@/lib/projects";
import { trackRecord } from "@/lib/trackRecord";
import { headlineStats } from "@/lib/facts";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProjectTile } from "@/components/sections/ProjectTile";
import { StatsRow } from "@/components/sections/Odometer";
import { TrackTable } from "@/components/sections/TrackTable";
import { CtaForm } from "@/components/sections/CtaForm";

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
        title="Real Projects, Real Clients, Real Delivery"
        text="Completed schools, public buildings, commercial work and renovations across Welimada, Badulla and Bandarawela."
        image="/images/hero/page-projects-cranes-dusk.jpg"
      />

      <section className="sec" aria-labelledby="h-projects">
        <div className="container">
          <div className="head" data-reveal>
            <p className="eyebrow">Projects</p>
            <h2 id="h-projects">Completed Work We Are Proud Of</h2>
          </div>
          <div className="pgrid">
            {projects.map((p, i) => (
              <div key={p.id} className={i === 0 ? "ptile--wide" : undefined} data-reveal style={{ "--rd": `${(i % 2) * 120}ms` } as CSSProperties}>
                <ProjectTile project={p} wide={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel sec sec--tight" aria-label="Record of work in numbers">
        <div className="container">
          <StatsRow items={headlineStats} />
        </div>
      </section>

      <section className="sec" aria-labelledby="h-record">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Record of work</p>
              <h2 id="h-record">Every Completed Contract, Government and Private</h2>
            </div>
            <p>Government clients are named. Private clients are shown by project type and location only, to respect their privacy.</p>
          </div>
          <div className="ttable-wrap" data-reveal>
            <TrackTable rows={trackRecord.slice(0, 6)} />
          </div>
          {trackRecord.length > 6 && (
            <details className="ttable-more">
              <summary>
                Show all {trackRecord.length} contracts
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="ttable-wrap">
                <TrackTable rows={trackRecord.slice(6)} hideHead />
              </div>
            </details>
          )}
        </div>
      </section>

      <CtaForm idPrefix="projects" />
    </>
  );
}
