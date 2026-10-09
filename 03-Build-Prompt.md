# Gecho Makina Equb — Premium Website Demo

## Mission

Build a premium, responsive, single-page marketing website for Gecho Makina Equb (ጌች የመኪና እቁብ), an Ethiopian vehicle-focused equb business.

The purpose is to showcase how a professional digital presence could present the brand and help potential customers understand its services and contact the business. This is a client-acquisition demo, not a commissioned production system.

## First: Inspect Before Coding

1. Inspect the existing repository, package.json, framework, routes, assets and installed dependencies.
2. Read 01-SRS.md, 02-Design-System.md and 04-Content-Checklist.md.
3. Preserve existing working code and reuse installed dependencies where appropriate.
4. Identify missing information and assets. Do not invent business facts.
5. Create a short implementation plan, then build without unnecessary clarification loops.

## Visual Direction

* Premium automotive editorial design.
* Obsidian/charcoal surfaces, restrained champagne-gold accents and warm ivory typography.
* Cinematic automotive photography, refined typography, generous spacing and strong composition.
* A visually exceptional first viewport on desktop and mobile.
* High-quality section transitions, subtle entrance animations and polished hover/focus states.
* No generic SaaS template, excessive cards, random gradients, cluttered layouts or unnecessary animations.

## Required Sections

1. Navigation and hero with clear contact CTA.
2. About Gecho Makina Equb.
3. How It Works, based only on verified information.
4. Vehicle, lottery and handover gallery.
5. Real testimonials or video stories, only when authentic material exists.
6. Location and contact details, including available social channels.
7. A refined footer with working navigation and contact links.

Hide optional sections gracefully when real content is unavailable. Do not fill empty sections with fabricated information.

## Hero Requirements

The hero is the highest-priority component.

* Create an immersive, cinematic automotive composition.
* Use a genuine Gecho image/video when suitable and available; otherwise use a clearly temporary automotive placeholder.
* Use a strong headline, concise supporting copy and one primary CTA.
* Add a secondary CTA to explore the story or gallery.
* Ensure readable contrast and correct text positioning over the image.
* On mobile, optimize image cropping, headline size, spacing and CTA placement.
* Keep animations subtle and make the content visible even when reduced motion is enabled.
* Never let the navigation or hero content overlap.

## Functional Requirements

* Single-page navigation with smooth scrolling and appropriate scroll offsets.
* Working phone, WhatsApp, social and map links when verified destinations are supplied.
* Gallery lightbox or video playback when appropriate.
* Accessible mobile navigation.
* Responsive layout across mobile, tablet and desktop.
* Keyboard accessibility, semantic HTML, alt text, visible focus states and reduced-motion support.
* Fast loading, optimized images and no unnecessary heavy libraries.
* SEO title, description, favicon and social-sharing metadata.

## Strict Scope

This is a static marketing website. Do not implement authentication, a member portal, payments, a database, an admin dashboard or a backend. Do not imply that a lottery is live or that customers can register or pay online unless that functionality is explicitly implemented and verified.

## Content Integrity

* Never invent testimonials, customer counts, guarantees, licensing, awards, locations or operational claims.
* Use clearly identified temporary placeholders where necessary.
* Keep contact details and social links centralized so they can be updated quickly.
* Use only assets the developer has permission to use; preserve genuine source media and avoid misleading edits.

## Final Quality Gate

Before declaring completion:

1. Run the available build and lint checks.
2. Fix errors and inspect browser console issues where tooling allows.
3. Test mobile navigation, section links, media, contact links and responsive layouts.
4. Check image loading, text contrast, overflow and the first viewport.
5. Verify that no fake facts or unfinished placeholders are presented as verified business information.
6. Provide a concise summary of changes, remaining placeholders and deployment steps.

Prioritize visual excellence, genuine content, speed and readiness for a same-day owner presentation.
## Temporary Media and Asset Replacement Strategy

Build the entire website now. Do not wait for the final screenshots, TikTok links, or additional photos.

1. Inspect `public/assets/photos/`, `public/assets/video-stills/`, and `public/assets/videos/` before choosing media.
2. Use the actual Gecho portrait already available in the photos folder in the About section. Preserve the image as provided; do not regenerate, replace, or artificially alter the person's appearance.
3. For the hero, use a suitable high-quality automotive stock image or a generated automotive background if no suitable authentic asset exists. Do not present generated imagery as an actual Gecho vehicle or event.
4. Build the complete lottery/event and vehicle-handover video sections immediately, using attractive temporary thumbnails where real screenshots are not yet available.
5. Temporary thumbnails may be licensed stock imagery or clearly identified visual placeholders. Never fabricate actual Gecho testimonials, lottery outcomes, or vehicle handovers.
6. Centralize media paths, captions, and TikTok destination URLs in an easy-to-edit content configuration file. Use clearly marked temporary URLs until the developer supplies the real links. Never make a temporary image appear to be a real Gecho event.
7. Design each video thumbnail with a play icon, concise caption, and a working external-link action. When a real TikTok URL is available, open that exact post in a new tab. Do not simulate video playback when no local video exists.
8. Make media replacement simple: the developer should be able to add a screenshot to the appropriate asset folder and update one configuration entry without redesigning the page.
9. Ensure temporary assets can be replaced without modifying layout components. Use consistent filenames and document each pending replacement.
10. Complete the whole website, responsive layouts, navigation, animations, contact section, SEO metadata, and build verification now. Do not stop after planning or create empty sections while waiting for media.

Before deployment, clearly identify remaining temporary assets and unverified business information so they can be replaced or confirmed.
