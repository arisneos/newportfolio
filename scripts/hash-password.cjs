// Usage: node scripts/hash-password.cjs "your-new-password"
// Paste the printed hash into src/data/gateConfig.js as GATE_HASH.
const crypto = require('crypto');

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hash-password.cjs "your-password"');
  process.exit(1);
}

console.log(crypto.createHash('sha256').update(password).digest('hex'));
