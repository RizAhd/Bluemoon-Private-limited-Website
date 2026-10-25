import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { projectPhotos } from "@/lib/photos";
import { formatLKRFull } from "@/lib/currency";
import { breadcrumbTrail, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { ProjectTile } from "@/components/sections/ProjectTile";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProject(id);
  if (!p) return {};
  return pageMetadata({
    title: `${p.shortTitle} | Bluemoon Engineering Projects`,
    description: p.description.slice(0, 155),
    path: `/projects/${p.id}`,
    ogImage: p.cover,
    ogImageAlt: p.alt,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProject(id);
  if (!p) notFound();

  const facts = [
    { k: "Client", v: p.client },
    { k: "Contract value", v: p.valueLKR ? formatLKRFull(p.valueLKR) : p.value },
    { k: "Location", v: p.location },
    { k: "Completed", v: p.year },
    ...(p.duration ? [{ k: "Duration", v: p.duration }] : []),
    { k: "Sector", v: p.sector },
  ];
  const others = projects.filter((x) => x.id !== p.id);

  return (
    <>
      <JsonLd
        data={breadcrumbTrail([
          { name: "Projects", path: "/projects" },
          { name: p.shortTitle, path: `/projects/${p.id}` },
        ])}
      />

      <section className="top-pad ptop" aria-labelledby="h-project">
        <div className="container">
          <p className="eyebrow" data-hero>
            Project
          </p>
          <h1 id="h-project" data-hero style={{ "--d": "100ms" } as CSSProperties}>
            {p.title}
          </h1>
          <div className="ptop__row" data-hero style={{ "--d": "200ms" } as CSSProperties}>
            <p className="meta">
              <span>
                <Icon name="map" />
                {p.location}
              </span>
              <span className="meta__dot" aria-hidden="true" />
              <span>
                <Icon name="calendar" />
                {p.year}
              </span>
            </p>
            <div className="ptop__chips">
              <span className="pill">{p.category}</span>
              <span className="pill">{p.sector}</span>
              <span className="pill">{p.status === "completed" ? "Completed" : "Ongoing"}</span>
            </div>
          </div>
          <div className="ptop__media" data-hero style={{ "--d": "300ms" } as CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.cover} alt={p.alt} fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="sec pdet" aria-labelledby="h-overview">
        <div className="container pdet__grid">
          <div className="pdet__main">
            <div data-reveal>
              <h2 id="h-overview">Project Overview</h2>
              <p className="pdet__lead">{p.description}</p>
            </div>
            <dl className="facts" data-reveal>
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd className={f.k === "Contract value" ? "mono" : undefined}>{f.v}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal>
              <h2>Site Photos</h2>
              <PhotoGrid items={projectPhotos([p])} />
            </div>
          </div>
          <aside className="pdet__side" aria-labelledby="h-quote">
            <div className="fcard" data-reveal>
              <h2 id="h-quote" className="fcard__title">
                Request Your Quote
              </h2>
              <EnquiryForm labels idPrefix="proj" />
            </div>
          </aside>
        </div>
      </section>

      <section className="panel sec" aria-labelledby="h-more">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">More projects</p>
              <h2 id="h-more">Explore More of Our Work</h2>
            </div>
            <Btn href="/projects">All Projects</Btn>
          </div>
          <div className="pgrid">
            {others.map((o, i) => (
              <div key={o.id} data-reveal style={{ "--rd": `${i * 120}ms` } as CSSProperties}>
                <ProjectTile project={o} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
