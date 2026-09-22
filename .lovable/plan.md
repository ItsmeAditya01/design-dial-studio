# Design Studio Portfolio Frontend

## Goal
Build an original, production-quality portfolio for a multidisciplinary design studio. The homepage will contain only navigation, hero, selected work, services, and contact/footer, with dedicated project pages and no backend.

## Visual foundation
- Define the supplied near-black, off-white, cyan, blue, and muted-grey palette as semantic tokens, with near-black/off-white dominant and accents used sparingly.
- Establish a confident editorial display face paired with a clean sans-serif, fluid `clamp()` sizing, restrained metadata, sharp geometry, and a shared 12/8/4-column grid.
- Use asymmetry, whitespace, large imagery, and subtle background shifts instead of cards, gradients, glass effects, shadows, or decorative clutter.
- Generate a cohesive art-directed image set spanning exhibition spaces, packaging, identity systems, and large-format graphics; images will be responsive, lazy-loaded below the fold, and supplied with useful alt text.

## Homepage structure
1. **Navigation** — transparent overlay over the opening view, subtle scrolled state, minimal desktop links and CTA, accessible full-screen mobile menu.
2. **Hero** — exact supplied headline, supporting copy, and two CTAs over a full-viewport spatial visual. Add slow layered depth/parallax and a controlled typography entrance that remains strong without motion.
3. **Selected Work** — seven believable projects in a non-uniform editorial composition using landscape, portrait, square, and full-width formats. Add the five supplied filters, understated hover/press behavior, and routes to reusable project-detail pages.
4. **Services** — the four exact services as large horizontal editorial rows, with supplied descriptions/keywords and subtle category-specific visual reveals.
5. **Contact + Footer** — exact closing statement, prominent email, compact footer content, and an accessible contact drawer/modal with the specified fields, project options, validation, and mock success state.

## Signature interactions
- Build the persistent five-position rotary dial as an accessible navigation instrument. Synchronize it smoothly in both directions: scrolling updates the dial, and each marker scrolls to its destination.
- Use IntersectionObserver-based blur-to-clarity reveals for headings, imagery, metadata, service rows, and contact content, plus restrained clipped image reveals.
- Support reduced motion by disabling parallax and continuous movement while preserving all navigation and content.

## Component and data structure
- Create focused components for navigation, hero, rotary dial, section headings, portfolio grid/cards, service list/items, contact form, and footer.
- Keep project and service content in typed data modules so a future CMS can replace it without redesigning presentation.
- Create a reusable project-detail route with project metadata, hero, description, gallery, design details, and next-project navigation.

## Responsive and quality pass
- Design intentional desktop, tablet, mobile, and landscape states rather than shrinking the desktop composition.
- Simplify the dial and motion on small screens; keep full-width imagery, large touch targets, readable type, and zero horizontal overflow.
- Verify navigation, filtering, project links, service interactions, contact flow, scroll synchronization, responsive layouts, keyboard access, focus states, image loading, SEO metadata, and reduced-motion behavior in the live preview.
