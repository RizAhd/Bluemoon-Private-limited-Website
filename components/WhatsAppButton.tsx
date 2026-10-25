"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";

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
      <Icon name="whatsapp" />
    </a>
  );
}
