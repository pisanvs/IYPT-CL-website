'use client';

import { EQUATIONS } from '@/data/equations';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTypingEquations } from '@/hooks/useTypingEquations';

export default function TypingEquationsLayer() {
  const { scrollY, vh } = useScrollProgress();
  const equations = useTypingEquations(EQUATIONS, scrollY, vh);

  return (
    <div className="eq-layer" aria-hidden="true">
      {equations.map((eq, i) => (
        <div
          key={i}
          className={`eq-item${eq.isTyping ? ' typing' : ''}`}
          style={{
            left: eq.x,
            top: eq.y,
            fontSize: `${eq.size}px`,
            color: `rgb(${eq.grey},${eq.grey},${eq.grey})`,
          }}
        >
          <span className="eq-text">{eq.text.slice(0, eq.charCount)}</span>
          <span className="eq-cursor" />
        </div>
      ))}
    </div>
  );
}
