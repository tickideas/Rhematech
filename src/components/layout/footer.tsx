import Link from "next/link";
import { Container } from "@/components/layout/container";
import { contactInfo, services } from "@/data/site";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  // { label: "Capabilities", href: "/capabilities" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container className="grid gap-10 py-16 md:grid-cols-12">
        {/* Brand + summary + contact */}
        <div className="space-y-4 md:col-span-6 lg:col-span-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Rhematech Projects Limited
          </h3>
          <div className="space-y-1 text-sm text-neutral-600">
            {contactInfo.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              Tel: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </div>
        {/* Quick Links */}
        <div className="md:col-span-3 lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-neutral-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div className="md:col-span-3 lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-neutral-900"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-neutral-200 bg-neutral-50 py-6">
        <Container className="flex flex-col gap-4 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rhematech Projects Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
