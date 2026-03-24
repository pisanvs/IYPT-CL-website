'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import ProblemsBgCanvas from '@/components/problems/ProblemsBgCanvas';
import ProblemSlide from '@/components/problems/ProblemSlide';
import ProblemsNavDots from '@/components/problems/ProblemsNavDots';
import { useProblemsScroll } from '@/hooks/useProblemsScroll';
import { PROBLEMS } from '@/data/problems';

export default function ProblemsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, navVisible } = useProblemsScroll(scrollRef, PROBLEMS.length);
  const activeProblem = PROBLEMS[activeIndex];

  const handleDotClick = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const sh = el.offsetHeight - window.innerHeight;
    const targetScroll = el.offsetTop + (idx / PROBLEMS.length) * sh + sh / PROBLEMS.length / 2;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, []);

  return (
    <div id="problemas-section" style={{ position: 'relative', zIndex: 20 }}>
      {/* Intro header */}
      <div style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem) 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader
            label="Problemas IYPT 2026"
            title="Investigación abierta, sin respuesta única"
            description="Cada año se publican 17 problemas de investigación. Tu equipo elige cuáles abordar, diseña los experimentos y defiende sus conclusiones."
          />
        </div>
      </div>

      {/* 600vh scroll zone */}
      <div ref={scrollRef} style={{ height: '600vh', position: 'relative' }}>
        {/* Sticky viewport */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Canvas background */}
          <ProblemsBgCanvas
            drawFnKey={activeProblem?.drawFnKey ?? null}
            particleCount={activeProblem?.particleCount ?? 0}
          />

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(250,250,248,0.55)',
              zIndex: 1,
            }}
          />

          {/* Problem slides */}
          {PROBLEMS.map((problem, i) => (
            <ProblemSlide key={problem.id} problem={problem} isActive={i === activeIndex} />
          ))}
        </div>
      </div>

      {/* Nav dots */}
      <ProblemsNavDots
        count={PROBLEMS.length}
        activeIndex={activeIndex}
        visible={navVisible}
        onDotClick={handleDotClick}
      />

      {/* Footer link */}
      <div style={{ textAlign: 'center', padding: '1rem 0 4rem', position: 'relative', zIndex: 20 }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', fontWeight: 300 }}>
          6 de 17 problemas.{' '}
          <Link
            href="https://www.iypt.org/problems/iypt-2026-problems/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 400 }}
          >
            Ver lista completa →
          </Link>
        </p>
      </div>
    </div>
  );
}
