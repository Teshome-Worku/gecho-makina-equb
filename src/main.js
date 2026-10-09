import { siteContent } from '../content.js';
import './styles.css';
import './fallbacks.css';

const { brand, links, contact, media } = siteContent;

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 6 9 6-9 6V6Z"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    external: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5H6V6h5"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    phone: '<path d="M7.5 4.5 10 7l-1.7 2.3a12.1 12.1 0 0 0 6.4 6.4L17 14l2.5 2.5-1.2 2.7c-.3.7-1 1.1-1.8 1C10 19.2 4.8 14 3.8 7.5c-.1-.8.3-1.5 1-1.8L7.5 4.5Z"/>',
    telegram: '<path d="m21 3-3.2 18-6.1-5.1-3.5 3.3.7-5.8L21 3Z"/><path d="m8.9 13.4 8.8-7.7"/>',
    tiktok: '<path d="M14 4v10.2a4.3 4.3 0 1 1-3.1-4.1"/><path d="M14 4c.5 2.7 2.1 4.3 4.8 4.8"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="1"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
};

const safeLink = (url) => url || links.tiktokProfile;
const header = `
  <header class="site-header" data-header>
    <a class="wordmark" href="#top" aria-label="Gecho Makina Equb home">
      <img class="wordmark-logo" src="/assets/photos/logo.jpg" alt="" />
      <span><strong>${brand.english}</strong><small>${brand.amharic}</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#about">About</a><a href="#cars">Explore the cars</a><a href="#process">How it works</a><a href="#moments">Moments</a><a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Follow on TikTok ${icon('external')}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"><span class="sr-only">Open menu</span>${icon('menu')}</button>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <a href="#about">About</a><a href="#cars">Explore the cars</a><a href="#process">How it works</a><a href="#moments">Moments</a><a href="#contact">Contact</a>
      <a class="button button-gold" href="${safeLink(links.tiktokProfile)}" target="_blank" rel="noreferrer">Open verified TikTok ${icon('external')}</a>
    </div>
  </header>`;

const videoCard = (video, index) => `
  <article class="video-card reveal" style="--delay:${index * 90}ms">
    <a class="video-poster" href="${safeLink(video.url)}" target="_blank" rel="noreferrer" aria-label="Open ${video.role}: ${video.caption} on TikTok">
      <img src="${video.poster}" alt="${video.description}" loading="lazy" onerror="this.classList.add('media-unavailable')" />
      <span class="play-button">${icon('play')}</span>
    </a>
    <div class="video-card-copy"><p class="eyebrow">${video.role}</p><h3>${video.caption}</h3><p>${video.description}</p><a class="text-link" href="${safeLink(video.url)}" target="_blank" rel="noreferrer">View on TikTok ${icon('external')}</a></div>
  </article>`;

const carCard = (car, index) => `
  <article class="car-card reveal" style="--delay:${index * 70}ms">
    <div class="car-image-wrap"><img src="${car.image}" alt="${car.alt}" loading="lazy" onerror="this.classList.add('media-unavailable')" /><span class="car-index">0${index + 1}</span></div>
    <div class="car-card-copy"><p class="eyebrow">${car.category}</p><h3>${car.title}</h3><p>${car.description}</p></div>
  </article>`;

const phoneCard = (phone) => `
  <article class="contact-card">
    <span class="contact-card-icon">${icon('phone')}</span><div><p class="eyebrow">Call Gecho</p><a class="contact-value" href="tel:${phone}">${phone}</a></div><button class="copy-number" type="button" data-copy-number="${phone}" aria-label="Copy ${phone}">${icon('copy')}<span>Copy</span></button>
  </article>`;

const galleryItem = (item, index) => `<button class="gallery-item ${index === 0 ? 'gallery-feature' : ''} reveal" type="button" data-gallery="${index}" style="--delay:${index * 90}ms"><img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.classList.add('media-unavailable')" /><span>${item.label}</span></button>`;

