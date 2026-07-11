/** Accessible gallery lightbox: focus trap while open, focus restore on close. */
export function initLightbox(): void {
  const grid = document.querySelector("#gallery-grid");
  const lightbox = document.querySelector<HTMLElement>("#gallery-lightbox");
  if (!grid || !lightbox) return;

  const image = lightbox.querySelector<HTMLImageElement>("#lightbox-image");
  const title = lightbox.querySelector("#lightbox-title");
  const category = lightbox.querySelector("#lightbox-category");
  const closeButtons = lightbox.querySelectorAll<HTMLElement>("[data-lightbox-close]");
  let lastFocused: HTMLElement | null = null;

  const focusable = () =>
    Array.from(
      lightbox.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);

  const open = (trigger: HTMLElement) => {
    lastFocused = trigger;
    if (image) {
      image.src = trigger.dataset.img ?? "";
      image.alt = trigger.dataset.alt ?? "";
    }
    if (title) title.textContent = trigger.dataset.title ?? "";
    if (category) category.textContent = trigger.dataset.category ?? "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightbox.querySelector<HTMLElement>(".lightbox__close")?.focus();
  };

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocused?.focus();
  };

  grid.addEventListener("click", (event) => {
    const trigger = (event.target as Element).closest<HTMLElement>("[data-gallery-item]");
    if (trigger) open(trigger);
  });

  closeButtons.forEach((btn) => btn.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key === "Tab") {
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}
