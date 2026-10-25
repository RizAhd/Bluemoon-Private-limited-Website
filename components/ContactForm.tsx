"use client";

import { useWeb3Form, WEB3FORMS_KEY } from "@/lib/useWeb3Form";
import { siteConfig } from "@/lib/site";
import { Roll } from "@/components/ui/Btn";

export function ContactForm() {
  const { errors, feedback, submitting, onSubmit, clear } = useWeb3Form("contact");

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="from_name" value={`Website contact | ${siteConfig.companyName}`} />
      <input type="checkbox" name="botcheck" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="fgrid fgrid--2">
        <div className="field field--full">
          <label htmlFor="contact-name">
            Full name <span className="req">*</span>
          </label>
          <input id="contact-name" name="fullName" type="text" autoComplete="name" minLength={3} required placeholder="Your name" aria-invalid={!!errors.fullName} aria-describedby="fullName-error" onInput={() => clear("fullName")} />
          <span className="field__error" id="fullName-error" aria-live="polite">{errors.fullName}</span>
        </div>
        <div className="field">
          <label htmlFor="contact-email">
            Email address <span className="req">*</span>
          </label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@email.com" aria-invalid={!!errors.email} aria-describedby="email-error" onInput={() => clear("email")} />
          <span className="field__error" id="email-error" aria-live="polite">{errors.email}</span>
        </div>
        <div className="field">
          <label htmlFor="contact-phone">
            Phone number <span className="req">*</span>
          </label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} required placeholder="077 000 0000" aria-invalid={!!errors.phone} aria-describedby="phone-error" onInput={() => clear("phone")} />
          <span className="field__error" id="phone-error" aria-live="polite">{errors.phone}</span>
        </div>
        <div className="field field--full">
          <label htmlFor="contact-subject">
            Subject <span className="req">*</span>
          </label>
          <input id="contact-subject" name="subject" type="text" minLength={4} required placeholder="What is it about?" aria-invalid={!!errors.subject} aria-describedby="subject-error" onInput={() => clear("subject")} />
          <span className="field__error" id="subject-error" aria-live="polite">{errors.subject}</span>
        </div>
        <div className="field field--full">
          <label htmlFor="contact-message">
            Message <span className="req">*</span>
          </label>
          <textarea id="contact-message" name="message" rows={5} minLength={20} required placeholder="Tell us about your project..." aria-invalid={!!errors.message} aria-describedby="message-error" onInput={() => clear("message")} />
          <span className="field__error" id="message-error" aria-live="polite">{errors.message}</span>
        </div>
      </div>
      <button type="submit" className="b b--primary b--block b--lg enquiry__submit" disabled={submitting}>
        <Roll text={submitting ? "Sending..." : "Send Message"} />
      </button>
      <p className={`form-feedback${feedback.tone ? ` is-${feedback.tone}` : ""}`} role="status" aria-live="polite">
        {feedback.msg}
      </p>
    </form>
  );
}
