import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { contactInfo, leadership } from "@/data/site";

const values = [
  {
    title: "Safety first",
    description:
      "Zero harm is non-negotiable. We embed rigorous HSE practices and training across every programme.",
  },
  {
    title: "Specific solutions",
    description:
      "We listen, diagnose, and co-create bespoke solutions that respond to each client’s challenges.",
  },
  {
    title: "Innovation",
    description:
      "From modular construction to digital controls, we leverage technology to deliver smarter, faster, better outcomes.",
  },
  {
    title: "Community impact",
    description:
      "Our projects reactivate local economies, creating opportunities that last well beyond commissioning.",
  },
];

const certifications = [
  "ISO-aligned quality management",
  "Nigerian Society of Engineers membership",
  "Global HSE compliance (Crossrail, Shell, Total)",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Rhematech’s story, leadership, and commitment to delivering bespoke engineering and construction solutions across the globe.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <Image
          src="/images/projects/crossrail-stockley.jpg"
          alt="Crossrail Stockley Flyover project"
          fill
          className="-z-10 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-900/70" />
        <Container className="grid min-h-[360px] content-center gap-6 py-24 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-10 lg:col-span-10 xl:col-span-9">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              About Rhematech
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              Global multidisciplinary experts delivering with a specific solution.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">
              Rhematech Projects Limited is a global engineering, construction, project management, and procurement company delivering complex infrastructure across transportation, energy, defense, and civic sectors.
            </p>
          </div>
        </Container>
      </section>

      <section id="company" className="rt-section">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-neutral-900">Our story</h2>
            <p className="text-neutral-600">
              We combine global reach with local insight, partnering with clients from feasibility to commissioning. Our multidisciplinary team spans civil, structural, electrical, and project controls experts who bring clarity and accountability to every engagement.
            </p>
            <p className="text-neutral-600">
              From the multibillion-pound Crossrail programme in the UK to critical infrastructure across Nigeria, we pursue safety, quality, and sustainability without compromise.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Corporate facts
            </h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>Incorporated RC 1013824</li>
              <li>Headquartered in Port Harcourt, Nigeria</li>
              <li>Projects delivered across UK, Europe, Middle East, and Africa</li>
              <li>Multidisciplinary team of engineers, planners, and project managers</li>
            </ul>
            <Button href="/contact" variant="ghost">
              Work with us
            </Button>
          </aside>
        </Container>
      </section>

      <section id="leadership" className="rt-section bg-neutral-50">
        <Container>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-neutral-900">Leadership</h2>
            <p className="text-neutral-600">
              Our leadership has directed some of the world’s most complex infrastructure programmes, ensuring every project benefits from hands-on experience at the highest level.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {leadership.map((leader) => (
                <article
                  key={leader.name}
                  className="flex flex-col gap-4 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-[var(--rt-color-primary-500)]">
                      {leader.role}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-600">{leader.biography}</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {leader.accolades}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="certifications" className="rt-section">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Certifications & HSE
            </h2>
            <p className="text-neutral-600">
              Safety and quality sit at the heart of everything we do. Our programmes adhere to stringent HSE and QA standards set by global operators and regulatory bodies.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              {certifications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--rt-color-primary-500)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-4 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </h3>
            <address className="not-italic text-sm text-neutral-600">
              {contactInfo.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <p className="text-sm text-neutral-600">
              Tel: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </p>
            <p className="text-sm text-neutral-600">
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <Button href="/careers" variant="ghost">
              Careers at Rhematech
            </Button>
          </aside>
        </Container>
      </section>
    </div>
  );
}
