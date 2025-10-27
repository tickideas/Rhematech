# Rhematech Web

Corporate marketing site for Rhematech Projects Limited built with Next.js 16 (App Router), Tailwind 4 tokens, and TypeScript.

## Core Commands

• Lint & type-check (ESLint + Next type analysis): `npm run lint`
• Build production bundle (includes type-checking): `npm run build`
• Start development server: `npm run dev`
• Install dependencies: `npm install`
• Clean reinstall (optional): remove `node_modules` then `npm install`
• Preview static output (after build): `npx serve out` *(placeholder until hosting is wired)*

All other scripts should wrap these tasks.

## Project Layout

├─ docs/ → Planning specs, wireframes, visual direction
├─ public/ → Static assets (logos, imagery, favicons)
├─ src/app/ → Next.js App Router pages, layouts, metadata
├─ src/components/ → Reusable UI, layout, and forms
├─ src/data/ → Structured content (services, projects, leadership)
├─ src/lib/ → Utility helpers

• Page implementations live **only** inside `src/app/`
• Shared UI lives **only** under `src/components/`
• Content/data definitions belong in `src/data/`

## Development Patterns & Constraints

Coding style
• TypeScript strict mode enabled; prefer explicit types on exports and data objects.
• Use Tailwind utilities mapped to the design tokens declared in `globals.css`.
• Follow semantic HTML and WCAG 2.2 AA contrast rules (see wireframes/specs).
• Keep components presentational unless they manage form state or navigation.
• Reuse `Button`, `Container`, and data-driven content wherever possible—avoid duplicate styling.
• Do not introduce new runtime dependencies without prior approval and justification in the PR.

## Git Workflow Essentials

1. Branch from `main` with a descriptive slug: `feature/<slug>` or `bugfix/<slug>`.
2. Run `npm run lint` (and `npm run build` if applicable) locally **before** committing.
3. Force pushes allowed only on your feature branch using `git push --force-with-lease`. Never force-push `main`.
4. Keep commits atomic; prefer meaningful prefixes (`feat: …`, `fix: …`, `style: …`).

## Evidence Required for Every PR

A pull request is reviewable when it includes:

- `npm run lint` passes (and `npm run build` when page logic is touched)
- Diff scoped to agreed directories (`src/`, `public/`, `docs/` as needed)
- **Proof artifact**
  • Bug fix → failing scenario reproduced (unit/integration test or manual repro) and verified after fix
  • Feature → screenshots or short Loom showing new UI/state, plus notes on responsive/a11y checks
- Concise commit/PR description covering intent, scope, and validation
- No introduction of sensitive data or unexplained runtime dependencies
