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

const safeLink = (url) => url || links.tiktokProfile;
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
    <a class="video-poster" href="${safeLink(video.url)}" target="_blank" rel="noreferrer" aria-label="Open ${video.role}: ${video.caption} on TikTok">
      <img src="${video.poster}" alt="${video.description}" loading="lazy" onerror="this.classList.add('media-unavailable')" />
      <span class="temporary-badge">Illustrative image</span>
      <span class="play-button">${icon('play')}</span>
    </a>
    <div class="video-card-copy"><p class="eyebrow">${video.role}</p><h3>${video.caption}</h3><p>${video.description}</p><a class="text-link" href="${safeLink(video.url)}" target="_blank" rel="noreferrer">View on TikTok ${icon('external')}</a></div>
  </article>`;

const galleryItem = (item, index) => `<button class="gallery-item ${index === 0 ? 'gallery-feature' : ''} reveal" type="button" data-gallery="${index}" style="--delay:${index * 90}ms"><img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.classList.add('media-unavailable')" /><span>${item.label}</span></button>`;

const app = document.querySelector('#app');
app.innerHTML = `
  ${header}
  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-image" style="background-image:url('${media.hero.src}')"></div><div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow hero-eyebrow">${brand.amharic} <span></span> Car-focused equb</p><h1 id="hero-title">A shared path<br /><em>to a car.</em></h1><p class="hero-copy">${brand.description}</p><div class="hero-actions"><a class="button button-gold" href="#contact">Contact us for current details ${icon('arrow')}</a><a class="button button-quiet" href="#process">How it works ${icon('arrow')}</a></div><a class="hero-story-link" href="#moments">Watch the moments ${icon('arrow')}</a></div>
      <div class="hero-meta"><span>01 / 04</span><span class="hero-line"></span><span>Scroll to discover</span></div><span class="temporary-hero-note">Illustrative automotive image</span>
    </section>

    <section class="intro section-pad" id="about" aria-labelledby="about-title"><div class="section-kicker"><span>01</span><span class="rule"></span><span>About Gecho</span></div><div class="intro-grid"><div><h2 id="about-title">Cars, community<br /><em>and possibility.</em></h2></div><div class="intro-copy"><p class="lead">Gecho Makina Equb brings people together around a car-focused equb in Ethiopia.</p><p>People participate by purchasing tickets, a draw takes place, and selected participants may receive vehicles. Current participation details are shared through the official channel.</p><a class="text-link" href="#contact">Contact us for current details ${icon('arrow')}</a></div></div></section>

    <section class="portrait-band"><div class="portrait-image"><img src="${media.portrait}" alt="Gecho portrait beside a vehicle" /></div><div class="portrait-copy"><p class="eyebrow">Gecho Makina Equb</p><blockquote>Car-focused.<br /><em>Community-led.</em></blockquote><p class="caption">A portrait of the person behind the public-facing Gecho Makina Equb story.</p></div></section>

    <section class="process section-pad" id="process" aria-labelledby="process-title"><div class="section-kicker"><span>02</span><span class="rule"></span><span>How it works</span></div><div class="process-heading"><h2 id="process-title">Understand the path<br /><em>before you join.</em></h2><p>Participation requirements and current arrangements are shared by the Gecho team. The public journey is simple to follow.</p></div><div class="steps"><div class="step"><span>01</span><h3>Understand</h3><p>Contact the team for current participation requirements and ticket information.</p></div><div class="step"><span>02</span><h3>Follow the draw</h3><p>Stay connected to the official channel for draw moments and public updates.</p></div><div class="step"><span>03</span><h3>See the handover</h3><p>Follow published vehicle handover moments shared with the community.</p></div></div><p class="integrity-note">Participation details can change. Contact Gecho for the current information before taking part.</p></section>

    <section class="moments section-pad" id="moments" aria-labelledby="moments-title"><div class="moments-top"><div><div class="section-kicker"><span>03</span><span class="rule"></span><span>Draws & handovers</span></div><h2 id="moments-title">The story<br /><em>in motion.</em></h2></div><p>Explore event energy, vehicle handovers and community moments shared through the official TikTok channel.</p></div><div class="video-grid">${media.videos.map(videoCard).join('')}</div></section>

    <section class="gallery-section section-pad" aria-labelledby="gallery-title"><div class="gallery-heading"><div><div class="section-kicker"><span>04</span><span class="rule"></span><span>Visual notes</span></div><h2 id="gallery-title">A gallery of<br /><em>the journey.</em></h2></div><p>One portrait and a visual window into the vehicles, events and handovers at the heart of Gecho Makina Equb.</p></div><div class="gallery-grid">${media.gallery.map(galleryItem).join('')}</div></section>

    <section class="contact section-pad" id="contact" aria-labelledby="contact-title"><div class="contact-panel"><div><p class="eyebrow">05 / Get in touch</p><h2 id="contact-title">Ready to learn<br /><em>more?</em></h2><p class="contact-copy">Contact Gecho through the official TikTok profile for current participation details, ticket information and public updates.</p></div><div class="contact-actions"><a class="button button-gold" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Contact us on TikTok ${icon('external')}</a><span class="contact-status">@getachewfikadujirata<br /><small>Official TikTok profile</small></span></div></div></section>
  </main>
  <footer class="site-footer"><a class="wordmark" href="#top"><span class="wordmark-mark">G</span><span><strong>${brand.english}</strong><small>${brand.amharic}</small></span></a><p>Car-focused equb in Ethiopia. Follow the official channel for current participation details and public updates.</p><a href="#top" class="back-top">Back to top ${icon('arrow')}</a></footer>
  <dialog class="media-dialog" id="media-dialog"><button class="dialog-close" type="button" data-close-dialog aria-label="Close gallery image">${icon('close')}</button><div class="dialog-content"></div></dialog>
`;

const dialog = document.querySelector('#media-dialog');
const dialogContent = dialog.querySelector('.dialog-content');
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { const item = media.gallery[button.dataset.gallery]; dialogContent.innerHTML = `<img class="dialog-image" src="${item.src}" alt="${item.alt}" /><p class="eyebrow">${item.label}</p><p>${item.temporary ? 'Illustrative vehicle image.' : 'Supplied Gecho portrait.'}</p>`; dialog.showModal(); }));
dialog.addEventListener('click', (event) => { if (event.target === dialog || event.target.closest('[data-close-dialog]')) dialog.close(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog.open) dialog.close(); });
const menuToggle = document.querySelector('.menu-toggle'); const mobileMenu = document.querySelector('#mobile-menu');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); mobileMenu.hidden = open; });
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.hidden = true; }));
const headerElement = document.querySelector('[data-header]'); window.addEventListener('scroll', () => headerElement.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
