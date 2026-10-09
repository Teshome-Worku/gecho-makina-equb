# Cursor Start Prompt — Gecho Makina Equb

Inspect the current repository and read these files completely before coding:
- `01-SRS.md`
- `02-Design-System.md`
- `04-Content-Checklist.md`
- `03-Build-Prompt.md`

Then inspect the actual contents of `public/assets/`, including all photos, videos, logos and video-still posters. Analyze the available media and choose the strongest usable assets for the page. Do not assume every suggested filename exists.

Build the premium, responsive, static single-page marketing website described in the documents. Prioritize the first five seconds: navigation and a cinematic hero with a clear contact CTA. Follow with concise About, verified How It Works, lottery/event video, vehicle handover/member-story video, curated photo gallery, and verified contact/social sections.

Use only facts and contact details supported by the content checklist. Treat all screenshot-derived phone numbers as unverified until the developer marks the preferred public contact. Do not invent testimonials, metrics, legal claims, business address, or lottery rules. Hide optional sections gracefully when suitable media is absent. Do not add a backend, database, accounts, payment features, or admin dashboard.

Use locally stored media when present and appropriate. Create accessible poster-based video players with no autoplay sound. If only a few videos are available, feature them in a clean editorial layout instead of making a long video catalog. If there are no photos, use suitable stills extracted from videos only if the developer has prepared them; do not claim to extract media automatically unless you actually implement and verify that workflow.

Inspect existing dependencies and reuse the current stack. After implementation, run available build/lint checks, fix errors, test mobile navigation and all links, inspect responsive layouts, and report any remaining placeholders or assets that still need confirmation. Do not stop after producing a plan—continue into implementation.
