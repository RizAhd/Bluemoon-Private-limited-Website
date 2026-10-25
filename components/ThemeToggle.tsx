"use client";

import { useEffect, useState } from "react";

export const THEME_KEY = "bm-theme";
const EVENT = "bm-theme-change";

// Runs before first paint so a saved dark choice never flashes light first.
export const THEME_SCRIPT = `(function(){try{if(localStorage.getItem('${THEME_KEY}')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}})();`;

function applyTheme(dark: boolean) {
  const root = document.documentElement;
  if (dark) root.dataset.theme = "dark";
  else delete root.dataset.theme;
  try {
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

function useDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => setDark(document.documentElement.dataset.theme === "dark");
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);
  return dark;
}

const Sun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
);
const Moon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);

/** Desktop: a small pill switch with a sliding knob (sun = light, moon = dark). */
export function ThemeToggle({ className }: { className?: string }) {
  const dark = useDark();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`tswitch${dark ? " is-dark" : ""}${className ? ` ${className}` : ""}`}
      onClick={() => applyTheme(!dark)}
    >
      <span className="tswitch__icon tswitch__icon--sun">
        <Sun />
      </span>
      <span className="tswitch__icon tswitch__icon--moon">
        <Moon />
      </span>
      <span className="tswitch__knob" aria-hidden="true" />
    </button>
  );
}

/** Mobile menu: a two-option Light / Dark control. */
export function ThemeSegmented({ tabIndex }: { tabIndex?: number }) {
  const dark = useDark();
  return (
    <div className="tseg" role="radiogroup" aria-label="Theme">
      <button type="button" role="radio" aria-checked={!dark} className={!dark ? "is-on" : undefined} onClick={() => applyTheme(false)} tabIndex={tabIndex}>
        <Sun />
        Light
      </button>
      <button type="button" role="radio" aria-checked={dark} className={dark ? "is-on" : undefined} onClick={() => applyTheme(true)} tabIndex={tabIndex}>
        <Moon />
        Dark
      </button>
    </div>
  );
}
