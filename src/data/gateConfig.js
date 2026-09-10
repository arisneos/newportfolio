// This is a SHA-256 hex hash of the gate password, NOT the password itself.
//
// To set your own password, run from the project root:
//   node scripts/hash-password.cjs "your-new-password"
// then paste the printed hash here.
//
// IMPORTANT: this is a casual gate, not real security. This is a static
// site with no backend, so the "protected" content still ships to every
// visitor's browser — it's just not shown in the UI until the password
// matches. Anyone comfortable with browser dev tools can read it
// regardless of the password. Fine for keeping the section off Google
// and out of casual visitors' way; not fine for anything NDA-sensitive.
const GATE_HASH = 'c4f7cda8a146cf2da1ed14c47d6d3ca315d8267fd23b071249d0a125e903cc52'; // "figmaLinks2026"

export default GATE_HASH;
