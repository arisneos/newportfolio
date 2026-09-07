import React, { useState } from 'react';
import GATE_HASH from '../data/gateConfig';
import prototypeLinks from '../data/prototypeLinks';

async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function PrototypeGate() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const hash = await sha256Hex(input);
    if (hash === GATE_HASH) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <section id="prototypes" className="section prototypes">
      <div className="wrap">
        <p className="section-eyebrow">Prototypes</p>
        <h2 className="section-title">Figma prototype library</h2>

        {!unlocked ? (
          <form className="gate-form" onSubmit={handleSubmit}>
            <p className="gate-copy">
              Working Figma prototypes for each case study live here. Ask me
              directly if you'd like access.
            </p>
            <div className="gate-row">
              <input
                type="password"
                placeholder="Password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
              />
              <button type="submit" className="btn-primary">Unlock</button>
            </div>
            {error && <p className="gate-error">That's not it — try again.</p>}
          </form>
        ) : (
          <ul className="gate-links">
            {prototypeLinks.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noreferrer">{p.label} &rarr;</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
