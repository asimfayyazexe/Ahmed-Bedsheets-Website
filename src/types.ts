export type PageId = 'home' | 'products' | 'about' | 'contact';

export type CategoryFilter =
  | 'All'
  | 'Full Bedsheets'
  | 'Single Bedsheets'
  | 'Comforters'
  | 'Curtains'
  | 'Pillow Sets'
  | 'Cushion Covers'
  | 'Winter Razai'
  | 'Apron';

export interface ProductItem {
  id: string;
  name: string;
  urduName?: string;
  category: string;
  filterGroup?: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  unit: string;
  features: string[];
  materials: string;
  sizes: string[];
  colors: { name: string; hex: string; bgStyle: string }[];
  isWinterSpecial?: boolean;
  isPopular?: boolean;
  renderType?: 'bedsheet' | 'comforter' | 'curtains' | 'pillows' | 'pillowcovers' | 'razai' | 'razaicover' | 'sleepingbag' | 'mosquitonet' | 'towels' | 'aprons' | 'socks' | 'mattress';
  imageUrl: string;
  sliderImageUrl?: string;
}

export interface CustomerTestimonial { id: string; customerName: string; city: string; occasion: string; comment: string; productsBought: string; }
export interface ContactPerson { name: string; phone: string; phoneDisplay: string; whatsappNumber: string; }
export interface ShopInfo { name: string; tagline: string; phone: string; phoneDisplay: string; whatsappNumber: string; whatsappDisplay: string; contacts: ContactPerson[]; email: string; address: string; city: string; province: string; country: string; openingHours: string; fridayHours: string; ownerName: string; }
