import Link from 'next/link';

const META = [
  { label: 'Internacional', value: 'IYPT 2027' },
  { label: 'Nacional',      value: 'Chile, 2026' },
  { label: 'Inscripción',   value: 'Hasta 30 abril' },
  { label: 'Equipos',       value: '3–5 estudiantes' },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 220px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(5rem, 8vw, 6.5rem) clamp(1.5rem, 4vw, 3rem) 2.5rem',
        position: 'relative',
        zIndex: 20,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}
      >
        Clasificatorio Nacional
      </div>

      <h1
        style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-1.5px', color: 'var(--text)', maxWidth: '750px' }}
      >
        Representa a Chile en el{' '}
        <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Torneo Internacional de Jóvenes Físicos</em>
      </h1>

      <p
        style={{ marginTop: '2rem', maxWidth: '520px', fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}
      >
        El IYPT Chile es el proceso de selección nacional para el International Young Physicists&apos; Tournament 2027. Un torneo de investigación, experimentación y debate científico entre equipos de enseñanza media. El equipo ganador representará a Chile en la edición internacional del próximo año.
      </p>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
        <Link
          href="#postular"
          style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--accent)', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '6px', fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.2px' }}
        >
          Postular equipo
        </Link>
        <Link
          href="#formato"
          style={{ display: 'inline-flex', alignItems: 'center', background: 'none', color: 'var(--text-secondary)', border: '1px solid var(--border)', padding: '0.8rem 1.75rem', borderRadius: '6px', fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 400, textDecoration: 'none' }}
        >
          Conocer el formato
        </Link>
      </div>

      <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
        {META.map(item => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '0.2rem' }}
            >
              {item.label}
            </span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--text)' }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
