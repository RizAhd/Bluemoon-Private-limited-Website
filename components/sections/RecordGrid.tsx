"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { trackRecord } from "@/lib/trackRecord";

const categoryIcon: Record<string, string> = {
  Education: "school",
  Health: "health",
  Commercial: "store",
  Renovation: "home",
  Building: "building",
  Finishing: "spark",
  "Civil Works": "wall",
};

const SLOTS = 6;
const SWAP_MS = 2600;

/**
 * Completed contracts in a fixed grid. Every few seconds one card swaps in place
 * for the next contract on the record, so the whole list cycles without any
 * sideways movement. Pauses while hovered or off screen.
 */
export function RecordGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [slots, setSlots] = useState(() => Array.from({ length: SLOTS }, (_, i) => i));
  const [next, setNext] = useState(SLOTS);
  const [turn, setTurn] = useState(0);
  const [running, setRunning] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running || hover) return;
    const t = window.setTimeout(() => {
      // a scattered order, so neighbouring cards do not change one after another
      const slot = [0, 4, 2, 5, 1, 3][turn % SLOTS];
      setSlots((s) => s.map((v, i) => (i === slot ? next % trackRecord.length : v)));
      setNext((n) => n + 1);
      setTurn((x) => x + 1);
    }, SWAP_MS);
    return () => window.clearTimeout(t);
  }, [running, hover, turn, next]);

  return (
    <div className="rgrid" ref={ref} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {slots.map((idx, slot) => {
        const c = trackRecord[idx];
        return (
          <article className="rcard" key={`${slot}-${idx}`} aria-live="off">
            <p className="rcard__tag">
              <Icon name="check" />
              Completed contract
            </p>
            <p className="rcard__project">{c.project}</p>
            <div className="rcard__foot">
              <span className="rcard__avatar">
                <Icon name={categoryIcon[c.category] ?? "building"} />
              </span>
              <span>
                <strong>{c.client}</strong>
                <span>
                  {c.category} · {c.year}
                </span>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
