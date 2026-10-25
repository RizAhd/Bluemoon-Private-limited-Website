"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const SEEN_KEY = "bm-intro-seen";
const COLS = 7;
let mountedBefore = false;

// Runs before first paint: marks the page for entrance animations and skips the intro
// when it was already shown this session or the visitor prefers reduced motion.
const GATE_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js-anim');try{if(sessionStorage.getItem('${SEEN_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.dataset.introSeen='1';d.classList.add('intro-done')}}catch(e){d.classList.add('intro-done')}})();`;

/** Short royal-blue loading screen (once per visit) that lifts away in steps, then the hero animates in. */
export function IntroScreen() {
  const [phase, setPhase] = useState<"show" | "leave" | "gone">("show");

  useEffect(() => {
    const root = document.documentElement;
    // The gate script only runs on a full page load of this page. Arriving by
    // client-side navigation skips the intro and just replays the hero entrance.
    const fullLoad = !mountedBefore && root.classList.contains("js-anim");
    mountedBefore = true;
    if (fullLoad && root.dataset.introSeen) {
      setPhase("gone");
      return;
    }
    if (!fullLoad) {
      root.classList.remove("intro-done");
      root.classList.add("js-anim");
      let f2 = 0;
      const f1 = requestAnimationFrame(() => {
        f2 = requestAnimationFrame(() => root.classList.add("intro-done"));
      });
      setPhase("gone");
      return () => {
        cancelAnimationFrame(f1);
        cancelAnimationFrame(f2);
      };
    }
    const leave = window.setTimeout(() => {
      setPhase("leave");
      root.classList.add("intro-done");
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, 1150);
    const gone = window.setTimeout(() => setPhase("gone"), 2200);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
    };
  }, []);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: GATE_SCRIPT }} />
      {phase !== "gone" && (
        <div className={`intro${phase === "leave" ? " is-leaving" : ""}`} aria-hidden="true">
          {/* columns lift away from the centre outwards, like a stepped curtain */}
          {Array.from({ length: COLS }, (_, i) => (
            <span key={i} className="intro__col" style={{ "--c": Math.abs(i - (COLS - 1) / 2), "--x": i } as React.CSSProperties} />
          ))}
          <div className="intro__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="intro__mark" src={asset("/logo-mark-white.png")} alt="" width={64} height={65} />
            <span className="intro__name">
              {"BLUEMOON".split("").map((ch, i) => (
                <span key={i} style={{ "--i": i } as React.CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
            <span className="intro__tag">Engineering (Private) Limited</span>
            <span className="intro__bar" />
          </div>
        </div>
      )}
    </>
  );
}
