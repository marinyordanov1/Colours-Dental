## Relevant Files

- `en/clinic.html` - English clinic page where hero/gallery markup will be updated.
- `bg/clinic.html` - Bulgarian clinic page requiring mirrored hero/gallery updates.
- `assets/css/styles.css` - Central stylesheet for hero layout, gallery grid, and new carousel styles.
- `assets/js/site.js` - Handles site interactions; needs carousel controller logic.
- `assets/images/Clinic/` - Source image assets referenced by the new carousels.

### Notes

- No automated tests exist; rely on manual verification at 320 px, 768 px, and ≥1280 px widths per repo guidelines.

## Tasks

- [x] 1.0 Audit current clinic hero/gallery structure and confirm available Clinic images.
  - [x] 1.1 Inspect `en/clinic.html` and `bg/clinic.html` hero + gallery sections to document existing DOM structure.
  - [x] 1.2 Inventory `assets/images/Clinic/` to map filenames (1–12) and note orientation/format (PNG/JPG) for use in carousels.
  - [x] 1.3 Review current CSS/JS (`assets/css/styles.css`, `assets/js/site.js`) to note reusable classes and animation patterns.
- [x] 2.0 Implement localized hero carousel markup/content for EN and BG clinic pages.
  - [x] 2.1 Update `en/clinic.html` hero with a `hero-with-carousel` layout containing slides for `8.png` and `12.png`.
  - [x] 2.2 Mirror the same structure in `bg/clinic.html`, localizing aria labels and descriptions.
  - [x] 2.3 Add carousel controls (prev/next buttons, indicators) with semantic labels/roles for accessibility on both locales.
- [x] 3.0 Replace the static gallery section with a localized carousel showcasing the remaining Clinic photos.
  - [x] 3.1 Build a gallery carousel container for EN that loops through photos 1–7 and 9–11 with descriptive alt text.
  - [x] 3.2 Duplicate the gallery carousel for BG with localized copy/alt text and matching image order.
  - [x] 3.3 Ensure gallery carousels support lazy loading for non-initial slides to preserve performance.
- [x] 4.0 Extend shared CSS to style hero/gallery carousels with responsive and dark-mode support.
  - [x] 4.1 Add layout styles for `hero-with-carousel`, `.hero-content`, and `.hero-carousel` keeping grid alignment and responsiveness.
  - [x] 4.2 Define generic `.carousel`, `.carousel-track`, `.carousel-slide`, `.carousel-control`, and `.carousel-indicators` rules, including dark-mode states.
  - [x] 4.3 Set responsive image heights and focus states to maintain visual quality at 320 px/768 px/desktop widths.
- [x] 5.0 Enhance `site.js` with accessible carousel behavior plus manual QA across breakpoints/locales.
  - [x] 5.1 Implement a reusable carousel initializer that wires controls, indicators, and swipe handling while updating ARIA attributes.
  - [x] 5.2 Guard for reduced-motion or JS-disabled scenarios to ensure at least the first slide remains visible.
  - [x] 5.3 Manually test `/en/clinic.html` and `/bg/clinic.html` at 320 px, 768 px, and ≥1280 px ensuring keyboard, pointer, and swipe interactions work.
