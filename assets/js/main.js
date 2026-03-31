import {
  contactHighlights,
  galleryImages,
  getIcon,
  navigation,
  processSteps,
  projects,
  reasons,
  sectors,
  services,
  siteConfig,
  stats,
  storyMoments,
  testimonials,
  values,
} from "./data.js";

const currentPage = document.body.dataset.page || "home";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const NAV_BREAKPOINT = 1040;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function init() {
  renderShell();
  renderPageContent();
  restoreHashTarget();
  bindNavigation();
  bindProjectFilters();
  bindGalleryLightbox();
  setCurrentYear();
  setQuoteDateMinimum();
  observeHeader();
  setupAnimations();
}

function renderShell() {
  const headerHost = $("[data-site-header]");
  const footerHost = $("[data-site-footer]");

  if (headerHost) {
    headerHost.innerHTML = `
      <header class="site-header">
        <div class="container">
          <div class="nav-shell">
            <div class="nav-ribbon">
              <div class="nav-utility">
                <div class="nav-utility__item">
                  <span class="nav-utility__label">Office</span>
                  <span>${siteConfig.address}</span>
                </div>
                <div class="nav-utility__item">
                  <span class="nav-utility__label">Hours</span>
                  <span>${siteConfig.hours}</span>
                </div>
                <div class="nav-utility__item">
                  <span class="nav-utility__label">Call</span>
                  <a href="tel:${siteConfig.phone.replace(/\s+/g, "")}">${siteConfig.phone}</a>
                </div>
              </div>
              <div class="nav-social" aria-label="Social links">
                ${siteConfig.socialLinks
                  .map(
                    (link) => `
                      <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="nav-main">
              <a class="brand brand--header" href="index.html" aria-label="${siteConfig.companyName} home">
                <img src="assets/images/logo-mark.svg" alt="">
                <span class="brand__text brand__text--header">
                  <span class="brand__meta">Private Limited</span>
                  <strong>${siteConfig.shortName}</strong>
                  <span class="brand__caption">Residential, commercial, and finish-focused construction.</span>
                </span>
              </a>
              <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">
                <span class="nav-toggle__line"></span>
              </button>
              <div class="nav-panel">
                <nav class="site-nav" id="site-nav" aria-label="Primary">
                  ${navigation
                    .map(
                      (item) => `
                        <a href="${item.href}" class="${item.page === currentPage ? "is-active" : ""}">
                          ${item.label}
                        </a>`
                    )
                    .join("")}
                </nav>
                <div class="nav-actions">
                  <a class="nav-contact" href="mailto:${siteConfig.email}">${siteConfig.email}</a>
                  <a class="btn btn--primary nav-cta" href="quote.html">Start a Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  if (footerHost) {
    const quickLinks = [...navigation, { label: "Local Admin", href: "admin.html", page: "admin" }];
    const serviceLinks = services.slice(0, 4);

    footerHost.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="brand" href="index.html" aria-label="${siteConfig.companyName} home">
                <img src="assets/images/logo-mark.svg" alt="">
                <span class="brand__text">
                  <strong>${siteConfig.shortName}</strong>
                  <small>Private Limited</small>
                </span>
              </a>
              <p>${siteConfig.description}</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul class="footer-links">
                ${quickLinks
                  .map(
                    (item) => `
                      <li><a href="${item.href}">${item.label}</a></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul class="footer-links">
                ${serviceLinks
                  .map(
                    (service) => `
                      <li><a href="services.html#${slugify(service.title)}">${service.title}</a></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <ul class="footer-contact">
                <li><a href="tel:${siteConfig.phone.replace(/\s+/g, "")}">${siteConfig.phone}</a></li>
                <li><a href="mailto:${siteConfig.email}">${siteConfig.email}</a></li>
                <li><span>${siteConfig.address}</span></li>
                <li><span>${siteConfig.hours}</span></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; <span data-current-year></span> ${siteConfig.companyName}. All rights reserved.</p>
            <div class="footer-social">
              ${siteConfig.socialLinks
                .map(
                  (link) => `
                    <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

function renderPageContent() {
  renderServices("#home-services-grid", services.filter((service) => service.featured));
  renderServices("#services-grid", services);
  renderProjects("#home-projects-grid", projects.filter((project) => project.featured));
  renderProjects("#projects-grid", projects);
  renderStats();
  renderReasons("#reasons-grid", reasons);
  renderReasons("#process-reasons-grid", reasons);
  renderReasons("#trust-grid", reasons);
  renderProcess("#process-grid", processSteps);
  renderProcess("#process-page-grid", processSteps);
  renderTestimonials();
  renderValues();
  renderStory();
  renderSectorChips();
  renderContactHighlights("#contact-highlights-grid", contactHighlights);
  renderContactHighlights("#contact-page-highlights", contactHighlights);
  renderGallery();
}

function renderServices(selector, items) {
  const container = $(selector);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (service) => `
        <article class="service-card" id="${slugify(service.title)}">
          <div class="service-card__icon">${getIcon(service.icon)}</div>
          <div class="service-card__body">
            <h3>${service.title}</h3>
            <p>${service.excerpt}</p>
            <ul class="feature-list">
              ${service.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>`
    )
    .join("");
}

function renderProjects(selector, items) {
  const container = $(selector);
  if (!container) {
    return;
  }

  container.innerHTML = items.map((project) => projectCard(project)).join("");
}

function projectCard(project) {
  return `
    <article class="project-card">
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.alt}" loading="lazy" decoding="async">
      </div>
      <div class="project-card__content">
        <div class="project-card__meta">
          <span class="badge">${titleCase(project.category)}</span>
          <span class="status-badge status-badge--${project.status}">${titleCase(project.status)}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-card__details">
          <span>${project.location}</span>
          <span>${project.year}</span>
        </div>
      </div>
    </article>
  `;
}

function renderStats() {
  const container = $("#stats-grid");
  if (!container) {
    return;
  }

  container.innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="stat-card__value"><span data-counter="${item.value}">0</span>${item.suffix}</span>
          <p class="stat-card__label">${item.label}</p>
        </article>`
    )
    .join("");
}

function renderReasons(selector, items) {
  const container = $(selector);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="reason-card">
          <div class="reason-card__icon">${getIcon(item.icon)}</div>
          <div class="reason-card__body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>`
    )
    .join("");
}

function renderProcess(selector, items) {
  const container = $(selector);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="process-step">
          <span class="process-step__number">${item.step}</span>
          <span class="process-step__eyebrow">${item.eyebrow}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>`
    )
    .join("");
}

function renderTestimonials() {
  const container = $("#testimonials-grid");
  if (!container) {
    return;
  }

  container.innerHTML = testimonials
    .map(
      (item) => `
        <article class="testimonial-card">
          <blockquote>"${item.quote}"</blockquote>
          <div class="testimonial-card__author">
            <strong>${item.name}</strong>
            <span>${item.role}</span>
          </div>
        </article>`
    )
    .join("");
}

function renderValues() {
  const container = $("#values-grid");
  if (!container) {
    return;
  }

  container.innerHTML = values
    .map(
      (value) => `
        <article class="service-card">
          <div class="value-card__icon">${getIcon(value.icon)}</div>
          <div class="service-card__body">
            <h3>${value.title}</h3>
            <p>${value.description}</p>
          </div>
        </article>`
    )
    .join("");
}

function renderStory() {
  const container = $("#story-grid");
  if (!container) {
    return;
  }

  container.innerHTML = storyMoments
    .map(
      (item) => `
        <article class="story-card">
          <span class="story-card__year">${item.year}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>`
    )
    .join("");
}

function renderSectorChips() {
  const container = $("#sector-strip");
  if (!container) {
    return;
  }

  container.innerHTML = sectors.map((sector) => `<span class="sector-chip">${sector}</span>`).join("");
}

function renderContactHighlights(selector, items) {
  const container = $(selector);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="contact-card">
          <div class="contact-card__icon">${getIcon(item.icon)}</div>
          <div class="contact-card__body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" ${item.link.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${item.linkLabel}</a>
          </div>
        </article>`
    )
    .join("");
}

function renderGallery() {
  const container = $("#gallery-grid");
  if (!container) {
    return;
  }

  container.innerHTML = galleryImages
    .map(
      (item) => `
        <button
          class="gallery-card"
          type="button"
          data-gallery-image="${item.image}"
          data-gallery-title="${item.title}"
          data-gallery-category="${item.category}"
          data-gallery-alt="${item.alt}">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
          <div class="gallery-card__meta">
            <h3>${item.title}</h3>
            <span>${item.category}</span>
          </div>
        </button>`
    )
    .join("");
}

function bindNavigation() {
  const toggle = $(".nav-toggle");
  const navPanel = $(".nav-panel");

  if (!toggle || !navPanel) {
    return;
  }

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", navPanel).forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("nav-open")) {
      return;
    }

    if (event.target instanceof Element && !event.target.closest(".nav-shell")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > NAV_BREAKPOINT) {
      closeNav();
    }
  });
}

