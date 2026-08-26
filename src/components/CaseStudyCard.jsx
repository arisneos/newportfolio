import React, { useState } from 'react';
import DeltaChip from './DeltaChip';

export default function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`case-card ${open ? 'is-open' : ''}`}>
      <p className="case-tag">{study.tag}</p>
      <h3 className="case-title">{study.title}</h3>
      <p className="case-role">{study.company} &middot; {study.role}</p>
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
