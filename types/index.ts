// ─── Canvas ───────────────────────────────────────────────────────────────────

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

export interface CanvasDrawContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  t: number;
  parts: Particle[];
}

export type DrawFnKey = 'siphon' | 'wave' | 'drops' | 'field' | 'spectrum' | 'flame';
export type DrawFn = (ctx: CanvasDrawContext) => void;

// ─── Problems ─────────────────────────────────────────────────────────────────

export interface Problem {
  id: number;
  displayNum: string;
  title: string;
  description: string;
  drawFnKey: DrawFnKey;
  particleCount: number;
}

// ─── Equations ────────────────────────────────────────────────────────────────

export interface EquationDescriptor {
  text: string;
  x: string;
  y: string;
  size: number;
  grey: number;
  start: number;
  end: number;
}

// ─── Content ──────────────────────────────────────────────────────────────────

export interface Step {
  num: string;
  title: string;
  body: string;
  startDate: string; // ISO 'YYYY-MM-DD'
  endDate: string;
}

export interface TimelineMilestone {
  startDate: string; // ISO 'YYYY-MM-DD'
  endDate: string;   // ISO 'YYYY-MM-DD'
  label: string;     // display label e.g. "Marzo 2026"
  title: string;
  description: string;
}

export interface EligibilityCard {
  title: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}
