# Clinic Page Visual Refresh – PRD

## 1. Introduction / Overview
Prospective clients judge the clinic’s quality largely by the visuals on `clinic.html`. At present, the hero block and gallery carousel feel utilitarian (small hero image, sharp gallery corners, subdued framing). We need to upgrade the presentation so the page feels premium and instantly conveys trust, while keeping parity between EN/BG versions and honouring existing behavior.

## 2. Goals
1. Amplify the hero area so the main clinic photo occupies more space and draws attention on load.
2. Restyle the gallery carousel frames so each image looks polished (rounded corners, refined borders) yet consistent across locales.
3. Maintain the current carousel functionality (multi-image view, wrap navigation) while making the overall composition feel high-end.

## 3. User Stories
1. **As a prospective client**, I want the hero photo to immediately showcase the clinic’s ambiance so that I feel confident booking a visit.
2. **As a returning visitor on either language version**, I expect the hero/gallery styling to match so the brand feels cohesive.
3. **As a design-conscious stakeholder**, I want the gallery images to have elegant framing (rounded corners, subtle accents) so they reflect a premium clinic.

## 4. Functional Requirements
1. The hero section on both `en/clinic.html` and `bg/clinic.html` must increase the hero image size/area (e.g., wider or taller presentation, balanced with copy) without hiding existing text.
2. Hero content (text block + image) should use enhanced styling (e.g., refined borders, depth, gradients) that aligns with the brand and looks cohesive on light/dark themes.
3. Each gallery carousel slide must feature rounded corners, improved borders (e.g., gradient or subtle accent), and polished spacing so no image appears with sharp edges.
4. Carousel behavior (three-up gallery on desktop with wrap-around navigation, keyboard/pointer/swipe interactions) must remain intact post-styling changes.
5. Apply the refreshed styling consistently to both locales; differences should be limited to localized copy/aria labels.
6. Keep assets optimized—no additional heavy images or external libraries unless approved.

## 5. Non-Goals / Out of Scope
1. Altering carousel functionality (no new lightbox, autoplay, or structural changes beyond styling).
2. Modifying other pages (`services`, `doctors`, etc.) unless changes are part of shared components.
3. Introducing new backend services or animation libraries.

## 6. Design Considerations
- Hero: larger visual emphasis (e.g., 60/40 split), generous padding, translucent or glassmorphism panels, gradients or accent borders that fit the Colours palette.
- Gallery: maintain three images in view on desktop, but ensure each feels card-like with drop shadows, rounded corners (no “pointy” edges), and consistent spacing.
- Ensure responsive scaling so hero/galleries remain impressive on tablets/phones without overwhelming content.

## 7. Technical Considerations
- Continue using CSS custom properties defined in `assets/css/styles.css`; any new colors/gradients should derive from the palette.
- Reuse existing JS (`assets/js/site.js`) for carousel logic; only tweak if necessary for the visual refresh (e.g., to accommodate padding/radius changes).
- Test across light/dark theme toggle to ensure backgrounds, borders, and shadows remain legible.

## 8. Success Metrics
1. Increased time-on-page for `/en/clinic.html` and `/bg/clinic.html` (proxy for improved engagement).
2. Qualitative stakeholder feedback noting the page now “feels premium/impressive.”

## 9. Open Questions
1. Are there specific brand guidelines (logos, exact gradient values) we must align with beyond current palette?
2. Should we capture before/after screenshots for stakeholder approval, and if so, which breakpoints?
3. Is there a preferred maximum hero height to avoid pushing key content below the fold on smaller laptops?
