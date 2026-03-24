'use client';

interface Props {
  count: number;
  activeIndex: number;
  visible: boolean;
  onDotClick: (idx: number) => void;
}

export default function ProblemsNavDots({ count, activeIndex, visible, onDotClick }: Props) {
  return (
    <div className={`problems-nav ${visible ? 'visible' : ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`problems-nav-dot ${activeIndex === i ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
          aria-label={`Problem ${i + 1}`}
        />
      ))}
    </div>
  );
}
