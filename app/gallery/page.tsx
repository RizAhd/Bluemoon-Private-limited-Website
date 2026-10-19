import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";

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
        eyebrow="Project Gallery"
        title="A closer look at our work on site."
        text="Photographs from our building, finishing and renovation projects across Welimada, Badulla and Bandarawela."
        image="/images/hero/page-gallery-column-crew.jpg"
        actions={["quote", "projects"]}
      />

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
