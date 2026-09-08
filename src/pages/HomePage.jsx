import React, { useEffect } from 'react';
import { useLocation } from '../router';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import About from '../components/About';
import Experience from '../components/Experience';
import PrototypeGate from '../components/PrototypeGate';
import Footer from '../components/Footer';
import useTransformHandoff from '../hooks/useTransformHandoff';

export default function HomePage() {
  const location = useLocation();
  const handoff = useTransformHandoff();

  // Client-side routing doesn't auto-scroll to a hash on navigation
  // the way a full page load does, so do it manually.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Nav />
      <Hero titleRef={handoff.heroTitleRef} fadeRef={handoff.heroFadeRef} wordRef={handoff.heroWordRef} />
      <span className="scroll-word-clone" ref={handoff.cloneRef} aria-hidden="true">transformations</span>
      <WorkSection
        targetRef={handoff.workTargetRef}
        restBeforeRef={handoff.workRestBeforeRef}
        restAfterRef={handoff.workRestAfterRef}
        revealRef={handoff.workRevealRef}
      />
      <About />
      <Experience />
      <PrototypeGate />
      <Footer />
    </>
  );
}
