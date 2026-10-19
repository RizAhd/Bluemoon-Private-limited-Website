import type { Project } from "@/lib/types";
import { formatLKRCompact } from "@/lib/currency";
import { ProjectImageCarousel } from "./ProjectImageCarousel";
import { Icon } from "./Icon";

export function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  const statusLabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  const images = project.images.length ? project.images : [project.cover];
  return (
    <article className={`pcard${lead ? " pcard--lead" : ""}`} id={project.id}>
      <div className="pcard__media">
        <ProjectImageCarousel images={images} alt={project.alt} />
        <span className="pcard__cat">{project.category}</span>
      </div>
      <div className="pcard__body">
        <span className={`status-badge status-badge--${project.status}`}>{statusLabel}</span>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__loc">
          <Icon name="map" className="pcard__icon" />
          {project.location} · {project.year}
        </p>
        {project.valueLKR ? (
          <p className="pcard__value">
            {formatLKRCompact(project.valueLKR)} <span>contract value</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}
