import React from 'react';
import { Link } from '../router';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <Link to="/" className="nav-mark">Aris Neos<span className="dot">.</span></Link>
        <ul className="nav-links">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#experience">Experience</Link></li>
          <li><Link to="/#prototypes">Prototypes</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
