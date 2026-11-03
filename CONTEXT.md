# Project Update Log

## 2026-11-03 — About redesign and site themes

- Rebuilt `app/about/page.tsx` into a responsive, bilingual editorial About page: profile hero, backstory, principles, current work timeline, skills, and a course CTA.
- Added `context/ThemeContext.tsx`. Theme selection follows the system preference initially, is persisted as `localStorage.theme`, and is applied to the document root.
- Added an accessible light/dark toggle to `components/Navbar.tsx`, with English and Thai labels.
- Added light-theme palette overrides and light prose styles in `app/globals.css`, so the existing pages also render legibly in either theme.
- Updated `AGENTS.md` to document the two-theme system and its Navbar/context conventions.

## 2026-11-03 — Axer manifesto

- Added reusable `components/ManifestoQuote.tsx` with the primary quote “ผมจะปฏิวัติวงการการสอน” and supporting quote “เราไม่ได้เรียนรู้ช้า แค่โลกมันเปลี่ยนไปเร็ว,” including English equivalents.
- Placed the manifesto prominently beside Axer's profile image in the hero sections of both Home and About.
- Styled the manifesto as a restrained AI/code editor card while retaining the project's violet brand language.

## 2026-11-03 — Home page restructure

- Rebuilt `app/page.tsx` into a bilingual AI/code-workspace landing page with a clearer journey: manifesto hero, trust markers, mission, learning loop, topics, and a focused final CTA.
- Removed the custom cursor and placeholder testimonial to reduce distraction and avoid unverified social proof.
- Kept Axer's transparent profile photo in an open framed composition with violet glow, rather than placing it in a solid image card.
- Updated `AGENTS.md` because Home no longer uses browser APIs for a particle cursor.

## 2026-11-03 — Official footer foundation

- Added a global bilingual `components/Footer.tsx` and rendered it from the root layout.
- The footer provides platform identity, internal navigation, platform status, and copyright without using placeholder social links or contact information.
- Official contact and social details are intentionally deferred until they are defined in `AGENTS.md`.

## 2026-11-03 — Responsive foundation

- Rebuilt the Navbar with a mobile-first, accessible collapsible menu that preserves language selection and theme switching on small screens.
- Tuned Home and About spacing, profile image scale, and section heights for compact phone viewports without altering any Course or Lesson page.
- Adjusted the Footer's mobile spacing and column divider so it stacks cleanly before expanding to its desktop layout.
- Updated `AGENTS.md` with the responsive Navbar contract.
