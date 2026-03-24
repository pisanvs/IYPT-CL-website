'use client';

import { useEffect, useRef } from 'react';
import type { DrawFnKey, Particle } from '@/types';
import { DRAW_FNS } from '@/lib/canvasAnimations';

function initParticles(count: number, w: number, h: number): Particle[] {
  const parts: Particle[] = [];
  for (let i = 0; i < count; i++) {
    parts.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      r: Math.random() * 3 + 1,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return parts;
}

export function useCanvasAnimation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  drawFnKey: DrawFnKey | null,
  particleCount: number,
): void {
  const rafIdRef      = useRef<number>(0);
  const partsRef      = useRef<Particle[]>([]);
  const drawFnKeyRef  = useRef<DrawFnKey | null>(drawFnKey);
  const dimsRef       = useRef({ w: 0, h: 0 });
  const needsResizeRef = useRef(true);

  // Sync draw fn key ref without restarting the loop
  useEffect(() => {
    drawFnKeyRef.current = drawFnKey;
    if (drawFnKey && particleCount > 0) {
      partsRef.current = initParticles(particleCount, dimsRef.current.w, dimsRef.current.h);
    }
  }, [drawFnKey, particleCount]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => { needsResizeRef.current = true; };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start RAF loop once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w === dimsRef.current.w && h === dimsRef.current.h) return;
      dimsRef.current = { w, h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      needsResizeRef.current = false;
    }

    function loop(t: number) {
      if (needsResizeRef.current || dimsRef.current.w === 0) {
        resizeCanvas();
      }
      const { w, h } = dimsRef.current;
      ctx!.clearRect(0, 0, w, h);

      const key = drawFnKeyRef.current;
      if (key && w > 0) {
        DRAW_FNS[key]({ ctx: ctx!, width: w, height: h, t, parts: partsRef.current });
      }
      rafIdRef.current = requestAnimationFrame(loop);
    }

    rafIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafIdRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
