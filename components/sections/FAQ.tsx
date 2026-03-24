'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ as FAQ_DATA } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', background: 'var(--bg-warm)', position: 'relative', zIndex: 20 }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader label="Preguntas frecuentes" title="Información adicional" />

        <div style={{ marginTop: '3rem', maxWidth: '680px' }}>
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{ borderBottom: '1px solid var(--border-light)', padding: '1.15rem 0' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 0,
                    textAlign: 'left',
                    fontFamily: 'var(--sans)',
                  }}
                >
                  <span style={{ fontWeight: 500, fontSize: '0.92rem', letterSpacing: '-0.2px', color: 'var(--text)' }}>
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-faint)',
                      flexShrink: 0,
                      marginLeft: '1rem',
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease, padding 0.35s',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    paddingTop: isOpen ? '0.65rem' : '0',
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
