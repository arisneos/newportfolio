import React from 'react';
import work from '../data/work';
import WorkCard from './WorkCard';

export default function WorkList() {
  return (
    <section className="section work work-full">
      <div className="wrap">
        <div className="case-grid">
          {work.map((s) => (
            <WorkCard key={s.id} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
