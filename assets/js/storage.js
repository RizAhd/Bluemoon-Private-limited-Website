const STORAGE_KEYS = {
  contact: "bluemoon_contact_submissions",
  quote: "bluemoon_quote_requests",
};

function getStorageKey(type) {
  return STORAGE_KEYS[type];
}

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function readCollection(type) {
  const key = getStorageKey(type);

  if (!key) {
    return [];
  }

  return safeParse(window.localStorage.getItem(key)) || [];
}

function writeCollection(type, collection) {
  const key = getStorageKey(type);

  if (!key) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(collection));
}

function generateId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `bm-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function addSubmission(type, payload) {
  const collection = readCollection(type);
  const entry = {
    id: generateId(),
    reviewed: false,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  collection.unshift(entry);
  writeCollection(type, collection);
  return entry;
}

export function getSubmissions(type) {
  return readCollection(type);
}

export function toggleReviewed(type, id) {
  const updated = readCollection(type).map((entry) =>
    entry.id === id ? { ...entry, reviewed: !entry.reviewed } : entry
  );

  writeCollection(type, updated);
  return updated;
}

export function deleteSubmission(type, id) {
  const updated = readCollection(type).filter((entry) => entry.id !== id);
  writeCollection(type, updated);
  return updated;
}

export function exportAllSubmissions() {
  return {
    exportedAt: new Date().toISOString(),
    contactSubmissions: readCollection("contact"),
    quoteRequests: readCollection("quote"),
  };
}
