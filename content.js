import { gechoMoments } from './src/data/gechoMoments.js';

export const siteContent = {
  brand: {
    english: 'Gecho Makina Equb',
    amharic: 'ጌች የመኪና እቁብ',
    description: 'Join a car-focused equb: purchase tickets, follow the draw, and see selected vehicle handovers shared with the community.',
  },
  links: {
    tiktokProfile: 'https://www.tiktok.com/@getachewfikadujirata',
    phone: '',
    whatsapp: '',
    facebook: '',
    telegram: '',
    map: '',
  },
  media: {
    portrait: '/assets/photos/gecho%20profile.png',
    hero: {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88',
      alt: 'Cinematic automotive image of a dark sports car on an open road',
      temporary: true,
    },
    videos: gechoMoments,
    gallery: [
      {
        src: '/assets/photos/gecho%20profile.png',
        alt: 'Gecho portrait beside a vehicle',
        label: 'Gecho portrait',
        temporary: false,
      },
      {
        src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=82',
        alt: 'White performance vehicle',
        label: 'Vehicle detail',
        temporary: true,
      },
      {
        src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=82',
        alt: 'Performance vehicle detail',
        label: 'Vehicle detail',
        temporary: true,
      },
    ],
  },
};
