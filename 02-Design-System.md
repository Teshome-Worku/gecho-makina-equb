# Gecho Makina Equb — Design System

## 1. Creative direction
**Premium automotive editorial + authentic Ethiopian community moments.**

The website should feel cinematic, confident, modern, and human. Use refined automotive imagery as the visual hook, then build trust through authentic lottery/event footage and vehicle handover moments.

Avoid making the brand look like a luxury car dealership if that misrepresents the business. Premium means thoughtful art direction and polish, not pretending to sell cars directly.

## 2. Color palette
- Obsidian: `#111214` — primary dark background.
- Elevated charcoal: `#1B1D20` — alternate section/surface.
- Champagne gold: `#D2AC67` — restrained accent and primary CTA.
- Warm ivory: `#F4F0E7` — text on dark surfaces.
- Muted gray: `#A8A8A5` — supporting text.
- Light neutral: `#F7F6F2` — occasional light section.
- Deep ink: `#191919` — text on light surfaces.

Gold is an accent, not a fill for every element. Maintain accessible contrast for all text and buttons.

## 3. Typography
Use a refined display face for large headings and a highly readable sans-serif for body/navigation. Prefer locally available or optimized Google fonts already configured in the project; do not add multiple font families without reason. Use responsive `clamp()` sizing for headings.

## 4. Hero composition — highest priority
- Target approximately 85–95vh on desktop, adjusted so navigation and CTA remain visible.
- Use one strong full-bleed image or a muted, user-controlled video with a poster.
- Apply a subtle dark gradient/overlay only to ensure text legibility.
- Place a small eyebrow label, bold headline (2–4 lines max), short supporting copy, primary contact CTA and secondary gallery/story CTA.
- Add a small scroll cue only if it does not clutter the layout.
- Prefer genuine Gecho event or handover footage if it is visually usable. If not, use a clearly replaceable licensed automotive placeholder.
- On mobile, optimize the crop around the vehicle/person and ensure the headline and CTA do not cover important faces.
- No autoplay sound. If using background video, mute it, provide a poster fallback, and respect reduced-motion/data constraints.

## 5. Page rhythm
Recommended sequence:
1. Hero
2. About / introduction
3. How it works
4. Lottery and event process video
5. Vehicle handovers / member stories
6. Photo gallery
7. Contact and location
8. Footer

Keep the page content-led rather than card-led. Use broad visual sections, asymmetrical image/text layouts, generous whitespace, and short captions.

## 6. Video presentation
- Choose no more than 2–3 videos for the main page.
- Feature one **event/process video** showing a representative lottery moment.
- Feature one or two **vehicle handover/recipient videos** that clearly show the moment a recipient receives a car.
- A phone call announcing a recipient can be a short supporting clip only if it is understandable, appropriate, and permission is available.
- Use a custom poster/thumbnail and concise caption for every video.
- Use native video controls or an accessible modal; never autoplay with sound.
- Avoid embedding a long list of social videos. A few strong, real moments are more persuasive.
- Compress video files for web delivery; if local video files are too large, use a permitted official social link or host an optimized version with permission.

## 7. Photo and video-still gallery
- If there are no original photos, extract still frames from selected videos only when quality is adequate and reuse is permitted.
- Select frames with clear subjects, good lighting, minimal motion blur, and a meaningful moment.
- Do not upscale poor frames aggressively or present them as professional photography.
- Use varied crops while preserving faces and vehicles. Provide alt text.
- Keep the gallery curated and avoid repeating the same moment.

## 8. Motion
Use restrained, purposeful motion:
- Short fade/translate entrance for hero content.
- Gentle reveal on scroll.
- Subtle button hover and image hover.
- No excessive parallax, cursor gimmicks, constant floating objects, or long loading intro.
- Respect `prefers-reduced-motion`.

## 9. Components
- Transparent or dark sticky navigation that becomes more legible on scroll.
- Gold primary CTA, outlined secondary CTA.
- Section headings with short overlines where appropriate.
- Video feature with poster, play affordance and short caption.
- Editorial gallery/lightbox.
- Contact block with clearly separated call/social/map actions.
- Footer with working links and no invented legal/registration claims.

## 10. Responsive behavior
- Design mobile-first; test at 360px, 390px, 768px, 1024px and wide desktop.
- Mobile hero should remain readable without excessive scrolling.
- Stack content intentionally; avoid tiny multi-column cards.
- Ensure mobile navigation is accessible and dismissible.
- Use responsive image sizes and lazy-load below-the-fold media.

## 11. Accessibility and performance
- Semantic landmarks and heading hierarchy.
- Keyboard-accessible menu and media controls.
- Visible focus indicators and sufficient contrast.
- Descriptive alt text; empty alt only for decorative images.
- Lazy-load below-the-fold images/videos; use poster images.
- Avoid large unnecessary libraries. Optimize assets before deployment.
