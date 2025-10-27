import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rhematech Projects Limited",
    template: "%s | Rhematech Projects Limited",
  },
  description:
    "Rhematech delivers bespoke engineering, construction, and project management solutions across infrastructure, energy, transport, and defense sectors.",
  keywords: [
    "Rhematech",
    "engineering",
    "construction",
    "project management",
    "procurement",
    "infrastructure",
    "oil and gas",
  ],
  openGraph: {
    title: "Rhematech Projects Limited",
    description:
      "Engineering, construction, and project management delivered with a specific solution.",
    type: "website",
    locale: "en_GB",
    siteName: "Rhematech Projects Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhematech Projects Limited",
    description:
      "Engineering, construction, and project management delivered with a specific solution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-surface text-neutral-800 antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-[var(--rt-shadow-sm)]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