function bindProjectFilters() {
  const filterBar = $("[data-project-filters]");
  const grid = $("#projects-grid");

  if (!filterBar || !grid) {
    return;
  }

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");

    if (!button) {
      return;
    }

    $$("[data-filter]", filterBar).forEach((pill) => pill.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    const filteredProjects =
      filter === "all"
        ? projects
        : projects.filter((project) => project.tags.includes(filter) || project.status === filter);

    renderProjects("#projects-grid", filteredProjects);
    animateGrid(grid, true);
  });
}

function bindGalleryLightbox() {
  const grid = $("#gallery-grid");
  const lightbox = $("#gallery-lightbox");

  if (!grid || !lightbox) {
    return;
  }

  const image = $("#lightbox-image");
  const title = $("#lightbox-title");
  const category = $("#lightbox-category");

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  grid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-gallery-image]");

    if (!trigger) {
      return;
    }

    image.src = trigger.dataset.galleryImage;
    image.alt = trigger.dataset.galleryAlt;
    title.textContent = trigger.dataset.galleryTitle;
    category.textContent = trigger.dataset.galleryCategory;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  $$("[data-lightbox-close]", lightbox).forEach((element) => {
    element.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function restoreHashTarget() {
  const scrollToHash = (behavior = "auto") => {
    if (!window.location.hash) {
      return;
    }

    const target = document.querySelector(window.location.hash);

    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    }
  };

  requestAnimationFrame(() => scrollToHash("auto"));
  window.addEventListener("hashchange", () => scrollToHash(reduceMotion ? "auto" : "smooth"));
}

function setCurrentYear() {
  $$("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function setQuoteDateMinimum() {
  const input = $("#quote-start-date");
  if (!input) {
    return;
  }

  const today = new Date();
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const day = `${today.getDate()}`.padStart(2, "0");
  input.min = `${today.getFullYear()}-${month}-${day}`;
}

function observeHeader() {
  const header = $(".site-header");
  if (!header) {
    return;
  }

  const toggleHeader = () => {
    header.classList.toggle("is-solid", window.scrollY > 24);
  };

  toggleHeader();
  window.addEventListener("scroll", toggleHeader, { passive: true });
}

function setupAnimations() {
  if (!window.gsap) {
    return;
  }

  const { gsap } = window;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  const header = $(".site-header");
  const heroItems = $$("[data-hero-item]");
  const heroVisual = $("[data-hero-visual]");

  const intro = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });

  if (header) {
    intro.from(header, { y: -30, autoAlpha: 0 });
  }

  if (heroItems.length) {
    intro.from(heroItems, { y: 28, autoAlpha: 0, stagger: 0.11 }, header ? "-=0.45" : 0);
  }

  if (heroVisual) {
    const children = heroVisual.children.length ? Array.from(heroVisual.children) : [heroVisual];
    intro.from(children, { y: 28, autoAlpha: 0, stagger: 0.1 }, "-=0.45");
  }

  if (reduceMotion || !window.ScrollTrigger) {
    return;
  }

  $$("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 30,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true,
      },
    });
  });

  $$(".card-grid, .process-grid, .story-grid, .gallery-grid").forEach((grid) => {
    animateGrid(grid);
  });

  $$("[data-counter]").forEach((counter) => {
    const target = Number(counter.dataset.counter) || 0;
    const holder = { value: 0 };

    gsap.to(holder, {
      value: target,
      duration: 1.5,
      ease: "power2.out",
      snap: { value: 1 },
      onUpdate: () => {
        counter.textContent = String(Math.round(holder.value));
      },
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
        once: true,
      },
    });
  });

  if (window.innerWidth > 960) {
    $$("[data-parallax]").forEach((element) => {
      gsap.to(element, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }
}

function animateGrid(grid, immediate = false) {
  if (!window.gsap || !grid || !grid.children.length) {
    return;
  }

  const cards = Array.from(grid.children);

  if (immediate || reduceMotion || !window.ScrollTrigger) {
    window.gsap.from(cards, {
      y: 24,
      autoAlpha: 0,
      duration: 0.65,
      stagger: 0.06,
      ease: "power2.out",
      clearProps: "all",
    });
    return;
  }

  if (grid.dataset.animated === "true") {
    return;
  }

  grid.dataset.animated = "true";

  window.gsap.from(cards, {
    y: 26,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: grid,
      start: "top 84%",
      once: true,
    },
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
