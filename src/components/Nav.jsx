import React from 'react';
import { Link } from '../router';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <Link to="/" className="nav-mark">
          <span className="nav-mark-shape" aria-hidden="true" />
          <span className="nav-mark-text">Aris Neos</span>
          <span className="dot">.</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#experience">Experience</Link></li>
          <li><Link to="/#prototypes">Prototypes</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
      <div className="accent-stripe" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
    </nav>
  );
}
