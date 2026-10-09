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
    telegramGroup: 'https://t.me/getachew_Fikadu_yemekina_ukubi',
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
        category: 'SUV',
        title: 'Black SUV',
        description: 'Road-ready SUV profile.',
        image: '/assets/photos/v8_car.jpg',
        alt: 'Black SUV photographed on a sunny road',
        position: 'center 62%',
      },
      {
        category: 'Isuzu trucks',
        title: 'Isuzu commercial trucks',
        description: 'Isuzu truck lineup.',
        image: '/assets/photos/izuzu_car.jpg',
        alt: 'Isuzu trucks displayed outside a building',
        position: 'center 58%',
      },
      {
        category: 'Pickup vehicles',
        title: 'Dark utility pickups',
        description: 'Pickup and utility vehicles.',
        image: '/assets/photos/house_car.jpg',
        alt: 'Two dark pickup vehicles displayed outdoors at night',
        position: 'center 58%',
      },
      {
        category: 'Electric SUV',
        title: 'BYD Sealion 06',
        description: 'BYD electric SUV.',
        image: '/assets/photos/BYD_sealion_06_car.jpg',
        alt: 'White BYD Sealion 06 displayed beside a person',
        position: 'center 64%',
      },
      {
        category: 'Everyday cars',
        title: 'Ready for real life',
        description: 'Everyday passenger car.',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=84',
        alt: 'Everyday car in a warm outdoor setting',
      },
      {
        category: 'Pickups & utility',
        title: 'Built to carry on',
        description: 'Pickup and utility vehicle.',
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
