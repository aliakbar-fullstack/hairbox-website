export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Muhammed R.',
    service: 'Advance Fade & Beard Sculpting',
    rating: 5,
    quote: 'Cleanest skin fade in Tirur. The barber took time to understand the exact taper and beard line I wanted, and the finish stayed sharp for weeks.',
  },
  {
    id: 'r2',
    name: 'Arjun K.',
    service: 'Signature Wedding Groom Package',
    rating: 5,
    quote: 'Booked my wedding grooming session at Hair Box. From the keratin hair spa to the facial and wedding-day styling, everything was spotless and relaxed.',
  },
  {
    id: 'r3',
    name: 'Salman P.',
    service: 'Protein Hair Spa & De-Tan',
    rating: 5,
    quote: 'Great ambiance, hygienic tools, and zero waiting when you book via WhatsApp. Easily my go-to men’s salon in Kottakkal and Tirur.',
  },
];