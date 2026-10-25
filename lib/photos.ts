import { projects } from "./projects";
import type { Project } from "./types";

export const photoTag = (p: Project) => (p.tags.includes("renovation") ? "Renovation" : p.category);

/** Every project photo, flattened for the gallery and the project pages. */
export const projectPhotos = (list: Project[] = projects) =>
  list.flatMap((p) =>
    p.images.map((src, i) => ({
      src,
      alt: i === 0 ? p.alt : `${p.shortTitle}, site photo ${i + 1}`,
      title: p.shortTitle,
      meta: `${p.location} · ${p.year}`,
      tag: photoTag(p),
    })),
  );

export const photoFilters = Array.from(new Set(projects.map(photoTag)));
