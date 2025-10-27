# Rhematech Design Tokens & System Foundations

Status: Draft token catalogue to guide UI implementation. Values expressed in CSS variables (custom properties) for use with Tailwind, CSS Modules, or design tooling.

## Token Naming
- Prefix all tokens with `--rt-` (e.g., `--rt-color-primary`).
- Group tokens by category: `color`, `typography`, `spacing`, `sizing`, `radius`, `shadow`, `border`, `opacity`, `z`.
- Use scale suffixes (`-100`, `-200`, etc.) to indicate intensity.

## Color Palette

### Brand Core
| Token | Value | Usage |
| --- | --- | --- |
| `--rt-color-primary-500` | `#E31B23` | Primary CTAs, links, highlights |
| `--rt-color-primary-600` | `#C0171E` | Hover/pressed state for primary buttons |
| `--rt-color-primary-700` | `#921117` | Active states, focus rings on dark |
| `--rt-color-neutral-900` | `#111111` | Headings on light backgrounds |
| `--rt-color-neutral-800` | `#1F2933` | Body text primary |
| `--rt-color-neutral-600` | `#4B5563` | Secondary text |
| `--rt-color-neutral-400` | `#9CA3AF` | Metadata, disabled text |
| `--rt-color-neutral-200` | `#E5E7EB` | Dividers, input borders |
| `--rt-color-neutral-100` | `#F3F4F6` | Panel backgrounds |
| `--rt-color-surface` | `#FFFFFF` | Default background |
| `--rt-color-surface-alt` | `#F9FAFB` | Section alternation |
| `--rt-color-success-500` | `#0E9F6E` | Success badges |
| `--rt-color-warning-500` | `#D97706` | Notices |
| `--rt-color-info-500` | `#2563EB` | Informational accents |
| `--rt-color-overlay` | `rgba(17,17,17,0.64)` | Modals, hero overlays |

