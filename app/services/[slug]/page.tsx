import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { asset } from "@/lib/asset";
import { services, getService } from "@/lib/services";
import { projects } from "@/lib/projects";
import { breadcrumbTrail, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Btn } from "@/components/ui/Btn";
import { StickyCards } from "@/components/sections/StickyCards";
import { ProjectTile } from "@/components/sections/ProjectTile";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaForm } from "@/components/sections/CtaForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: `${s.title} | Bluemoon Engineering, Welimada`,
    description: `${s.excerpt} CIDA-registered contractor serving Welimada, Badulla and Uva Province.`,
    path: `/services/${s.slug}`,
  });
}

// Which record tags best illustrate each service; the rest fall back to featured work.
const serviceTag: Record<string, string> = {
  "building-construction": "building",
  "renovation-repairs": "renovation",
  "finishing-works": "finishing",
  "government-projects": "government",
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const tag = serviceTag[s.slug];
  const related = [...projects].sort((a, b) => Number(!!tag && b.tags.includes(tag)) - Number(!!tag && a.tags.includes(tag))).slice(0, 2);
  const idx = services.findIndex((x) => x.slug === s.slug);
  const others = [1, 2, 3].map((k) => services[(idx + k) % services.length]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbTrail([
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.excerpt,
            provider: { "@id": "https://bluemoonengineering.lk/#organization" },
            areaServed: "Uva Province, Sri Lanka",
          },
        ]}
      />

      <section className="top-pad dtop" aria-labelledby="h-service">
        <div className="container">
          <div className="dtop__head">
            <p className="eyebrow" data-hero>
              Our services
            </p>
            <h1 id="h-service" data-hero style={{ "--d": "100ms" } as CSSProperties}>
              {s.title}
            </h1>
            <p data-hero style={{ "--d": "200ms" } as CSSProperties}>
              {s.excerpt}
            </p>
          </div>
          <div className="dtop__media pz" data-hero style={{ "--d": "320ms" } as CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(`/images/services/${s.slug}.jpg`)} alt="" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <StickyCards
        id="h-handle"
        eyebrow="What we handle"
        title="Everything Between the Drawings and the Handover"
        text="You make the decisions. We run the crew, the materials, the schedule and the site."
        items={s.scope}
      />

      <section className="panel sec" aria-labelledby="h-work">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Recent work</p>
              <h2 id="h-work">Projects We Have Delivered</h2>
            </div>
            <Btn href="/projects">View All Projects</Btn>
          </div>
          <div className="pgrid">
            {related.map((p, i) => (
              <div key={p.id} data-reveal="tilt" style={{ "--rd": `${i * 120}ms` } as CSSProperties}>
                <ProjectTile project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="h-more">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">More services</p>
              <h2 id="h-more">Explore Other Services</h2>
            </div>
            <Btn href="/services" variant="dark">
              All Services
            </Btn>
          </div>
          <div className="sgrid sgrid--3">
            {others.map((o, i) => (
              <div key={o.slug} data-reveal="tilt" style={{ "--rd": `${i * 110}ms` } as CSSProperties}>
                <ServiceCard service={o} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaForm idPrefix="svc" title={`Planning ${s.title.replace(/ &.*$/, "")} Work?`} defaultService={s.title} />
    </>
  );
}
