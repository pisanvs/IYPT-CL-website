import SectionHeader from '@/components/ui/SectionHeader';
import { TIMELINE } from '@/data/timeline';
import type { TimelineMilestone } from '@/types';

// ─── Status colours ───────────────────────────────────────────────────────────
const STATUS = {
  past:     { dot: '#22c55e', text: '#22c55e', label: '#6b7280', bg: 'rgba(34,197,94,0.08)'  },
  active:   { dot: 'var(--accent)', text: 'var(--accent)', label: 'var(--accent)', bg: 'rgba(59,130,246,0.08)' },
  upcoming: { dot: 'var(--border)', text: 'var(--text-tertiary)', label: 'var(--text-faint)',  bg: 'transparent' },
};

function getStatus(item: TimelineMilestone): 'past' | 'active' | 'upcoming' {
  const today = new Date();
  const start = new Date(item.startDate);
  const end   = new Date(item.endDate);
  if (today > end)   return 'past';
  if (today >= start) return 'active';
  return 'upcoming';
}

function getProgressPct(milestones: TimelineMilestone[]): number {
  const first = new Date(milestones[0].startDate).getTime();
  const last  = new Date(milestones[milestones.length - 1].endDate).getTime();
  const today = Date.now();
  if (today <= first) return 0;
  if (today >= last)  return 100;
  return Math.round(((today - first) / (last - first)) * 100);
}

export default function Timeline() {
  const progressPct = getProgressPct(TIMELINE);

  return (
    <section
      id="calendario"
      style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', background: 'var(--bg-warm)', position: 'relative', zIndex: 20 }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="Calendario 2026"
          title="Fechas relevantes"
          description="Cada etapa tiene plazos definidos. No se otorgan extensiones."
        />

        {/* ── Progress bar ──────────────────────────────────────────────────── */}
        <div style={{ marginTop: '3rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
              Progreso del torneo
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '1px', color: 'var(--accent)', fontWeight: 600 }}>
              {progressPct}%
            </span>
          </div>
          <div style={{ height: '4px', background: 'var(--border-light)', borderRadius: '99px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progressPct}%`,
                borderRadius: '99px',
                background: 'linear-gradient(90deg, #22c55e, var(--accent))',
                transition: 'width 0.6s ease',
              }}
            />
          </div>
        </div>

        {/* ── Milestones ────────────────────────────────────────────────────── */}
        <div
          className="timeline-grid"
          style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', position: 'relative' }}
        >
          {/* connecting line */}
          <div
            className="tl-line"
            style={{
              position: 'absolute',
              top: '18px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'var(--border-light)',
              zIndex: 0,
            }}
          />

          {TIMELINE.map(item => {
            const status = getStatus(item);
            const c = STATUS[status];
            return (
              <div
                key={item.startDate}
                className="tl-item"
                style={{ textAlign: 'center', padding: '0 0.75rem', position: 'relative' }}
              >
                {/* dot */}
                <div
                  style={{
                    width: '12px', height: '12px', borderRadius: '50%',
                    background: status === 'upcoming' ? 'var(--bg-warm)' : c.dot,
                    border: `2px solid ${c.dot}`,
                    margin: '12px auto 1rem',
                    position: 'relative', zIndex: 1,
                    boxShadow: status === 'active' ? `0 0 0 4px ${STATUS.active.bg}` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}
                />

                {/* card */}
                <div
                  style={{
                    background: status === 'past' ? STATUS.past.bg : status === 'active' ? STATUS.active.bg : 'transparent',
                    border: `1px solid ${status === 'upcoming' ? 'var(--border-light)' : c.dot + '33'}`,
                    borderRadius: '8px',
                    padding: '0.8rem 0.6rem',
                    transition: 'background 0.3s',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '1.5px',
                    textTransform: 'uppercase', color: c.label, marginBottom: '0.35rem', fontWeight: 600,
                  }}>
                    {item.label}
                  </div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: status === 'upcoming' ? 'var(--text-tertiary)' : 'var(--text)', letterSpacing: '-0.2px', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', lineHeight: 1.4, fontWeight: 300 }}>
                    {item.description}
                  </p>
                  {status === 'active' && (
                    <div style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.58rem', fontFamily: 'var(--mono)', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'tl-pulse 1.5s infinite' }} />
                      En curso
                    </div>
                  )}
                  {status === 'past' && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.58rem', fontFamily: 'var(--mono)', letterSpacing: '1px', textTransform: 'uppercase', color: '#22c55e', fontWeight: 600 }}>
                      ✓ Completado
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes tl-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @media (max-width: 900px) {
          .timeline-grid { grid-template-columns: 1fr !important; gap: 1rem; }
          .tl-line        { display: none; }
          .tl-item        { text-align: left !important; display: flex !important; gap: 1rem; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
