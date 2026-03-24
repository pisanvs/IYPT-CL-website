'use client';

import { useState, useEffect, useRef } from 'react';

export interface ScrollProgress {
  scrollY: number;
  vh: number;
}

export function useScrollProgress(): ScrollProgress {
  const [progress, setProgress] = useState<ScrollProgress>({ scrollY: 0, vh: 0 });
  const tickingRef = useRef(false);

  useEffect(() => {
    // Initialize with current values
    setProgress({ scrollY: window.scrollY, vh: window.innerHeight });

    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          setProgress({ scrollY: window.scrollY, vh: window.innerHeight });
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
