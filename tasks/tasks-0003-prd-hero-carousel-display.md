## Relevant Files

- `assets/css/styles.css` - Contains styles for `.hero-carousel`, `.hero-inner`, and carousel images.
- `en/clinic.html` - Clinic page with hero-carousel (data-carousel="hero").
- `bg/clinic.html` - Clinic page with hero-carousel (data-carousel="hero-bg").
- `assets/js/site.js` - Handles carousel initialization and behavior.

## Tasks

- [ ] 1.0 Analyze current hero-carousel CSS and HTML structure
  - [ ] 1.1 Review `.hero-carousel` and `.hero-inner` styles in `assets/css/styles.css` to understand current sizing and object-fit properties.
  - [ ] 1.2 Examine HTML structure in `en/clinic.html` and `bg/clinic.html` for hero-carousel container and image elements.
  - [ ] 1.3 Identify how 1920×1080 images are currently handled (e.g., cropping via object-fit: cover).
- [ ] 2.0 Modify CSS to ensure 1920×1080 images display fully without cropping
  - [ ] 2.1 Change `object-fit` property for `.hero-carousel .carousel-slide img` from `cover` to `contain`.
  - [ ] 2.2 Adjust image height or container max-width if needed to maintain aspect ratio and fit within hero-inner.
  - [ ] 2.3 Update responsive styles (e.g., at 768px and below) to ensure images remain fully visible.
- [ ] 3.0 Test responsive display across devices (320px, 768px, ≥1280px)
  - [ ] 3.1 Start dev server with `python3 -m http.server 4173` and load clinic pages.
  - [ ] 3.2 Manually resize browser to test widths: 320px, 768px, ≥1280px.
  - [ ] 3.3 Verify images display fully without cropping at each breakpoint.
- [ ] 4.0 Verify changes in both en/clinic.html and bg/clinic.html
  - [ ] 4.1 Load `en/clinic.html` and confirm hero-carousel images show without cropping.
  - [ ] 4.2 Load `bg/clinic.html` and confirm hero-carousel images show without cropping.
  - [ ] 4.3 Test carousel navigation (prev/next, indicators) on both pages.
- [ ] 5.0 Run manual tests and check for regressions
  - [ ] 5.1 Test auto-slide functionality and pause on hover.
  - [ ] 5.2 Check for layout shifts or broken animations.
  - [ ] 5.3 Run Lighthouse performance and accessibility checks locally.