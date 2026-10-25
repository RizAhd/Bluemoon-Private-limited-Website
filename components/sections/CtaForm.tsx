import { asset } from "@/lib/asset";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

/** Closing section: photo panel, centred heading and a glass enquiry form. */
export function CtaForm({
  title = "Let’s Plan a Build That Stands the Test of Time",
  text = "Get in touch for reliable construction, practical guidance and a grounded quotation shaped around your site.",
  image = "/images/home/cta-tower.jpg",
  idPrefix = "cta",
  defaultService,
}: {
  title?: string;
  text?: string;
  image?: string;
  idPrefix?: string;
  defaultService?: string;
}) {
  return (
    <section className="ctaf" aria-labelledby={`${idPrefix}-title`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ctaf__bg" src={asset(image)} alt="" loading="lazy" decoding="async" />
      <div className="container ctaf__inner">
        <div className="head head--center" data-reveal>
          <p className="eyebrow">Get started</p>
          <h2 id={`${idPrefix}-title`}>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaf__form" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>
          <EnquiryForm idPrefix={idPrefix} defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
