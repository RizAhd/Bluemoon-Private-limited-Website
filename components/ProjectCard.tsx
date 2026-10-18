import type { Project } from "@/lib/types";
import { formatLKRCompact } from "@/lib/currency";
import { ProjectImageCarousel } from "./ProjectImageCarousel";

export function ProjectCard({ project }: { project: Project }) {
  const statusLabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  const images = project.images.length ? project.images : [project.cover];
  return (
    <article className="pcard" data-tags={project.tags.join(" ")}>
      <div className="pcard__media">
        <ProjectImageCarousel images={images} alt={project.alt} />
        <span className="pcard__cat">{project.category}</span>
        {images.length > 1 && (
          <span className="pcard__count" aria-hidden="true">
            {images.length} photos
          </span>
        )}
      </div>
      <div className="pcard__body">
        <div className="pcard__row">
          <span className={`status-badge status-badge--${project.status}`}>{statusLabel}</span>
          <span className="pcard__year">{project.year}</span>
        </div>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__client">{project.client}</p>
        <dl className="pcard__facts">
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
          {project.valueLKR ? (
            <div>
              <dt>Contract value</dt>
              <dd className="pcard__value">{formatLKRCompact(project.valueLKR)}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}
