import { BusinessInfo } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Compagnoni Giardineria',
  category: 'Florist / Garden',
  address: 'Via Cantonale 215, 7748 Campascio, Switzerland',
  street: 'Via Cantonale 215',
  postalCode: '7748',
  city: 'Campascio',
  country: 'Switzerland',
  phone: '081 846 55 05',
  phoneRaw: '+41818465505',
  description: 'Flower and plant shop with gardening focus',
};

export const GOOGLE_MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Compagnoni Giardineria, Via Cantonale 215, 7748 Campascio, Switzerland'
)}`;

export const NAVIGATION_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'flowers-plants', label: 'Flowers & Plants' },
  { id: 'gardening', label: 'Gardening' },
  { id: 'contact', label: 'Contact' },
] as const;

// Verified, high-definition botanical editorial images (Unsplash CDN with no-referrer)
export const BOTANICAL_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80', // lush botanical glasshouse & terracotta planters
  shopInterior: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80', // botanical foliage shop interior
  florals: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', // fresh seasonal cut blooms
  gardenPottery: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80', // terracotta pots & botanical garden greenery
  alpineLandscape: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // mountain valley landscape
  pottedGreenery: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80', // potted plant foliage
  botanicalCraft: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=1200&q=80', // florist arranging stems
};
