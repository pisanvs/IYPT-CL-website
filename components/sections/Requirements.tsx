import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { ELIGIBILITY } from '@/data/eligibility';

export default function Requirements() {
  return (
    <section id="requisitos" style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          label="Requisitos de participación"
          title="¿Quiénes pueden participar?"
        />

        <div
          className="elig-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginTop: '3rem' }}
        >
          {ELIGIBILITY.map(card => (
            <GlassCard key={card.title} style={{ padding: '2rem 1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>
                {card.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                {card.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .elig-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
