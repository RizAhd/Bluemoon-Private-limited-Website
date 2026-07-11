import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Photographs of real construction and renovation work by Bluemoon Engineering — school buildings, commercial projects, and finishing works across Uva Province, Sri Lanka.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow" data-hero-item>
              Project Gallery
            </p>
            <h1 data-hero-item>A closer look at our work on site.</h1>
            <p data-hero-item>
              Photographs from completed and in-progress projects — building work, finishing, and
              renovation across Welimada, Badulla, and Bandarawela.
            </p>
          </div>
          <div className="page-hero__panel surface-card" data-hero-item>
            <p style={{ marginBottom: 0 }}>Select any image to view it larger.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="On Site"
            title="Real photographs from Bluemoon Engineering projects."
          />
          <Gallery />
        </div>
      </section>
    </>
  );
}
