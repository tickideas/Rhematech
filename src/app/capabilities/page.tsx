import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { capabilityHighlights, processSteps } from "@/data/site";

const tools = [
  "BIM 360 & Navisworks",
  "Primavera P6 scheduling",
  "Lean construction toolkits",
  "Integrated digital QA/QC",
  "Supply chain command centre",
];

const certifications = [
  "ISO-aligned quality management",
  "Crossrail Gold Standard HSQE",
  "Major IOC vendor approvals",
];

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Learn how Rhematech integrates engineering excellence, project controls, procurement, and HSE leadership to deliver complex programmes.",
};

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col">
      <section className="rt-section bg-neutral-900 text-white">
        <Container className="grid gap-6 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-8 lg:col-span-7 xl:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Capabilities
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              Integrated capabilities that keep complex projects on track.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">
              Rhematech mobilises engineering depth, project controls, procurement networks, and safety leadership into one cohesive delivery powerhouse.
            </p>
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Pillars of delivery
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {capabilityHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Core toolset
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              {tools.map((tool) => (
                <li key={tool} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="rt-section bg-neutral-50">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900 text-balance">Quality & HSE</h2>
          <p className="max-w-[72ch] break-normal text-neutral-600">
            Quality assurance and health, safety, and environment (HSE) excellence are embedded from tender to handover. Our teams have been certified by some of the world&apos;s most demanding clients, maintaining zero lost-time incidents on critical programmes.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((item) => (
              <div
                key={item}
                className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 text-sm text-neutral-600 shadow-[var(--rt-shadow-xs)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Programmatic control framework</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 text-sm text-neutral-600 shadow-[var(--rt-shadow-xs)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--rt-color-primary-500)]">
                  Phase {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="flex flex-col gap-6 rounded-[var(--rt-radius-lg)] bg-neutral-900 p-10 text-white shadow-[var(--rt-shadow-md)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Need specialist expertise?</h2>
            <p className="text-sm text-white/80">
              Engage our technical leads for modularisation reviews, constructability studies, or independent programme assurance.
            </p>
          </div>
          <Button href="/contact" variant="ghost" className="border border-white text-white hover:bg-white/10">
            Schedule a discovery call
          </Button>
        </Container>
      </section>
    </div>
  );
}
