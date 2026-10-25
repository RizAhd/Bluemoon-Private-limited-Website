"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";

const steps = [
  {
    icon: "chat",
    title: "Consultation & estimate",
    text: "Call, WhatsApp or send a brief. We understand the scope and priorities, then prepare a grounded estimate and quotation.",
    image: "/images/home/step-estimate.jpg",
  },
  {
    icon: "map",
    title: "Site assessment & planning",
    text: "A site visit checks terrain, access, slope and existing structures, then we plan phasing, materials and approvals.",
    image: "/images/home/step-survey.jpg",
  },
  {
    icon: "building",
    title: "Construction with supervision",
    text: "Our crew builds with disciplined site supervision, progress reporting and quality checks at every critical stage.",
    image: "/images/home/step-build.jpg",
  },
  {
    icon: "check",
    title: "Inspection & handover",
    text: "We inspect, refine the finishing and hand over a clean, complete project that answers to the contract.",
    image: "/images/home/step-handover.jpg",
  },
];

const PIN_QUERY = "(min-width: 861px) and (prefers-reduced-motion: no-preference)";

/**
 * Four-step process. On desktop the block pins while you scroll and the active step
 * (and its photo) follows the scroll; on phones each step opens on tap.
 */
export function ProcessSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(PIN_QUERY);
    const sync = () => setPinned(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const run = () => {
      frame = 0;
      const r = track.getBoundingClientRect();
      const range = track.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(0.999, Math.max(0, -r.top / range)) : 0;
      setActive(Math.floor(p * steps.length));
      track.style.setProperty("--progress", String(p));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pinned]);

  const choose = (i: number) => {
    const track = trackRef.current;
    if (!pinned || !track) return setActive(i);
    // jump the scroll position to the middle of that step's range
    const range = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((i + 0.5) / steps.length) * range, behavior: "smooth" });
  };

  return (
    <div ref={trackRef} className={`process-track${pinned ? " is-pinned" : ""}`}>
      <div className="process-sticky">
        <div className="process-grid2">
          <div className="process-media" aria-hidden="true">
            {steps.map((s, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={s.image} src={asset(s.image)} alt="" loading="lazy" decoding="async" className={i === active ? "is-active" : ""} />
            ))}
          </div>
          <div className="process-rail" aria-hidden="true">
            <span style={{ "--step": (active + 1) / steps.length } as React.CSSProperties} />
          </div>
          <ol className="process-list">
            {steps.map((s, i) => (
              <li key={s.title} className={i === active ? "is-active" : ""}>
                <button type="button" onClick={() => choose(i)} aria-expanded={i === active}>
                  <span className="process-list__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="process-list__title">
                    <span className="process-list__num">0{i + 1}</span>
                    {s.title}
                  </span>
                </button>
                <div className="process-list__body">
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
