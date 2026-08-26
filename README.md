# arisneos.com — portfolio

React + Vite portfolio site. Deploys automatically to GitHub Pages on every
push to `main` via `.github/workflows/deploy.yml`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying (CI/CD)

Push to `main` and GitHub Actions builds and deploys automatically — nothing
to run by hand. The workflow:

1. Checks out the repo
2. Installs dependencies (`npm ci`)
3. Builds (`npm run build`)
4. Uploads `dist/` as a Pages artifact and deploys it

To enable this the first time, in the GitHub repo:
**Settings → Pages → Build and deployment → Source: "GitHub Actions"**.

## Custom domain (arisneos.com)

The repo already includes `public/CNAME` containing `arisneos.com`, which
Vite copies into every build automatically — this is what tells GitHub
Pages which domain to serve.

To finish wiring it up, at your domain registrar (wherever `arisneos.com`
is registered), add these DNS records:

**Apex domain (`arisneos.com`)** — four `A` records pointing at GitHub's
Pages IPs:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**`www` subdomain (optional but recommended, so `www.arisneos.com` also
works)** — a `CNAME` record:

```
CNAME    www    <your-github-username>.github.io
```

Then in the GitHub repo: **Settings → Pages → Custom domain**, enter
`arisneos.com`, save, and check "Enforce HTTPS" once it's available
(can take a few minutes to a few hours after DNS propagates).

## Why Vite instead of Next.js

The previous version of this site was Next.js, which caused a base-path
bug (images 404ing) because GitHub Pages project sites are normally served
from `username.github.io/repo-name/`. Since this site uses a custom domain
served from the repo root, that problem doesn't apply — but Vite was kept
anyway because it needs zero server-side configuration to stay correct:
what you build is exactly what ships, with nothing to misconfigure later.

## Structure

```
src/
  components/     UI components (Hero, CaseStudyCard, etc.)
  data/           Case study and experience content, kept separate from UI
  styles/         tokens.css (design tokens), global.css, components.css
public/
  CNAME           custom domain config
  Aris_Neos_CV_2026.pdf   linked from the footer's "Download CV" button
```

## Editing content

- **Case studies**: edit `src/data/caseStudies.js` — each entry has a
  skimmable `hook` (always visible) and a `sections` array (shown when
  "Read full story" is expanded).
- **Experience timeline**: edit `src/data/experience.js`.
- **Design tokens** (colors, fonts): edit `src/styles/tokens.css`.
