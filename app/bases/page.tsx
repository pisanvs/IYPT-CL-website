import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { BASES_SECTIONS, PDF_URL } from '@/data/bases';

export const metadata: Metadata = {
  title: 'Bases y Reglamento — IYPT Chile 2026',
  description: 'Reglamento oficial del clasificatorio nacional IYPT Chile 2026. Elegibilidad, formato, puntuación y proceso de selección.',
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
      <path d="M7.5 1v9m0 0L4.5 7m3 3 3-3M2 13h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg className="bases-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, transition: 'transform 0.25s' }}>
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BasesPage() {
  return (
    <>
      <Navigation />

      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div style={{ background: 'var(--bg-warm)', borderBottom: '1px solid var(--border-light)', paddingTop: '7rem', paddingBottom: '3.5rem', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <Link
              href="/"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-tertiary)', textDecoration: 'none', marginBottom: '2rem' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Volver al inicio
            </Link>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
                  Reglamento oficial
                </div>
                <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--text)', maxWidth: '560px' }}>
                  Bases y{' '}
                  <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Reglamento</em>
                </h1>
                <p style={{ marginTop: '1rem', maxWidth: '480px', fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  Condiciones de participación, formato del torneo y proceso de selección del equipo nacional IYPT Chile 2026.
                </p>
              </div>

              {/* PDF download */}
              <div style={{ flexShrink: 0, paddingTop: '0.5rem' }}>
                <a
                  href={PDF_URL}
                  download
                  className="bases-pdf-btn"
                >
                  <IconDownload />
                  Descargar bases (PDF)
                </a>
                <div style={{ marginTop: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '1px', color: 'var(--text-faint)', textAlign: 'center' }}>
                  Próximamente
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sections ──────────────────────────────────────────────────────── */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.5rem, 4vw, 3rem) 6rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {BASES_SECTIONS.map((section, si) => (
              <details key={section.id} className="bases-details" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--border-light)', borderRadius: '10px', overflow: 'hidden' }}>
                <summary
                  className="bases-summary"
                  style={{ listStyle: 'none', cursor: 'pointer', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.25rem', userSelect: 'none' }}
                >
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', fontWeight: 300, color: 'var(--border)', lineHeight: 1, minWidth: '1.8rem' }}>
                    {String(si + 1).padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.2px' }}>
                      {section.title}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '1px', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                      {section.summary}
                    </div>
                  </div>
                  <IconChevron />
                </summary>

                <div style={{ padding: '0 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                  {section.items.map(item => (
                    <div key={item.heading} style={{ padding: '1.25rem 1.5rem', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>
                        {item.heading}
                      </div>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
          <div style={{ marginTop: '4rem', padding: '2.5rem 2rem', background: 'var(--bg-warm)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.3px' }}>
                ¿Listo para inscribir tu equipo?
              </div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, marginTop: '0.3rem' }}>
                Las inscripciones cierran el 30 de abril de 2026.
              </p>
            </div>
            <Link
              href="/#postular"
              style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--accent)', color: 'white', padding: '0.8rem 1.75rem', borderRadius: '8px', fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Postular equipo
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .bases-pdf-btn {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: var(--accent); color: white;
          padding: 0.85rem 1.75rem; border-radius: 8px;
          font-family: var(--sans); font-size: 0.85rem; font-weight: 500;
          text-decoration: none; letter-spacing: 0.2px;
          box-shadow: 0 2px 12px rgba(26,58,92,0.18);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .bases-pdf-btn:hover { background: var(--accent-light); }
        .bases-details[open] .bases-chevron { transform: rotate(180deg); }
        .bases-summary::-webkit-details-marker { display: none; }
        .bases-summary { transition: background 0.15s; }
        .bases-summary:hover { background: rgba(0,0,0,0.02); }
        .bases-details[open] > .bases-summary { border-bottom: 1px solid var(--border-light); }
      `}</style>
    </>
  );
}
