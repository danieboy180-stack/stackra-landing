"use client";

import { useState, useTransition } from "react";

type Status = { kind: "idle" | "success" | "error"; message?: string };

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function submit(form: HTMLFormElement) {
    const data = new FormData(form);
    startTransition(async () => {
      setStatus({ kind: "idle" });
      try {
        const response = await fetch("/api/contact", { method: "POST", body: data });
        const payload = (await response.json()) as { ok: boolean; message: string };
        setStatus({ kind: payload.ok ? "success" : "error", message: payload.message });
      } catch {
        setStatus({ kind: "error", message: "We couldn't reach the contact service. Please use WhatsApp instead." });
      }
      if (payload.ok) form.reset();
    });
  }

  return (
    <form action={(formData) => {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      if (form) submit(form);
    }} id="contact-form" className="form-stack" aria-describedby="form-status">
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required placeholder="you@business.com" />
      </div>
      <div className="field">
        <label htmlFor="message">What do you want to set up?</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your business." />
      </div>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
      <div id="form-status" aria-live="polite">
        {status.kind === "success" && <div className="form-success">{status.message}</div>}
        {status.kind === "error" && <div className="form-error">{status.message}</div>}
      </div>
    </form>
  );
}
