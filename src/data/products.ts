import { ProductItem, ShopInfo, CustomerTestimonial } from '../types';

export const SHOP_INFO: ShopInfo = {
  name: 'Ahmed Bedsheets & Quilt Center',
  tagline: 'Premium bedding and home textiles — Okara Cantt, Pakistan',
  phone: '+923196590379', phoneDisplay: '+92 319 6590379', whatsappNumber: '923196590379', whatsappDisplay: '+92 319 6590379',
  contacts: [
    { name: 'M Abdullah Shaban', phone: '+923196590379', phoneDisplay: '+92 319 6590379', whatsappNumber: '923196590379' },
    { name: 'Majid Bhutta', phone: '+923325155815', phoneDisplay: '+92 332 5155815', whatsappNumber: '923325155815' }
  ],
  email: 'info@ahmedbedsheets.pk', address: 'Shop No 20, New Stadium Market, Okara Cantt', city: 'Okara Cantt', province: 'Punjab', country: 'Pakistan',
  openingHours: 'Mon - Sun: 9:00 AM - 10:00 PM', fridayHours: 'Friday: 9:00 AM - 10:00 PM (Prayer Break: 1:00 PM - 2:30 PM)', ownerName: 'M Abdullah Shaban & Majid Bhutta'
};

export const getWhatsAppUrl = (message: string, whatsappNumber = SHOP_INFO.whatsappNumber): string =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

type ProductSeed = Omit<ProductItem, 'id' | 'name' | 'imageUrl' | 'sliderImageUrl' | 'isPopular'> & {
  folder: string;
  files: string[];
  namePrefix: string;
  popular?: boolean;
};

