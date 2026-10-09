import { gechoMoments } from './src/data/gechoMoments.js';

export const siteContent = {
  brand: {
    english: 'Gecho Makina Equb',
    amharic: 'ጌች የመኪና እቁብ',
    description: 'Join a car-focused equb: purchase tickets, follow the draw, and see selected vehicle handovers shared with the community.',
  },
  links: {
    tiktokProfile: 'https://www.tiktok.com/@getachewfikadujirata',
    telegram: 'https://t.me/gech49',
    whatsapp: '',
    facebook: '',
    map: '',
  },
  contact: {
    phones: ['0949503030', '0922181818', '0917818155'],
    telegram: {
      username: '@gech49',
      url: 'https://t.me/gech49',
    },
  },
  media: {
    portrait: '/assets/photos/gecho%20profile.png',
    heroSlides: [
      {
        src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88',
        alt: 'Dark sports car on an open road',
        position: 'center 58%',
      },
      {
        src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=88',
        alt: 'Premium sedan moving through a city landscape',
        position: 'center 55%',
      },
      {
        src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2200&q=88',
        alt: 'Modern SUV in a cinematic outdoor setting',
        position: 'center 56%',
      },
      {
        src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=88',
        alt: 'Luxury performance car with sculpted bodywork',
        position: 'center 52%',
      },
    ],
    cars: [
      {
        category: 'Premium sedans',
        title: 'Quiet confidence',
        description: 'Refined lines, considered details and a composed presence on the road.',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=84',
        alt: 'Premium sedan on a road',
      },
      {
        category: 'Modern SUVs',
        title: 'Made for the journey',
        description: 'A strong, spacious silhouette for everyday movement and open roads.',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=84',
        alt: 'Modern SUV parked outdoors',
      },
      {
        category: 'Sports cars',
        title: 'A little more pulse',
        description: 'Expressive design and a sense of occasion in every line.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=84',
        alt: 'Dark sports car on an open road',
      },
      {
        category: 'Luxury vehicles',
        title: 'The detail matters',
        description: 'Distinctive proportions for the moments that deserve to be remembered.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=84',
        alt: 'Luxury performance car',
      },
      {
        category: 'Everyday cars',
        title: 'Ready for real life',
        description: 'Practical shape, familiar comfort and room for the days ahead.',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=84',
        alt: 'Everyday car in a warm outdoor setting',
      },
      {
        category: 'Pickups & utility',
        title: 'Built to carry on',
        description: 'Purposeful capability for work, movement and the wider journey.',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=84',
        alt: 'Pickup truck on a road',
      },
    ],
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
