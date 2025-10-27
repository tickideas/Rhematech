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
      <section className="rt-section bg-neutral-900 text-white">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Contact
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Let’s build the future of infrastructure together.
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Share your scope, timelines, and ambitions. Our delivery leads will respond within one business day with next steps.
          </p>
        </Container>
      </section>

      <section className="rt-section" id="details">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-6 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Contact details
            </h2>
            <div className="space-y-1 text-sm text-neutral-600">
              {contactInfo.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="text-sm text-neutral-600">
              Tel: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </p>
            <p className="text-sm text-neutral-600">
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
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
