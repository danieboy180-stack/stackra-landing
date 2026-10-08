"use client";

import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export function FAQ() {
  return (
    <div className="faq-list">
      {site.faqs.map(([question, answer]) => (
        <details className="faq-item" key={question}>
          <summary>
            <span>{question}</span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <div className="faq-answer">{answer}</div>
        </details>
      ))}
    </div>
  );
}
