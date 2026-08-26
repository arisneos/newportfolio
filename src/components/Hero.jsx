import React from 'react';
import DeltaChip from './DeltaChip';

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <p className="hero-eyebrow">Design leader &middot; builds &amp; ships code</p>
        <h1>
          I turn stalled products<br />
          and flat teams into <span className="accent">compounding ones.</span>
        </h1>
        <p className="hero-sub">
          10+ years leading design across enterprise, e-commerce, and B2B SaaS.
          I hire, mentor, and ship at the same time &mdash; and I'm hands-on enough
          in code and AI tooling to change how a team works, not just what it makes.
        </p>
        <div className="hero-chips">
          <DeltaChip before="$0" after="$10K MRR" />
          <DeltaChip before="0.1%" after="2% conv." />
          <DeltaChip before="8h" after="2h proto" />
          <DeltaChip before="1" after="4 designers" />
        </div>
        <div className="hero-cta">
          <a className="btn-primary" href="#work">See the work</a>
          <a className="btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
