"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

// Contact and Quote already offer WhatsApp in the page, next to their forms.
const HIDDEN_ON = ["/contact", "/quote"];

/** Floating WhatsApp shortcut, bottom-right on every other page. */
export function WhatsAppButton() {
  const pathname = usePathname();
  const [away, setAway] = useState(false);

  // Slide out of the way while scrolling down so it never covers content; back on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 8) {
        setAway(y > last && y > 200);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;
  return (
    <a
      className={`wa-fab${away ? " is-away" : ""}`}
      href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Hello Bluemoon Engineering, I would like to discuss a construction project.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bluemoon Engineering on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.6a9.4 9.4 0 0 0-8.1 14.2L2.6 21.4l4.7-1.2A9.4 9.4 0 1 0 12 2.6Zm0 1.7a7.7 7.7 0 1 1-3.9 14.3l-.3-.2-2.8.7.8-2.7-.2-.3A7.7 7.7 0 0 1 12 4.3Z"
        />
        <path
          fill="currentColor"
          d="M9.1 7.6c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.1.7l-.5.6c-.1.1-.2.4 0 .6.7 1.1 1.6 2 2.7 2.6.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.6v.5c0 .4-.2.8-.7 1-.7.4-1.7.5-2.9 0a9.3 9.3 0 0 1-5.1-5.1c-.4-1.2-.3-2.2.1-2.9Z"
        />
      </svg>
    </a>
  );
}
