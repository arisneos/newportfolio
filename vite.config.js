import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base is '/newportfolio/' because the custom domain isn't live yet, so
// the site is served from the github.io/newportfolio subpath. Once
// arisneos.com is set up as the custom domain (via the CNAME file in
// /public), change this back to '/' — otherwise assets will 404 there.
export default defineConfig({
  plugins: [react()],
  base: '/newportfolio/',
});
