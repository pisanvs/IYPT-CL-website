import type { Problem } from '@/types';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    displayNum: 'Problema 01 de 17',
    title: 'Invent Yourself',
    description:
      'Un sifón que se autoactiva puede construirse con un tubo rígido doblado en una forma específica. Cuando se sumerge parcialmente en agua, comienza a sifonear sin necesidad de succión inicial. Investiga cómo los parámetros relevantes, como la geometría, afectan el proceso.',
    drawFnKey: 'siphon',
    particleCount: 120,
  },
  {
    id: 2,
    displayNum: 'Problema 02 de 17',
    title: 'Electrical Damping',
    description:
      'Un imán suspendido por un resorte exhibe movimiento armónico simple. Si el imán oscila dentro de una bobina conectada a una resistencia, su movimiento se amortigua. Investiga los factores que afectan el amortiguamiento.',
    drawFnKey: 'wave',
    particleCount: 0,
  },
  {
    id: 3,
    displayNum: 'Problema 03 de 17',
    title: 'Ring Fountain',
    description:
      'Cuando un anillo metálico plano cae desde cierta altura a un tanque de agua, genera una fuente que puede disparar agua alto en el aire. ¿Cómo depende la altura máxima de la fuente de los parámetros del anillo?',
    drawFnKey: 'drops',
    particleCount: 80,
  },
  {
    id: 9,
    displayNum: 'Problema 09 de 17',
    title: 'Levitation Control',
    description:
      'Pequeñas láminas de grafito pueden levitar sobre imanes de neodimio configurados de cierta manera. Al iluminar la superficie del grafito con luz, es posible controlar su movimiento. Explica e investiga el fenómeno.',
    drawFnKey: 'field',
    particleCount: 0,
  },
  {
    id: 11,
    displayNum: 'Problema 11 de 17',
    title: 'Sweet Monochromator',
    description:
      'Pasa luz blanca polarizada linealmente a través de una columna de solución de azúcar. La luz transmitida, observada a través de un polarizador, puede aparecer coloreada. Construye un monocromador y optimiza para el ancho de banda más estrecho.',
    drawFnKey: 'spectrum',
    particleCount: 0,
  },
  {
    id: 17,
    displayNum: 'Problema 17 de 17',
    title: 'Travelling Flame',
    description:
      'Una llama puede propagarse continuamente alrededor de una bandeja anular que contiene una capa delgada de líquido inflamable. Investiga cómo las características de esta llama viajera dependen de los parámetros relevantes.',
    drawFnKey: 'flame',
    particleCount: 90,
  },
];
