export type GalleryCategory =
  | 'Precision Haircuts'
  | 'Beard Sculpting'
  | 'Hair Treatments'
  | 'Groom Makeovers'
  | 'Salon Interiors'
  | 'Skin & Spa';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Precision Haircuts',
  'Beard Sculpting',
  'Hair Treatments',
  'Groom Makeovers',
  'Salon Interiors',
  'Skin & Spa',
];

const px = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', src: px('1319460'), alt: 'Barber crafting a clean skin fade haircut', category: 'Precision Haircuts' },
  { id: 'g2', src: px('2035308'), alt: 'Sharp scissor cut and modern men’s hairstyle', category: 'Precision Haircuts', tall: true },
  { id: 'g3', src: px('3998429'), alt: 'Detailed clipper fade finishing', category: 'Precision Haircuts' },
  { id: 'g4', src: px('1570807'), alt: 'Precision beard trimming and jawline sculpting', category: 'Beard Sculpting', tall: true },
  { id: 'g5', src: px('897262'), alt: 'Straight razor beard line-up and grooming', category: 'Beard Sculpting' },
  { id: 'g6', src: px('3993449'), alt: 'Classic hot towel shave preparation', category: 'Beard Sculpting' },
  { id: 'g7', src: px('3992874'), alt: 'Hair wash and scalp conditioning treatment', category: 'Hair Treatments', tall: true },
  { id: 'g8', src: px('3993324'), alt: 'Men’s hair styling and blow-dry finish', category: 'Hair Treatments' },
  { id: 'g9', src: px('3757942'), alt: 'Relaxing men’s facial and skin care ritual', category: 'Skin & Spa' },
  { id: 'g10', src: px('3993467'), alt: 'Deep cleansing charcoal skin treatment', category: 'Skin & Spa', tall: true },
  { id: 'g11', src: px('1813272'), alt: 'Hair Box modern salon chairs and mirror stations', category: 'Salon Interiors' },
  { id: 'g12', src: px('2061820'), alt: 'Minimalist barbershop interior and grooming tools', category: 'Salon Interiors', tall: true },
  { id: 'g13', src: px('1043474'), alt: 'Wedding groom sharp haircut and styled beard look', category: 'Groom Makeovers', tall: true },
  { id: 'g14', src: px('2897531'), alt: 'Formal occasion men’s grooming and styling', category: 'Groom Makeovers' },
  { id: 'g15', src: px('3998417'), alt: 'Final styling check for event-ready hair', category: 'Groom Makeovers' },
];