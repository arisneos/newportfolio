import React, { useState } from 'react';
import DeltaChip from './DeltaChip';
import CaseVisual from './CaseVisual';

export default function WorkCard({ study, index }) {
  const [open, setOpen] = useState(false);
  const [num, label] = study.tag.split('\u2014').map((s) => s.trim());

  return (
    <article className={`case-card case-card-${index} ${open ? 'is-open' : ''}`} data-num={num}>
      <div className="case-shape" aria-hidden="true" />
      <div className="case-card-head">
        <span className="case-num">{num}</span>
        <span className="case-label">{label}</span>
      </div>
      <h3 className="case-title">{study.title}</h3>
      <p className="case-role">{study.company} &middot; {study.role}</p>
      <div className="case-body">
        <CaseVisual kind={study.visual} />
        <div className="case-copy">
          <p className="case-hook">{study.hook}</p>
          <div className="case-chips">
            {study.chips.map((c, i) => (
              <DeltaChip key={i} before={c.before} after={c.after} />
            ))}
          </div>
          <button className="case-toggle" onClick={() => setOpen(!open)}>
            {open ? 'Hide full story' : 'Read full story'}
            <span className="case-toggle-icon">{open ? '\u2212' : '+'}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="case-full">
          {study.sections.map((s) => (
            <div className="case-section" key={s.heading}>
              <h4>{s.heading}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
