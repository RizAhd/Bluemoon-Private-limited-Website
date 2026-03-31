import { addSubmission } from "./storage.js";

const phonePattern = /^[0-9+\-()\s]{7,20}$/;

function initForms() {
  document.querySelectorAll("[data-storage-form]").forEach((form) => {
    bindFieldReset(form);
    form.addEventListener("submit", (event) => handleSubmit(event, form));
  });
}

function bindFieldReset(form) {
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";

    field.addEventListener(eventName, () => {
      field.removeAttribute("aria-invalid");
      setFeedback(form, "");
    });
  });
}

function normalizePayload(form) {
  return Object.fromEntries(
    Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value).trim()])
  );
}

function validatePayload(type, payload) {
  const errors = [];

  if ((payload.fullName || "").length < 3) {
    errors.push({ field: "fullName", message: "Please enter a valid full name." });
  }

  if (!phonePattern.test(payload.phone || "")) {
    errors.push({ field: "phone", message: "Please enter a valid phone number." });
  }

  if (!/\S+@\S+\.\S+/.test(payload.email || "")) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (type === "contact") {
    if ((payload.subject || "").length < 4) {
      errors.push({ field: "subject", message: "Please provide a clear subject." });
    }

    if ((payload.message || "").length < 20) {
      errors.push({ field: "message", message: "Please enter at least 20 characters in your message." });
    }
  }

  if (type === "quote") {
    if (!payload.projectType) {
      errors.push({ field: "projectType", message: "Please select a project type." });
    }

    if ((payload.location || "").length < 3) {
      errors.push({ field: "location", message: "Please enter the project location." });
    }

    if (!payload.estimatedBudget) {
      errors.push({ field: "estimatedBudget", message: "Please choose an estimated budget range." });
    }

    if (!payload.preferredStartDate) {
      errors.push({ field: "preferredStartDate", message: "Please select a preferred start date." });
    } else {
      const today = new Date();
      const selectedDate = new Date(payload.preferredStartDate);
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        errors.push({ field: "preferredStartDate", message: "Preferred start date cannot be in the past." });
      }
    }

    if ((payload.projectDetails || "").length < 20) {
      errors.push({
        field: "projectDetails",
        message: "Please add a few more details about the project scope.",
      });
    }
  }

  return errors;
}

function setFeedback(form, message, tone = "") {
  const feedback = form.querySelector(".form-feedback");

  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  feedback.classList.remove("is-success", "is-error");

  if (tone) {
    feedback.classList.add(`is-${tone}`);
  }
}

function markInvalid(form, fieldName) {
  const field = form.elements.namedItem(fieldName);

  if (!field) {
    return;
  }

  field.setAttribute("aria-invalid", "true");
  field.focus();
}

function clearInvalid(form) {
  form.querySelectorAll("[aria-invalid='true']").forEach((field) => {
    field.removeAttribute("aria-invalid");
  });
}

function handleSubmit(event, form) {
  event.preventDefault();
  clearInvalid(form);

  const type = form.dataset.formType;
  const payload = normalizePayload(form);
  const errors = validatePayload(type, payload);

  if (errors.length) {
    const firstError = errors[0];
    markInvalid(form, firstError.field);
    setFeedback(form, firstError.message, "error");
    return;
  }

  try {
    addSubmission(type, payload);
    form.reset();
    setFeedback(
      form,
      type === "contact"
        ? "Your inquiry has been saved on this browser. We are ready for the next step."
        : "Your quote request has been saved on this browser. We are ready to review it.",
      "success"
    );
  } catch {
    setFeedback(form, "Unable to save this submission on the current browser.", "error");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initForms);
} else {
  initForms();
}
