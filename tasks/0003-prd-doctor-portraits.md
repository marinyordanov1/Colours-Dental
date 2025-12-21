# PRD: Doctor Portraits & Homepage Hero Update

## 1. Introduction / Overview
We need to enhance the credibility and visual appeal of Colours Dental by displaying real doctor portraits on both English and Bulgarian doctor listing pages and by showcasing the full team within the homepage hero. Currently, the doctor cards display only text, and the homepage hero has no imagery. This feature will add the correct portraits for every doctor card (matching assets already in `assets/images/Doctors/`) and replace the hero visual on `index.html` with the provided `team.jpeg`.

## 2. Goals
1. Surface high-quality portraits for each doctor in both locales to increase trust.
2. Ensure portraits and the new homepage hero image render responsively at common breakpoints (≥1280px, 768px, 320px).
3. Maintain parity between English and Bulgarian pages so future content updates stay in sync.

## 3. User Stories
1. *As a prospective patient browsing in English*, I want to see each doctor’s photo within their card so I can build trust before booking.
2. *As a Bulgarian-speaking visitor*, I want the same visual experience when viewing the doctors page so the site feels consistent.
3. *As a first-time visitor landing on the homepage*, I want to see an inviting hero image of the team so I feel confident in the clinic’s professionalism.

## 4. Functional Requirements
1. `en/doctors.html` must display the following images within the existing `.card` layout (typically above the `<h3>` or in a consistent position) using assets from `assets/images/Doctors/`:
   - Dr. Maria Tartorva → `mariq.PNG`
   - Dr. Nancy Okoro → `Nancy.jpg`
   - Dr. Cveti Zlateva → `cveti.jpeg`
   - Dr. Filiz Emin → `filiz.jpg`
   - Dr. Yavor Todorov → `qvor.jpg`
   - Parham Rahmani → `parham.png`
2. `bg/doctors.html` must mirror the same portrait placements and filenames so both locales show identical visuals.
3. The homepage (`index.html`) hero must render `assets/images/Doctors/team.jpeg` in place of the current empty/placeholder visual, following existing hero markup patterns.
4. All newly added `<img>` elements must include descriptive `alt` text in the appropriate language (e.g., `alt="Dr. Maria Tartorva"` in English and `alt="Д-р Мария Тарторва"` in Bulgarian).
5. Responsive behavior:
   - Doctor card images must scale proportionally inside the `.card` component, maintaining aspect ratio and not stretching beyond card width.
   - At ≤768px, cards should stack vertically with portraits centered; images should not overflow or crop important facial details.
   - At ≤320px, ensure minimum padding so images remain legible and do not push text outside the viewport.
6. Performance safeguards:
   - Use existing CSS utilities (`object-fit`, radius, shadows) to keep styling consistent; add new CSS only if necessary for responsiveness.
   - Prefer lazy-loading (`loading="lazy"`) for doctor portraits to mitigate bandwidth on mobile without delaying initial content.
7. Ensure all relative paths are correct for both locales (remember `../assets/...` inside localized templates).
8. Update any schema/metadata if required by the hero change (e.g., if OpenGraph image should eventually reference the new hero; note as an open question if not finalized).

## 5. Non-Goals
1. No redesign of the doctor cards beyond accommodating images (fonts, copy, CTA structure remain unchanged).
2. No content edits or translations beyond image alt text.
3. No backend or data storage changes—images are already in the repository.
4. No carousel or gallery enhancements beyond placing the static hero image.

## 6. Design Considerations
- Follow current `.card` spacing, border-radius, and shadows defined in `assets/css/styles.css`.
- Images should adopt the same rounded corners as cards (use inherited border radius or add a small radius).
- Maintain consistent portrait aspect ratio (recommend 4:5 or auto height with `object-fit: cover` inside a fixed-height container to align rows).
- Homepage hero image should respect existing hero padding; consider overlay or gradient if text legibility becomes an issue.

## 7. Technical Considerations
- Image files live in `assets/images/Doctors/`; verify casing and file extensions exactly as listed (PNG/JPG/JPEG).
- Localized pages require different relative paths (`../assets/...`), so double-check when reusing snippets.
- If additional CSS is required (e.g., `.doctor-card img`), scope it narrowly to avoid affecting other card grids.
- Confirm `team.jpeg` size; compress if noticeably heavier than other hero assets (target <500KB). Optimization steps can be a follow-up task if needed.

## 8. Success Metrics
1. Manual QA confirms doctor portraits display correctly on both locales at 320px, 768px, and ≥1280px widths without layout breaks.
2. Homepage hero shows the team image on desktop and mobile without overlaps or text illegibility.
3. No broken image paths or console errors when loading `en/doctors.html`, `bg/doctors.html`, or `index.html`.

## 9. Open Questions
1. Should OpenGraph/social preview images be updated to use `team.jpeg` as well, or remain pointed at the current hero asset?
2. Are there any plans to capture analytics (e.g., hero scroll depth, doctor card clicks) after these visuals go live?
3. Do we need captions or bios under portraits in a future iteration, or is imagery alone sufficient?
