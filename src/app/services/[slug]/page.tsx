import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { projects, services } from "@/data/site";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name}`,
    description: service.summary,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = projects.filter((project) =>
    service.relatedProjects.includes(project.slug),
  );

  const supportingServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="rt-section bg-neutral-900 text-white">
        <Container className="grid gap-6 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-8 lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Service Detail
            </span>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">{service.name}</h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">{service.summary}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
              {service.deliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className="rounded-full border border-white/30 px-4 py-2"
                >
                  {deliverable}
                </span>
              ))}
            </div>
            <Button href="/contact" variant="red">
              Request proposal
            </Button>
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="grid gap-10 xl:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900">
                How we deliver
              </h2>
              <p className="text-neutral-600">
                We mobilise multidisciplinary teams, digital tools, and proven governance frameworks to deliver safely and predictably. Each engagement is tailored to the client’s sector and operational requirements.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]">
                <h3 className="text-lg font-semibold text-neutral-900">Client challenges</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]">
                <h3 className="text-lg font-semibold text-neutral-900">Our approach</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    <span>Multidisciplinary design integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    <span>Digitised project controls and reporting</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    <span>Embedded safety, quality, and commissioning plans</span>
                  </li>
                </ul>
              </article>
            </div>

            {relatedProjects.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-neutral-900">
                  Related case studies
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <article
                      key={project.slug}
                      className="flex h-full flex-col gap-4 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--rt-color-primary-500)]">
                          {project.sector}
                        </p>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-600">{project.location}</p>
                      </div>
                      <p className="text-sm text-neutral-600">{project.summary}</p>
                      <ul className="space-y-2 text-sm text-neutral-600">
                        {project.metrics.slice(0, 2).map((metric) => (
                          <li key={metric.label} className="flex gap-2">
                            <span className="font-semibold text-neutral-900">
                              {metric.label}
                            </span>
                            <span>{metric.value}</span>
                          </li>
                        ))}
                      </ul>
                      <Button href={`/projects/${project.slug}`} variant="ghost" className="px-0">
                        View case study
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Complementary services
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              {supportingServices.map((item) => (
                <li key={item.slug}>
                  <Button href={`/services/${item.slug}`} variant="ghost" className="px-0">
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
            <Button href="/contact">Talk to our team</Button>
          </aside>
        </Container>
      </section>
    </div>
  );
}
