"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-6 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-8 shadow-[var(--rt-shadow-sm)]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="company">
            Organisation
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="sector">
            Sector
          </label>
          <select
            id="sector"
            name="sector"
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          >
            <option value="">Select sector</option>
            <option>Transport</option>
            <option>Energy</option>
            <option>Infrastructure</option>
            <option>Defense</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-neutral-700" htmlFor="timeline">
            Target start date
          </label>
          <input
            id="timeline"
            name="timeline"
            type="month"
            className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-700" htmlFor="scope">
          Project scope
        </label>
        <textarea
          id="scope"
          name="scope"
          rows={4}
          className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm text-neutral-600">
          <input type="checkbox" className="h-4 w-4" />
          I agree to receive project-related communications from Rhematech.
        </label>
        <Button type="submit">Submit request</Button>
        {submitted && (
          <p className="text-sm text-green-700">
            Thank you. We’ll be in touch shortly with next steps.
          </p>
        )}
      </div>
    </form>
  );
}
