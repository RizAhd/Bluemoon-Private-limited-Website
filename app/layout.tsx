import type { Metadata, Viewport } from "next";
import { Barlow, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { businessJsonLd, websiteJsonLd, SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/asset";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Display face: Barlow, from road and highway signage, for headings, nav and buttons.
const barlow = Barlow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

// Body face: Source Sans 3, for comfortable reading in paragraphs and forms.
const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "Bluemoon Engineering | CIDA Building Contractor, Welimada",
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.companyName, url: `${SITE_URL}/` }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  category: "construction",
  keywords: [
    "Bluemoon Engineering",
    "construction company Welimada",
    "building contractor Badulla",
    "CIDA registered contractor",
    "civil engineering contractor Uva Province",
    "school building construction Sri Lanka",
    "renovation contractor Bandarawela",
    "road and drainage works Sri Lanka",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: asset("/favicon.png"), type: "image/png", sizes: "256x256" }],
    apple: [{ url: asset("/favicon.png"), sizes: "256x256" }],
  },
  manifest: asset("/manifest.webmanifest"),
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1f4d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollAnimations />
        <JsonLd data={[businessJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
