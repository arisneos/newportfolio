import React from 'react';
import work from '../data/work';
import WorkCard from './WorkCard';

// The actual asymmetric 5-card grid — pulled out of WorkList so the
// homepage and the /work page render this exact same markup instead of
// two copies that can drift apart.
export default function WorkGrid() {
  // Two independent flex columns (not grid-row spans) so the gap between
  // stacked cards is a real flex `gap`, not a grid-track estimate that can
  // collapse when a spanning card's content runs longer than predicted.
  const [flagship, payments, genesis, aiCost, ambassador] = work;

  return (
    <div className="case-grid">
      <div className="case-col case-col-left">
        <WorkCard study={flagship} index={1} />
        <WorkCard study={genesis} index={3} />
      </div>
      <div className="case-col case-col-right">
        <WorkCard study={payments} index={2} />
        <WorkCard study={aiCost} index={4} />
      </div>
      <WorkCard study={ambassador} index={5} />
    </div>
  );
}
