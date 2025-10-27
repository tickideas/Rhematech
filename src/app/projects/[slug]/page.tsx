import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title}`,
    description: project.summary,
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="-z-10 object-cover"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-neutral-900/70" />
        <Container className="grid gap-8 py-24 text-white lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Case Study
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">{project.title}</h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80">{project.summary}</p>
          </div>
          <div className="rounded-[var(--rt-radius-lg)] bg-white/10 p-6 text-sm">
            <dl className="grid gap-2 text-white/80">
              <div className="flex justify-between">
                <dt className="font-semibold">Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Sector</dt>
                <dd>{project.sector}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Services</dt>
                <dd>{project.services.join(", ")}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Completion</dt>
                <dd>{project.completion}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Value</dt>
                <dd>{project.value}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="space-y-3 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]">
              <h2 className="text-lg font-semibold text-neutral-900">Challenge</h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="space-y-3 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]">
              <h2 className="text-lg font-semibold text-neutral-900">Solution</h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                {project.solutions.map((solution) => (
                  <li key={solution} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="space-y-3 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]">
              <h2 className="text-lg font-semibold text-neutral-900">Results</h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-neutral-50 p-6 text-center shadow-[var(--rt-shadow-xs)]"
              >
                <p className="text-3xl font-semibold text-[var(--rt-color-primary-500)]">
                  {metric.label}
                </p>
                <p className="text-sm text-neutral-600">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[var(--rt-radius-lg)] bg-neutral-900 p-10 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Let’s deliver your next programme.</h2>
                <p className="text-sm text-white/80">
                  Our specialists are ready to scope, plan, and execute with the same precision that defined this project.
                </p>
              </div>
              <Button href="/contact" variant="ghost" className="border border-white text-white hover:bg-white/10">
                Start a workshop
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
