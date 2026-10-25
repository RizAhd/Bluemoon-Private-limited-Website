import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { projectPhotos, photoFilters } from "@/lib/photos";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { CtaForm } from "@/components/sections/CtaForm";

export const metadata = pageMetadata({
  title: "Gallery | Bluemoon Engineering (Pvt) Ltd",
  description:
    "Photos of real construction and renovation work by Bluemoon Engineering: school buildings, commercial projects and finishing works across Uva Province.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Gallery", "/gallery")} />
      <PageHero
        title="A Closer Look at Our Work on Site"
        text="Real photographs from our building, finishing and renovation projects across Welimada, Badulla and Bandarawela."
        image="/images/hero/page-gallery-column-crew.jpg"
      />

      <section className="sec" aria-labelledby="h-gallery">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 id="h-gallery">Photographs From Our Projects</h2>
            </div>
            <p>Every photo here is from a Bluemoon site. Pick a category, then open any photo to browse full size.</p>
          </div>
          <div data-reveal>
            <PhotoGrid items={projectPhotos()} filters={photoFilters} />
          </div>
        </div>
      </section>

      <CtaForm idPrefix="gallery" />
    </>
  );
}
