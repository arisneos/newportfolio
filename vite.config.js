import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base is '/' because arisneos.com is a custom domain served from the
// repo root (via the CNAME file in /public) — not a github.io/repo-name
// subpath. If you ever remove the custom domain, change this to
// '/<repo-name>/' to avoid the asset 404s the old site had.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
