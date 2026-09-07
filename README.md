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
  router.jsx      hand-rolled client-side router (see below — no external dependency)
  pages/          HomePage, WorkPage, CaseStudiesIndexPage, CaseStudyPage
  components/     UI building blocks used across pages
  data/           work.js (project case studies), caseStudies.js (essays), experience.js
  styles/         tokens.css (design tokens), global.css, components.css
public/
  CNAME           custom domain config
  Aris_Neos_CV_2026.pdf   linked from the footer's "Download CV" button
```

This is now a multi-page site with clean URLs:

- `/` — home (hero, a two-item Work teaser, about, experience, prototypes, contact)
- `/work` — all four project case studies (renamed from "Case Studies" to avoid
  colliding with the new section below)
- `/case-studies` — longer-form essays/experiments, starting with
  "From Figma to Function"
- `/case-studies/:slug` — a single essay, full-page

### Why a hand-rolled router instead of react-router-dom

This sandbox has no network access to install and test new npm packages, so
rather than ship `react-router-dom` untested, routing is a small ~90-line
module (`src/router.jsx`): pathname matching, a `Link` component, and
`useParams`/`useLocation` hooks. It's not trying to be a general-purpose
router — just enough for this site's four routes. If you'd rather use
`react-router-dom` for its wider feature set, swapping it in is a contained
change (the API shape is deliberately similar).

### Clean URLs on GitHub Pages

GitHub Pages has no server to rewrite unknown paths back to `index.html`,
so a direct visit to `/work` would normally 404. The `postbuild` script in
`package.json` copies `dist/index.html` to `dist/404.html` after every
build — GitHub Pages serves that for any unmatched path, our router reads
the real URL from the browser, and renders the right page. No extra
GitHub Pages configuration needed beyond what's already in this repo.

## Editing content

- **Project case studies** (Work page): edit `src/data/work.js` — each entry
  has a skimmable `hook` (always visible) and a `sections` array (shown when
  "Read full story" is expanded).
- **Essays / experiments** (Case Studies section): edit `src/data/caseStudies.js`
  — each entry is a full long-form page, split into a `premise`, a pulled-out
  `hypothesis`, and a `sections` array of heading/body pairs.
- **Experience timeline**: edit `src/data/experience.js`.
- **Design tokens** (colors, fonts): edit `src/styles/tokens.css`.

## Case study visuals

Each case study card shows a small custom SVG diagram (`src/components/CaseVisual.jsx`)
instead of a screenshot — a funnel, a network diagram, cost bars, a
before/after file grid. These are pure code, so there's nothing to upload
and nothing that can 404. If you get real product screenshots later, add
them alongside these rather than replacing them outright — swap the `visual`
key on a case study entry in `caseStudies.js` for the design you want.

## Prototype gate

The "Prototypes" section (`src/components/PrototypeGate.jsx`) is a
password-gated area for Figma links, aimed at recruiters you send the
password to directly.

**Important — read before relying on this:** this is a static site with no
backend, so this is a *casual* gate, not real security. The password
protects the UI, not the data — the list of links still ships inside the
JavaScript bundle to every visitor, so anyone comfortable with browser dev
tools can read it regardless of the password. This is fine for keeping the
section off Google and out of casual visitors' way. **Do not put anything
NDA-sensitive behind it** — for real confidentiality, share those links
directly instead, or ask about adding Cloudflare Access in front of the
domain for genuine authentication.

To set it up:

1. Add your real links in `src/data/prototypeLinks.js`.
2. Pick a password and hash it: `node scripts/hash-password.cjs "your-password"`.
3. Paste the printed hash into `GATE_HASH` in `src/data/gateConfig.js`.
4. The default password is `changeme` — replace it before deploying, or
   anyone who reads this README has the key.