const numberedFiles = (numbers: number[]) => numbers.map((number) => `${number}.jpg`);
const productImage = (folder: string, filename: string) =>
  `/Product%20Images/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

const PRODUCT_SEEDS: ProductSeed[] = [
  {
    folder: 'bedsheets', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    namePrefix: 'Cotton Full Bedsheet', urduName: 'فل بیڈ شیٹ', category: 'Full Bedsheets', filterGroup: 'Full Bedsheets',
    shortDescription: 'Soft 100% cotton and crystal full bedsheet set with matching pillow covers.',
    fullDescription: 'A comfortable cotton and crystal bedsheet set made for a polished everyday bedroom. Each design is easy to wash, breathable, and made for regular use.',
    startingPrice: 2199, unit: 'per double set', features: ['94 × 102 inch double bedsheet', '2 matching pillow covers (18 × 28 inches)', 'Soft, breathable cotton and crystal fabric', 'Easy-care, durable everyday finish'],
    materials: '100% Cotton & Crystal', sizes: ['Double: 94 × 102 inches + 2 pillow covers', 'Single: 60 × 94 inches + 1 pillow cover'],
    colors: [{ name: 'As pictured', hex: '#D6C8B4', bgStyle: '#D6C8B4' }], renderType: 'bedsheet', popular: true
  },
  {
    folder: 'single bedhseets', files: numberedFiles([5, 6, 7, 8, 9, 11, 12, 13, 14]),
    namePrefix: 'Soft Cotton Single Bedsheet', urduName: 'سنگل بیڈ شیٹ', category: 'Single Bedsheets', filterGroup: 'Single Bedsheets',
    shortDescription: 'Breathable cotton single bedsheet with one coordinated pillow cover.',
    fullDescription: 'A soft, comfortable single-bed set with an elegant printed finish. Ideal for everyday use and simple to maintain.',
    startingPrice: 1199, unit: 'per single set', features: ['60 × 94 inch single bedsheet', '1 pillow cover (18 × 28 inches)', 'Soft and breathable 100% cotton', 'Machine washable and easy to maintain'],
    materials: '100% Cotton', sizes: ['Single: 60 × 94 inches + 1 pillow cover'],
    colors: [{ name: 'As pictured', hex: '#D6C8B4', bgStyle: '#D6C8B4' }], renderType: 'bedsheet', popular: true
  },
  {
    folder: 'gultas single bedsheet', files: numberedFiles([1, 2, 3, 4]),
    namePrefix: 'Premium Gultex Single Bedsheet', urduName: 'گُلٹیکس بیڈ شیٹ', category: 'Single Bedsheets', filterGroup: 'Single Bedsheets',
    shortDescription: 'Premium Gultex single bedsheet with a soft feel and matching pillow cover.',
    fullDescription: 'A premium Gultex bedsheet collection designed for a neat, comfortable single bed. The durable fabric is easy to care for and stays stylish for daily use.',
    startingPrice: 1359, unit: 'per single set', features: ['54 × 90 inch single bedsheet', '1 pillow cover (18 × 28 inches)', 'Premium Gultex fabric', 'Durable, washable and comfortable'],
    materials: 'Premium Gultex', sizes: ['Single: 54 × 90 inches + 1 pillow cover'],
    colors: [{ name: 'As pictured', hex: '#D6C8B4', bgStyle: '#D6C8B4' }], renderType: 'bedsheet'
  },
  {
    folder: 'comforters', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    namePrefix: 'Premium Cotton Comforter Set', urduName: 'کمفرٹر سیٹ', category: 'Comforters', filterGroup: 'Comforters',
    shortDescription: 'Complete eight-piece cotton and crystal comforter set for a cozy bedroom.',
    fullDescription: 'A complete comforter collection with bedding, pillow covers, quilted covers, and cushion covers. The soft, breathable fabric is cozy without feeling heavy.',
    startingPrice: 8459, unit: 'per double set', features: ['8-piece complete double set', '94 × 102 inch comforter and bedsheet', '2 simple + 2 quilted pillow covers', '2 matching 16 × 16 inch cushion covers'],
    materials: 'Premium Pure Cotton & Crystal', sizes: ['Double: Rs. 8,459', 'Single: Rs. 5,899'],
    colors: [{ name: 'As pictured', hex: '#B5BEC2', bgStyle: '#B5BEC2' }], renderType: 'comforter', popular: true
  },
  {
    folder: 'curtuns', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    namePrefix: 'Elegant Window Curtain', urduName: 'ونڈو پردہ', category: 'Curtains', filterGroup: 'Curtains',
    shortDescription: 'Smooth imported window curtains with steel or plastic ring options.',
    fullDescription: 'A graceful, light-dimming curtain for bedrooms, lounges, dining rooms, and home theatres. Its substantial fabric helps with privacy and temperature control.',
    startingPrice: 2200, unit: 'per pair', features: ['55 × 90 inch panel size', 'Single and double-pair options', 'Steel or plastic ring options', 'Light-dimming and privacy-friendly drape'],
    materials: 'Imported smooth curtain fabric', sizes: ['Single pair: 55 × 90 inches', 'Double pair: 55 × 90 inches'],
    colors: [{ name: 'As pictured', hex: '#C7BBAA', bgStyle: '#C7BBAA' }], renderType: 'curtains', popular: true
  },
  {
    folder: 'pillows', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
    namePrefix: 'Premium Pillow Cover Set', urduName: 'تکیہ کور سیٹ', category: 'Pillow Sets', filterGroup: 'Pillow Sets',
    shortDescription: 'Premium printed pillow covers with soft fillings for a finished bedroom look.',
    fullDescription: 'A two-piece pillow cover and filling set with fade-resistant prints and easy everyday care. It fits standard pillows and adds a polished touch to your room.',
    startingPrice: 449, unit: 'per set', features: ['2 pillow covers and 2 fillings', '18 × 28 inch standard size', '100% cotton and crystal fabric', 'Machine washable, vibrant printed finish'],
    materials: '100% Cotton & Crystal', sizes: ['Pair: 18 × 28 inches'],
    colors: [{ name: 'As pictured', hex: '#F5F5F3', bgStyle: '#F5F5F3' }], renderType: 'pillowcovers'
  },
  {
    folder: 'kushans', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    namePrefix: 'Decorative Cushion Cover', urduName: 'کشن کور', category: 'Cushion Covers', filterGroup: 'Cushion Covers',
    shortDescription: 'Vibrant polycotton cushion cover with a soft matching filling.',
    fullDescription: 'A precisely stitched decorative cushion cover designed to brighten a sofa, bed, or lounge. The durable polycotton fabric is washable and easy to care for.',
    startingPrice: 449, unit: 'per cushion', features: ['16 × 16 inch cover', '16 × 16 inch filling included', '100% polycotton', 'Machine washable and easy care'],
    materials: '100% Poly Cotton', sizes: ['16 × 16 inches'],
    colors: [{ name: 'As pictured', hex: '#C7B2CF', bgStyle: '#C7B2CF' }], renderType: 'pillows'
  },
  {
    folder: 'razai', files: numberedFiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]),
    namePrefix: 'Cozy Winter Razai', urduName: 'ونٹر رضائی', category: 'Winter Razai', filterGroup: 'Winter Razai',
    shortDescription: 'Micro-cotton filled razai with crystal finish, warmth, and a polished satin stripe.',
    fullDescription: 'A warm, filled winter razai for comfortable cold-weather sleep. Premium micro cotton creates a smooth feel, while the generous filling provides dependable warmth.',
    startingPrice: 6999, unit: 'per double razai', features: ['Double filled razai: 94 × 102 inches, 8 kg', 'Single filled razai: 60 × 94 inches, 5.5 kg', 'Filled gadha option: 45 × 78 inches, 4.5 kg', 'Includes coordinating cover'],
    materials: '100% Micro Cotton & Crystal', sizes: ['Double: Rs. 6,999', 'Single: Rs. 3,999', 'Gadha: Rs. 1,899'],
    colors: [{ name: 'As pictured', hex: '#7A3238', bgStyle: '#7A3238' }], renderType: 'razai', popular: true, isWinterSpecial: true
  },
  {
    folder: 'approns', files: ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '110.jpg', 'Gemini_Generated_Image_tiy4bytiy4bytiy4.jpg', 'Gemini_Generated_Image_ao7tbiao7tbiao7t.jpg'],
    namePrefix: 'Designed Kitchen Apron', urduName: 'ڈیزائن ایپرن', category: 'Apron', filterGroup: 'Apron',
    shortDescription: 'A stylish, lightweight apron for cooking, baking, crafting, and daily work.',
    fullDescription: 'A practical apron that keeps clothes protected while giving a neat, comfortable fit. Easy to wear, adjust, wash, and use every day at home or work.',
    startingPrice: 400, unit: 'per apron', features: ['Parachute and zeen fabric options', 'Comfortable, lightweight coverage', 'Adjustable and easy to wear', 'Easy to wash and maintain'],
    materials: 'Parachute & Zeen', sizes: ['Free size'],
    colors: [{ name: 'As pictured', hex: '#314457', bgStyle: '#314457' }], renderType: 'aprons'
  }
];

export const ALL_PRODUCTS: ProductItem[] = PRODUCT_SEEDS.flatMap((seed) =>
  seed.files.map((filename, index) => ({
    id: `${seed.folder.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-${filename.replace(/[^a-z0-9]+/gi, '-').replace(/-$/, '')}`,
    name: `${seed.namePrefix} — Design ${String(index + 1).padStart(2, '0')}`,
    urduName: seed.urduName, category: seed.category, filterGroup: seed.filterGroup, shortDescription: seed.shortDescription,
    fullDescription: seed.fullDescription, startingPrice: seed.startingPrice, unit: seed.unit, features: seed.features,
    materials: seed.materials, sizes: seed.sizes, colors: seed.colors, isWinterSpecial: seed.isWinterSpecial,
    isPopular: seed.popular && index < 2, renderType: seed.renderType, imageUrl: productImage(seed.folder, filename), sliderImageUrl: productImage(seed.folder, filename)
  }))
);

export const TESTIMONIALS: CustomerTestimonial[] = [
  { id: 'test-1', customerName: 'Ayesha Khan', city: 'Lahore', occasion: 'New Home Setup', comment: 'The quality and service were excellent. The designs look even better in person.', productsBought: 'Bedsheets & cushions' },
  { id: 'test-2', customerName: 'Bilal Ahmed', city: 'Okara', occasion: 'Winter Shopping', comment: 'The razai is warm, comfortable, and beautifully finished.', productsBought: 'Winter razai' },
  { id: 'test-3', customerName: 'Sana Malik', city: 'Sahiwal', occasion: 'Bedroom Refresh', comment: 'Helpful WhatsApp service and lovely curtain designs.', productsBought: 'Curtains & pillow sets' }
];

export interface HeroSlideItem { id: number; productId: string; tag: string; headline: string; subhead: string; priceNote: string; ctaText: string; imageUrl: string; }
export const HERO_SLIDES: HeroSlideItem[] = [
  { id: 0, productId: 'bedsheets-1', tag: 'COTTON BEDDING COLLECTION', headline: 'Bring Fresh Comfort Home.', subhead: 'Discover colourful cotton full and single bedsheets for everyday comfort.', priceNote: 'Full sets from Rs. 2,199', ctaText: 'Explore Bedsheets', imageUrl: '/Home%20Page/Slider/bed.jpg' },
  { id: 1, productId: 'razai-1', tag: 'WINTER WARMTH', headline: 'Cozy Winter Razai.', subhead: 'Soft micro-cotton filled razai made for warm, restful winter nights.', priceNote: 'Starting from Rs. 3,999', ctaText: 'Explore Winter Razai', imageUrl: '/Home%20Page/Slider/quilt.jpg' },
  { id: 2, productId: 'comforters-1', tag: 'COMPLETE COMFORTER SETS', headline: 'A Complete Bed, Beautifully Styled.', subhead: 'Eight-piece cotton comforter sets with coordinating covers and cushions.', priceNote: 'Double sets from Rs. 8,459', ctaText: 'Explore Comforters', imageUrl: '/Home%20Page/Slider/comforter.jpg' }
];

export interface CustomizedProductItem { id: string; title: string; description: string; imageUrl: string; whatsappText: string; }
export const CUSTOMIZED_PRODUCTS: CustomizedProductItem[] = [
  { id: 'custom-bedsheet', title: 'Custom-Stitched Bedsheets', description: 'Tailored sheets and pillow covers for your exact mattress measurements.', imageUrl: '/Product%20Images/bedsheets/1.jpg', whatsappText: 'Assalam-o-Alaikum! I want to inquire about custom-stitched bedsheets with specific dimensions.' },
  { id: 'custom-razai', title: 'Bespoke Winter Razai', description: 'Choose a winter razai with your preferred size and filling weight.', imageUrl: '/Product%20Images/razai/1.jpg', whatsappText: 'Assalam-o-Alaikum! I want to order a custom-weight winter razai / quilt.' },
  { id: 'custom-curtains', title: 'Made-to-Measure Curtains', description: 'Custom curtains for standard or oversized windows with your choice of rings.', imageUrl: '/Product%20Images/curtuns/1.jpg', whatsappText: 'Assalam-o-Alaikum! I have window measurements for custom curtains.' },
  { id: 'custom-cushions', title: 'Coordinated Cushion Covers', description: 'Create a matching bedding look with your preferred cushion designs.', imageUrl: '/Product%20Images/kushans/1.jpg', whatsappText: 'Assalam-o-Alaikum! I want to inquire about customized cushion covers.' }
];

export const ABOUT_PAGE_DATA = { showroomImage: '/About%20Page/shop%20img.jpg', craftsmanshipImage: '/About%20Page/owner%20img.jpg' };
export const HOME_PAGE_BANNERS = {
  beddingBanner: '/Home%20Page/Banners/Bed.jpg', towelsBanner: '/Product%20Images/approns/2.jpg',
  winterRazaiBanner: '/Home%20Page/Winter%20Heritage/winter%20heritage.jpg', showroomInspection: '/About%20Page/shop%20img.jpeg'
};
