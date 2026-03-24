'use client';

import { useState, useEffect, useRef } from 'react';

export interface ProblemsScrollState {
  activeIndex: number;
  navVisible: boolean;
}

export function useProblemsScroll(
  wrapperRef: React.RefObject<HTMLElement | null>,
  numProblems: number,
): ProblemsScrollState {
  const [state, setState] = useState<ProblemsScrollState>({ activeIndex: 0, navVisible: false });
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const el = wrapperRef.current;
          if (!el) { tickingRef.current = false; return; }

          const rect = el.getBoundingClientRect();
          const sh = el.offsetHeight - window.innerHeight;
          const prog = Math.max(0, Math.min(0.9999, -rect.top / sh));
          const idx = Math.min(numProblems - 1, Math.floor(prog * numProblems));
          const inView = rect.top < window.innerHeight && rect.bottom > 0;

          setState({ activeIndex: idx, navVisible: inView });
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [wrapperRef, numProblems]);

  return state;
}
