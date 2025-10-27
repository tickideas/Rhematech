import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Lessons from Crossrail: managing multi-year transport upgrades",
    date: "Oct 2023",
    category: "Transport",
    summary: "Five insights from delivering complex rail infrastructure within live operations.",
  },
  {
    title: "Modularisation strategies for extreme environments",
    date: "Aug 2023",
    category: "Energy",
    summary: "How Total’s Yamal LNG programme set a new benchmark for arctic project execution.",
  },
  {
    title: "Embedding zero-harm culture on megaprojects",
    date: "Jun 2023",
    category: "HSE",
    summary: "Practical steps to sustain safety excellence from tender through commissioning.",
  },
];

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read Rhematech’s perspectives on delivering complex engineering, construction, and project management programmes around the world.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      <section className="rt-section bg-neutral-900 text-white">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Insights
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            News, insights, and perspectives from the field.
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Stay informed on the strategies, tools, and stories shaping global infrastructure delivery.
          </p>
        </Container>
      </section>

      <section className="rt-section">
        <Container className="space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex h-full flex-col gap-4 rounded-[var(--rt-radius-lg)] border border-neutral-200 bg-white p-6 shadow-[var(--rt-shadow-xs)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--rt-color-primary-500)]">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold text-neutral-900">{post.title}</h2>
                <p className="text-xs text-neutral-500">{post.date}</p>
                <p className="text-sm text-neutral-600">{post.summary}</p>
                <Button href="#" variant="ghost" className="mt-auto px-0">
                  Coming soon
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
