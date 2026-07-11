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
