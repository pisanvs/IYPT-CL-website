import type { EquationDescriptor } from '@/types';

export const EQUATIONS: EquationDescriptor[] = [
  // Left edge — top to bottom
  { text: '∇ × E = −∂B/∂t', x: '2%',   y: '12%', size: 12, grey: 185, start: 0,   end: 6  },
  { text: 'F = ma',          x: '3%',   y: '28%', size: 14, grey: 195, start: 1,   end: 7  },
  { text: 'PV = nRT',        x: '1.5%', y: '44%', size: 11, grey: 175, start: 2,   end: 8  },
  { text: 'iℏ ∂ψ/∂t = Ĥψ', x: '2.5%', y: '58%', size: 12, grey: 190, start: 3.5, end: 9  },
  { text: 'ΔS ≥ 0',          x: '4%',   y: '72%', size: 13, grey: 200, start: 5,   end: 11 },
  { text: 'T = 2π√(l/g)',    x: '1%',   y: '86%', size: 11, grey: 180, start: 6,   end: 12 },
  // Right edge — top to bottom
  { text: 'E = mc²',         x: '88%',  y: '10%', size: 13, grey: 190, start: 0.5, end: 5  },
  { text: '∮ B · dl = μ₀I', x: '86%',  y: '24%', size: 11, grey: 180, start: 1.5, end: 7  },
  { text: 'λ = h/p',         x: '90%',  y: '38%', size: 12, grey: 200, start: 2.5, end: 8  },
  { text: 'Δx·Δp ≥ ℏ/2',    x: '87%',  y: '52%', size: 11, grey: 175, start: 4,   end: 10 },
  { text: '∇²φ = −ρ/ε₀',   x: '89%',  y: '66%', size: 12, grey: 185, start: 5.5, end: 11 },
  { text: 'S = k ln Ω',      x: '91%',  y: '78%', size: 13, grey: 195, start: 7,   end: 13 },
  { text: 'v = fλ',          x: '85%',  y: '90%', size: 11, grey: 205, start: 8,   end: 14 },
  // Scattered deeper
  { text: 'Q = mcΔT',        x: '5%',   y: '95%', size: 10, grey: 200, start: 9,   end: 15 },
  { text: 'σT⁴',             x: '92%',  y: '5%',  size: 10, grey: 210, start: 3,   end: 9  },
  { text: 'L = Iω',          x: '3.5%', y: '5%',  size: 11, grey: 195, start: 7,   end: 13 },
];
