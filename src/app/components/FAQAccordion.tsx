"use client";

import { useState } from "react";
import type { FAQ } from "@/data/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-brand-light/20 bg-cream-dark transition-shadow hover:shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-medium text-warm-brown">{faq.question}</span>
            <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand/20 transition-all ${openIndex === i ? "rotate-180 bg-brand/10" : ""}`}>
              <svg
                className="h-4 w-4 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === i && (
            <div className="border-t border-brand-light/15 px-6 pb-5 pt-4 text-sm leading-relaxed text-text-muted">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
