import type { Project } from "@/lib/types";
import { formatLKRCompact } from "@/lib/currency";
import { ProjectImageCarousel } from "./ProjectImageCarousel";

export function ProjectCard({ project }: { project: Project }) {
  const statusLabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  const images = project.images.length ? project.images : [project.cover];
  return (
    <article className="pcard" data-tags={project.tags.join(" ")}>
      <ProjectImageCarousel images={images} alt={project.alt} />
      <div className="pcard__scrim" />
      <div className="pcard__top">
        <span className="pcard__cat">{project.category}</span>
      </div>
      <div className="pcard__info">
        <div className="pcard__row">
          <span className={`status-badge status-badge--${project.status}`}>{statusLabel}</span>
          {project.valueLKR ? (
            <span className="pcard__value">{formatLKRCompact(project.valueLKR)}</span>
          ) : null}
        </div>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__client">
          {project.client} · {project.year}
        </p>
      </div>
    </article>
  );
}
