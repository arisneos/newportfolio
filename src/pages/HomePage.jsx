import React, { useEffect } from 'react';
import { useLocation } from '../router';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProofStrip from '../components/ProofStrip';
import WorkTeaser from '../components/WorkTeaser';
import About from '../components/About';
import Experience from '../components/Experience';
import PrototypeGate from '../components/PrototypeGate';
import Footer from '../components/Footer';

export default function HomePage() {
  const location = useLocation();

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
      <Hero />
      <ProofStrip />
      <WorkTeaser />
      <About />
      <Experience />
      <PrototypeGate />
      <Footer />
    </>
  );
}
