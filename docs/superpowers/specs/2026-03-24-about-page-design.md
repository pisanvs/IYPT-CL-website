# About Page Design Spec
**Date:** 2026-03-24
**Route:** `/about`
**Language:** Spanish
**Status:** Approved

---

## Overview

A dedicated `/about` page for IYPT Chile 2026. Two-act structure: a story timeline followed by a team grid. Tone is a mix of institutional credibility and personal mission — the team's lived connection to the IYPT is the emotional core.

---

## Architecture

### Route & File
- New Next.js page at `app/about/page.tsx`
- Shares the same wrapper as `app/page.tsx`: `TypingEquationsLayer` + `Navigation` + `Footer`
- Navigation component gets a new link: `{ label: 'Nosotros', href: '/about' }`

### New files
- `app/about/page.tsx` — page entry point
- `components/sections/AboutStory.tsx` — story timeline section (server component, no `'use client'`)
- `components/sections/AboutTeam.tsx` — team grid section (server component; hover handled purely via CSS `.glass:hover` in `globals.css`, no client state needed)
- `data/team.ts` — team member data

### Reused components
- `Navigation`, `Footer`, `TypingEquationsLayer` — unchanged (see nav update below)
- `GlassCard` — used for team cards
- `SectionHeader` — used in both sections (note: `SectionHeader` mixes Tailwind utility classes with inline styles; this is existing behavior — do not normalize it)

---

## Page metadata

`app/about/page.tsx` exports its own metadata to override the root layout defaults:

```ts
export const metadata = {
  title: 'Nosotros — IYPT Chile 2026',
  description: 'El equipo y la historia detrás del Clasificatorio Nacional IYPT Chile 2026.',
};
```

---

## Navigation update

### New link
Add `{ label: 'Nosotros', href: '/about' }` to `NAV_LINKS` in `Navigation.tsx`.

### Anchor links — absolute form
The existing four nav links use fragment anchors (`#formato`, `#problemas-section`, etc.). These fragments only resolve from `/`. To make them work from `/about`, change all anchor `href` values to absolute form:

```ts
const NAV_LINKS = [
  { label: 'Formato',    href: '/#formato' },
  { label: 'Problemas',  href: '/#problemas-section' },
  { label: 'Calendario', href: '/#calendario' },
  { label: 'FAQ',        href: '/#faq' },
  { label: 'Nosotros',   href: '/about' },
];
```

### Brand logo link
Change `href="#"` → `href="/"` so it navigates back to the homepage from `/about`.

---

## Section 1 — Story Timeline (`AboutStory`)

### Layout
A 4-column horizontal grid on desktop with a horizontal connector line between beats. Stacks to a vertical single-column layout on mobile. This is a **new implementation** following the same visual pattern as `Timeline.tsx` — it does not share code with that component.

- Desktop: `grid-template-columns: repeat(4, 1fr)`, relative container with a horizontal `::before` line
- Mobile (`≤768px`): single column, hide the horizontal line

### Header
- Mono label: `Historia`
- Serif title: `Una historia chilena con el torneo de física más exigente del mundo`
- Short intro paragraph (1–2 sentences) in muted sans, font-weight 300

### Beats (4 items)

| # | Year | Heading | Copy |
|---|------|---------|------|
| 1 | 2015 | Chile se suma al IYPT | Primer clasificatorio nacional. Colegios de todo el país compitiendo por primera vez en Physics Fights. |
| 2 | 2018 | Beijing | Alianza Austral (Coyhaique) llega al torneo internacional — el punto más alto de la historia chilena en el IYPT. |
| 3 | 2025 | La chispa | Max Morel contacta a Marina Stepanova buscando retomar el proyecto. Meses después, el ex-participante polaco Mateusz Tarczynski escribe por su cuenta con la misma idea. Marina los presenta — y el IYPT Chile vuelve a existir. |
| 4 | 2026 | El equipo | Varios integrantes participaron en el torneo entre 2016 y 2019. Marina lleva el IYPT desde sus primeras ediciones en la URSS. Esa experiencia ahora está al servicio de Chile. |

### Beat anatomy (per item)
- Mono year label (e.g. `2018`) — `var(--text-faint)`, letter-spacing 2px, uppercase
- Serif heading — font-weight 500
- Sans paragraph — font-weight 300, `var(--text-secondary)`, font-size 0.9rem, line-height 1.65

---

## Section 2 — Team Grid (`AboutTeam`)

### Header
- Mono label: `El equipo organizador`
- Serif title: `Las personas detrás del torneo`

### Grid
- 3 columns desktop → 2 columns (≤1024px) → 1 column (≤640px)
- Cards: `GlassCard` with CSS hover handled by `.glass:hover` in `globals.css`
- **5-card orphan handling**: use `justify-items: center` on the grid so the lone 5th card on desktop is centered rather than left-aligned in its row

### Card anatomy
- **Avatar**: circular, 80px × 80px
  - Photo provided: `<img>` with `object-fit: cover`, `border-radius: 50%`
  - No photo (`null`): styled `<div>` with `background: var(--accent)`, white serif initial, same dimensions
- **Name**: `var(--serif)`, ~1.1rem, font-weight 500
- **Role**: `var(--sans)`, 0.78rem, `var(--text-tertiary)`
- **Affiliation badge**: pill — `border: 1px solid var(--border)`, `background: var(--bg-warm)`, `var(--mono)`, font-size 0.65rem, letter-spacing 1.5px, uppercase, padding 0.2rem 0.6rem, border-radius 4px

### Team data (`data/team.ts`)

```ts
export const TEAM = [
  { name: 'Maximiliano Morel',      role: 'Organizador Principal', affiliation: 'TEDxLINTAC Youth · Chile',        photo: null },
  { name: 'Marina Stepanova',       role: 'Representante IYPT',    affiliation: 'USACH · IYPT Chile',              photo: null },
  { name: 'Mateusz Tarczynski',     role: 'Coaching Técnico',      affiliation: 'IYPT Poland',                     photo: null },
  { name: 'Maximiliano Montenegro', role: 'Asesor Académico',      affiliation: 'Pontificia Universidad Católica', photo: null },
  { name: 'Sasha Churikova',        role: 'Asesora',               affiliation: "MIT '16",                         photo: null },
];
```

`photo` is `null` by default. Setting it to a path string (e.g. `'/team/max-morel.jpg'`) activates the `<img>` variant.

### Closing CTA
Below the grid, centered:
> *¿Quieres sumarte al equipo?* [**Escríbenos →**](mailto:contacto@iyptchile.cl)

---

## Responsive breakpoints
- `≤768px`: story timeline goes single-column, hide connector line
- `≤1024px`: team grid drops to 2 columns
- `≤640px`: team grid goes to 1 column
