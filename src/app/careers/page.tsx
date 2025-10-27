import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CareersForm } from "@/components/forms/careers-form";

const benefits = [
  {
    title: "Growth & mentorship",
    description: "Access to international project rotations and leadership mentoring.",
  },
  {
    title: "Safety culture",
    description: "World-class HSE programmes keep every teammate safe on and off site.",
  },
  {
    title: "Competitive rewards",
    description: "Performance-based incentives, healthcare, and continuous development support.",
  },
];

const roles = [
  {
    title: "Senior Project Manager",
    location: "Port Harcourt & project locations",
    type: "Full-time",
  },
  {
    title: "Structural Engineer",
    location: "Lagos / Remote",
    type: "Full-time",
  },
  {
    title: "HSE Coordinator",
    location: "Project sites",
    type: "Contract",
  },
];

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Rhematech’s multidisciplinary team and help deliver transformative engineering, construction, and project management programmes.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <section className="rt-section bg-neutral-900 text-white">
        <Container className="grid gap-6 md:grid-cols-12">
          <div className="w-full space-y-6 md:col-span-8 lg:col-span-7 xl:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Careers
            </p>
            <h1 className="text-4xl font-semibold text-balance md:text-5xl">
              Build a career where projects change skylines and communities.
            </h1>
            <p className="max-w-[68ch] break-normal text-lg text-white/80 md:max-w-[72ch]">
              We are engineers, project managers, and innovators driven by purpose. Join a team that tackles complex infrastructure challenges with integrity, creativity, and courage.
            </p>
          </div>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-neutral-900">Why Rhematech</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{benefit.description}</p>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-neutral-900">Open roles</h2>
              <div className="space-y-4">
                {roles.map((role) => (
                  <article
                    key={role.title}
                    className="flex flex-col gap-3 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)] md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {role.title}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {role.location} • {role.type}
                      </p>
                    </div>
                    <Button href="#application" variant="ghost">
                      Apply now
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4 rounded-[var(--rt-radius-lg)] bg-neutral-50 p-8 shadow-[var(--rt-shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Employee spotlight
            </h3>
            <p className="text-sm text-neutral-600">
              “Rhematech gives me the platform to shape world-class infrastructure while investing in my growth.”
            </p>
            <p className="text-sm font-semibold text-neutral-900">Chinedu Ahiazu, Head of Engineering</p>
          </aside>
        </Container>
      </section>

      <section id="application" className="rt-section bg-neutral-50">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900 text-balance">Submit your profile</h2>
          <p className="max-w-[65ch] break-normal text-neutral-600">
            Share your details and portfolio. Our talent team reviews every application and reaches out when there&apos;s a strong alignment.
          </p>
          <CareersForm />
        </Container>
      </section>
    </div>
  );
}