### Gradients & Accents
- `--rt-gradient-hero`: linear-gradient(135deg, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.25) 60%, rgba(227,27,35,0.64) 100%)
- `--rt-gradient-cta`: linear-gradient(135deg, #E31B23 0%, #921117 100%)

## Typography Tokens

### Font Families
- `--rt-font-heading`: "Manrope", "Inter", "Segoe UI", Arial, sans-serif
- `--rt-font-body`: "Inter", "Segoe UI", Arial, sans-serif
- `--rt-font-script`: "Playfair Display", "Georgia", serif (for optional tagline callouts only)

### Font Sizes & Line Heights
| Token | Size | Line Height | Usage |
| --- | --- | --- | --- |
| `--rt-font-size-display` | 3.5rem (56px) | 1.08 | Hero headlines (desktop) |
| `--rt-font-size-h1` | 2.75rem (44px) | 1.12 | Page titles |
| `--rt-font-size-h2` | 2rem (32px) | 1.2 | Section headings |
| `--rt-font-size-h3` | 1.5rem (24px) | 1.3 | Sub-headings |
| `--rt-font-size-h4` | 1.25rem (20px) | 1.4 | Card titles |
| `--rt-font-size-body` | 1rem (16px) | 1.6 | Body text |
| `--rt-font-size-body-sm` | 0.9375rem (15px) | 1.5 | Secondary text |
| `--rt-font-size-caption` | 0.8125rem (13px) | 1.4 | Metadata |
| `--rt-font-size-overline` | 0.75rem (12px) | 1.4 | Label, kicker |

### Font Weights
- `--rt-font-weight-regular`: 400
- `--rt-font-weight-medium`: 500
- `--rt-font-weight-semibold`: 600
- `--rt-font-weight-bold`: 700

### Letter Spacing
- Headings: `--rt-letter-spacing-heading`: -0.01em
- Body: `--rt-letter-spacing-body`: 0em
- Overline: `--rt-letter-spacing-overline`: 0.12em (uppercase)

## Spacing & Sizing
- `--rt-space-xxs`: 4px
- `--rt-space-xs`: 8px
- `--rt-space-sm`: 12px
- `--rt-space-md`: 16px
- `--rt-space-lg`: 24px
- `--rt-space-xl`: 32px
- `--rt-space-2xl`: 48px
- `--rt-space-3xl`: 64px
- `--rt-space-4xl`: 96px

### Layout
- Section padding desktop: `--rt-section-padding-y`: 64px
- Section padding mobile: `--rt-section-padding-y-mobile`: 40px
- Max content width: `--rt-max-width`: 1200px
- Content inset: `--rt-content-padding`: clamp(16px, 6vw, 48px)

## Breakpoints
| Token | Width |
| --- | --- |
| `--rt-breakpoint-sm` | 640px |
| `--rt-breakpoint-md` | 768px |
| `--rt-breakpoint-lg` | 1024px |
| `--rt-breakpoint-xl` | 1280px |
| `--rt-breakpoint-2xl` | 1536px |

Responsive typography should scale using clamp. Example for H1: `clamp(2.25rem, 3vw + 1rem, 2.75rem)`.

## Border Radius
- `--rt-radius-sm`: 6px (inputs, tags)
- `--rt-radius-md`: 12px (cards, buttons)
- `--rt-radius-lg`: 20px (modals, hero overlays)
- `--rt-radius-pill`: 999px (badges, chips)

## Elevation & Shadows
- `--rt-shadow-xs`: 0 1px 2px rgba(17,17,17,0.08)
- `--rt-shadow-sm`: 0 4px 12px rgba(17,17,17,0.12)
- `--rt-shadow-md`: 0 10px 24px rgba(17,17,17,0.16)
- `--rt-shadow-lg`: 0 18px 40px rgba(17,17,17,0.18)
- `--rt-shadow-focus`: 0 0 0 3px rgba(227,27,35,0.32)

## Border & Divider Tokens
- `--rt-border-width-thin`: 1px
- `--rt-border-width-thick`: 2px
- `--rt-border-default`: 1px solid var(--rt-color-neutral-200)
- `--rt-divider`: 1px solid rgba(17,17,17,0.08)

## State Tokens
| State | Background | Border | Text |
| --- | --- | --- | --- |
| Hover | `rgba(227,27,35,0.08)` | `#E31B23` | `#E31B23` |
| Active | `rgba(227,27,35,0.16)` | `#C0171E` | `#C0171E` |
| Focus | `transparent` | `var(--rt-shadow-focus)` (outline) | inherit |
| Disabled | `var(--rt-color-neutral-100)` | `var(--rt-color-neutral-200)` | `var(--rt-color-neutral-400)` |

## Component Tokens

### Buttons
- Height: 48px desktop / 44px mobile
- Padding: `0 var(--rt-space-xl)` primary, `0 var(--rt-space-lg)` secondary
- Text: uppercase overline style optional for primary; otherwise medium weight.
- Icon gap: `var(--rt-space-sm)`
- Ghost buttons: border `1px solid var(--rt-color-primary-500)` with text same color.

### Cards
- Padding: `var(--rt-space-xl)` desktop, `var(--rt-space-lg)` mobile
- Background: `var(--rt-color-surface)`
- Shadow: use `--rt-shadow-sm` default; elevate to `--rt-shadow-md` on hover.
- Accent bar (optional): 4px top border using service color accent.

### Forms
- Input height: 48px, padding `0 var(--rt-space-md)`
- Border radius: `--rt-radius-sm`
- Border color default `var(--rt-color-neutral-200)`, focus `var(--rt-color-primary-500)` with `--rt-shadow-focus`.
- Error color: `#B91C1C`
- Helper text size: `--rt-font-size-caption`

### Navigation
- Header height: 88px desktop / 64px mobile
- Desktop menu spacing: 32px between items
- Mega menu panel: width 900px, padding `var(--rt-space-2xl)`
- Mobile drawer: width 320px, background `var(--rt-color-neutral-900)` with text `#FFFFFF`

### Badges & Chips
- Height: 32px
- Padding: `0 var(--rt-space-md)`
- Variants: Default neutral (`--rt-color-neutral-100` background), Primary (`--rt-color-primary-500` background, white text), Outline.

### Tables/Data
- Header background: `var(--rt-color-neutral-100)`
- Row hover: `rgba(227,27,35,0.06)`
- Zebra stripe: `rgba(17,17,17,0.02)` alternating rows.

## Iconography & Motifs
- Icon grid uses 32px bounding box, stroke set to 2px, align with diamond/lighting motif.
- Use thin diamond pattern overlays at 10% opacity for section backgrounds.

## Motion & Interaction
- Duration scale: `--rt-motion-fast` 150ms, `--rt-motion-base` 250ms, `--rt-motion-slow` 400ms.
- Easing: `--rt-ease-standard` cubic-bezier(0.4, 0, 0.2, 1); `--rt-ease-emphasized` cubic-bezier(0.4, 0, 0.2, 1.4) for hero transitions.
- Reduce motion: disable parallax, replace video backgrounds with static image when `prefers-reduced-motion` true.

## Accessibility Targets
- Minimum contrast: 4.5:1 for body text, 3:1 for large text (>24px).
- Focus outline uses `--rt-shadow-focus`, ensure 2px offset for WCAG compliance.
- Minimum touch target: 48px square.

## Data Visualization (Optional)
- Primary series: `#E31B23`
- Secondary series: `#2563EB`
- Tertiary series: `#0E9F6E`
- Axis text: `var(--rt-color-neutral-600)`
- Gridlines: `rgba(17,17,17,0.08)`

## Token Delivery
- Export tokens to JSON for integration with design tooling (Figma Tokens, Style Dictionary) using the same naming convention.
- Provide CSS variables in `src/styles/tokens.css` (future step) and configure Tailwind theme via `tailwind.config.js` referencing these values.

## References
- Color palette derived from `Res/Rhematech FULL.png`.
- Service content and sector names from `Res/Company Brochure Final V5b.pdf` and `Res/Projects.pdf`.
- Leadership bio cues from brochure pages 4-5; safety/process emphasis from page 11.
