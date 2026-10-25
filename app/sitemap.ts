import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
];

const detailPages = [
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
  ...projects.map((p) => ({ path: `/projects/${p.id}`, priority: 0.6, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...pages, ...detailPages].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
