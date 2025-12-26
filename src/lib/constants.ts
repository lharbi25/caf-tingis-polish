/**
 * Business Configuration Constants
 * Centralized configuration for business contact information and settings
 */

export const BUSINESS_CONFIG = {
  // Contact Information
  phone: '+212600000000', // Update with real number
  email: 'contact@cafetingis.com',
  
  // Address
  address: {
    street: 'Place du Petit Socco',
    city: 'Tangier',
    region: 'Tanger-Tetouan-Al Hoceima',
    postalCode: '90000',
    country: 'MA',
  },
  
  // Coordinates
  coordinates: {
    latitude: 35.7854,
    longitude: -5.8135,
  },
  
  // Operating Hours
  hours: {
    opens: '06:30',
    closes: '00:30',
  },
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/cafetingis',
    facebook: 'https://facebook.com/cafetingis',
    tripadvisor: 'https://tripadvisor.com/cafetingis',
  },
  
  // Business Info
  info: {
    name: 'Café Tingis',
    alternateName: 'مقهى طنجيس',
    foundingYear: 1940,
    priceRange: '$',
    website: 'https://cafetingis.com',
  },
} as const;
