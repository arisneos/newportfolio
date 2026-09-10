import React from 'react';

// All scroll-driven state (fades, the pin-and-travel handoff) lives in
// useTransformHandoff and is applied imperatively via these refs — see
// HomePage.jsx for where it's wired up.
export default function Hero({ titleRef, fadeRef, wordRef }) {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-mark">
          <span className="hero-mark-shape" aria-hidden="true" />
          <span className="hero-mark-text">Aris Neos</span>
          <span className="dot">.</span>
        </div>
        <p className="hero-statement" ref={titleRef}>
          Design leader<span className="hero-statement-sep" aria-hidden="true" />
          builds &amp; ships code
        </p>
        <h1 className="hero-headline">
          <span className="hero-fade" ref={fadeRef}>
            I turn stalled products and flat teams into compounding
          </span>{' '}
          <span className="hero-anchor" ref={wordRef}>
            transformations
          </span>
        </h1>
      </div>
      <a href="#figma" className="hero-scroll-cue">
        <span className="hero-scroll-chevrons" aria-hidden="true">
          <svg viewBox="0 0 24 14" width="20" height="12">
            <polyline points="1,1 12,10 23,1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 14" width="20" height="12">
            <polyline points="1,1 12,10 23,1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="hero-scroll-label">Skip to Figma links</span>
      </a>
    </header>
  );
}
