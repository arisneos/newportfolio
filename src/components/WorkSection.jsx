import React from 'react';
import WorkGrid from './WorkGrid';

// The heading is split into three pieces so the middle one ("transformations")
// can sit invisible-but-in-place until the traveling clone from the hero
// docks into it — see useTransformHandoff for the scroll logic driving
// these refs.
export default function WorkSection({ targetRef, restBeforeRef, restAfterRef, revealRef }) {
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <h2 className="section-title">
          <span className="work-rest" ref={restBeforeRef}>Five </span>
          <span className="work-anchor" ref={targetRef}>transformations</span>
          <span className="work-rest" ref={restAfterRef}>,<br />one throughline.</span>
        </h2>
        <div className="work-reveal" ref={revealRef}>
          <p className="section-subtitle placeholder-copy">Subtitle — placeholder, TBD.</p>
          <WorkGrid />
        </div>
      </div>
    </section>
  );
}
