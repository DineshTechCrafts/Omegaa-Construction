export const officeLocation = {
  label: 'Office Address',
  name: 'Omegaa Construction',
  addressLines: [
    '3/28 Ellappa Nagar,',
    '2nd street (Opposite Collector Office),',
    'Kanchipuram - 631 501',
  ],
  mapsUrl: 'https://maps.app.goo.gl/6Wyw8GP5kLZ64VeJ6',
  directionsLabel: 'View on Google Maps',
} as const;

export type ContactPhone = {
  display: string;
  href: string;
};

export const contactChannels = {
  email: 'omegaasiva@gmail.com',
  phones: [
    { display: '+91 95009 55010', href: 'tel:+919500955010' },
    { display: '+91 91235 79767', href: 'tel:+919123579767' },
  ] satisfies ContactPhone[],
  whatsapp: {
    display: '+91 91235 79767',
    href: 'https://wa.me/919123579767',
  },
} as const;
