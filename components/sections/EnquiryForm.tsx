"use client";

import { useWeb3Form, WEB3FORMS_KEY } from "@/lib/useWeb3Form";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { Roll } from "@/components/ui/Btn";

/**
 * Short enquiry form, sent through Web3Forms like the other forms.
 * `labels` shows field labels; without it the placeholders lead and labels stay for screen readers.
 */
export function EnquiryForm({ labels = false, idPrefix = "enq", defaultService }: { labels?: boolean; idPrefix?: string; defaultService?: string }) {
  const { errors, feedback, submitting, onSubmit, clear } = useWeb3Form("enquiry");
  const lab = labels ? undefined : "sr-only";
  const id = (k: string) => `${idPrefix}-${k}`;

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New website enquiry | Bluemoon Engineering website" />
      <input type="hidden" name="from_name" value={`Website enquiry | ${siteConfig.companyName}`} />
      <input type="checkbox" name="botcheck" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="fgrid fgrid--2">
        <div className="field field--full">
          <label className={lab} htmlFor={id("name")}>Full name</label>
          <input id={id("name")} name="fullName" autoComplete="name" required placeholder="Full name" aria-invalid={!!errors.fullName} aria-describedby={id("name-error")} onInput={() => clear("fullName")} />
          <span className="field__error" id={id("name-error")} aria-live="polite">{errors.fullName}</span>
        </div>
        <div className="field">
          <label className={lab} htmlFor={id("email")}>Email address</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required placeholder="Enter your email" aria-invalid={!!errors.email} aria-describedby={id("email-error")} onInput={() => clear("email")} />
          <span className="field__error" id={id("email-error")} aria-live="polite">{errors.email}</span>
        </div>
        <div className="field">
          <label className={lab} htmlFor={id("phone")}>Phone number</label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" required placeholder="Enter your number" aria-invalid={!!errors.phone} aria-describedby={id("phone-error")} onInput={() => clear("phone")} />
          <span className="field__error" id={id("phone-error")} aria-live="polite">{errors.phone}</span>
        </div>
        <div className="field field--full">
          <label className={lab} htmlFor={id("service")}>Service needed</label>
          <select id={id("service")} name="service" defaultValue={defaultService ?? services[0].title}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
        <div className="field field--full">
          <label className={lab} htmlFor={id("message")}>Project details</label>
          <textarea id={id("message")} name="message" rows={4} required placeholder="Tell us about your project..." aria-invalid={!!errors.message} aria-describedby={id("message-error")} onInput={() => clear("message")} />
          <span className="field__error" id={id("message-error")} aria-live="polite">{errors.message}</span>
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
