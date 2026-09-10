import React from 'react';
import portraitLines from '../assets/portrait-lines.svg';

// All scroll-driven state (fades, the pin-and-travel handoff) lives in
// useTransformHandoff and is applied imperatively via these refs — see
// HomePage.jsx for where it's wired up.
export default function Hero({ titleRef, fadeRef, wordRef }) {
  return (
    <header className="hero">
      <div className="wrap hero-row">
        <div className="hero-copy">
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
        <div className="hero-portrait">
          <img src={portraitLines} alt="A minimal continuous-line drawing portrait of Aris Neos" />
        </div>
      </div>
    </header>
  );
}
