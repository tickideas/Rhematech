import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

const sectors = ["All", "Transport", "Infrastructure", "Energy"];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View Rhematech’s flagship projects including Crossrail, Yamal LNG, and critical infrastructure delivering impact across continents.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/projects/acton-diveunder.jpg"
          alt="Rhematech project montage"
          fill
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-900/75" />
        <Container className="grid gap-6 py-24 text-white md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-8 lg:col-span-7 xl:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Projects
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              A portfolio of engineering excellence across sectors and continents.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">
              Explore a selection of programmes delivered by Rhematech’s multidisciplinary teams—from Crossrail’s transformational upgrades to resilient infrastructure across Nigeria.
            </p>
          </div>
        </Container>
      </section>

      <section className="rt-section" id="case-studies">
        <Container className="space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Browse by sector
            </p>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${sector === "All" ? "border-[var(--rt-color-primary-500)] bg-[rgba(227,27,35,0.12)] text-[var(--rt-color-primary-500)]" : "border-neutral-200 text-neutral-500"}`}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white shadow-[var(--rt-shadow-xs)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 space-y-1 text-white">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                      {project.sector}
                    </span>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.location}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <p className="text-sm text-neutral-600">{project.summary}</p>
                  <dl className="grid gap-2 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <dt className="font-semibold text-neutral-900">Client</dt>
                      <dd>{project.client}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-semibold text-neutral-900">Completion</dt>
                      <dd>{project.completion}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-semibold text-neutral-900">Value</dt>
                      <dd>{project.value}</dd>
                    </div>
                  </dl>
                  <Button href={`/projects/${project.slug}`} variant="ghost" className="mt-auto px-0">
                    View case study
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[var(--rt-radius-lg)] bg-neutral-900 p-10 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Need a project playbook?</h2>
                <p className="text-sm text-white/80">
                  We help teams define scope, budget, and timeline with clarity before the first shovel hits the ground.
                </p>
              </div>
              <Button href="/contact" variant="ghost" className="border border-white text-white hover:bg-white/10">
                Request a consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
