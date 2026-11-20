import {
  Crown,
  Droplets,
  Flame,
  Paintbrush,
  Scissors,
  ShieldCheck,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

export interface SubService {
  name: string;
  price: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  services: SubService[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'haircuts-styling',
    name: 'Haircuts & Styling',
    tagline: 'Precision skin fades, scissor cuts and modern finishes',
    icon: Scissors,
    services: [
      { name: 'Signature Haircut & Wash', price: 250 },
      { name: 'Advance Fade & Fashion Styling', price: 350 },
      { name: 'Kids Haircut (Under 12)', price: 180 },
    ],
  },
  {
    id: 'beard-shave',
    name: 'Beard Sculpting & Shave',
    tagline: 'Sharp jawline contouring and classic hot towel rituals',
    icon: Flame,
    services: [
      { name: 'Beard Trim & Razor Line-Up', price: 150 },
      { name: 'Classic Hot Towel Shave', price: 200 },
      { name: 'Luxury Beard Spa & Conditioning', price: 350 },
    ],
  },
  {
    id: 'hair-treatments',
    name: 'Hair Spa & Treatments',
    tagline: 'Restorative care for scalp health, shine and frizz control',
    icon: Droplets,
    services: [
      { name: 'Protein / Keratin Hair Spa', price: 800 },
      { name: 'Anti-Dandruff & Scalp Detox', price: 900 },
      { name: 'Hair Smoothening / Straightening', price: 2500 },
    ],
  },
  {
    id: 'hair-colouring',
    name: 'Hair Colouring & Highlights',
    tagline: 'Natural gray coverage and bold fashion tones',
    icon: Paintbrush,
    services: [
      { name: 'Ammonia-Free Root / Gray Touch-Up', price: 600 },
      { name: 'Global Hair Colour', price: 900 },
      { name: 'Fashion Streaks / Highlights', price: 1200 },
    ],
  },
  {
    id: 'skin-facials',
    name: 'Skin Care & Facials',
    tagline: 'Deep pore cleansing and tan removal built for men’s skin',
    icon: Sparkles,
    services: [
      { name: 'De-Tan & Charcoal Cleanup', price: 600 },
      { name: 'Oil-Control & Hydrating Facial', price: 1000 },
      { name: 'Radiance & Brightening Facial', price: 1400 },
    ],
  },
  {
    id: 'groom-packages',
    name: 'Groom Makeover Packages',
    tagline: 'Complete wedding and engagement grooming under one roof',
    icon: Crown,
    services: [
      { name: 'Engagement Groom Refresh', price: 2000 },
      { name: 'Signature Wedding Groom Package', price: 3500 },
      { name: 'VIP Groom & Pre-Wedding Ritual', price: 5000 },
    ],
  },
  {
    id: 'hand-foot-care',
    name: 'Men’s Manicure & Pedicure',
    tagline: 'Clean, groomed hands and feet with relaxing massage',
    icon: ShieldCheck,
    services: [
      { name: 'Express Nail Grooming', price: 400 },
      { name: 'Classic Men’s Manicure', price: 650 },
      { name: 'Signature Men’s Pedicure & Foot Spa', price: 850 },
    ],
  },
  {
    id: 'consultations',
    name: 'Style & Scalp Consultations',
    tagline: 'One-on-one face shape, hair texture and routine guidance',
    icon: UserCheck,
    services: [
      { name: 'Face-Shape & Haircut Consultation', price: 100 },
      { name: 'Scalp & Hair-Fall Checkup', price: 200 },
    ],
  },
];