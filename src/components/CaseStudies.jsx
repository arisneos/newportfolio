import React from 'react';
import caseStudies from '../data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudies() {
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <p className="section-eyebrow">Work</p>
        <h2 className="section-title">Four transformations,<br />one throughline.</h2>
        <div className="case-grid">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.id} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
