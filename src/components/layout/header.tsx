"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-surface/90 backdrop-blur">
      <Container className="flex h-20 items-center gap-6 justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/rhematech-full.png"
              alt="Rhematech Projects Limited"
              width={270}
              height={60}
              priority
            />
          </Link>
        </div>
        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-2 transition-colors",
                isActive(item.href)
                  ? "text-[var(--rt-color-primary-500)]"
                  : "text-neutral-600 hover:text-neutral-900",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[var(--rt-color-primary-500)]" />
              )}
            </Link>
          ))}
        </nav>
       
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 lg:hidden"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="block h-0.5 w-6 bg-neutral-900" />
        </button>
      </Container>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--rt-color-overlay)] lg:hidden">
          <div className="ml-auto flex h-full w-80 flex-col bg-surface p-6 shadow-[var(--rt-shadow-lg)]">
            <div className="flex items-center justify-between">
              <Image
                src="/brand/rhematech-full.png"
                alt="Rhematech Projects Limited"
                width={150}
                height={44}
              />
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rotate-45 bg-neutral-900" />
                  <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 -rotate-45 bg-neutral-900" />
                </span>
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-4 text-lg font-semibold">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col gap-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2",
                      isActive(item.href)
                        ? "bg-[rgba(227,27,35,0.12)] text-[var(--rt-color-primary-500)]"
                        : "text-neutral-700",
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 text-sm font-medium text-neutral-500">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
