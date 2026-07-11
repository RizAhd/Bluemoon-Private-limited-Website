"use client";

import { useWeb3Form, WEB3FORMS_KEY } from "@/lib/useWeb3Form";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { errors, feedback, submitting, onSubmit, clear } = useWeb3Form("contact");

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="from_name" value={`Website contact — ${siteConfig.companyName}`} />
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
          <label htmlFor="contact-name">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="contact-name"
            name="fullName"
            type="text"
            autoComplete="name"
            minLength={3}
            required
            aria-invalid={!!errors.fullName}
            aria-describedby="fullName-error"
            onInput={() => clear("fullName")}
          />
          <span className="field__error" id="fullName-error" aria-live="polite">
            {errors.fullName}
          </span>
        </div>
        <div className="field">
          <label htmlFor="contact-phone">
            Phone <span className="req">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            required
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            onInput={() => clear("phone")}
          />
          <span className="field__error" id="phone-error" aria-live="polite">
            {errors.phone}
          </span>
        </div>
        <div className="field">
          <label htmlFor="contact-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            onInput={() => clear("email")}
          />
          <span className="field__error" id="email-error" aria-live="polite">
            {errors.email}
          </span>
        </div>
        <div className="field">
          <label htmlFor="contact-subject">
            Subject <span className="req">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            minLength={4}
            required
            aria-invalid={!!errors.subject}
            aria-describedby="subject-error"
            onInput={() => clear("subject")}
          />
          <span className="field__error" id="subject-error" aria-live="polite">
            {errors.subject}
          </span>
        </div>
        <div className="field field--full">
          <label htmlFor="contact-message">
            Message <span className="req">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            minLength={20}
            required
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
            onInput={() => clear("message")}
          />
          <span className="field__error" id="message-error" aria-live="polite">
            {errors.message}
          </span>
        </div>
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}
      </Button>
      <p
        className={`form-feedback${feedback.tone ? ` is-${feedback.tone}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {feedback.msg}
      </p>
    </form>
  );
}
