"use client";

import { useWeb3Form, WEB3FORMS_KEY } from "@/lib/useWeb3Form";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

/** Short enquiry form for the home page; sends through Web3Forms like the other forms. */
export function EnquiryForm() {
  const { errors, feedback, submitting, onSubmit, clear } = useWeb3Form("enquiry");

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New website enquiry | Bluemoon Engineering website" />
      <input type="hidden" name="from_name" value={`Website enquiry | ${siteConfig.companyName}`} />
      <input type="checkbox" name="botcheck" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="enquiry__grid">
        <div className="field field--full">
          <label htmlFor="enq-name">Full name</label>
          <input id="enq-name" name="fullName" autoComplete="name" required aria-invalid={!!errors.fullName} aria-describedby="enq-name-error" onInput={() => clear("fullName")} />
          <span className="field__error" id="enq-name-error" aria-live="polite">{errors.fullName}</span>
        </div>
        <div className="field">
          <label htmlFor="enq-email">Email</label>
          <input id="enq-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby="enq-email-error" onInput={() => clear("email")} />
          <span className="field__error" id="enq-email-error" aria-live="polite">{errors.email}</span>
        </div>
        <div className="field">
          <label htmlFor="enq-phone">Phone</label>
          <input id="enq-phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby="enq-phone-error" onInput={() => clear("phone")} />
          <span className="field__error" id="enq-phone-error" aria-live="polite">{errors.phone}</span>
        </div>
        <div className="field field--full">
          <label htmlFor="enq-service">Service</label>
          <select id="enq-service" name="service" defaultValue={services[0].title}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="enq-message">Project details</label>
          <textarea id="enq-message" name="message" rows={4} required placeholder="Location, size and timeline help us reply faster." aria-invalid={!!errors.message} aria-describedby="enq-message-error" onInput={() => clear("message")} />
          <span className="field__error" id="enq-message-error" aria-live="polite">{errors.message}</span>
        </div>
      </div>
      <Button type="submit" variant="secondary" size="lg" className="enquiry__submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
      <p className={`form-feedback${feedback.tone ? ` is-${feedback.tone}` : ""}`} role="status" aria-live="polite">
        {feedback.msg}
      </p>
    </form>
  );
}
