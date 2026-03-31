import {
  deleteSubmission,
  exportAllSubmissions,
  getSubmissions,
  toggleReviewed,
} from "./storage.js";

const fieldMap = {
  contact: [
    ["Phone", "phone"],
    ["Email", "email"],
    ["Subject", "subject"],
    ["Message", "message"],
  ],
  quote: [
    ["Phone", "phone"],
    ["Email", "email"],
    ["Project Type", "projectType"],
    ["Location", "location"],
    ["Estimated Budget", "estimatedBudget"],
    ["Preferred Start Date", "preferredStartDate"],
    ["Project Details", "projectDetails"],
  ],
};

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-LK", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

function renderOverview(contacts, quotes) {
  const container = document.getElementById("admin-overview");

  if (!container) {
    return;
  }

  const reviewedCount =
    contacts.filter((entry) => entry.reviewed).length + quotes.filter((entry) => entry.reviewed).length;

  container.innerHTML = `
    <article class="stat-card">
      <span class="stat-card__value">${contacts.length}</span>
      <p class="stat-card__label">Contact submissions saved locally</p>
    </article>
    <article class="stat-card">
      <span class="stat-card__value">${quotes.length}</span>
      <p class="stat-card__label">Quote requests saved locally</p>
    </article>
    <article class="stat-card">
      <span class="stat-card__value">${reviewedCount}</span>
      <p class="stat-card__label">Entries marked as reviewed</p>
    </article>
  `;
}

function renderList(containerId, type, entries) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  if (!entries.length) {
    container.innerHTML = `
      <div class="empty-state">
        No ${type === "contact" ? "contact submissions" : "quote requests"} have been saved in this browser yet.
      </div>
    `;
    return;
  }

  container.innerHTML = entries.map((entry) => entryMarkup(type, entry)).join("");
}

function entryMarkup(type, entry) {
  const rows = fieldMap[type]
    .map(
      ([label, key]) => `
        <div class="admin-entry__row">
          <span>${label}</span>
          <p>${escapeHtml(entry[key] || "-")}</p>
        </div>`
    )
    .join("");

  return `
    <article class="admin-entry">
      <div class="admin-entry__head">
        <div class="admin-entry__title">
          <strong>${escapeHtml(entry.fullName || "Unnamed Entry")}</strong>
          <span>${formatDate(entry.createdAt)}</span>
        </div>
        <div class="admin-entry__meta">
          <span class="chip">${type === "contact" ? "Contact Inquiry" : "Quote Request"}</span>
          <span class="chip ${entry.reviewed ? "chip--success" : "chip--muted"}">
            ${entry.reviewed ? "Reviewed" : "Pending Review"}
          </span>
        </div>
      </div>
      <div class="admin-entry__body">${rows}</div>
      <div class="admin-entry__actions">
        <button class="btn btn--ghost btn--small" type="button" data-admin-action="toggle" data-admin-type="${type}" data-admin-id="${entry.id}">
          ${entry.reviewed ? "Mark Pending" : "Mark Reviewed"}
        </button>
        <button class="btn btn--ghost btn--small" type="button" data-admin-action="delete" data-admin-type="${type}" data-admin-id="${entry.id}">
          Delete Entry
        </button>
      </div>
    </article>
  `;
}

function renderAll() {
  const contacts = getSubmissions("contact");
  const quotes = getSubmissions("quote");

  renderOverview(contacts, quotes);
  renderList("contact-admin-list", "contact", contacts);
  renderList("quote-admin-list", "quote", quotes);
}

function bindAdminActions() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-admin-action]");

    if (!button) {
      return;
    }

    const { adminAction, adminType, adminId } = button.dataset;

    if (adminAction === "delete") {
      const confirmed = window.confirm("Delete this locally stored entry?");

      if (!confirmed) {
        return;
      }

      deleteSubmission(adminType, adminId);
    }

    if (adminAction === "toggle") {
      toggleReviewed(adminType, adminId);
    }

    renderAll();
  });

  const exportButton = document.getElementById("export-admin-data");

  if (!exportButton) {
    return;
  }

  exportButton.addEventListener("click", () => {
    const payload = JSON.stringify(exportAllSubmissions(), null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStamp = new Date().toISOString().slice(0, 10);

    link.href = url;
    link.download = `bluemoon-local-submissions-${dateStamp}.json`;
    link.click();

    URL.revokeObjectURL(url);
  });
}

function initAdmin() {
  renderAll();
  bindAdminActions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAdmin);
} else {
  initAdmin();
}
