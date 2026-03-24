'use client';

import { useMemo } from 'react';
import type { EquationDescriptor } from '@/types';

export interface EquationState extends EquationDescriptor {
  charCount: number;
  isTyping: boolean;
}

function easeInOut(p: number): number {
  return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
}

export function useTypingEquations(
  equations: EquationDescriptor[],
  scrollY: number,
  vh: number,
): EquationState[] {
  return useMemo(() => {
    return equations.map(eq => {
      const startPx = eq.start * vh;
      const endPx   = eq.end * vh;
      const midPx   = (startPx + endPx) / 2;
      const halfRange = (endPx - startPx) / 2;

      let progress = 0;
      if (scrollY > startPx && scrollY < endPx) {
        if (scrollY <= midPx) {
          progress = (scrollY - startPx) / halfRange;
        } else {
          progress = (endPx - scrollY) / halfRange;
        }
      }

      progress = Math.max(0, Math.min(1, progress));
      progress = easeInOut(progress);

      const charCount = Math.round(progress * eq.text.length);
      const isTyping  = charCount > 0 && charCount < eq.text.length;

      return { ...eq, charCount, isTyping };
    });
  }, [equations, scrollY, vh]);
}
