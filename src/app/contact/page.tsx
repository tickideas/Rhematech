import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rhematech Projects Limited to discuss upcoming engineering, construction, or project management initiatives.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <Container className="grid min-h-[360px] content-center gap-6 py-24 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-10 lg:col-span-10 xl:col-span-9">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Contact
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              Let&apos;s build the future of infrastructure together.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg leading-relaxed text-white/80 md:max-w-[72ch]">
              Share your scope, timelines, and ambitions. Our delivery leads will respond within one business day with next steps.
            </p>
          </div>
        </Container>
      </section>

      <section className="rt-section" id="details">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-8 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Contact details
            </h2>
            <div className="space-y-3 text-sm text-neutral-600">
              {contactInfo.addressLines.map((line, index) => (
                <p key={line} className={index === 0 ? "font-medium text-neutral-800" : ""}>{line}</p>
              ))}
            </div>
            <div className="space-y-3 pt-2">
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-800">Tel:</span>{" "}
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[var(--rt-color-primary-500)] transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-800">Email:</span>{" "}
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[var(--rt-color-primary-500)] transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </div>
            <div className="h-64 rounded-[var(--rt-radius-md)] border border-neutral-200 bg-neutral-100">
              <p className="p-4 text-sm text-neutral-500">
                Map placeholder — integrate Google Maps or Leaflet when API key is available.
              </p>
            </div>
          </aside>

          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
