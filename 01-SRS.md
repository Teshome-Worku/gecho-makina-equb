# Gecho Makina Equb — Website Demo SRS

## 1. Project purpose
Create a premium, mobile-first, static marketing website concept for **Gecho Makina Equb (ጌች የመኪና እቁብ)**. The demo is intended to help the business owner evaluate a professional online presence. It is not an official or commissioned site unless the owner later approves it.

The site should quickly communicate the brand, show real moments from lottery events and vehicle handovers, explain the business using verified information, and make it easy to contact the business.

## 2. Primary success criteria
Within the first five seconds, visitors should see:
- A polished and memorable automotive hero.
- The Gecho Makina Equb name/brand.
- A short, understandable message.
- A clear contact action.
- A visual indication that real vehicle events and handovers can be viewed below.

The owner should be impressed by the craft, not by exaggerated claims or invented statistics.

## 3. Audience
- People discovering Gecho Makina Equb through social media.
- Potential participants who want to understand the business and contact the organizer.
- Existing followers who want to see event moments, vehicle handovers, and official contact/social links.

## 4. Scope
Build a single-page static website. No backend, database, member accounts, admin dashboard, payment collection, or online lottery functionality.

### Required sections
1. **Navigation** — wordmark/logo, section links, contact CTA, accessible mobile menu.
2. **Hero** — cinematic vehicle/event image or video background if suitable, concise headline, supporting text, primary contact CTA and secondary “Watch the Story”/gallery CTA.
3. **About Gecho** — short, factual introduction. Use a genuine portrait if found; otherwise use an event still or omit the portrait rather than inventing one.
4. **How It Works** — simple, visual explanation based only on facts confirmed from public content or by the owner. Do not state legal/financial guarantees.
5. **Lottery & Event Process** — showcase a selected video showing the event/lottery process, where available. Describe visible facts only. Do not claim that the video proves legality or guarantees fairness; the owner should confirm official process wording.
6. **Vehicle Handovers & Member Stories** — selected video(s) of recipients receiving vehicles. These can serve as real-world stories; do not invent names, quotes, dates, or outcomes.
7. **Photo Gallery** — a curated set of photos, including permitted still frames extracted from videos if useful. Label extracted frames as event moments, not as separate professional photos.
8. **Contact & Social** — phone numbers verified by the user, TikTok, Facebook, Telegram if verified, and location/map only after confirmed.
9. **Footer** — brand name, key links, social links, and a short factual note.

Sections with no usable authentic material may be simplified or hidden. The site must not look unfinished because an asset is missing.

## 5. Content strategy
Keep text concise. The supplied video/photo material should carry much of the story. Prefer one strong headline, one or two short paragraphs, short captions, and clear section labels over long blocks of text.

Suggested provisional headline:
**“A community coming together around the journey to a car.”**
Alternative, subject to owner approval: **“Gecho Makina Equb — The Journey, The Moment, The Car.”**

Do not promise that a participant will receive a car, guarantee outcomes, or describe contribution/rotation rules unless confirmed. Do not publish unsupported member counts, years in operation, prize values, legal approvals, or “number one” claims.

## 6. Functional requirements
- Single-page anchor navigation with appropriate scroll offset.
- Contact buttons use `tel:` for verified phone numbers.
- WhatsApp links only if a number and intended WhatsApp use are verified. Do not assume every phone number has WhatsApp.
- Social links point to the verified official profiles.
- Local video playback should work from the project assets. Use native video controls or a clean accessible modal/player.
- Gallery image modal/lightbox with close control and keyboard support if implemented.
- Responsive menu and layouts.
- Visible focus states, meaningful alt text, semantic HTML, reduced-motion support.
- Optimized media: use compressed images, poster frames for videos, lazy loading below the fold, and avoid autoplay with sound.
- SEO title/description, favicon and social-sharing metadata.

## 7. Content integrity, permission and safety
- Treat all collected assets as unverified until the user checks they belong to the business and can be reused.
- Do not bypass platform restrictions or download content in violation of terms. Prefer original files supplied by the business or media the user has permission to reuse.
- Get permission before publishing identifiable recipients, religious/community leaders, or bystanders, especially if the context is sensitive.
- Avoid claims that a lottery is “legal,” “guaranteed fair,” officially licensed, or regulator-approved unless independently confirmed. A video can show visible steps but cannot by itself establish legal status.
- Phone numbers and social links must be reviewed before deployment.
- Clearly remove all TODOs, demo badges, broken links, and placeholder content before the owner presentation—or clearly label the site as a concept if the owner has not approved it.

## 8. Visual quality
Use `02-Design-System.md`. The desktop and mobile hero are the highest priority. Avoid a generic SaaS template, crowded card grids, excessive text, overused gradients, and animation that slows the first impression.

## 9. Definition of done
- The site builds successfully.
- No console/build errors remain.
- The first viewport looks polished at common desktop and mobile widths.
- Every navigation, contact and social link works.
- Videos have poster images, clear controls, and no unexpected audio.
- Missing media is handled gracefully.
- All public claims and contact details are checked.
- No fake testimonials or fabricated metrics appear.
- A deployment-ready static build is available.
