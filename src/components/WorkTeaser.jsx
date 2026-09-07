import React from 'react';
import { Link } from '../router';
import work from '../data/work';
import WorkCard from './WorkCard';

export default function WorkTeaser() {
  const featured = work.slice(0, 2);
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <p className="section-eyebrow">Work</p>
        <h2 className="section-title">Four transformations,<br />one throughline.</h2>
        <div className="case-grid">
          {featured.map((s) => (
            <WorkCard key={s.id} study={s} />
          ))}
        </div>
        <Link className="btn-ghost section-more" to="/work">See all work &rarr;</Link>
      </div>
    </section>
  );
}
