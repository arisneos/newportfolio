import React from 'react';

// Small brand-native diagrams instead of screenshots — each one visualizes
// the shape of the transformation rather than a literal product shot.
// No external assets, so there's nothing that can 404.

function Trajectory() {
  return (
    <svg viewBox="0 0 360 110" className="case-visual-svg">
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="var(--paper-mid)" strokeOpacity="0.15" />
      ))}
      <path
        d="M10,95 C 90,92 150,90 200,55 C 250,20 300,15 350,12"
        fill="none"
        stroke="var(--signal)"
        strokeWidth="5"
      />
      <circle cx="10" cy="95" r="6" fill="var(--delta-before)" />
      <circle cx="350" cy="12" r="6" fill="var(--delta-after)" />
    </svg>
  );
}

function Network() {
  const center = { x: 60, y: 55 };
  const nodes = [
    { x: 190, y: 15 }, { x: 260, y: 35 }, { x: 300, y: 70 },
    { x: 250, y: 95 }, { x: 170, y: 95 },
  ];
  return (
    <svg viewBox="0 0 340 110" className="case-visual-svg">
      {nodes.map((n, i) => (
        <line key={i} x1={center.x} y1={center.y} x2={n.x} y2={n.y} stroke="var(--paper-mid)" strokeOpacity="0.3" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="8" fill="none" stroke="var(--delta-after)" strokeWidth="3" />
      ))}
      <circle cx={center.x} cy={center.y} r="14" fill="var(--signal)" />
    </svg>
  );
}

function CostBars() {
  return (
    <svg viewBox="0 0 200 110" className="case-visual-svg">
      <line x1="0" y1="100" x2="200" y2="100" stroke="var(--paper-mid)" strokeOpacity="0.3" />
      <rect x="50" y="20" width="36" height="80" rx="4" fill="var(--delta-before)" />
      <rect x="130" y="68" width="36" height="32" rx="4" fill="var(--delta-after)" />
    </svg>
  );
}

function Cleanup() {
  const messy = [
    [10, 10, -8], [45, 22, 6], [15, 48, 4], [55, 55, -10], [30, 78, 8],
  ];
  const clean = [
    [230, 15, 0], [268, 15, 0], [306, 15, 0],
    [230, 53, 0], [268, 53, 0], [306, 53, 0],
    [230, 91, 0], [268, 91, 0], [306, 91, 0],
  ];
  return (
    <svg viewBox="0 0 340 110" className="case-visual-svg">
      {messy.map(([x, y, r], i) => (
        <rect key={i} x={x} y={y} width="22" height="22" rx="3"
          fill="var(--delta-before)" opacity="0.8"
          transform={`rotate(${r} ${x + 11} ${y + 11})`} />
      ))}
      <line x1="150" y1="55" x2="200" y2="55" stroke="var(--paper-mid)" strokeWidth="3" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--paper-mid)" />
        </marker>
      </defs>
      {clean.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="20" height="20" rx="3" fill="var(--delta-after)" />
      ))}
    </svg>
  );
}

function LevelPath() {
  // A game level's critical path: a zigzagging route through checkpoints,
  // ending at a goal flag — level design read as a UX flow diagram.
  const points = [
    [20, 85], [90, 85], [90, 45], [165, 45], [165, 80], [240, 80], [240, 30], [310, 30],
  ];
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  const checkpoints = [points[1], points[3], points[5]];
  return (
    <svg viewBox="0 0 340 110" className="case-visual-svg">
      <path d={d} fill="none" stroke="var(--delta-before)" strokeWidth="5" strokeLinejoin="round" />
      <rect x="10" y="75" width="20" height="20" fill="var(--ink)" />
      {checkpoints.map(([x, y], i) => (
        <rect key={i} x={x - 8} y={y - 8} width="16" height="16" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" transform={`rotate(45 ${x} ${y})`} />
      ))}
      <path d="M310,30 L310,10 L326,17 L310,24 Z" fill="var(--delta-after)" stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
}

const kinds = {
  trajectory: Trajectory,
  network: Network,
  costbars: CostBars,
  cleanup: Cleanup,
  levelpath: LevelPath,
};

export default function CaseVisual({ kind }) {
  const Cmp = kinds[kind];
  if (!Cmp) return null;
  return (
    <div className="case-visual">
      <Cmp />
    </div>
  );
}
