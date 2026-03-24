'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Formato',    href: '#formato' },
  { label: 'Problemas',  href: '#problemas-section' },
  { label: 'Calendario', href: '#calendario' },
  { label: 'FAQ',        href: '#faq' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        borderBottom: '1px solid var(--glass-border)',
      }}
    >
      <div style={{ padding: '0.9rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand */}
        <Link href="#" style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', textDecoration: 'none', color: 'var(--text)' }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 600, letterSpacing: '-0.5px' }}>
            IYPT Chile
          </span>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 400, color: 'var(--text-tertiary)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            · 2026
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2.25rem', alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.3px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#postular"
            style={{ background: 'var(--accent)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '6px', fontWeight: 500, fontSize: '0.8rem', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            Postular
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', gap: '4px' }}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--text-secondary)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.label}
            href={link.href}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400 }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#postular"
          style={{ background: 'var(--accent)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '6px', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', textAlign: 'center' }}
          onClick={() => setMobileOpen(false)}
        >
          Postular
        </Link>
      </div>
    </nav>
  );
}