const app = document.querySelector('#app');
app.innerHTML = `
  ${header}
  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-slides" aria-hidden="true">${media.heroSlides.map((slide, index) => `<div class="hero-slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}" style="background-image:url('${slide.src}');background-position:${slide.position}"></div>`).join('')}</div><div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow hero-eyebrow">${brand.amharic} <span></span> Car-focused equb</p><h1 id="hero-title">Your journey to a car<br /><em>starts here.</em></h1><p class="hero-copy">Discover Gecho Makina Equb, follow the excitement of the draw, and explore the vehicles and memorable moments shared with the community.</p><div class="hero-actions"><a class="button button-gold" href="#cars">Explore the cars ${icon('arrow')}</a><a class="button button-quiet" href="#contact">Contact Gecho ${icon('arrow')}</a></div><a class="hero-story-link" href="#moments">Watch the moments ${icon('arrow')}</a></div>
      <div class="hero-meta"><span>01 / ${String(media.heroSlides.length).padStart(2, '0')}</span><span class="hero-line"></span><span>Scroll to discover</span></div><div class="hero-controls" aria-label="Hero image controls"><button type="button" class="hero-control" data-hero-prev aria-label="Previous hero image">${icon('arrow')}</button><div class="hero-dots">${media.heroSlides.map((_, index) => `<button type="button" class="hero-dot ${index === 0 ? 'is-active' : ''}" data-hero-dot="${index}" aria-label="Show hero image ${index + 1}" aria-pressed="${index === 0}"></button>`).join('')}</div><button type="button" class="hero-control hero-next" data-hero-next aria-label="Next hero image">${icon('arrow')}</button></div>
    </section>

    <section class="intro section-pad" id="about" aria-labelledby="about-title"><div class="section-kicker"><span>01</span><span class="rule"></span><span>About Gecho</span></div><div class="intro-grid"><div><h2 id="about-title">Cars, community<br /><em>and possibility.</em></h2></div><div class="intro-copy"><p class="lead">Gecho Makina Equb brings people together around a car-focused equb in Ethiopia.</p><p>People participate by purchasing tickets, a draw takes place, and selected participants may receive vehicles. Current participation details are shared through the official channel.</p><a class="text-link" href="#contact">Contact us for current details ${icon('arrow')}</a></div></div></section>

    <section class="portrait-band" aria-labelledby="owner-title"><div class="portrait-image"><img src="${media.portrait}" alt="Getachew Fikadu, owner of Gecho Makina Equb" /><span class="portrait-name-backdrop" aria-hidden="true">GETACHEW<br />FIKADU</span><span class="portrait-owner-tag">Owner / Gecho Makina Equb</span></div><div class="portrait-copy"><p class="eyebrow">Meet the owner</p><h2 id="owner-title" class="owner-name">Getachew<br /><em>Fikadu.</em></h2><p class="caption">The person behind Gecho Makina Equb, bringing people together around car-focused participation, draws and vehicle handover moments.</p><a class="text-link" href="#contact">Talk to Gecho ${icon('arrow')}</a></div></section>

    <section class="cars section-pad" id="cars" aria-labelledby="cars-title"><div class="cars-heading"><div><div class="section-kicker"><span>02</span><span class="rule"></span><span>Explore the cars</span></div><h2 id="cars-title">Every journey<br /><em>has a shape.</em></h2></div><p>Explore the variety of vehicles that make the automotive journey feel personal. The showcase reflects the world of cars around Gecho; current draw details are shared directly by the team.</p></div><div class="car-grid">${media.cars.map(carCard).join('')}</div><a class="button button-quiet cars-cta" href="#contact">Ask about current draws ${icon('arrow')}</a></section>

    <section class="process section-pad" id="process" aria-labelledby="process-title"><div class="section-kicker"><span>03</span><span class="rule"></span><span>How it works</span></div><div class="process-heading"><h2 id="process-title">Understand the path<br /><em>before you join.</em></h2><p>Participation requirements and current arrangements are shared by the Gecho team. The public journey is simple to follow.</p></div><div class="steps"><div class="step"><span>01</span><h3>Understand</h3><p>Contact the team for current participation requirements and ticket information.</p></div><div class="step"><span>02</span><h3>Follow the draw</h3><p>Stay connected to the official channel for draw moments and public updates.</p></div><div class="step"><span>03</span><h3>See the handover</h3><p>Follow published vehicle handover moments shared with the community.</p></div></div><p class="integrity-note">Participation details can change. Contact Gecho for the current information before taking part.</p></section>

    <section class="moments section-pad" id="moments" aria-labelledby="moments-title"><div class="moments-top"><div><div class="section-kicker"><span>04</span><span class="rule"></span><span>Draws & handovers</span></div><h2 id="moments-title">The story<br /><em>in motion.</em></h2></div><p>Explore event energy, vehicle handovers and community moments shared through the official TikTok channel.</p></div><div class="video-grid">${media.videos.map(videoCard).join('')}</div><a class="button moments-cta" href="${links.tiktokProfile}" target="_blank" rel="noreferrer">Explore all moments ${icon('external')}</a></section>

    <section class="gallery-section section-pad" aria-labelledby="gallery-title"><div class="gallery-heading"><div><div class="section-kicker"><span>04</span><span class="rule"></span><span>Visual notes</span></div><h2 id="gallery-title">A gallery of<br /><em>the journey.</em></h2></div><p>One portrait and a visual window into the vehicles, events and handovers at the heart of Gecho Makina Equb.</p></div><div class="gallery-grid">${media.gallery.map(galleryItem).join('')}</div></section>

    <section class="contact section-pad" id="contact" aria-labelledby="contact-title"><div class="contact-panel"><div><p class="eyebrow">05 / Get in touch</p><h2 id="contact-title">Let’s talk<br /><em>cars.</em></h2><p class="contact-copy">Ask Gecho about current participation details, tickets and the latest draw moments. Choose the channel that works best for you.</p></div><div class="contact-actions"><a class="social-contact-link" href="${links.tiktokProfile}" target="_blank" rel="noreferrer">${icon('tiktok')}<span><small>Follow the story</small><strong>TikTok</strong></span>${icon('external')}</a><a class="social-contact-link" href="${contact.telegram.url}" target="_blank" rel="noreferrer">${icon('telegram')}<span><small>Message Gecho</small><strong>Telegram ${contact.telegram.username}</strong></span>${icon('external')}</a></div></div><div class="phone-grid">${contact.phones.map(phoneCard).join('')}</div></section>
  </main>
  <footer class="site-footer"><a class="wordmark" href="#top"><img class="wordmark-logo" src="/assets/photos/logo.jpg" alt="" /><span><strong>${brand.english}</strong><small>${brand.amharic}</small></span></a><p>Car-focused equb in Ethiopia. Follow the official channel for current participation details and public updates.</p><div class="footer-links"><a href="${links.tiktokProfile}" target="_blank" rel="noreferrer" aria-label="Gecho on TikTok">${icon('tiktok')}</a><a href="${contact.telegram.url}" target="_blank" rel="noreferrer" aria-label="Gecho on Telegram">${icon('telegram')}</a><a href="#top" class="back-top">Back to top ${icon('arrow')}</a></div></footer>
  <dialog class="media-dialog" id="media-dialog"><button class="dialog-close" type="button" data-close-dialog aria-label="Close gallery image">${icon('close')}</button><div class="dialog-content"></div></dialog>
`;

