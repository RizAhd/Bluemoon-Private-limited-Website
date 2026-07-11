import type { ImageMetadata } from "astro";

export interface NavItem {
  label: string;
  href: string;
  page: string;
}

export interface Service {
  title: string;
  slug: string;
  icon: string;
  excerpt: string;
  highlights: string[];
  featured?: boolean;
}

export type ClientType = "government" | "private";
export type ProjectStatus = "completed" | "ongoing";

export interface Project {
  id: string;
  title: string;
  category: string;
  sector: string;
  client: string;
  clientType: ClientType;
  location: string;
  value?: string;
  valueLKR?: number;
  year: string;
  duration?: string;
  status: ProjectStatus;
  description: string;
  cover: ImageMetadata;
  images: ImageMetadata[];
  alt: string;
  featured?: boolean;
  tags: string[];
}

export interface TrackRecordItem {
  project: string;
  client: string;
  clientType: ClientType;
  category: string;
  valueLKR: number;
  year: string;
}

export interface ProcessStep {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  icon: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface CidaGrade {
  field: string;
  grade: string;
}

export interface ContactChannel {
  title: string;
  icon: string;
  description: string;
  link: string;
  linkLabel: string;
  external?: boolean;
}
