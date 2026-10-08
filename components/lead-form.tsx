"use client";

import { useState, useTransition } from "react";

export function LeadForm() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function handleSubmit(form: HTMLFormElement) {
    const data = new FormData(form);
    data.set("message", "Interested in getting started with Stackra.");
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", { method: "POST", body: data });
        const payload = (await response.json()) as { ok: boolean; message: string };
        setMessage({ type: payload.ok ? "success" : "error", text: payload.message });
        if (payload.ok) form.reset();
      } catch {
        setMessage({ type: "error", text: "We couldn't reach the contact service. Please use WhatsApp instead." });
      }
    });
  }

  return (
    <form className="lead-form" action={(formData) => {
      const form = document.getElementById("lead-form") as HTMLFormElement | null;
      if (form) handleSubmit(form);
      void formData;
    }} id="lead-form">
      <label className="sr-only" htmlFor="lead-email">Email address</label>
      <input id="lead-email" name="email" type="email" inputMode="email" autoComplete="email" required placeholder="you@business.com" aria-describedby="lead-status" />
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-primary" type="submit" disabled={pending}>{pending ? "Sending…" : "Get started"}</button>
      <div id="lead-status" aria-live="polite" className="lead-status">
        {message && <span className={message.type === "success" ? "form-success" : "form-error"}>{message.text}</span>}
      </div>
    </form>
  );
}
