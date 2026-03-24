import type { Step } from '@/types';
import { TIMELINE_DATES } from '@/data/timeline';

export const STEPS: Step[] = [
  {
    num: '1',
    title: 'Inscripción',
    body: 'Forma un equipo de 3 a 5 estudiantes de enseñanza media con un profesor guía. Registra tu equipo antes del cierre de inscripciones.',
    startDate: TIMELINE_DATES.apertura.start,
    endDate:   TIMELINE_DATES.cierre.end,
  },
  {
    num: '2',
    title: 'Investigación',
    body: 'Trabaja en los 17 problemas abiertos del IYPT 2026. Diseña experimentos, construye modelos teóricos, obtén y analiza resultados.',
    startDate: TIMELINE_DATES.apertura.start,
    endDate:   TIMELINE_DATES.clasificatorias.end,
  },
  {
    num: '3',
    title: 'Physics Fights',
    body: 'Presenta, cuestiona y revisa soluciones en debates estructurados. Un jurado de físicos evalúa la profundidad y rigor de cada equipo.',
    startDate: TIMELINE_DATES.clasificatorias.start,
    endDate:   TIMELINE_DATES.clasificatorias.end,
  },
  {
    num: '4',
    title: 'Selección',
    body: 'El equipo ganador del torneo nacional representa a Chile en el IYPT 2027 a nivel internacional.',
    startDate: TIMELINE_DATES.final.start,
    endDate:   TIMELINE_DATES.final.end,
  },
];
