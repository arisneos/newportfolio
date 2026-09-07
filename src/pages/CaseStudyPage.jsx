import React from 'react';
import { useParams, Link } from '../router';
import caseStudies from '../data/caseStudies';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <>
        <Nav />
        <section className="section page-header">
          <div className="wrap">
            <p className="page-intro">Couldn't find that case study.</p>
            <Link className="btn-ghost section-more" to="/case-studies">&larr; Back to Case Studies</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <article className="cs-article">
        <header className="cs-article-header">
          <div className="wrap">
            <Link className="cs-back" to="/case-studies">&larr; Case Studies</Link>
            <p className="section-eyebrow">{cs.status} &middot; {cs.date}</p>
            <h1>{cs.title}</h1>
            <p className="cs-subtitle">{cs.subtitle}</p>
            <p className="cs-hook">{cs.hook}</p>
          </div>
        </header>

        <div className="wrap cs-body">
          <div className="cs-premise">
            {cs.premise.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <blockquote className="cs-hypothesis">{cs.hypothesis}</blockquote>

          {cs.sections.map((s) => (
            <section className="cs-section" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </>
  );
}
