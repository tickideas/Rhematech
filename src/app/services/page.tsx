import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { processSteps, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rhematech's engineering, construction, and project management services spanning transport, energy, defense, and infrastructure sectors.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <Image
          src="/images/projects/yamal-lng.jpg"
          alt="Rhematech engineering services"
          fill
          className="-z-10 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-900/60" />
        <Container className="grid min-h-[360px] content-center gap-6 py-24 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-10 lg:col-span-10 xl:col-span-9">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Services
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              Specific solutions across every stage of the asset lifecycle.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">
              From feasibility to commissioning, we deploy multidisciplinary teams that bring clarity, control, and confidence to complex engineering and construction programmes.
            </p>
            <Button href="/contact" variant="ghost" className="border border-white text-white hover:bg-white/10">
              Discuss your project
            </Button>
          </div>
        </Container>
      </section>

      <section className="rt-section" id="delivery-model">
        <Container className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-neutral-900">Service overview</h2>
            <p className="text-neutral-600">
              Each service line integrates planning, engineering, procurement, and project controls to deliver reliable, safe, and economically resilient outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex h-full flex-col gap-4 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--rt-color-primary-500)]">
                    {service.sectorTag}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600">{service.summary}</p>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Deliverables
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Outcomes
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button href={`/services/${service.slug}`} variant="ghost" className="px-0">
                    View service detail
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="rt-section bg-neutral-50">
        <Container className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-neutral-900">Our process</h2>
            <p className="text-neutral-600">
              The Rhematech delivery framework integrates strategy, execution, and governance to give clients complete visibility at every stage.
            </p>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <span className="pointer-events-none absolute left-0 top-5 hidden h-1 w-full bg-neutral-200 md:block" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative flex flex-col gap-3 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[var(--rt-radius-md)] bg-[var(--rt-color-primary-500)] text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
