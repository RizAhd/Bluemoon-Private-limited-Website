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
  whatsapp:
    '<path d="M3.6 20.4 5 16.3A8.6 8.6 0 1 1 8 19.3Z"/><path d="M9.3 8.4c.3-.4.6-.5.9-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.1-.1.3 0 .5a7 7 0 0 0 2.5 2.4c.2.1.4.1.5 0l.6-.6c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.2.7-.6.9-.7.3-1.6.4-2.7 0a8.3 8.3 0 0 1-4.6-4.6c-.4-1.1-.3-2 0-2.6Z"/>',
  mail: '<path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/>',
  map: '<path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2.3"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10"/><path d="M12 3 3 8h18l-9-5Z"/>',
  health: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M12 8v8M8 12h8"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9.5 20v-5.5h5V20"/>',
  home: '<path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>',
};

export function Icon({ name, className }: { name: string; className?: string }) {
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
