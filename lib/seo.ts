import type { Metadata } from "next";
import { siteConfig } from "./site";
import { credentials, cidaGrades } from "./credentials";

export const SITE_URL = "https://bluemoonengineering.lk";

interface PageMetaArgs {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  ogImage = "/og/og-default.jpg",
}: PageMetaArgs): Metadata {
  const url = SITE_URL + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.companyName,
      images: [{ url: ogImage }],
      locale: "en_LK",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

/** LocalBusiness / GeneralContractor JSON-LD with real NAP + CIDA credentials. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}#organization`,
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    url: SITE_URL,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: { "@type": "Person", name: siteConfig.director },
    foundingDate: siteConfig.established,
    description: siteConfig.description,
    logo: `${SITE_URL}/logo-mark.svg`,
    image: `${SITE_URL}/og/og-default.jpg`,
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
    areaServed: ["Welimada", "Badulla", "Bandarawela", "Nuwara Eliya", "Uva Province", "Sri Lanka"],
    openingHours: "Mo-Sa 08:30-18:00",
    identifier: [
      { "@type": "PropertyValue", name: "CIDA Registration", value: credentials.cidaReg },
      { "@type": "PropertyValue", name: "Business Registration", value: credentials.businessReg },
    ],
    knowsAbout: cidaGrades.map((g) => g.field),
    slogan: siteConfig.tagline,
  };
}
