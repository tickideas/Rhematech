# Rhematech Website — Wireframe Notes

Status: Draft wireframe specification capturing structure, hierarchy, and content blocks for primary and secondary pages. Visual design and high-fidelity components will build on these foundations.

## Global Layout Principles
- **Grid**: 12-column, 1200px max content width on desktop, 24px gutters; 4-column on tablet; single column on mobile with 20px gutters.
- **Spacing rhythm**: 8px base unit; section spacing 64px desktop / 48px tablet / 40px mobile.
- **Navigation**: Sticky header with desktop mega-menu (Services, Projects) and “Request a Quote” CTA; mobile uses slide-in drawer with accordions.
- **Hero media**: Responsive image or short background video with 60% viewport height desktop, 100% width; mobile ratio 4:5 with overlay gradient for legibility.
- **Typography**: Headlines (H1-H3) set in bold geometric sans; body copy in medium weight sans-serif.
- **Brand accents**: Use red `#E31B23` for CTAs, highlight strips, and active states; diamond motif as masking or background overlay at low opacity.

## Page Wireframes

### 1. Home
**Goal**: Communicate Rhematech’s value proposition and funnel visitors to Services, Projects, or Contact.

1. **Hero band** (full-width, 60vh)
   - Background: hero video loop (construction operations) or static from provided imagery.
   - Overlay left-aligned copy: headline “Engineering, Construction & Project Management Delivered with A Specific Solution.”
   - Subtext referencing bespoke solutions (from brochure page 2).
   - Primary CTA button (red) “Request a Quote”; secondary ghost “View Projects”.
   - Footer chips for key stats: “Global footprint”, “Safety-first”, “On-time delivery”.
2. **Trust ribbon** (dark gray background)
   - Carousel of certifications, associations (e.g., NSE, HSE compliance) and notable clients.
3. **Services overview grid**
   - 2-row grid of six cards referencing brochure’s “What We Do”: Residential & Industrial Buildings, Electrification, Roads & Rail Systems, Oil & Gas Field Development, Defense Facilities, Airports & Seaports, Petrochemical & Refineries.
   - Each card: icon, short description, link to service detail.
4. **Featured projects slider**
   - Horizontal carousel with 3 highlight projects (Stockley Flyover, Acton Diveunder, Okrika Road). Each card: hero image, sector tag, short summary, CTA “View Case Study”.
5. **Differentiators strip**
   - Three columns: “Specific Solutions”, “Global Expertise, Local Insight”, “Safety & Quality Assurance” with supporting statements from brochure profile.
6. **Key metrics counters**
   - Inline stats (Years of combined experience, Value delivered, Countries served).
7. **Leadership snapshot**
   - 3 profile cards (Inuma Iworima, Azunna Chukwuma, Chinedu Ahiazu) with headshot placeholders, roles, 1-line credibility pulls from brochure pages 4-5.
8. **Testimonials / client quote**
   - Quote block referencing promise of satisfaction (brochure page 12).
9. **CTA band**
   - Split layout with upbeat copy inviting contact and quick contact info.
10. **Footer**
    - Multi-column quick links, services, latest news teaser, contact info (brochure page 13 details), social icons.

**Mobile adjustments**: stack sections vertically, convert carousels to swipeable cards with snap scrolling, collapse leadership into horizontal cards.

### 2. About
**Goal**: Showcase company story, leadership strength, values, and certifications.

1. **Hero**: Banner with background image (team or project site), H1 “Who We Are”, breadcrumb.
2. **Company story**: Two-column layout; left narrative (profile text page 3), right highlights (vision, mission, years operating, operating regions map inset).
3. **Values & pillars**: Four-icon grid referencing safety, bespoke solutions, innovation, community uplift.
4. **Leadership team**: Cards for key personnel (Inuma, Azunna, Chinedu, Amarachukwu) with modal/accordion for extended bios.
5. **Certifications & memberships**: Logo wall and download links for certificates (placeholder until assets provided).
6. **Community impact**: Horizontal band referencing brochure comment “projects reactivate local economies”.
7. **Call-to-action**: Invite to explore services or contact.

### 3. Services (Index)
**Goal**: Provide digestible overview of service offerings with pathways to detail pages.

1. **Hero**: Service category imagery with headline “Specific solutions across sectors”.
2. **Service taxonomy**: 3x3 grid of cards (from brochure “What We Do”). Each card contains 40-word summary, bullet list of typical deliverables, link to detail.
3. **Process overview**: Timeline showing Feasibility → Design → Delivery → Commissioning (from brochure page 3).
4. **Differentiation callout**: Full-width panel exploring bespoke approach and project management coverage.
5. **Cross-link**: CTA to Projects filtered by service tag.

### 4. Service Detail Template
**Goal**: Provide depth on individual service line with proof and CTAs.

