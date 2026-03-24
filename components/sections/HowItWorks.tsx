import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { STEPS } from '@/data/steps';
import type { Step } from '@/types';

function getStatus(step: Step): 'past' | 'active' | 'upcoming' {
  const today = new Date();
  const start = new Date(step.startDate);
  const end   = new Date(step.endDate);
  if (today > end)    return 'past';
  if (today >= start) return 'active';
  return 'upcoming';
}


const STATUS_COLOURS = {
  past:     { bar: '#22c55e', badge: 'rgba(34,197,94,0.12)',    badgeText: '#22c55e',        label: '✓ Completado' },
  active:   { bar: 'var(--accent)', badge: 'rgba(59,130,246,0.10)', badgeText: 'var(--accent)', label: 'En curso' },
  upcoming: { bar: 'var(--border)', badge: 'transparent',           badgeText: 'var(--text-faint)', label: 'Próximamente' },
};

export default function HowItWorks() {
  return (
    <section id="formato" style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="Formato de competencia"
          title="Cuatro etapas, un objetivo"
          description="El IYPT no es un examen escrito. Es un torneo de investigación y debate científico estructurado."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '3rem',
          }}
        >
          {STEPS.map(step => {
            const status = getStatus(step);
            const c      = STATUS_COLOURS[status];

            return (
              <GlassCard key={step.num} style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {/* step number */}
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--border)', lineHeight: 1, marginBottom: '1rem' }}>
                  {step.num}
                </div>

                {/* title + body */}
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.2px', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300, flexGrow: 1 }}>
                  {step.body}
                </p>

                {/* status badge */}
                <div style={{ marginTop: '1.5rem' }}>
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      fontSize: '0.58rem', fontFamily: 'var(--mono)', letterSpacing: '1px',
                      textTransform: 'uppercase', fontWeight: 600,
                      color: c.badgeText,
                      background: c.badge, borderRadius: '4px',
                      padding: '0.2rem 0.45rem',
                    }}
                  >
                    {status === 'active' && (
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'hw-pulse 1.5s infinite' }} />
                    )}
                    {c.label}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes hw-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
