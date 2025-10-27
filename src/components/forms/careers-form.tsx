"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-6 rounded-[var(--rt-radius-lg)] bg-white p-8 shadow-[var(--rt-shadow-sm)] md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
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
        <label className="text-sm font-semibold text-neutral-700" htmlFor="role">
          Role of interest
        </label>
        <input
          id="role"
          name="role"
          className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-700" htmlFor="resume">
          Resume link
        </label>
        <input
          id="resume"
          name="resume"
          type="url"
          placeholder="https://"
          className="w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-semibold text-neutral-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-[var(--rt-radius-sm)] border border-neutral-200 px-3 py-3 text-sm focus:border-[var(--rt-color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--rt-color-primary-500)]/20"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-3">
        <Button type="submit">Submit application</Button>
        {submitted && (
          <p className="text-sm text-green-700">
            Thank you. Our talent team will review your submission and reach out if there’s a match.
          </p>
        )}
      </div>
    </form>
  );
}
