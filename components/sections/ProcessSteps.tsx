"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";

const steps = [
  {
    icon: "phone",
    title: "Consultation & Estimate",
    text: "Call, WhatsApp or send a brief. We understand the scope and priorities, then prepare a grounded estimate and quotation.",
    image: "/images/home/step-estimate.jpg",
  },
  {
    icon: "clipboard",
    title: "Site Assessment & Planning",
    text: "A site visit checks terrain, access, slope and existing structures, then we plan phasing, materials and approvals.",
    image: "/images/home/step-survey.jpg",
  },
  {
    icon: "hardhat",
    title: "Supervised Construction",
    text: "Our crew builds with disciplined site supervision, progress reporting and quality checks at every critical stage.",
    image: "/images/home/step-build.jpg",
  },
  {
    icon: "check",
    title: "Final Inspection & Handover",
    text: "We inspect, refine the finishing and hand over a clean, complete project that answers to the contract.",
    image: "/images/home/step-handover.jpg",
  },
];

const STEP_MS = 5000;

/**
 * Four-step process beside a photo. While it is on screen the steps move on by
 * themselves (a thin bar shows the time left); hovering pauses it and picking a
 * step takes over. Nothing is tied to scrolling.
 */
export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused && !manual;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [running, active]);

  return (
    <div
      ref={ref}
      className={`process-grid2${running ? " is-running" : ""}`}
      style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="process-media" aria-hidden="true">
        {steps.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.image} src={asset(s.image)} alt="" loading="lazy" decoding="async" className={i === active ? "is-active" : ""} />
        ))}
      </div>
      <ol className="process-list">
        {steps.map((s, i) => (
          <li key={s.title} className={i === active ? "is-active" : ""}>
            <button
              type="button"
              onClick={() => {
                setManual(true);
                setActive(i);
              }}
              aria-expanded={i === active}
            >
              <span className="process-list__icon">
                <Icon name={s.icon} />
              </span>
              <span className="process-list__title">{s.title}</span>
            </button>
            <div className="process-list__body">
              <p>{s.text}</p>
            </div>
            {i === active && <span className="process-list__timer" key={active} aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
