import { siteConfig } from "../data/site";
import { credentials, cidaGrades } from "../data/credentials";

/**
 * Builds the LocalBusiness / GeneralContractor JSON-LD for the site,
 * using the real, verified company NAP and CIDA credentials.
 */
export function businessJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}#organization`,
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: { "@type": "Person", name: siteConfig.director },
    foundingDate: siteConfig.established,
    description: siteConfig.description,
    logo: `${siteUrl}/logo-mark.svg`,
    image: `${siteUrl}/og/og-default.jpg`,
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
    areaServed: [
      "Welimada",
      "Badulla",
      "Bandarawela",
      "Nuwara Eliya",
      "Uva Province",
      "Sri Lanka",
    ],
    openingHours: "Mo-Sa 08:30-18:00",
    identifier: [
      { "@type": "PropertyValue", name: "CIDA Registration", value: credentials.cidaReg },
      { "@type": "PropertyValue", name: "Business Registration", value: credentials.businessReg },
    ],
    knowsAbout: cidaGrades.map((g) => g.field),
    slogan: siteConfig.tagline,
  };
}
