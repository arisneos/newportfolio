import React from 'react';
import experience from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Escalating leadership,<br />four companies.</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline-item" key={e.role + e.company}>
              <div className="timeline-dates">{e.dates}</div>
              <div className="timeline-body">
                <h4>{e.role}</h4>
                <p className="timeline-company">{e.company}</p>
                <p className="timeline-blurb">{e.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
