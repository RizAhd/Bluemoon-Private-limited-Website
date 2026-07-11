/** Client-side project filtering by category/status tag (show/hide, no re-render). */
export function initFilters(): void {
  const bar = document.querySelector<HTMLElement>("[data-project-filters]");
  const grid = document.querySelector<HTMLElement>("#projects-grid");
  if (!bar || !grid) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-tags]"));

  bar.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLElement>("[data-filter]");
    if (!button) return;

    bar.querySelectorAll("[data-filter]").forEach((pill) => pill.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter ?? "all";
    let visible = 0;
    cards.forEach((card) => {
      const tags = (card.dataset.tags ?? "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });

    const empty = grid.parentElement?.querySelector<HTMLElement>("[data-projects-empty]");
    if (empty) empty.hidden = visible !== 0;
  });
}
