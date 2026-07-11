/**
 * Tasteful scroll/intro animation via GSAP (bundled from npm — no CDN, no SRI risk).
 * Fully gated on prefers-reduced-motion: if the user prefers reduced motion we
 * do nothing here, and CSS keeps all [data-reveal] content visible.
 */
export async function initMotion(): Promise<void> {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  // Hero intro
  const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
  if (heroItems.length) {
    gsap.from(heroItems, {
      y: 26,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }

  // Scroll reveals
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });

  // Staggered grids
  gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((grid) => {
    const cards = Array.from(grid.children);
    if (!cards.length) return;
    gsap.from(cards, {
      y: 24,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.07,
      ease: "power2.out",
      scrollTrigger: { trigger: grid, start: "top 85%", once: true },
    });
  });

  // Animated counters
  gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.counter) || 0;
    const holder = { v: 0 };
    gsap.to(holder, {
      v: target,
      duration: 1.4,
      ease: "power2.out",
      snap: { v: 1 },
      onUpdate: () => {
        el.textContent = String(Math.round(holder.v));
      },
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
}
