import type { Metadata } from "next";
import { siteConfig } from "./site";
import { credentials, cidaGrades } from "./credentials";
import { services } from "./services";

// Deployed base URL. For the GitHub Pages project site this includes the repo
// path so every derived URL (canonical, OG, sitemap, JSON-LD) is correct.
// Change this to your custom domain root if/when you add one.
export const SITE_URL = "https://bluemoonengineering.lk";

export const DEFAULT_OG_IMAGE = {
  path: "/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Bluemoon Engineering (Pvt) Ltd, CIDA-registered construction contractor in Welimada, Badulla",
};

/**
 * Absolute URL for a site path. The static export uses trailing slashes
 * (next.config `trailingSlash: true`), so page URLs end in "/" to match the
 * URL that is actually served and avoid duplicate-URL signals.
 */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  const withSlash = isFile || clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash}`;
}

interface PageMetaArgs {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE.path,
  ogImageAlt = DEFAULT_OG_IMAGE.alt,
}: PageMetaArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  const isDefaultImage = ogImage === DEFAULT_OG_IMAGE.path;
  const image = {
    url: ogImageUrl,
    alt: ogImageAlt,
    ...(isDefaultImage ? { width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height } : {}),
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.companyName,
      images: [image],
      locale: "en_LK",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** LocalBusiness / GeneralContractor JSON-LD with real NAP + CIDA credentials. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: siteConfig.companyName,
    alternateName: [siteConfig.shortName, "Bluemoon Engineering (Pvt) Ltd"],
    legalName: siteConfig.companyName,
    url: absoluteUrl("/"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: { "@type": "Person", name: siteConfig.director },
    foundingDate: siteConfig.established,
    description: siteConfig.description,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo-icon.png"),
      width: 491,
      height: 493,
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE.path),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ambagaha Kubura, Silmiyapura",
      addressLocality: "Welimada",
      addressRegion: "Uva Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapLink,
    areaServed: ["Welimada", "Badulla", "Bandarawela", "Nuwara Eliya", "Uva Province", "Sri Lanka"].map(
      (name) => ({ "@type": "Place", name }),
    ),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "LK",
        availableLanguage: ["English", "Sinhala", "Tamil"],
      },
    ],
    identifier: [
      { "@type": "PropertyValue", name: "CIDA Registration", value: credentials.cidaReg },
      { "@type": "PropertyValue", name: "Business Registration", value: credentials.businessReg },
    ],
    knowsAbout: cidaGrades.map((g) => g.field),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.excerpt,
          url: absoluteUrl("/services"),
        },
      })),
    },
    slogan: siteConfig.tagline,
  };
}

/** WebSite entity, linked to the organization as publisher. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: siteConfig.shortName,
    alternateName: siteConfig.companyName,
    inLanguage: "en-LK",
    publisher: { "@id": ORG_ID },
  };
}

/** Home > Page breadcrumb trail for an interior page. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}
