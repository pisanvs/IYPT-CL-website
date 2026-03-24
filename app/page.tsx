import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import LogoBar from '@/components/sections/LogoBar';
import HowItWorks from '@/components/sections/HowItWorks';
import ProblemsSection from '@/components/sections/ProblemsSection';
import WhatIsIypt from '@/components/sections/WhatIsIypt';
import Timeline from '@/components/sections/Timeline';
import Requirements from '@/components/sections/Requirements';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import TypingEquationsLayer from '@/components/sections/TypingEquationsLayer';

export default function Home() {
  return (
    <>
      <TypingEquationsLayer />
      <Navigation />
      <main>
        <Hero />
        <LogoBar />
        <HowItWorks />
        <ProblemsSection />
        <WhatIsIypt />
        <Timeline />
        <Requirements />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
