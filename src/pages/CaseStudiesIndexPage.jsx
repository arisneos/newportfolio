import React from 'react';
import { Link } from '../router';
import caseStudies from '../data/caseStudies';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Nav />
      <section className="section page-header">
        <div className="wrap">
          <p className="section-eyebrow">Case Studies</p>
          <h1 className="section-title">Open questions,<br />worked through in public.</h1>
          <p className="page-intro">
            Longer-form pieces on how the work itself is changing &mdash; part essay,
            part running experiment. Less "here's what happened," more
            "here's what I'm testing."
          </p>
        </div>
      </section>
      <section className="section cs-list">
        <div className="wrap">
          {caseStudies.map((cs) => (
            <Link className="cs-list-item" to={`/case-studies/${cs.slug}`} key={cs.slug}>
              <div>
                <p className="cs-list-status">{cs.status} &middot; {cs.date}</p>
                <h3>{cs.title}</h3>
                <p className="cs-list-subtitle">{cs.subtitle}</p>
                <p className="cs-list-hook">{cs.hook}</p>
              </div>
              <span className="cs-list-arrow">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
