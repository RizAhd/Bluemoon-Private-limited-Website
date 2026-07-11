"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "Education", value: "education" },
  { label: "Commercial", value: "commercial" },
  { label: "Building", value: "building" },
  { label: "Renovation", value: "renovation" },
];

export function ProjectsExplorer() {
  const [active, setActive] = useState("all");
  const visible = projects.filter((p) => active === "all" || p.tags.includes(active));

  return (
    <>
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`filter-pill${active === f.value ? " is-active" : ""}`}
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="card-grid card-grid--projects">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="empty-state" style={{ marginTop: "1.5rem", color: "var(--color-ink-500)" }}>
          No projects match this filter.
        </p>
      )}
    </>
  );
}