1. **Hero**: Large image relevant to service + breadcrumb + CTA.
2. **Overview**: Intro paragraph referencing bespoke solution for sector.
3. **Client challenges**: Two-column bullet list.
4. **Our approach**: Step-by-step cards (Discovery, Planning, Execution, Handover).
5. **Featured capabilities/equipment**: Icon list referencing internal capabilities (e.g., project management, modular design, safety programs).
6. **Case studies slider**: Pull related projects (Stockley Flyover, Yamal LNG, etc.) auto filtered.
7. **Testimonial or KPI**: Quote or metric from relevant project.
8. **CTA**: Contact + PDF download (capability statement).

### 5. Projects (Index)
**Goal**: Showcase breadth, allow filtering by sector/service/location.

1. **Hero**: Banner with H1 “Projects” and filters preview.
2. **Filter bar**: Sticky at top with multi-select chips (Sectors: Transportation, Energy, Infrastructure, Defense, Residential/Commercial) and location dropdown.
3. **Project grid**: Responsive masonry cards (ratio 4:3). Each card shows image, title, location, sector, short summary, primary metrics (Value, Completion year).
4. **Map view toggle** (optional): Switch to map with pinned project markers.
5. **Featured story**: Highlight significant project (Crossrail) with full-width callout.
6. **CTA banner**: Encourage contact for project enquiries.

### 6. Project Case Study Template
**Goal**: Depth per project for credibility.

1. **Hero**: Hero image, overlay summary (Client, Location, Services, Value, Completion), CTA to download PDF.
2. **Project overview**: Narrative (two-column) summarizing scope referencing Projects.pdf text.
3. **Challenge → Solution → Results**: Three vertical bands with supporting bullet lists.
4. **Gallery**: Slider with full-width images, optional before/after.
5. **Key metrics**: Inline highlights (e.g., 1402 piles, 40,000m track, etc.).
6. **Team**: Profiles of leaders involved (pulled from About page).
7. **Related services/projects**: Grid of linked cards.
8. **Next step CTA**: Contact form widget embed.

### 7. Capabilities
**Goal**: Detail equipment, methodologies, QA/QC, HSE.

1. **Hero**: Image of operations centre.
2. **Capability pillars**: Cards for Engineering, Construction Management, Project Controls, Procurement.
3. **Tools & technology**: List of software/methodologies (BIM, modularisation, safety systems) referencing leadership experience.
4. **Quality & safety**: Accordion containing QA processes, HSE KPIs, certification downloads.
5. **Innovation highlight**: Panel on modularisation expertise (Yamal LNG case) with infographic callouts.
6. **CTA**: Invite to schedule capability briefing.

### 8. Careers
**Goal**: Attract talent and capture applications.

1. **Hero**: Community/team imagery with overlay copy.
2. **Why Rhematech**: Three-column benefits list (professional growth, safety culture, international exposure).
3. **Open roles**: Filterable list by department/location with “Apply” buttons triggering form modal.
4. **Employee spotlight**: Quote block with optional video.
5. **Application form**: Fields (Name, Email, Role of interest, Resume upload, Message). Includes privacy notice.

### 9. Contact / Request a Quote
**Goal**: Capture inquiries with context and provide immediate contact info.

1. **Hero**: Map background or office imagery with headline “Let’s Build the Future Together”.
2. **Contact methods**: Cards for phone (+234 80 3339 5485), email (info@rhematechpj.com), office address (brochure page 13).
3. **Inquiry form**: Multi-step (Project details, Scope, Timeline, Budget). File upload for RFP (PDF, DWG). Include consent checkbox.
4. **Map embed**: Interactive map showing Port Harcourt office, optional additional offices.
5. **FAQ accordion**: Common topics (project timelines, sectors, safety standards).

### 10. Insights / News (Optional)
**Goal**: Content hub for updates, thought leadership.

1. **Hero** with category filters.
2. **Article grid** with cards (image, title, excerpt, author, date).
3. **Featured insight**: Large card for hero article.
4. **Newsletter sign-up**.

### 11. Global Components
- **Forms**: Inline validation, success modals; optional progress steps for lengthy forms.
- **Modal**: 640px width, used for leadership bios, quick contact.
- **Notification toast**: For form submissions, uses red border accent.
- **Breadcrumbs**: Display on secondary pages.
- **Back-to-top**: Floating button bottom-right.

## Mobile Wireframe Considerations
- Sticky contact button bottom on mobile linking to call or form.
- Convert filter bar into slide-out bottom sheet with chips.
- Collapse large grids into swipeable cards with partial next card visible to indicate scroll.
- Ensure CTA bands remain visible with stacked layout and large tap targets (48px min height).

## Content Sourcing Notes
- Service and capability descriptions draw directly from brochure pages 3 & 11.
- Project case studies leverage Projects.pdf data: values, roles, completion years, metrics (e.g., 1402 piles for Acton Diveunder; 4000 tonne modules for Yamal LNG).
- Leadership bios reference brochure pages 4-5 and Projects.pdf energy sector accomplishments.
- Contact information mirrors brochure page 13 to ensure accuracy.

## Next Steps
- Validate copy excerpts with client, obtain additional imagery per section.
- Translate wireframes into low-fidelity Figma frames for visual alignment.
- Confirm any additional sections (e.g., client portals, document downloads) before high fidelity.
