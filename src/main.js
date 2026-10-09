import { siteContent } from '../content.js';
import './styles.css';
import './fallbacks.css';

const { brand, links, media } = siteContent;

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 6 9 6-9 6V6Z"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    external: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5H6V6h5"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
};

const safeLink = (url) => url || '#';
const header = `
  <header class="site-header" data-header>
    <a class="wordmark" href="#top" aria-label="Gecho Makina Equb home">
      <span class="wordmark-mark">G</span>
      <span><strong>${brand.english}</strong><small>${brand.amharic}</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#about">About</a><a href="#process">How it works</a><a href="#moments">Moments</a><a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Follow on TikTok ${icon('external')}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"><span class="sr-only">Open menu</span>${icon('menu')}</button>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <a href="#about">About</a><a href="#process">How it works</a><a href="#moments">Moments</a><a href="#contact">Contact</a>
      <a class="button button-gold" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Open verified TikTok ${icon('external')}</a>
    </div>
  </header>`;

const videoCard = (video, index) => `
  <article class="video-card reveal" style="--delay:${index * 90}ms">
    <button class="video-poster" type="button" data-video="${video.id}" aria-label="Open ${video.role}: ${video.caption}">
      <img src="${video.poster}" alt="${video.description}" loading="lazy" onerror="this.classList.add('media-unavailable')" />
      <span class="temporary-badge">Temporary visual</span>
      <span class="play-button">${icon('play')}</span>
    </button>
    <div class="video-card-copy"><p class="eyebrow">${video.role}</p><h3>${video.caption}</h3><p>${video.description}</p><button class="text-link" type="button" data-video="${video.id}">View media note ${icon('arrow')}</button></div>
  </article>`;

const galleryItem = (item, index) => `<button class="gallery-item ${index === 0 ? 'gallery-feature' : ''} reveal" type="button" data-gallery="${index}" style="--delay:${index * 90}ms"><img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.classList.add('media-unavailable')" /><span>${item.label}</span></button>`;

