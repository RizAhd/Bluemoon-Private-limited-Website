import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { businessJsonLd, SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/asset";

const grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Bluemoon Engineering (Pvt) Ltd | CIDA-Registered Construction Contractor, Uva Province",
  description: siteConfig.description,
  icons: { icon: asset("/favicon.png"), apple: asset("/favicon.png") },
};

export const viewport: Viewport = {
  themeColor: "#0a1826",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollAnimations />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
      </body>
    </html>
  );
}
