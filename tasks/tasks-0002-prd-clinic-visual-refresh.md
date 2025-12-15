## Relevant Files

- `en/clinic.html` - English clinic page where hero and gallery markup exist.
- `bg/clinic.html` - Bulgarian clinic counterpart that must mirror all visual updates.
- `assets/css/styles.css` - Shared styling; houses hero/galleries and needs premium refinements.
- `assets/js/site.js` - Carousel behavior script; may need tweaks to accommodate layout/styling adjustments.

### Notes

- Manual QA required on `/en/clinic.html` and `/bg/clinic.html` across 320 px, 768 px, and ≥1280 px widths (and both themes) since no automated tests exist.

## Tasks

- [x] 1.0 Audit current hero/gallery presentation against the PRD goals.
  - [x] 1.1 Capture screenshots/notes of the existing hero and gallery on EN/BG pages (desktop + mobile) highlighting problem areas (small hero, sharp corners).
  - [x] 1.2 Inventory current CSS variables, gradients, and spacing utilities in `assets/css/styles.css` that can be reused for the premium look.
  - [x] 1.3 Review `assets/js/site.js` carousel logic to understand constraints when adjusting slide padding/radius.
- [x] 2.0 Redesign hero layout to feature a more prominent image and elevated content card.
  - [x] 2.1 Update the hero grid to allow a larger image panel (wider/taller) without obscuring text.
  - [x] 2.2 Style the text block (e.g., glassmorphism panel, shadow, border) so it feels premium yet readable in both themes.
  - [x] 2.3 Enhance the hero carousel (image border, radius, shadow) to match the new card aesthetic.
  - [x] 2.4 Mirror all hero updates in `bg/clinic.html` with localized attributes.
- [x] 3.0 Restyle the gallery carousel so images have premium frames and consistent spacing.
  - [x] 3.1 Adjust gallery carousel container (padding, background, shadow) to create a showcase feel.
  - [x] 3.2 Redefine `.carousel-slide` spacing, rounding, and border treatments so each image looks framed and consistent.
  - [x] 3.3 Ensure each gallery image uses a combination of gradient borders/shadows to remove “pointy” edges while keeping the photo fully visible.
  - [x] 3.4 Apply identical styling to EN and BG galleries, verifying alt text/localized labels remain intact.
- [x] 4.0 Ensure carousel behavior (wrap, interaction, accessibility) remains intact post-styling.
  - [x] 4.1 Validate that multi-image desktop layout, wrap-around navigation, keyboard focus, and swipe gestures still work after CSS tweaks.
  - [x] 4.2 Adjust `assets/js/site.js` only if necessary (e.g., to account for new padding or focus states).
- [ ] 5.0 Validate final experience across locales, breakpoints, and light/dark themes, capturing any stakeholder assets needed.
  - [ ] 5.1 Manually test `/en/clinic.html` and `/bg/clinic.html` at 320 px, 768 px, and ≥1280 px for layout, accessibility, and behavior.
  - [ ] 5.2 Toggle light/dark themes to ensure backgrounds, borders, and shadows remain readable.
  - [ ] 5.3 Capture before/after screenshots for stakeholders (desktop + mobile) if requested.
