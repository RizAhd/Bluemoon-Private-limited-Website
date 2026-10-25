import * as React from "react";

const paths: Record<string, string> = {
  building:
    '<path d="M4 21V5.5L12 3v18"/><path d="M20 21V8l-8-2"/><path d="M7.5 8.5h1M7.5 12h1M7.5 15.5h1M15.5 10h1M15.5 13.5h1M15.5 17h1"/>',
  road: '<path d="M6 21 9 3M18 21 15 3"/><path d="M12 5v2M12 11v2M12 17v2"/>',
  water: '<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  spark:
    '<path d="m12 3 1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/>',
  sanitation: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v8"/><path d="M6 21h8"/><path d="M18 3v18"/>',
  wall: '<path d="M3 7h18M3 12h18M3 17h18"/><path d="M8 7v5M16 7v5M12 12v5"/>',
  shield:
    '<path d="M12 3 5 6v5c0 4.6 2.8 8.8 7 10 4.2-1.2 7-5.4 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7L15 10"/>',
  structure: '<path d="M4 20 12 4l8 16"/><path d="M7 14h10M9 10h6M6 18h12"/>',
  check: '<path d="m5 13 4 4L19 7"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.6 3a2 2 0 0 1-.6 1.9l-1.2 1.2a16 16 0 0 0 6.1 6.1l1.2-1.2a2 2 0 0 1 1.9-.6l3 .6A2 2 0 0 1 22 16.9Z"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z"/>',
  mail: '<path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/>',
  map: '<path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2.3"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10"/><path d="M12 3 3 8h18l-9-5Z"/>',
  health: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M12 8v8M8 12h8"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9.5 20v-5.5h5V20"/>',
  home: '<path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>',
  hardhat: '<path d="M3.5 17.5h17"/><path d="M5 17.5V15a7 7 0 0 1 14 0v2.5"/><path d="M10 8.5V6h4v2.5"/><path d="M12 8.5v4"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  clipboard: '<rect x="5" y="4.5" width="14" height="16.5" rx="2.5"/><path d="M9 4.5V3h6v1.5"/><path d="M8.5 11h7M8.5 15h5"/>',
  ruler: '<path d="m3 17 14-14 4 4L7 21Z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  chevDown: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  quote: '<path d="M10 7H6.5A2.5 2.5 0 0 0 4 9.5V13h5v5H4"/><path d="M20 7h-3.5A2.5 2.5 0 0 0 14 9.5V13h5v5h-5"/>',
};

// Brand marks drawn as solid shapes rather than outlines.
const solid: Record<string, string> = {
  whatsapp:
    '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41"/>',
};

export function Icon({ name, className }: { name: string; className?: string }) {
  if (solid[name]) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: solid[name] }} />
    );
  }
  const svg = paths[name] ?? paths.check;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
