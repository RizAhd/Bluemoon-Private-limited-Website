"use client";

import { useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const phonePattern = /^[0-9+\-()\s]{7,20}$/;
const emailPattern = /^\S+@\S+\.\S+$/;

type FormType = "contact" | "quote";

function validate(type: FormType, p: Record<string, string>): { field: string; message: string }[] {
  const errors: { field: string; message: string }[] = [];
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

export function useWeb3Form(type: FormType) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<{ msg: string; tone: "" | "success" | "error" }>({
    msg: "",
    tone: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const clear = (name: string) =>
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const p: Record<string, string> = {};
    for (const [k, v] of data.entries()) p[k] = String(v).trim();

    if (p.botcheck) return; // honeypot

    const errs = validate(type, p);
    if (errs.length) {
      const map: Record<string, string> = {};
      errs.forEach((er) => (map[er.field] = er.message));
      setErrors(map);
      setFeedback({ msg: "Please correct the highlighted fields.", tone: "error" });
      (form.elements.namedItem(errs[0].field) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setSubmitting(true);
    setFeedback({ msg: "", tone: "" });
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        form.reset();
        setFeedback({
          msg:
            type === "contact"
              ? "Thank you — your message has been sent. We'll be in touch shortly."
              : "Thank you — your quote request has been sent. Our team will respond soon.",
          tone: "success",
        });
      } else {
        setFeedback({
          msg: json.message || "Something went wrong. Please call or email us instead.",
          tone: "error",
        });
      }
    } catch {
      setFeedback({ msg: "Network error. Please call or email us instead.", tone: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return { errors, feedback, submitting, onSubmit, clear };
}

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
