export const STUDIO = {
  name: "HAIR BOX – THE MEN'S SALON",
  tagline: "The Men's Salon",
  address: '1st Floor, Moulana Space Building (Near Axis Bank), Ring Road, Tirur, Kerala 676101, India',
  secondaryAddress: '1st Floor, Thoppil Building, Thazhe Kottakkal (Opp. Taza Mandhi Restaurant), Kottakkal, Kerala 676503, India',
  phoneDisplay: '+91 95262 28000',
  phoneTel: '+919526228000',
  secondaryPhoneDisplay: '+91 80896 86288',
  secondaryPhoneTel: '+918089686288',
  whatsappNumber: '919526228000',
  email: 'hairboxtirur@gmail.com',
  hoursDisplay: 'Every day, 10:00 AM – 8:00 PM',
  opensMinutes: 10 * 60,
  closesMinutes: 20 * 60,
  mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Hair+Box+The+Mens+Salon+Ring+Road+Tirur',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Hair+Box+The+Mens+Salon+Ring+Road+Tirur&output=embed',
  googleRating: '4.8',
  branches: [
    {
      name: 'Tirur (Main Branch)',
      address: '1st Floor, Moulana Space Building (Near Axis Bank), Ring Road, Tirur, Kerala 676101',
      phoneDisplay: '+91 95262 28000',
      phoneTel: '+919526228000',
      whatsappNumber: '919526228000',
    },
    {
      name: 'Kottakkal Branch',
      address: '1st Floor, Thoppil Building, Thazhe Kottakkal (Opp. Taza Mandhi), Kottakkal, Kerala 676503',
      phoneDisplay: '+91 80896 86288',
      phoneTel: '+918089686288',
      whatsappNumber: '918089686288',
    },
  ],
};

export const GENERAL_BOOKING_MESSAGE =
  "Hello Hair Box – The Men's Salon, I would like to book an appointment. Please share available slots.";

export function buildWhatsAppUrl(message: string, phone = STUDIO.whatsappNumber): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}