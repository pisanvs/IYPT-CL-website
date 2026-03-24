# About Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/about` page with a story timeline and team grid to the IYPT Chile 2026 site.

**Architecture:** Two new section components (`AboutStory`, `AboutTeam`) compose into a new `app/about/page.tsx`. Team data lives in `data/team.ts`. Navigation is updated to use absolute hrefs so anchor links resolve from both `/` and `/about`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4 + inline styles (mixed convention — follow existing patterns), no test framework (use `npm run build` + `npm run lint` for validation).

**Spec:** `docs/superpowers/specs/2026-03-24-about-page-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `data/team.ts` | Team member data array |
| Create | `components/sections/AboutStory.tsx` | 4-beat story timeline section |
| Create | `components/sections/AboutTeam.tsx` | 5-card team grid section |
| Create | `app/about/page.tsx` | Page entry point with metadata |
| Modify | `components/layout/Navigation.tsx` | Absolute anchor hrefs + Nosotros link + brand logo fix |

---

## Task 1: Team data

**Files:**
- Create: `data/team.ts`

- [ ] **Step 1: Create `data/team.ts`**

```ts
export interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  photo: string | null;
}

export const TEAM: TeamMember[] = [
  { name: 'Maximiliano Morel',      role: 'Organizador Principal', affiliation: 'TEDxLINTAC Youth · Chile',        photo: null },
  { name: 'Marina Stepanova',       role: 'Representante IYPT',    affiliation: 'USACH · IYPT Chile',              photo: null },
  { name: 'Mateusz Tarczynski',     role: 'Coaching Técnico',      affiliation: 'IYPT Poland',                     photo: null },
  { name: 'Maximiliano Montenegro', role: 'Asesor Académico',      affiliation: 'Pontificia Universidad Católica', photo: null },
  { name: 'Sasha Churikova',        role: 'Asesora',               affiliation: "MIT '16",                         photo: null },
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /home/pisanvs/code/iypt-app && npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add data/team.ts
git commit -m "feat: add team data"
```

---

## Task 2: Update Navigation

**Files:**
- Modify: `components/layout/Navigation.tsx`

The current `NAV_LINKS` uses bare fragment anchors (`#formato`, etc.) that silently 404 from any route other than `/`. Fix by switching to absolute form and adding the Nosotros link. Also fix the brand logo href.

- [ ] **Step 1: Update `NAV_LINKS` and brand logo in `Navigation.tsx`**

Replace the `NAV_LINKS` constant:

```ts
const NAV_LINKS = [
  { label: 'Formato',    href: '/#formato' },
  { label: 'Problemas',  href: '/#problemas-section' },
  { label: 'Calendario', href: '/#calendario' },
  { label: 'FAQ',        href: '/#faq' },
  { label: 'Nosotros',   href: '/about' },
];
```

Replace the brand logo link's `href`:

```tsx
// Before
<Link href="#" ...>

// After
<Link href="/" ...>
```

- [ ] **Step 2: Verify build**

```bash
cd /home/pisanvs/code/iypt-app && npm run build 2>&1 | tail -20
```

Expected: compiled successfully, no TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navigation.tsx
git commit -m "fix: use absolute hrefs in nav, add Nosotros link"
```

---

## Task 3: `AboutStory` section

**Files:**
- Create: `components/sections/AboutStory.tsx`

Server component (no `'use client'`). 4-beat horizontal timeline on desktop, vertical stack on mobile at ≤768px. New implementation — does not share code with `Timeline.tsx`.

- [ ] **Step 1: Create `components/sections/AboutStory.tsx`**

```tsx
import SectionHeader from '@/components/ui/SectionHeader';

const BEATS = [
  {
    year: '2015',
    heading: 'Chile se suma al IYPT',
    copy: 'Primer clasificatorio nacional. Colegios de todo el país compitiendo por primera vez en Physics Fights.',
  },
  {
    year: '2018',
    heading: 'Beijing',
    copy: 'Alianza Austral (Coyhaique) llega al torneo internacional — el punto más alto de la historia chilena en el IYPT.',
  },
  {
    year: '2025',
    heading: 'La chispa',
    copy: 'Max Morel contacta a Marina Stepanova buscando retomar el proyecto. Meses después, el ex-participante polaco Mateusz Tarczynski escribe por su cuenta con la misma idea. Marina los presenta — y el IYPT Chile vuelve a existir.',
  },
  {
    year: '2026',
    heading: 'El equipo',
    copy: 'Varios integrantes participaron en el torneo entre 2016 y 2019. Marina lleva el IYPT desde sus primeras ediciones en la URSS. Esa experiencia ahora está al servicio de Chile.',
  },
];

export default function AboutStory() {
  return (
    <section style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="Historia"
          title="Una historia chilena con el torneo de física más exigente del mundo"
          description="Chile lleva más de una década conectado al IYPT. Esta es la historia de cómo empezó, y por qué volvemos."
        />

        {/* Timeline grid */}
        <div
          className="about-story-grid"
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {/* Connector line */}
          <div
            className="about-story-line"
            style={{
              position: 'absolute',
              top: '8px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'var(--border)',
              zIndex: 0,
            }}
          />

          {BEATS.map((beat) => (
            <div key={beat.year} style={{ position: 'relative', zIndex: 1 }}>
              {/* Dot */}
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginBottom: '1.25rem',
                }}
              />

              {/* Year */}
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-faint)',
                  marginBottom: '0.5rem',
                }}
              >
                {beat.year}
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.3px',
                  lineHeight: 1.2,
                }}
              >
                {beat.heading}
              </h3>

              {/* Copy */}
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {beat.copy}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 2.5rem; }
          .about-story-line { display: none; }
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /home/pisanvs/code/iypt-app && npm run build 2>&1 | tail -20
```

Expected: compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/sections/AboutStory.tsx
git commit -m "feat: add AboutStory timeline section"
```

