import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  differentiators,
  keyMetrics,
  leadership,
  services,
  projects,
  testimonial,
} from "@/data/site";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-construction.jpg"
          alt="Rhematech engineers managing a construction site"
          fill
          priority
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--rt-gradient-hero)]" />
        <Container className="flex min-h-[520px] flex-col items-start justify-center gap-8 py-24 text-white">
          <div className="space-y-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] opacity-80">
              Engineering • Construction • Project Management • Procurement
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Engineering, construction, and project management delivered with a specific solution.
            </h1>
            <p className="text-lg text-neutral-100/90">
              From transport infrastructure to energy megaprojects, Rhematech blends global expertise with local insight to deliver safely, on schedule, and to the highest standards.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a Quote</Button>
              <Button href="/projects" variant="ghost">
                View Our Projects
              </Button>
            </div>
          </div>
          <dl className="grid gap-6 text-xs uppercase tracking-[0.32em] text-neutral-100/70 sm:grid-cols-3">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[var(--rt-radius-md)] border border-white/20 bg-white/5 px-4 py-3">
                <dt className="text-3xl font-bold tracking-normal text-white">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-[11px] leading-snug text-neutral-100/80">
                  {metric.description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Trusted by public & private sector partners worldwide
          </p>
          <div className="flex flex-wrap justify-end gap-4 text-xs text-neutral-500">
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Crossrail Programme
            </span>
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Total | Novatek
            </span>
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Niger Delta Development Commission
            </span>
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Shell Stanlow Refinery
            </span>
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                What We Do
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900">
                Bespoke engineering and construction services aligned to your mission.
              </h2>
              <p className="text-neutral-600">
                Our multidisciplinary teams work as equal partners from feasibility through commissioning, ensuring every project reaches its full potential.
              </p>
            </div>
            <Button href="/services" variant="ghost">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex h-full flex-col gap-4 rounded-[var(--rt-radius-md)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)] transition hover:-translate-y-1 hover:shadow-[var(--rt-shadow-sm)]"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-[rgba(227,27,35,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rt-color-primary-500)]">
                  {service.sectorTag}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {service.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{service.summary}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Key Deliverables
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button href={`/services/${service.slug}`} variant="ghost" className="px-0">
                    Learn more
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="rt-section bg-neutral-50">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                Featured Work
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900">
                Projects that reactivate economies and elevate communities.
              </h2>
            </div>
            <Button href="/projects" variant="ghost">
              View all projects
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white shadow-[var(--rt-shadow-xs)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 space-y-2 text-white">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                      {project.sector}
                    </span>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-neutral-100/80">{project.location}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <p className="text-sm text-neutral-600">{project.summary}</p>
                  <dl className="grid gap-3 text-sm text-neutral-600">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-baseline gap-3">
                        <dt className="text-base font-semibold text-neutral-900">
                          {metric.label}
                        </dt>
                        <dd>{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-auto">
                    <Button href={`/projects/${project.slug}`} variant="ghost" className="px-0">
                      View case study
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Why Rhematech
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900">
              A partner obsessed with results, safety, and enduring impact.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <article key={item.title} className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--rt-radius-lg)] bg-[rgba(227,27,35,0.12)] text-[var(--rt-color-primary-500)]">
                    <span className="text-base font-semibold">{item.icon.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Leadership Snapshot
            </h3>
            <ul className="space-y-4">
              {leadership.slice(0, 3).map((leader) => (
                <li key={leader.name} className="border-b border-neutral-200 pb-4 last:border-none last:pb-0">
                  <p className="text-base font-semibold text-neutral-900">
                    {leader.name}
                  </p>
                  <p className="text-sm text-[var(--rt-color-primary-500)]">
                    {leader.role}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {leader.biography}
                  </p>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost">
              Meet the full team
            </Button>
          </aside>
        </Container>
      </section>

      <section className="rt-section bg-neutral-900 text-white">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <blockquote className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Our Promise
            </p>
            <p className="font-script text-3xl text-white/90">“A Specific Solution.”</p>
            <p className="text-xl leading-relaxed text-white/90">{testimonial.quote}</p>
            <footer className="text-sm uppercase tracking-[0.3em] text-white/60">
              {testimonial.author}
            </footer>
          </blockquote>
          <div className="space-y-4 rounded-[var(--rt-radius-lg)] bg-white/10 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Ready to build?
            </h3>
            <p className="text-sm text-white/80">
              Share your brief and our team will craft a bespoke roadmap that delivers on time, on budget, and above expectation.
            </p>
            <Button
              href="/contact"
              variant="ghost"
              className="border border-white text-white hover:bg-white/10"
            >
              Book a consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
