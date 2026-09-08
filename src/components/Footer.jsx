import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="accent-stripe" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="wrap footer-grid">
        <div className="footer-lede">
          <span className="footer-shape" aria-hidden="true" />
          <p className="section-eyebrow footer-eyebrow">Get in touch</p>
          <h2 className="footer-title">Let's build<br />something that compounds.</h2>
          <a className="btn-primary" href="mailto:arisneos@gmail.com">arisneos@gmail.com</a>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/arisneos" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/Aris_Neos_CV_2026.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>Aris Neos &middot; Athens, Greece</span>
        <span>Built with React, shipped with GitHub Actions.</span>
      </div>
    </footer>
  );
}
