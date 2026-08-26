import React from 'react';
const stats = [
  { num: '5+ yrs', label: 'Escalating leadership, 4 companies' },
  { num: '0\u21924', label: 'Design team built from scratch' },
  { num: '60%', label: 'AI tooling cost cut, company-wide' },
  { num: '80%', label: 'File clutter removed via AI + design system' },
];

export default function ProofStrip() {
  return (
    <section className="proof">
      <div className="wrap proof-grid">
        {stats.map((s) => (
          <div className="proof-item" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