const app = document.querySelector('#app');
app.innerHTML = `
  ${header}
  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-image" style="background-image:url('${media.hero.src}')"></div><div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow hero-eyebrow">${brand.amharic} <span></span> Community / Cars</p><h1 id="hero-title">The journey.<br /><em>The moment.</em><br />The car.</h1><p class="hero-copy">${brand.description}</p><div class="hero-actions"><a class="button button-gold" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Follow the story ${icon('external')}</a><a class="button button-quiet" href="#moments">Explore moments ${icon('arrow')}</a></div></div>
      <div class="hero-meta"><span>01 / 04</span><span class="hero-line"></span><span>Scroll to discover</span></div><span class="temporary-hero-note">Hero image is a temporary licensed visual</span>
    </section>

    <section class="intro section-pad" id="about" aria-labelledby="about-title"><div class="section-kicker"><span>01</span><span class="rule"></span><span>About the journey</span></div><div class="intro-grid"><div><h2 id="about-title">A shared road<br /><em>forward.</em></h2></div><div class="intro-copy"><p class="lead">Gecho Makina Equb is presented here as a community-centered vehicle journey, told through people, events and the moments that matter.</p><p>This concept site is intentionally concise while the business details are confirmed. The real story belongs in the approved event footage, handover moments and the people who make the community.</p><a class="text-link" href="#contact">See what is confirmed ${icon('arrow')}</a></div></div></section>

    <section class="portrait-band"><div class="portrait-image"><img src="${media.portrait}" alt="Gecho portrait beside a vehicle" /></div><div class="portrait-copy"><p class="eyebrow">A supplied portrait</p><blockquote>“The most important moments are the ones people can feel.”</blockquote><p class="caption">Editorial framing for the supplied Gecho portrait. This is not a customer testimonial.</p></div></section>

    <section class="process section-pad" id="process" aria-labelledby="process-title"><div class="section-kicker"><span>02</span><span class="rule"></span><span>Keep it clear</span></div><div class="process-heading"><h2 id="process-title">How the story<br /><em>unfolds.</em></h2><p>Final participation and rotation details will be added after owner confirmation. For now, the experience is organized around three visible chapters.</p></div><div class="steps"><div class="step"><span>01</span><h3>Connect</h3><p>Start with the official social channel and the latest public information.</p></div><div class="step"><span>02</span><h3>Gather</h3><p>Follow the community moments and the event process as they are shared.</p></div><div class="step"><span>03</span><h3>Celebrate</h3><p>See the vehicle handover stories when approved media is available.</p></div></div><p class="integrity-note">Process language is provisional and contains no promises, guarantees or legal claims.</p></section>

    <section class="moments section-pad" id="moments" aria-labelledby="moments-title"><div class="moments-top"><div><div class="section-kicker"><span>03</span><span class="rule"></span><span>Real moments, when ready</span></div><h2 id="moments-title">The story<br /><em>in motion.</em></h2></div><p>These spaces are ready for approved screenshots, local video files or exact TikTok post links. Temporary visuals are clearly marked and never presented as Gecho footage.</p></div><div class="video-grid">${media.videos.map(videoCard).join('')}</div></section>

    <section class="gallery-section section-pad" aria-labelledby="gallery-title"><div class="gallery-heading"><div><div class="section-kicker"><span>04</span><span class="rule"></span><span>Visual notes</span></div><h2 id="gallery-title">A gallery of<br /><em>the journey.</em></h2></div><p>One supplied portrait. The remaining visuals are temporary until the approved event and handover archive arrives.</p></div><div class="gallery-grid">${media.gallery.map(galleryItem).join('')}</div></section>

    <section class="contact section-pad" id="contact" aria-labelledby="contact-title"><div class="contact-panel"><div><p class="eyebrow">05 / Stay close</p><h2 id="contact-title">Follow the next<br /><em>moment.</em></h2><p class="contact-copy">The verified public channel currently available is TikTok. Phone, WhatsApp, Facebook, Telegram and location details remain to be confirmed before publication.</p></div><div class="contact-actions"><a class="button button-gold" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Open verified TikTok ${icon('external')}</a><span class="contact-status">@getachewfikadujirata<br /><small>Verified profile link from content checklist</small></span></div></div></section>
  </main>
  <footer class="site-footer"><a class="wordmark" href="#top"><span class="wordmark-mark">G</span><span><strong>${brand.english}</strong><small>${brand.amharic}</small></span></a><p>Concept presentation. Content, media and contact details require owner confirmation before publishing.</p><a href="#top" class="back-top">Back to top ${icon('arrow')}</a></footer>
  <dialog class="media-dialog" id="media-dialog"><button class="dialog-close" type="button" data-close-dialog aria-label="Close dialog">${icon('close')}</button><div class="dialog-content"></div></dialog>
`;

const dialog = document.querySelector('#media-dialog');
const dialogContent = dialog.querySelector('.dialog-content');
const openVideo = (id) => { const video = media.videos.find(item => item.id === id); dialogContent.innerHTML = `<div class="dialog-icon">${icon('play')}</div><p class="eyebrow">${video.role}</p><h2>${video.caption}</h2><p>${video.description}</p><p class="dialog-note">Exact individual TikTok destination pending. This card is ready for the approved URL in <strong>content.js</strong>.</p><button class="button button-quiet" type="button" data-close-dialog>Close ${icon('close')}</button>`; dialog.showModal(); };

document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => openVideo(button.dataset.video)));
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { const item = media.gallery[button.dataset.gallery]; dialogContent.innerHTML = `<img class="dialog-image" src="${item.src}" alt="${item.alt}" /><p class="eyebrow">${item.label}</p><p>${item.temporary ? 'Temporary visual — replace with approved Gecho media when available.' : 'Supplied Gecho portrait.'}</p>`; dialog.showModal(); }));
dialog.addEventListener('click', (event) => { if (event.target === dialog || event.target.closest('[data-close-dialog]')) dialog.close(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog.open) dialog.close(); });
const menuToggle = document.querySelector('.menu-toggle'); const mobileMenu = document.querySelector('#mobile-menu');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); mobileMenu.hidden = open; });
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.hidden = true; }));
const headerElement = document.querySelector('[data-header]'); window.addEventListener('scroll', () => headerElement.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
