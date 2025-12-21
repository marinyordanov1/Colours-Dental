## Relevant Files

- `en/doctors.html` - English doctor listing; cards that must display portraits.
- `bg/doctors.html` - Bulgarian doctor listing that mirrors English content.
- `index.html` - Homepage hero that needs the `team.jpeg` image.
- `assets/css/styles.css` - Shared styling for cards, hero sections, and responsive tweaks.
- `assets/images/Doctors/` - Source directory for all required doctor/team images.

### Notes

- Keep localized paths correct (`../assets/...` inside locale folders, relative paths from root elsewhere).
- Reuse existing card/hero styles when possible; scope new selectors carefully to avoid regressions.

## Tasks

- [ ] 1.0 Audit assets and current markup
  - [ ] 1.1 Confirm all referenced images exist in `assets/images/Doctors/` with the exact casing/extensions listed in the PRD.
  - [ ] 1.2 Review the current `.card` structure in both doctor pages to determine where portraits should mount (likely above the `<h3>`).
  - [ ] 1.3 Inspect the homepage hero markup to understand how/where to inject `team.jpeg`.
- [ ] 2.0 Implement portraits in `en/doctors.html`
  - [ ] 2.1 Add `<img>` elements for each doctor card using the specified filenames and relative paths.
  - [ ] 2.2 Provide descriptive English `alt` text and apply `loading="lazy"` where appropriate.
  - [ ] 2.3 Verify links/CTAs remain intact after markup changes.
- [ ] 3.0 Mirror portrait implementation in `bg/doctors.html`
  - [ ] 3.1 Add the same `<img>` elements with Bulgarian `alt` text for each doctor.
  - [ ] 3.2 Ensure relative paths are correct (`../assets/...`) and layout matches the English version.
- [ ] 4.0 Update the homepage hero (`index.html`)
  - [ ] 4.1 Insert the `team.jpeg` image into the hero structure (e.g., by adding an image column or background) while maintaining existing copy/CTA placement.
  - [ ] 4.2 Include meaningful `alt` text and confirm path (`assets/images/Doctors/team.jpeg`) resolves from root.
  - [ ] 4.3 Adjust hero markup if necessary to keep text readable over/alongside the image.
- [ ] 5.0 Style adjustments and responsive validation
  - [ ] 5.1 Add/adjust CSS (e.g., `.doctor-card img`, hero image styles) for consistent spacing, border radius, and `object-fit` behavior across breakpoints.
  - [ ] 5.2 Manually test `en/doctors.html`, `bg/doctors.html`, and `index.html` at 320px, 768px, and ≥1280px to ensure images render correctly without layout issues.
  - [ ] 5.3 Check Lighthouse/performance impact if image sizes are large; note any follow-up optimization needs.
