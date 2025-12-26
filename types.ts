
export type Language = 'es' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ContactInfo {
  address: string;
  city: string;
  email: string;
  phone: string;
  whatsapp: string;
  phoneRaw: string;
  whatsappRaw: string;
  googleMaps: string;
}
