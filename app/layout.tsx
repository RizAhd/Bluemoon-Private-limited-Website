import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./home.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { businessJsonLd, websiteJsonLd, SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/asset";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Geist: one variable family for headings, UI and body text.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/icon-48.png"), type: "image/png", sizes: "48x48" },
      { url: asset("/icon-96.png"), type: "image/png", sizes: "96x96" },
      { url: asset("/icon-192.png"), type: "image/png", sizes: "192x192" },
    ],
    shortcut: [{ url: asset("/favicon.ico") }],
    apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  manifest: asset("/manifest.webmanifest"),
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1f4d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the home hero intro script sets data-intro-seen
    // on <html> before hydration (same pattern as theme scripts).
    <html lang="en" className={geist.variable} suppressHydrationWarning>
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
