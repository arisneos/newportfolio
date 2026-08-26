import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ProofStrip />
      <CaseStudies />
      <About />
      <Experience />
      <Footer />
    </>
  );
}
