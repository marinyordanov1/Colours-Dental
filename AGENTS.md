# Repository Guidelines

## Project Structure & Module Organization
This repository is a static multi-language site. The root `index.html` powers the landing page, while localized pages sit under `en/` and `bg/` (each folder mirrors `index.html`, `services.html`, `clinic.html`, etc.). Shared styling lives in `assets/css/styles.css`, interactive behavior in `assets/js/site.js`, and imagery/svg assets in `assets`, `bg/`, `abc.png`, and `animated-logo.svg`. Netlify rules reside in `_redirects`. Keep new assets grouped by type so imports remain predictable.

## Build, Test, and Development Commands
No bundler is required; any static server works. From the repo root run `python3 -m http.server 4173` for a quick preview or `npx serve . --listen 4173` if you prefer Node tooling. Use flags like `--cors` only when debugging embeds. Stop the server between runs so cached SVGs refresh cleanly.

## Coding Style & Naming Conventions
HTML follows semantic sections (`<header>`, `<section>`, `<article>`) with utility classes in kebab-case (e.g., `hero-cta`, `menu-toggle`). Stick to two-space indentation and lowercase attribute names. CSS leverages custom properties declared at the top of `styles.css`; extend palettes there before referencing downstream. Avoid vendor-prefixed copies unless adding a new feature that needs them. JavaScript is plain ES6 modules contained in `site.js`: use `"use strict";`, const/let, double quotes, trailing semicolons, and guard each DOM query before operating on it. When adding new scripts, prefer feature detection over UA sniffing.

## Testing Guidelines
Because there is no automated suite, rely on manual checks. After every change, load both `en/index.html` and `bg/index.html` via the dev server, test navigation at 320px, 768px, and ≥1280px widths, and exercise the contact form to confirm the `#form-status` messaging toggles correctly. If JS changes touch animations, scroll the page to confirm IntersectionObserver fallbacks. Capture Lighthouse scores locally (`npx lighthouse http://localhost:4173/en/index.html --only-categories=performance,accessibility`) when adjusting layout-critical CSS.

## Commit & Pull Request Guidelines
Recent commits (e.g., `Update website files and add new image`) use short, imperative summaries under ~60 characters; follow that model and group related file edits together. For pull requests, include: (1) a concise description of the intent, (2) references to any Jira/issue IDs, (3) before/after screenshots or screen recordings for visual tweaks, and (4) notes on any manual tests performed (device sizes, locales, commands). Request a review whenever HTML structure or shared assets change because localized copies usually need mirrored edits.

## Security & Configuration Notes
The `_redirects` file governs Netlify routing; verify any new paths there so localized slugs resolve correctly. Avoid adding external scripts without SRI hashes, and keep contact forms client-only unless the backend webhook is documented. Store experimental assets outside `assets/` until they are minified or optimized to avoid shipping unused weight.
