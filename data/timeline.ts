import type { TimelineMilestone } from '@/types';

// ─── Placeholder dates — update these when confirmed ─────────────────────────
export const TIMELINE_DATES = {
  apertura:       { start: '2026-03-01', end: '2026-04-30' },
  cierre:         { start: '2026-04-30', end: '2026-04-30' },
  clasificatorias:{ start: '2026-05-01', end: '2026-05-31' },
  final:          { start: '2026-06-01', end: '2026-06-30' },
  internacional:  { start: '2027-07-01', end: '2027-07-15' },
};

export const TIMELINE: TimelineMilestone[] = [
  {
    startDate: TIMELINE_DATES.apertura.start,
    endDate:   TIMELINE_DATES.apertura.end,
    label:     'Marzo 2026',
    title:     'Apertura de inscripciones',
    description: 'Registro de equipos vía formulario.',
  },
  {
    startDate: TIMELINE_DATES.cierre.start,
    endDate:   TIMELINE_DATES.cierre.end,
    label:     '30 Abril 2026',
    title:     'Cierre de inscripciones',
    description: 'Plazo final. Sin excepciones.',
  },
  {
    startDate: TIMELINE_DATES.clasificatorias.start,
    endDate:   TIMELINE_DATES.clasificatorias.end,
    label:     'Mayo 2026',
    title:     'Rondas clasificatorias',
    description: 'Physics Fights presenciales.',
  },
  {
    startDate: TIMELINE_DATES.final.start,
    endDate:   TIMELINE_DATES.final.end,
    label:     'Junio 2026',
    title:     'Final nacional',
    description: 'Selección del equipo Chile.',
  },
  {
    startDate: TIMELINE_DATES.internacional.start,
    endDate:   TIMELINE_DATES.internacional.end,
    label:     '2027',
    title:     'IYPT Internacional',
    description: 'El equipo Chile compite a nivel mundial.',
  },
];
