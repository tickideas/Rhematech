# Rhematech Website — Implementation Spec

Status: Approved

Output file: docs/rhematech-website-spec.md

## 1) Executive Summary
Build a high‑performance, modern web experience that elevates Rhematech beyond typical construction sites through strong storytelling, premium visuals, and a polished, trustworthy UX. The site will showcase capabilities and projects with authority, drive qualified inquiries, and be easy for non‑technical staff to update.

## 2) Inputs and Source Materials
We will derive copy, structure, and visuals from the client-provided assets in `Res/`:
- `Company Brochure Final V5b.pdf` (primary source for company profile, services, certifications, differentiators)
- `Projects.pdf` (project categories, case studies, photos)
- `Rhematech FULL.png`, `Rhematech-TopICON.png`, `Rhematech_logo.jpg` (brand)
- `Rhematech Letter of Introduction .docx` (positioning and tone)
- Photography: `construction-workers-getty.jpg`, `construction.jpg`, WhatsApp images, `unnamed-abc381e55a-1920x1200.jpg` (visual texture)

Note: We will extract/verbatim-validate final copy and project data from the PDFs/DOCX with the client during content import.

## 3) Brand System (from logo analysis)
- Primary: Bright Red `#E31B23` — CTA, emphasis, accents
- Secondary: Dark Gray `#333333` — headings, body text on white, neutrals
- Background: White `#FFFFFF`
- Extended neutrals: `#111111` (ink), `#6B7280` (muted text), `#E5E7EB` (dividers), `#F3F4F6` (panels)
- Typography (web-safe equivalents):
  - Headlines: Bold geometric sans (e.g., Inter/Manrope/Futura‑esque); fallback: system-ui, Arial
  - Body: Humanist sans (e.g., Inter/Source Sans 400–500)
  - Optional script accent for taglines only (used sparingly)
- Motifs: Diamond geometry + lightning/energy stroke used as subtle backgrounds, masks, and iconography.

## 4) Information Architecture
Primary navigation (desktop mega-menu + mobile drawer):
- Home
- About (Company, Leadership, Values, Certifications & HSE, Clients & Testimonials)
- Services (Service overview + individual service pages)
- Projects (Filterable gallery + Case Study template)
- Capabilities (Equipment, Methods, Quality & Safety)
- Careers
- Insights/News (optional)
- Contact / Request a Quote

Footer: Quick links, legal (Terms/Privacy), office info, social, newsletter (optional).

## 5) Page-by-Page Content Outline
- Home
  - Hero: Premium imagery/video, headline, value proposition pulled from brochure; primary CTA: Request a Quote; secondary: View Projects
  - Trust indicators: certifications, years experience, safety record, notable clients (logos)
  - Services overview: 4–8 cards linking to details
  - Featured projects: 3–6 with category filters
  - Differentiators: 3–5 bullets from brochure (specific solutions, speed, quality)
  - CTA band + contact snippet
- About
  - Company story (from brochure + letter), mission/vision/values
  - Leadership profiles (photos, bios)
  - Certifications & HSE (downloadable certificates, safety KPIs)
  - Clients & Testimonials
- Services (Index)
  - Service taxonomy (from brochure): categories with short blurbs and imagery
  - Cross‑links to relevant projects
- Service Detail (template)
  - Problem we solve, approach, outcomes, service‑specific gallery, related projects, CTA
- Projects (Index)
  - Filterable grid by sector, service, location, year; search
  - Map view (optional) + badges (award, flagship)
  - Case study highlights
- Project Case Study (template)
  - Hero image, summary (Client, Sector, Location, Year, Value, Duration)
  - Challenge → Solution → Results narrative; gallery, key metrics, testimonials
  - Related services and projects
- Capabilities
  - Equipment & methods, QA/QC, safety processes, certifications (downloadable)
- Careers
  - Culture, benefits, open roles, application form; EEO statement
- Insights/News (optional)
  - Articles, company updates, press; author profiles; categories
- Contact / Request a Quote
  - Contact details, office map, validated form (file upload for RFP), success state

## 6) Signature Components & UX Patterns
- Header with sticky behavior, attention‑aware hover states, mobile drawer
- Cinematic hero (image or short loop), optional diagonal/diamond mask
- KPI counters (years, projects, safety stats)
- Service cards with iconography and hover reveals
- Projects gallery: responsive masonry, facet filters, lazy‑loading, keyboard/focus support
- Case study template: structured facts bar; before/after slider (if assets allow)
- Testimonial carousel with accessible controls
- CTA bands with strong contrast (`#E31B23` on dark/white)
- Forms: multi‑field validation, spam protection, file upload (PDF/DWG), success hand‑off
- Global alerts (bid opportunities, holiday hours)

