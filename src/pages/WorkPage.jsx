import React from 'react';
import Nav from '../components/Nav';
import WorkList from '../components/WorkList';
import Footer from '../components/Footer';

export default function WorkPage() {
  return (
    <>
      <Nav />
      <section className="section page-header">
        <div className="wrap">
          <p className="section-eyebrow">Work</p>
          <h1 className="section-title">Four transformations,<br />one throughline.</h1>
          <p className="page-intro">
            Every one of these is a before-and-after story with a real number
            attached &mdash; a team, a product, or a workflow that didn't work,
            and what it took to make it work.
          </p>
        </div>
      </section>
      <WorkList />
      <Footer />
    </>
  );
}
