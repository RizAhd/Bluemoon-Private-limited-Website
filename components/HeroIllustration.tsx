"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

const NAVY = "#0b1f4d";
const ROYAL = "#1d4ed8";
const SKY = "#60a5fa";
const SOFT = "#dbeafe";
const MIST = "#eef3fd";

/**
 * Line illustration of a hill-country build: a concrete frame going up,
 * scaffolding, a tower crane lifting a beam, and a crescent moon for the
 * Bluemoon name. Strokes draw in on load; the hoisted beam sways gently.
 */
export function HeroIllustration({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Draw a stroke in, starting after `delay` seconds.
  const draw = (delay: number, duration = 0.9) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] }, opacity: { delay, duration: 0.01 } } as Transition,
        };

  // Fade a filled shape in.
  const fill = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay, duration: 0.6, ease: "easeOut" } as Transition,
        };

  const line = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <svg
      viewBox="0 0 520 340"
      className={className}
      role="img"
      aria-label="Illustration of a building frame under construction with a tower crane in the hills"
    >
      <defs>
        <mask id="moon-cut">
          <rect width="520" height="340" fill="white" />
          <circle cx="104" cy="68" r="22" fill="black" />
        </mask>
        <linearGradient id="edge-fade-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.18" stopColor="white" stopOpacity="1" />
          <stop offset="0.82" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="edge-fade">
          <rect width="520" height="340" fill="url(#edge-fade-grad)" />
        </mask>
      </defs>

      {/* crescent moon */}
      <motion.circle cx="92" cy="78" r="26" fill={SKY} mask="url(#moon-cut)" {...fill(0.1)} />

      {/* hills, fading out at both sides */}
      <g mask="url(#edge-fade)">
        <motion.path
          d="M0 252 C70 207 130 217 190 192 C250 167 300 172 360 202 C420 230 470 217 520 207 L520 302 L0 302 Z"
          fill={SOFT}
          {...fill(0.2)}
        />
        <motion.path
          d="M0 277 C90 252 170 264 260 250 C350 236 430 257 520 247 L520 302 L0 302 Z"
          fill={MIST}
          {...fill(0.35)}
        />
      </g>

      {/* infill panels on the finished floors */}
      <motion.g fill={SOFT} {...fill(1.6)}>
        <rect x="174" y="254" width="42" height="42" rx="2" />
        <rect x="224" y="254" width="42" height="42" rx="2" />
        <rect x="274" y="254" width="42" height="42" rx="2" />
        <rect x="174" y="204" width="42" height="42" rx="2" />
        <rect x="224" y="204" width="42" height="42" rx="2" />
      </motion.g>

      {/* ground */}
      <motion.path d="M60 302 H460" stroke={NAVY} strokeWidth="3" {...line} {...draw(0.3, 0.8)} />

      {/* concrete frame: columns then slabs */}
      <g stroke={NAVY} strokeWidth="6" {...line}>
        {[170, 220, 270, 320].map((x, i) => (
          <motion.path key={x} d={`M${x} 302 V150`} {...draw(0.6 + i * 0.08, 0.7)} />
        ))}
        {[250, 200, 150].map((y, i) => (
          <motion.path key={y} d={`M158 ${y} H332`} {...draw(1 + i * 0.12, 0.6)} />
        ))}
      </g>

      {/* next floor going up: columns and rebar stubs */}
      <g stroke={ROYAL} strokeWidth="4" {...line}>
        <motion.path d="M270 150 V112" {...draw(1.5, 0.4)} />
        <motion.path d="M320 150 V112" {...draw(1.55, 0.4)} />
        <motion.path d="M170 150 V136" {...draw(1.6, 0.3)} />
        <motion.path d="M220 150 V136" {...draw(1.65, 0.3)} />
      </g>

      {/* scaffold */}
      <g stroke={ROYAL} strokeWidth="1.6" {...line}>
        <motion.path d="M340 302 V140 M354 302 V140" {...draw(1.3, 0.7)} />
        <motion.path
          d="M340 277 H354 M340 252 H354 M340 227 H354 M340 202 H354 M340 177 H354 M340 152 H354"
          {...draw(1.6, 0.6)}
        />
        <motion.path d="M340 277 L354 252 M340 227 L354 202 M340 177 L354 152" {...draw(1.8, 0.6)} />
      </g>

      {/* tower crane: mast lattice, jib, ties, counterweight */}
      <g stroke={NAVY} strokeWidth="2.4" {...line}>
        <motion.path d="M410 302 V70 M426 302 V70" {...draw(0.8, 1)} />
        <motion.path
          d="M410 300 L426 276 L410 252 L426 228 L410 204 L426 180 L410 156 L426 132 L410 108 L426 84"
          strokeWidth="1.4"
          {...draw(1.1, 1)}
        />
        <motion.path d="M236 66 H486" strokeWidth="3" {...draw(1.4, 0.7)} />
        <motion.path d="M418 66 V40 M418 40 L242 66 M418 40 L484 66" strokeWidth="1.4" {...draw(1.7, 0.6)} />
      </g>
      <motion.rect x="404" y="70" width="28" height="16" rx="2" fill={NAVY} {...fill(1.6)} />
      <motion.rect x="466" y="68" width="20" height="18" rx="2" fill={ROYAL} {...fill(1.8)} />

      {/* hoisted beam on the hook, swaying */}
      <motion.g
        style={{ originX: "290px", originY: "70px" }}
        animate={reduce ? undefined : { rotate: [-2, 2, -2] }}
        transition={reduce ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2.4 }}
      >
        <motion.path d="M290 68 V112" stroke={NAVY} strokeWidth="1.4" {...line} {...draw(2, 0.5)} />
        <motion.path d="M290 112 v6 a4 4 0 0 1 -6 3" stroke={NAVY} strokeWidth="2" {...line} {...draw(2.3, 0.2)} />
        <motion.rect x="262" y="121" width="56" height="8" rx="1.5" fill={ROYAL} {...fill(2.4)} />
      </motion.g>
      <motion.rect x="282" y="62" width="16" height="8" rx="1.5" fill={NAVY} {...fill(1.9)} />
    </svg>
  );
}
