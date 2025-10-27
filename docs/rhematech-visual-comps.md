# Rhematech Visual Design Direction

Status: Visual composition guidance for high-fidelity mockups. Aligns with `rhematech-wireframes.md` and `rhematech-design-tokens.md`.

## 1) Art Direction Overview
- **Mood**: Premium engineering excellence, energetic but disciplined. Blend crisp architectural photography with subtle energy motifs (diamonds, lightning traces) inspired by `Res/Rhematech FULL.png`.
- **Color strategy**: Dominant neutral canvas (`--rt-color-surface`, `--rt-color-neutral-900`) with controlled injections of red (`--rt-color-primary-500`) to draw attention. Secondary accents in deep charcoal and cool blues (`--rt-color-info-500`) for contrast.
- **Texture**: Use semi-transparent geometric overlays (diamond grid at 6% opacity) and diagonal cuts referencing bolt motif. Keep backgrounds minimal to maintain readability.
- **Imagery**: Favor high-resolution site images (e.g., `construction-workers-getty.jpg`, `construction.jpg`, WhatsApp site photos) with cooler color grading (boost clarity, reduce saturation 10%, add vignette) to avoid color clashes.

## 2) Home Page Visual Composition
### Hero (top fold)
- **Layout**: 60vh hero with background video loop or curated hero image (construction-workers-getty.jpg). Apply `--rt-gradient-hero` overlay from left to right for copy legibility.
- **Typography**: Display headline using `--rt-font-size-display`, weight bold, white text. Subheading at `--rt-font-size-h3` in neutral-100. Overline kicker ("Engineering • Construction • Project Management") in all caps, using `--rt-font-size-overline` with 60% opacity.
- **Buttons**: Primary CTA solid red gradient (`--rt-gradient-cta`), white text. Secondary ghost button with white border/text and hover fill to translucent white.
- **Stat chips**: Place along bottom edge, rectangular pill cards with translucent black background (`rgba(17,17,17,0.45)`) and thin red accent bar.

### Services Overview
- **Cards**: Grid of three per row. Use white card background, drop `--rt-shadow-sm`, white top accent strip 4px colored per service (assign unique accent per sector using tints of red/blue).
- **Iconography**: Outline icons within 48px diamond frames, using `--rt-color-primary-500` stroke.
- **Hover state**: Elevate to `--rt-shadow-md`, shift accent strip to 8px height, and animate icon fill to gradient.

### Featured Projects Slider
- **Background**: Neutral-100 strip spanning width with slight diagonal cut at top edge.
- **Cards**: 3D overlay style; each project card uses hero image with dark overlay, uppercase overline for sector, white text. CTA button ghost style with red text.
- **Navigation**: Minimal chevrons inside circular buttons using primary red with white icon.

### Differentiators + Metrics
- **Differentiators**: Column cards with subtle diamond watermark at 15% opacity top-right.
- **Metrics**: Large numerals (font-size 64px) in `--rt-color-primary-500`, label text uppercase neutral-600.

### Leadership Snapshot
- **Cards**: Portrait aspect ratio with grayscale headshots. Name in neutral-900, role in primary red. On hover, background shifts to neutral-100 with bottom border red.

### Testimonial
- **Layout**: Off-white background, quote in serif accent (`--rt-font-script`) for first line, rest in body font. Include quotation marks icon using diamond motif.

### Final CTA Band
- **Treatment**: Full-width red gradient background, white text, subtle diagonal light streak texture to echo lightning.
- **Elements**: Two-column layout with copy left, quick contact blocks right (phone, email) on white cards.

## 3) Secondary Page Visual Treatments

### About
- Hero uses monochrome project image with red overlay band at bottom containing breadcrumb.
- Timeline/story section uses split background (white left for text, neutral-100 right for key stats) with red vertical line connecting milestones.
- Leadership cards adopt same style as home but include "View Bio" button in neutral.
- Certifications section uses light gray background with card-lift effect for each certificate preview; include download icon in red.

### Services Index
- Introduce hero with geometric pattern background (diamond lattice). Headline white on charcoal block, with service icons arranged along right edge.
- Cards follow home style but integrate small background image fragment at bottom (diagonal mask).
- Process timeline uses step cards connected by red line with circular nodes (white center, red outline).

### Service Detail
- Hero features large image with tinted overlay matching service accent color. Use tab-style anchors (Overview, Approach, Results) center aligned.
- Approach section uses vertical stepper with numbered diamonds filled with red gradient; content blocks have alternating background (white / neutral-100).
- Case study slider uses full-bleed cards with overlay text and bottom metric bar.

