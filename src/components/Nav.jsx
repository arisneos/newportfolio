import React from 'react';
export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <span className="nav-mark">Aris Neos<span className="dot">.</span></span>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
