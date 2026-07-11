import type { Project } from "@/lib/types";
import { formatLKRCompact } from "@/lib/currency";

export function ProjectCard({ project }: { project: Project }) {
  const statusLabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  return (
    <article className="project-card" data-tags={project.tags.join(" ")}>
      <div className="project-card__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.cover} alt={project.alt} loading="lazy" />
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="badge">{project.category}</span>
          <span className={`status-badge status-badge--${project.status}`}>{statusLabel}</span>
          {project.valueLKR ? (
            <span className="project-card__value">{formatLKRCompact(project.valueLKR)}</span>
          ) : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__details">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}
