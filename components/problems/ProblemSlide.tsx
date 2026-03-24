import type { Problem } from '@/types';

interface Props {
  problem: Problem;
  isActive: boolean;
}

export default function ProblemSlide({ problem, isActive }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 20,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: isActive ? 'auto' : 'none',
        padding: '3rem 2rem 3rem 5%',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          textAlign: 'left',
          padding: '2.5rem',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(28px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
          border: '1px solid rgba(255,255,255,0.85)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '0.75rem' }}
        >
          {problem.displayNum}
        </div>
        <div
          style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: '1rem' }}
        >
          {problem.title}
        </div>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}>
          {problem.description}
        </p>
      </div>
    </div>
  );
}