### Projects Index
- Filter bar sits on sticky white surface with soft shadow; filter chips white with red border, filled red when active.
- Grid cards use aspect ratio 4:3 with image overlay gradient bottom third. Titles white, details in neutral-100. On hover, apply zoom-in (scale 1.03) and reveal quick actions ("View Case Study" button).
- Map toggle button sits top-right, styled as pill with icon.

### Project Case Study
- Hero uses split layout: left 60% image, right 40% summary panel with white background and red border accent.
- Challenge/solution/results sections use color-coded backgrounds: challenge (neutral-100), solution (white), results (pale green success tone) with vertical connectors.
- Metrics appear as horizontal cards with border-left in red and subtle glow.

### Capabilities
- Introduce full-width collage of equipment imagery with overlay headline. Underneath, capability cards with icon badges (diamond shape, red outline, neutral fill).
- QA/HSE accordions on light gray background with plus icons in red; open state fills header with neutral-100.

### Careers
- Hero shows team photo tinted with red gradient overlay, headline white.
- Benefits section uses horizontal cards with icon in colored circle (primary red). Alternate backgrounds to maintain rhythm.
- Job listings displayed in list with card hover turning border red; "Apply" buttons in solid red.
- Application form on white card with subtle drop shadow, file upload dropzone with dashed border in red.

### Contact / Request a Quote
- Hero merges aerial project imagery with gradient overlay; contact info cards layered on top with shadow.
- Form uses two-column layout desktop (details left, fields right) with progress indicator across top (diamonds).
- Map embed styled with rounded corners and overlay card for office hours/contact.

### Insights / News
- Masonry grid on neutral-100 background; cards highlight category chip in red, title in neutral-900. Featured article spans two columns.
- Newsletter block uses dark gray background with white text and red button.

## 4) Component Styling

### Buttons
- Primary: red gradient background, white text, 12px radius, drop shadow `--rt-shadow-sm`. Hover intensifies gradient, adds subtle outer glow.
- Secondary: white fill, red border, text red, hover fill red with white text.
- Tertiary: text-only red; underline animates from left to right on hover.

### Navigation
- Header background semi-transparent white (90%) on hero, solid white after scroll with subtle bottom border shadow.
- Active link indicates with red underline 4px and text color switch to primary red.
- Mobile drawer uses dark background with white text, large close icon, CTAs as full-width buttons.

### Cards & Panels
- Elevation indicates hierarchy: base `--rt-shadow-xs`, interactive `--rt-shadow-sm`, focus `--rt-shadow-md` + outline.
- Card titles use `--rt-font-size-h4` and accent rule (3px) left side in red.
- Stats cards: large numeral in red, background neutral-100, border radius 16px.

### Forms
- Inputs white background, 1px border. Focus adds red outline glow. Inline error text red with icon.
- Multi-step progress uses diamond indicators with numbers; completed diamonds filled red, upcoming outlined.
- CTA buttons full-width on mobile.

### Carousels/Sliders
- Use minimal controls: dot indicators red/neutral, arrow buttons circular with gradient.
- Cards have consistent padding and maintain 16px gap between slides.

### Data Visualization
- Bars/lines use primary red as first series, info blue as secondary. Utilize neutral gridlines and axis for clarity.

## 5) Imagery & Iconography
- Convert provided photography to consistent tone: apply LUT with cool shadows, warm highlights to align with red accent.
- When photos contain strong colors, add 20% black overlay to harmonize with palette.
- Crop images to highlight human activity or infrastructure scale.
- Icon set: line-based with 2px stroke, built on 32px diamond bounding box; use consistent rounded corners to echo logo terminals.
- For social icons and map pins, use filled diamond shape with white symbol.

## 6) Accessibility & Responsiveness
- Maintain min contrast ratio: red on white (4.1:1) is acceptable for large text; for smaller elements pair red with dark backgrounds or add outline.
- Provide accessible color alternatives for color-blind users: combine color with iconography (ticks, shapes).
- Ensure animations include fade/translate only; disable on reduced-motion preference.
- Multi-column layouts collapse gracefully to single column with maintained visual hierarchy (cards stack, hero copy centered, CTA buttons full width).

## 7) Asset Prep & Handoff
- Export hero imagery in AVIF/WebP at 2000px width desktop, 1200px tablet, 800px mobile.
- Prepare icon set in SVG with editable stroke.
- Create reusable background textures (diamond grid, diagonal streak) as SVG patterns.
- Deliver Figma (or similar) artboards per page with labeled sections referencing token names.

## 8) Next Steps
- Translate this direction into high-fidelity Figma frames for Home, Service Detail, Projects Index, Project Case Study, and Contact.
- Review with client to validate tone and imagery before component library build.
- Once approved, generate responsive variants and define Tailwind theme mapping to tokens.
