import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { STATS } from '@/data/stats';

export default function WhatIsIypt() {
  return (
    <section style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader label="Acerca del torneo" title="¿Qué es el IYPT?" />

        <div
          className="what-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'start' }}
        >
          {/* Prose */}
          <div>
            {[
              'El International Young Physicists\' Tournament es una competencia científica por equipos para estudiantes de enseñanza media, conocida informalmente como la "Copa Mundial de Física". A diferencia de las olimpiadas tradicionales, el IYPT no es un examen de alternativas ni un certamen individual.',
              'Los equipos investigan problemas abiertos durante meses, diseñan y ejecutan experimentos, construyen modelos teóricos y luego defienden públicamente sus conclusiones en debates estructurados denominados Physics Fights, donde asumen los roles de Reportero, Oponente y Revisor frente a un jurado internacional.',
              'El torneo se realiza anualmente desde 1988. Cuenta con el reconocimiento de la Unión Internacional de Física Pura y Aplicada (IUPAP) y reúne a más de 38 países cada edición. El clasificatorio nacional 2026 utiliza los problemas oficiales del IYPT y selecciona al equipo que representará a Chile en la edición 2027.',
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '1rem' }}>
                {text}
              </p>
            ))}
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {STATS.map(stat => (
              <GlassCard key={stat.label} style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2.6rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '0.4rem', lineHeight: 1.3 }}>
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .what-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
