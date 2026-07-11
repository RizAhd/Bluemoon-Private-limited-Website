/**
 * Contact & quote form handling.
 * - Accessible validation: per-field errors tied via aria-describedby, aria-invalid,
 *   all errors shown at once, focus moves to the first invalid field.
 * - Real lead delivery via Web3Forms (submissions email to bluemoonengi@gmail.com).
 * - Honeypot spam trap. Progressive: native `required` still guards if JS fails.
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const phonePattern = /^[0-9+\-()\s]{7,20}$/;
const emailPattern = /^\S+@\S+\.\S+$/;

interface FieldError {
  field: string;
  message: string;
}

export function initForms(): void {
  document.querySelectorAll<HTMLFormElement>("[data-web3-form]").forEach(setupForm);

  // Prevent past dates on any opted-in date field.
  document.querySelectorAll<HTMLInputElement>('input[type="date"][data-min-today]').forEach((input) => {
    const t = new Date();
    input.min = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(
      t.getDate(),
    ).padStart(2, "0")}`;
  });
}

function setupForm(form: HTMLFormElement): void {
  const type = form.dataset.formType ?? "contact";
  form.querySelectorAll<HTMLElement>("input, select, textarea").forEach((field) => {
    const name = (field as HTMLInputElement).name;
    const evt = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(evt, () => clearFieldError(form, name));
  });
  form.addEventListener("submit", (event) => handleSubmit(event, form, type));
}

function values(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const out: Record<string, string> = {};
  for (const [key, value] of data.entries()) out[key] = String(value).trim();
  return out;
}

function validate(type: string, p: Record<string, string>): FieldError[] {
  const errors: FieldError[] = [];
  if ((p.fullName ?? "").length < 3)
    errors.push({ field: "fullName", message: "Please enter your full name." });
  if (!phonePattern.test(p.phone ?? ""))
    errors.push({ field: "phone", message: "Please enter a valid phone number." });
  if (!emailPattern.test(p.email ?? ""))
    errors.push({ field: "email", message: "Please enter a valid email address." });

  if (type === "contact") {
    if ((p.subject ?? "").length < 4)
      errors.push({ field: "subject", message: "Please add a clear subject." });
    if ((p.message ?? "").length < 20)
      errors.push({ field: "message", message: "Please enter at least 20 characters." });
  }

  if (type === "quote") {
    if (!p.projectType)
      errors.push({ field: "projectType", message: "Please select a project type." });
    if ((p.location ?? "").length < 3)
      errors.push({ field: "location", message: "Please enter the project location." });
    if (!p.estimatedBudget)
      errors.push({ field: "estimatedBudget", message: "Please choose a budget range." });
    if (!p.preferredStartDate) {
      errors.push({ field: "preferredStartDate", message: "Please choose a start date." });
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const chosen = new Date(p.preferredStartDate);
      chosen.setHours(0, 0, 0, 0);
      if (chosen < today)
        errors.push({ field: "preferredStartDate", message: "Date cannot be in the past." });
    }
    if ((p.projectDetails ?? "").length < 20)
      errors.push({ field: "projectDetails", message: "Please add a few more details." });
  }

  return errors;
}

function setFieldError(form: HTMLFormElement, name: string, message: string): void {
  const field = form.elements.namedItem(name) as HTMLElement | null;
  const error = form.querySelector<HTMLElement>(`#${name}-error`);
  if (field) field.setAttribute("aria-invalid", "true");
  if (error) error.textContent = message;
}

function clearFieldError(form: HTMLFormElement, name: string): void {
  const field = form.elements.namedItem(name) as HTMLElement | null;
  const error = form.querySelector<HTMLElement>(`#${name}-error`);
  if (field) field.removeAttribute("aria-invalid");
  if (error) error.textContent = "";
}

function setFeedback(form: HTMLFormElement, message: string, tone: "" | "success" | "error"): void {
  const feedback = form.querySelector<HTMLElement>(".form-feedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.remove("is-success", "is-error");
  if (tone) feedback.classList.add(`is-${tone}`);
}

async function handleSubmit(event: Event, form: HTMLFormElement, type: string): Promise<void> {
  event.preventDefault();
  form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));

  const payload = values(form);

  // Honeypot: if filled, silently succeed (bot).
  if (payload.botcheck) return;

  const errors = validate(type, payload);
  if (errors.length) {
    errors.forEach((e) => setFieldError(form, e.field, e.message));
    setFeedback(form, "Please correct the highlighted fields.", "error");
    (form.elements.namedItem(errors[0].field) as HTMLElement | null)?.focus();
    return;
  }

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const original = button?.textContent ?? "";
  if (button) {
    button.disabled = true;
    button.textContent = "Sending…";
  }
  setFeedback(form, "", "");

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    const result = await response.json();
    if (response.ok && result.success) {
      form.reset();
      setFeedback(
        form,
        type === "contact"
          ? "Thank you — your message has been sent. We'll be in touch shortly."
          : "Thank you — your quote request has been sent. Our team will respond soon.",
        "success",
      );
    } else {
      setFeedback(
        form,
        result.message || "Something went wrong. Please call or email us instead.",
        "error",
      );
    }
  } catch {
    setFeedback(form, "Network error. Please call or email us instead.", "error");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = original;
    }
  }
}
