/** Mobile navigation toggle + sticky-header state. Progressive enhancement. */
export function initNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const header = document.querySelector<HTMLElement>(".site-header");
  const panel = document.querySelector<HTMLElement>(".nav-panel");

  if (toggle && panel) {
    const close = () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    document.addEventListener("click", (event) => {
      if (!document.body.classList.contains("nav-open")) return;
      const target = event.target as Element | null;
      if (target && !target.closest(".site-header")) close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) close();
    });
  }

  if (header) {
    const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
}
