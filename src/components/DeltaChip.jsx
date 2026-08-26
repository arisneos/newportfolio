import React from 'react';
export default function DeltaChip({ before, after }) {
  return (
    <span className="delta-chip">
      <span className="before">{before}</span>
      <span className="arrow">&rarr;</span>
      <span className="after">{after}</span>
    </span>
  );
}