## 7) Visual & Content Guidelines
- Color usage: red ≤ 20% UI; gray/white dominance for calm, premium feel
- Photography: honest, high‑contrast construction imagery; avoid over‑filters
- Tone of voice: confident, precise, solutions‑oriented; avoid jargon without definitions
- Copy sources: Brochure + Letter of Introduction as primary references
- Accessibility: WCAG 2.2 AA contrast and interaction; focus rings visible; motion reduced

## 8) SEO & Schema
- On‑page: H1 per page, semantic sections, descriptive titles/meta, OG/Twitter cards
- Structured data: Organization, Service, Project, BreadcrumbList, FAQ (if used)
- URL strategy: `/services/{slug}`, `/projects/{slug}`, `/about/{section}`, `/careers/{job‑id}`
- Sitemap.xml, robots.txt, canonical tags; redirects for renamed pages
- Image SEO: descriptive filenames, alt text, width/height, modern formats (AVIF/WebP)

## 9) Performance & Quality Targets
- Lighthouse ≥ 95 (PWA optional), LCP ≤ 2.5s, CLS ≤ 0.05, TTI ≤ 3.5s on 4G
- Images: responsive `<picture>`, AVIF/WebP, lazy + priority hints for hero
- CSS/JS: code‑split, tree‑shake; critical CSS; defer non‑critical
- Caching: immutable assets, ISR/SSG; CDN on edge
- QA: cross‑browser, keyboard/end‑to‑end tests for forms and filters

## 10) Tech Stack & Architecture
- Framework: Next.js (App Router) + TypeScript for performance and SSG/ISR
- Styling: Tailwind CSS (utility‑first) or CSS Modules if preferred
- CMS: Sanity (recommended) or Contentful; alternative: filesystem markdown if low‑change
- Media: Next/Image with on‑the‑fly optimization; cloud storage/CDN (Vercel Images/Sanity)
- Forms: server actions + reCAPTCHA or hCaptcha; file uploads to object storage
- Hosting: Vercel (primary) or Netlify; DNS via client registrar; HTTPS
- Analytics: Privacy‑friendly analytics (Plausible) + GA4 optional; heatmaps optional

## 11) CMS Content Models (Sanity example)
- Settings: site name, logo variants, contact info, social, SEO defaults
- Navigation: header/footer menus
- Page (generic): title, hero, sections (rich blocks), SEO
- Service: title, intro, body, gallery, related services/projects, SEO
- Project: title, summary, hero, facts (client/sector/location/year/value/duration), body (challenge/solution/results), gallery, testimonials, related services, SEO
- Testimonial: author, role, company, quote, headshot
- Person: name, role, bio, photo
- Article (optional): title, author, categories, body, cover, SEO
- Asset: downloadable certificates/capability statements

## 12) Routing & States
- Public routes as above; 404 with search and top links
- Loading/skeleton states for gallery and case studies
- Error boundaries per route; form submission success/failure states

## 13) Integrations
- Map (Leaflet or Google Maps) on Contact and optional Projects map view
- Email delivery: transactional (Resend/SendGrid) for form notifications
- Careers: basic in‑site posting, or integrate with client’s ATS if desired

## 14) Content Migration Plan
- Extract service list, differentiators, certifications from `Company Brochure Final V5b.pdf`
- Build project inventory from `Projects.pdf` with fields: category, sector, location, year, scope, outcomes, photos
- Validate copy with client; replace placeholders; add alt text; standardize image crops

## 15) Accessibility Checklist (WCAG 2.2 AA)
- Color contrast ≥ 4.5:1 text on backgrounds (test red on white/gray)
- Focus order logical; visible focus indicators
- All interactive elements keyboard accessible; hit area ≥ 44×44
- Motion reduced for `prefers-reduced-motion`
- Form labels, errors, and instructions announced by screen readers

## 16) Project Plan & Milestones (6 weeks, adjustable)
- Week 1: Discovery, IA, wireframes, design system tokens; content inventory
- Week 2: Visual design (Home, Services, Projects), CMS schema
- Week 3: Build core pages, navigation, global components, CMS integration
- Week 4: Projects gallery + case study template; forms; performance foundations
- Week 5: Content entry, SEO pass, accessibility fixes, cross‑browser QA
- Week 6: UAT, polish, redirects, launch, handover training

## 17) Acceptance Criteria
- Pages implemented per IA with responsive breakpoints (sm/md/lg/xl)
- Lighthouse ≥ 95 on mobile; passes WCAG 2.2 AA checks
- CMS enables creation/editing of Services and Projects without developer help
- Contact/Quote forms deliver emails and store submissions; uploads work
- SEO baseline in place (metadata, schema, sitemaps, canonical)

## 18) Deliverables
- Production site live on client domain
- Source code repo with short editor guide
- CMS workspace with schemas, roles, and starter content
- Asset kit: exported logos (SVG/PNG), color tokens, typography guidance
- This specification saved to `docs/rhematech-website-spec.md`

## 19) Next Steps
- Proceed to wireframes and design tokens
- Provide/approve final copy/photos (or approve extraction from the PDFs)
- Confirm hosting/CMS choices and domain/DNS access
