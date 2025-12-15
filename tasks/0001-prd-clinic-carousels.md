# Clinic Page Image Carousels – PRD

## 1. Introduction / Overview
Prospective visitors need a richer sense of what Colours Dental looks like before they arrive. The current clinic page only contains generic placeholder photos, which fails to showcase the real environment, technology, and ambience. This feature adds localized hero and gallery carousels that surface the provided clinic photos so visitors gain trust, see the equipment, and perceive the site as complete and polished.

## 2. Goals
1. Present authentic clinic imagery immediately in the hero so the page feels complete and welcoming.
2. Offer a browsable gallery of the remaining clinic photos without overwhelming the layout.
3. Keep the experience accessible (keyboard/screen readers) and fully responsive for mobile, tablet, and desktop visitors.

## 3. User Stories
1. **As a prospective patient**, I want to see real photos of the clinic as soon as I land on the page so that I can quickly judge whether it looks modern and trustworthy.
2. **As a prospective patient**, I want to browse additional clinic images within the page so that I can understand the equipment, hygiene, and comfort of the facility.
3. **As a site visitor using assistive tech**, I need carousel controls that I can operate via keyboard and screen readers so that I can access the same information as all users.

## 4. Functional Requirements
1. The hero section on both `en/clinic.html` and `bg/clinic.html` must display a carousel that cycles through the provided `8.png` (or `.jpg`) and `12.png` hero images, with the ability for users to manually switch slides.
2. The hero carousel must include previous/next controls and visual indicators (e.g., dots) reflecting the current slide; controls must be keyboard focusable and include appropriate ARIA attributes.
3. The gallery section on both localized pages must use the remaining Clinic assets (1–7, 9–11) within a carousel layout so users can click/tap through all photos inline.
4. Gallery controls must support keyboard interaction, visible focus states, and accessible labels/ARIA state updates (pressed/current/selected) for screen readers.
5. Both carousels must adapt to mobile (≤320 px), tablet (≈768 px), and desktop (≥1280 px) widths without layout breakage; images should scale/crop consistently.
6. Implement graceful degradation for users who disable JavaScript (e.g., display first slide) and ensure content remains visible.
7. Reuse existing Colours Dental typography/color system; new styles should integrate with the current CSS variables and theming (including dark mode).

## 5. Non-Goals / Out of Scope
1. Adding any new imagery beyond the assets already present in `assets/images/Clinic`.
2. Building an admin/back-office interface to manage gallery content dynamically.
3. Implementing a lightbox/zoom feature; interactions remain within the carousel modules only.

## 6. Design Considerations
- Follow existing site typography, spacing, and color tokens defined in `assets/css/styles.css`, including responsiveness and dark-mode support.
- Hero carousel should align visually with the hero copy (two-column layout on desktop, stacked on mobile) and use subtle transitions to keep the experience calm.
- Gallery carousel should match the aesthetic of other cards/sections (rounded corners, shadows) and avoid autoplay to let users control pacing.

## 7. Technical Considerations
- Reuse vanilla JS patterns already in `assets/js/site.js` (ES6 modules with `"use strict";`), guarding DOM queries before usage.
- Consider touch gestures (pointer events) for swipe navigation while ensuring mouse/keyboard interactions remain unaffected.
- Lazy-load non-initial images to avoid blocking the page while still keeping the assets available for manual navigation.
- Ensure controls and indicators inherit theme toggles (light/dark) without readability issues.

## 8. Success Metrics
1. Increase average time-on-page for `/en/clinic.html` and `/bg/clinic.html` (proxy for engagement with visuals).
2. Receive positive qualitative feedback from site stakeholders that the clinic section now feels “complete” and aligns with brand expectations.

## 9. Open Questions
1. Should the hero carousel auto-advance by default, and if so, what interval is acceptable (e.g., 5 s vs 8 s) while respecting reduced-motion preferences?
2. Are there any future plans to reuse this carousel component on other pages (services, doctors), which might require parameterization or modularization?
3. Do we need analytics tracking (e.g., slide interactions) to validate engagement, or are visual cues sufficient?
