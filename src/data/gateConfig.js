// This is a SHA-256 hex hash of the gate password, NOT the password itself.
// Default password below is "changeme" — replace before deploying.
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
const GATE_HASH = '057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86'; // "changeme"

export default GATE_HASH;
