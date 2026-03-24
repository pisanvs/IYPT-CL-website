'use client';

import { useRef } from 'react';
import type { DrawFnKey } from '@/types';
import { useCanvasAnimation } from '@/hooks/useCanvasAnimation';

interface Props {
  drawFnKey: DrawFnKey | null;
  particleCount: number;
}

export default function ProblemsBgCanvas({ drawFnKey, particleCount }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCanvasAnimation(canvasRef, drawFnKey, particleCount);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    />
  );
}
