"use client";

import { useEffect, useRef } from "react";
import { useWeb3Form, WEB3FORMS_KEY } from "@/lib/useWeb3Form";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "Building Construction",
  "Civil / Infrastructure Works",
  "Water Supply & Drainage",
  "Renovation & Repairs",
  "Finishing Works",
  "Sanitation / Toilet Units",
  "Retaining Wall / Site Works",
  "Government / Institutional Project",
  "Other",
];
const budgets = [
  "Below Rs 1 Million",
  "Rs 1M – 5M",
  "Rs 5M – 15M",
  "Rs 15M – 30M",
  "Above Rs 30 Million",
];

export function QuoteForm() {
  const { errors, feedback, submitting, onSubmit, clear } = useWeb3Form("quote");
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      const t = new Date();
      dateRef.current.min = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(
        t.getDate(),
      ).padStart(2, "0")}`;
    }
  }, []);

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New quote request — Bluemoon Engineering website" />
      <input type="hidden" name="from_name" value={`Website quote — ${siteConfig.companyName}`} />
      <input
        type="checkbox"
        name="botcheck"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-name">
            Full Name <span className="req">*</span>
          </label>
          <input id="quote-name" name="fullName" type="text" autoComplete="name" minLength={3} required aria-invalid={!!errors.fullName} aria-describedby="q-fullName-error" onInput={() => clear("fullName")} />
          <span className="field__error" id="q-fullName-error" aria-live="polite">{errors.fullName}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-phone">
            Phone <span className="req">*</span>
          </label>
          <input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} required aria-invalid={!!errors.phone} aria-describedby="q-phone-error" onInput={() => clear("phone")} />
          <span className="field__error" id="q-phone-error" aria-live="polite">{errors.phone}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-email">
            Email <span className="req">*</span>
          </label>
          <input id="quote-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby="q-email-error" onInput={() => clear("email")} />
          <span className="field__error" id="q-email-error" aria-live="polite">{errors.email}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-type">
            Project Type <span className="req">*</span>
          </label>
          <select id="quote-type" name="projectType" required aria-invalid={!!errors.projectType} aria-describedby="q-type-error" onChange={() => clear("projectType")} defaultValue="">
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <span className="field__error" id="q-type-error" aria-live="polite">{errors.projectType}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-location">
            Location <span className="req">*</span>
          </label>
          <input id="quote-location" name="location" type="text" minLength={3} placeholder="Welimada, Badulla, Bandarawela…" required aria-invalid={!!errors.location} aria-describedby="q-loc-error" onInput={() => clear("location")} />
          <span className="field__error" id="q-loc-error" aria-live="polite">{errors.location}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-budget">
            Estimated Budget <span className="req">*</span>
          </label>
          <select id="quote-budget" name="estimatedBudget" required aria-invalid={!!errors.estimatedBudget} aria-describedby="q-budget-error" onChange={() => clear("estimatedBudget")} defaultValue="">
            <option value="">Select a budget range</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <span className="field__error" id="q-budget-error" aria-live="polite">{errors.estimatedBudget}</span>
        </div>
        <div className="field">
          <label htmlFor="quote-start-date">
            Preferred Start Date <span className="req">*</span>
          </label>
          <input id="quote-start-date" name="preferredStartDate" type="date" ref={dateRef} required aria-invalid={!!errors.preferredStartDate} aria-describedby="q-date-error" onInput={() => clear("preferredStartDate")} />
          <span className="field__error" id="q-date-error" aria-live="polite">{errors.preferredStartDate}</span>
        </div>
        <div className="field field--full">
          <label htmlFor="quote-details">
            Project Details <span className="req">*</span>
          </label>
          <textarea id="quote-details" name="projectDetails" rows={6} minLength={20} required aria-invalid={!!errors.projectDetails} aria-describedby="q-details-error" onInput={() => clear("projectDetails")} />
          <span className="field__error" id="q-details-error" aria-live="polite">{errors.projectDetails}</span>
        </div>
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Submit Quote Request"}
      </Button>
      <p className={`form-feedback${feedback.tone ? ` is-${feedback.tone}` : ""}`} role="status" aria-live="polite">
        {feedback.msg}
      </p>
    </form>
  );
}