---

## Task 4: `AboutTeam` section

**Files:**
- Create: `components/sections/AboutTeam.tsx`

Server component. 3-col desktop → 2-col tablet (≤1024px) → 1-col mobile (≤640px). `justify-items: center` handles the 5-card orphan on the 3-col layout. Avatar renders an `<img>` when `photo` is a string, or a styled initial div when `null`.

- [ ] **Step 1: Create `components/sections/AboutTeam.tsx`**

```tsx
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { TEAM } from '@/data/team';
import type { TeamMember } from '@/data/team';
import Link from 'next/link';

function Avatar({ member }: { member: TeamMember }) {
  const initial = member.name.charAt(0);

  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          margin: '0 auto 1.25rem',
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.25rem',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '2rem',
          fontWeight: 500,
          color: 'white',
          lineHeight: 1,
        }}
      >
        {initial}
      </span>
    </div>
  );
}

export default function AboutTeam() {
  return (
    <section
      style={{
        padding: '6rem clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--bg-warm)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="El equipo organizador"
          title="Las personas detrás del torneo"
        />

        {/* Team grid */}
        <div
          className="about-team-grid"
          style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            justifyItems: 'center',
          }}
        >
          {TEAM.map((member) => (
            <GlassCard
              key={member.name}
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              <Avatar member={member} />

              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '0.3rem',
                  letterSpacing: '-0.2px',
                }}
              >
                {member.name}
              </div>

              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.78rem',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.75rem',
                }}
              >
                {member.role}
              </div>

              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-warm)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  color: 'var(--text-tertiary)',
                }}
              >
                {member.affiliation}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* Closing CTA */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              fontWeight: 300,
            }}
          >
            ¿Quieres sumarte al equipo?{' '}
            <Link
              href="mailto:contacto@iyptchile.cl"
              style={{
                color: 'var(--accent)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Escríbenos →
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .about-team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /home/pisanvs/code/iypt-app && npm run build 2>&1 | tail -20
```

Expected: compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/sections/AboutTeam.tsx
git commit -m "feat: add AboutTeam grid section"
```

---

## Task 5: `/about` page

**Files:**
- Create: `app/about/page.tsx`

Composes the two new sections with the shared wrappers. Exports its own `metadata` to override the root layout's homepage title.

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TypingEquationsLayer from '@/components/sections/TypingEquationsLayer';
import AboutStory from '@/components/sections/AboutStory';
import AboutTeam from '@/components/sections/AboutTeam';

export const metadata: Metadata = {
  title: 'Nosotros — IYPT Chile 2026',
  description: 'El equipo y la historia detrás del Clasificatorio Nacional IYPT Chile 2026.',
};

export default function AboutPage() {
  return (
    <>
      <TypingEquationsLayer />
      <Navigation />
      <main style={{ paddingTop: '4rem' }}>
        <AboutStory />
        <AboutTeam />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify full build**

```bash
cd /home/pisanvs/code/iypt-app && npm run build 2>&1 | tail -30
```

Expected: compiled successfully, routes listed include `/about`

- [ ] **Step 3: Lint**

```bash
cd /home/pisanvs/code/iypt-app && npm run lint 2>&1
```

Expected: no errors

- [ ] **Step 4: Smoke-test locally**

```bash
npm run dev
```

Navigate to `http://localhost:3000/about` and verify:
- Navigation shows "Nosotros" link (active) and all four anchor links
- Clicking "IYPT Chile" brand takes you back to `/`
- Clicking "Formato" etc. takes you to `/#formato` (homepage sections)
- Story section renders 4 beats with year labels, headings, copy
- Team section renders 5 cards with navy initial avatars, name, role, affiliation badge
- Closing CTA link points to `mailto:contacto@iyptchile.cl`
- Mobile: story stacks vertically, team grid goes to 1 column

- [ ] **Step 5: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add /about page"
```