const dialog = document.querySelector('#media-dialog');
const dialogContent = dialog.querySelector('.dialog-content');
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { const item = media.gallery[button.dataset.gallery]; dialogContent.innerHTML = `<img class="dialog-image" src="${item.src}" alt="${item.alt}" /><p class="eyebrow">${item.label}</p><p>${item.temporary ? 'Vehicle detail.' : 'Supplied Gecho portrait.'}</p>`; dialog.showModal(); }));
dialog.addEventListener('click', (event) => { if (event.target === dialog || event.target.closest('[data-close-dialog]')) dialog.close(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog.open) dialog.close(); });
const menuToggle = document.querySelector('.menu-toggle'); const mobileMenu = document.querySelector('#mobile-menu');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); mobileMenu.hidden = open; });
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.hidden = true; }));
const headerElement = document.querySelector('[data-header]'); window.addEventListener('scroll', () => headerElement.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('[data-hero-dot]')];
let activeHero = 0;
let heroTimer;
const setHeroSlide = (index) => {
  activeHero = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeHero));
  heroDots.forEach((dot, dotIndex) => { dot.classList.toggle('is-active', dotIndex === activeHero); dot.setAttribute('aria-pressed', String(dotIndex === activeHero)); });
};
const restartHeroTimer = () => { clearInterval(heroTimer); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) heroTimer = setInterval(() => setHeroSlide(activeHero + 1), 7000); };
document.querySelector('[data-hero-prev]').addEventListener('click', () => { setHeroSlide(activeHero - 1); restartHeroTimer(); });
document.querySelector('[data-hero-next]').addEventListener('click', () => { setHeroSlide(activeHero + 1); restartHeroTimer(); });
heroDots.forEach(dot => dot.addEventListener('click', () => { setHeroSlide(Number(dot.dataset.heroDot)); restartHeroTimer(); }));
restartHeroTimer();

document.querySelectorAll('[data-copy-number]').forEach(button => button.addEventListener('click', async () => {
  const number = button.dataset.copyNumber;
  try { await navigator.clipboard.writeText(number); } catch { const input = document.createElement('input'); input.value = number; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); }
  const label = button.querySelector('span'); const original = label.textContent; label.textContent = 'Copied'; button.classList.add('is-copied'); setTimeout(() => { label.textContent = original; button.classList.remove('is-copied'); }, 1600);
}));
