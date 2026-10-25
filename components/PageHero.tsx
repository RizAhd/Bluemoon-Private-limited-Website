import { asset } from "@/lib/asset";
import { siteConfig } from "@/lib/site";
import { Btn } from "@/components/ui/Btn";

/** Interior page banner: full photo in a rounded frame, centred title and the call button. */
export function PageHero({
  title,
  text,
  image,
  alt = "",
}: {
  title: string;
  text: string;
  image: string;
  alt?: string;
}) {
  return (
    <section className="phero">
      <div className="phero__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="phero__img"
          src={asset(image)}
          srcSet={`${asset(image.replace(/\.jpg$/, "-sm.jpg"))} 960w, ${asset(image)} 1920w`}
          sizes="100vw"
          alt={alt}
          fetchPriority="high"
          decoding="async"
        />
        <div className="phero__inner">
          <h1 data-hero style={{ "--d": "120ms" } as React.CSSProperties}>
            {title}
          </h1>
          <p className="phero__text" data-hero style={{ "--d": "260ms" } as React.CSSProperties}>
            {text}
          </p>
          <div data-hero style={{ "--d": "400ms" } as React.CSSProperties}>
            <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
              {siteConfig.phoneDisplay}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
