import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      id="postular"
      style={{ textAlign: 'center', padding: '7rem clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 20 }}
    >
      <h2
        style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 400, letterSpacing: '-1px', marginBottom: '1rem', color: 'var(--text)' }}
      >
        Inscribe a tu equipo
      </h2>
      <p
        style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.6, fontWeight: 300 }}
      >
        Las inscripciones cierran el 30 de abril de 2026. El formulario de postulación requiere los datos del equipo y del profesor guía.
      </p>
      <Link
        href="#"
        style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--accent)', color: 'white', border: 'none', padding: '0.9rem 2.5rem', borderRadius: '6px', fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.2px' }}
      >
        Postular equipo
      </Link>
      <p style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'var(--text-faint)' }}>
        Consultas:{' '}
        <Link href="mailto:contacto@iyptchile.cl" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
          contacto@iyptchile.cl
        </Link>
      </p>
    </section>
  );
}
