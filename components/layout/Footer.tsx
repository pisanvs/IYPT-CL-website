import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'IYPT Internacional', href: 'https://www.iypt.org', external: true },
  { label: 'Instagram', href: '#' },
  { label: 'Contacto', href: 'mailto:contacto@iyptchile.cl' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-copy">
          © 2026 IYPT Chile — Clasificatorio nacional para el International Young Physicists&apos; Tournament.
        </div>
        <div className="footer-links">
          {FOOTER_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="footer-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .site-footer {
          border-top: 1px solid var(--border-light);
          position: relative;
          z-index: 20;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: var(--text-faint);
          font-weight: 300;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-link {
          color: var(--text-tertiary);
          text-decoration: none;
          font-size: 0.75rem;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--text); }
        @media (max-width: 768px) {
          .footer-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
