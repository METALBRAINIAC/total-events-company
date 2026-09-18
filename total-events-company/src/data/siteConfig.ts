/**
 * ============================================================
 * SITE CONFIG — edit this file to update text used across the
 * whole website (contact details, social links, company name).
 * Every value below is a PLACEHOLDER. Replace with real info
 * whenever you have it — nothing here is invented company data.
 * ============================================================
 */

export const siteConfig = {
  companyName: 'Total Event Co.',
  tagline: 'Creating Memorable Events',
  country: 'Papua New Guinea',

  // PLACEHOLDER — replace with the real business phone number
  phone: '+675 000 0000',

  // PLACEHOLDER — replace with the real business email
  email: 'info@totaleventco.com',

  // PLACEHOLDER — replace with the real business address / suburb / city
  address: 'Port Moresby, Papua New Guinea',

  // PLACEHOLDER — replace with the real page URLs
  social: {
    facebook: 'https://facebook.com/PLACEHOLDER',
    instagram: 'https://instagram.com/PLACEHOLDER',
    // Add more platforms here if needed, e.g. tiktok, youtube, linkedin
  },
}

export const services = [
  {
    id: 'decoration-styling',
    title: 'Decoration and Styling',
    icon: 'Flower2',
    description:
      'PLACEHOLDER DESCRIPTION — Elegant decoration and styling for weddings, corporate functions, and private celebrations. Replace this text with your actual service description.',
  },
  {
    id: 'event-planning',
    title: 'Event Planning',
    icon: 'CalendarCheck2',
    description:
      'PLACEHOLDER DESCRIPTION — End-to-end planning and coordination so every event runs smoothly from start to finish. Replace this text with your actual service description.',
  },
  {
    id: 'concerts-live-shows',
    title: 'Concerts and Live Shows',
    icon: 'Mic2',
    description:
      'PLACEHOLDER DESCRIPTION — Full production support for concerts and live performances, from staging to show-day logistics. Replace this text with your actual service description.',
  },
  {
    id: 'sound-lighting',
    title: 'Sound and Lighting',
    icon: 'Speaker',
    description:
      'PLACEHOLDER DESCRIPTION — Professional sound and lighting equipment and technicians for events of any size. Replace this text with your actual service description.',
  },
] as const

export const galleryCategories = [
  'Weddings',
  'Corporate Events',
  'Birthday Events',
  'Concerts',
  'Stage Designs',
  'Sound and Lighting',
] as const
