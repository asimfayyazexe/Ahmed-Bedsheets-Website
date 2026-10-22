import React from 'react';
import { ArrowRight, ShieldCheck, Scissors, Sparkles, Store } from 'lucide-react';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { ProductItem } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { TrustCarousel } from '../components/TrustCarousel';
import { SHOP_INFO, getWhatsAppUrl, TESTIMONIALS, ALL_PRODUCTS, HOME_PAGE_BANNERS } from '../data/products';

interface HomePageProps {
  onBrowseProducts: () => void;
  onSelectProduct: (product: ProductItem) => void;
  popularProducts: ProductItem[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onBrowseProducts,
  onSelectProduct,
  popularProducts
}) => {
  const handleScrollDown = () => {
    const el = document.getElementById('featured-slider');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Top 4 flagship selling products: Bedsheets, Comforters, Curtains, Razai
  const topSellingProducts = [
    ALL_PRODUCTS.find((p) => p.id === 'bedsheets-1'),
    ALL_PRODUCTS.find((p) => p.id === 'comforters-1'),
    ALL_PRODUCTS.find((p) => p.id === 'curtuns-1'),
    ALL_PRODUCTS.find((p) => p.id === 'razai-1')
  ].filter(Boolean) as ProductItem[];

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 1. Full-width hero slider using local product photography */}
      <HeroSlider
        onBrowseProducts={onBrowseProducts}
        onScrollDown={handleScrollDown}
      />

      {/* Trust & Guarantee Strip */}
      <div className="my-3 sm:my-5">
        <TrustCarousel />
      </div>

      {/* 2. Top Selling Products (Static 4-Card Grid like Most Popular Essentials) */}
      <section id="featured-slider" className="w-full px-4 md:px-12 py-12 sm:py-16 my-6 sm:my-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block mb-1">
              BEST SELLERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#212121] tracking-tight">
              Top Selling Products
            </h2>
            <p className="text-xs text-stone-500 mt-2 tracking-wider uppercase">
              Explore our handcrafted Pakistani cotton bedsheets, winter quilts, comforters, curtains & towels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSellingProducts.map((product) => {
              const whatsappOrderUrl = getWhatsAppUrl(
                `Assalam-o-Alaikum! I want to ask about *${product.name}* at Ahmed Bedsheets (Starting from Rs. ${product.startingPrice.toLocaleString()}).`
              );
              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white border border-stone-200 hover:border-stone-400 p-3 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square w-full bg-stone-100 overflow-hidden mb-3 block cursor-pointer"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-108"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          '/Product%20Images/bedsheets/1.jpg';
                      }}
                    />

                    {/* Ask on WhatsApp Button overlay on hover */}
                    <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="w-full py-2 bg-[#212121] text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-1.5">
                        <WhatsAppLogo className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WhatsApp Order</span>
                      </span>
                    </div>
                  </a>

                <div className="flex flex-col text-left px-1">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <h3 className="text-sm font-medium text-[#212121] group-hover:text-stone-600 transition-colors">
                      {product.name}
                    </h3>
                    {product.urduName && (
                      <span className="font-light text-stone-400 font-serif text-xs">
                        {product.urduName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-700 font-mono font-semibold">
                    Starts Rs. {product.startingPrice.toLocaleString()}{' '}
                    <span className="font-sans text-[11px] text-stone-400 font-normal">
                      {product.unit}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* 3. Featured Category Split (Bedding & Daily Essentials) */}
      <section id="featured-categories" className="w-full px-4 md:px-8 py-8 my-6 sm:my-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Comforters & Bedding */}
          <div
            onClick={onBrowseProducts}
            className="relative h-[380px] sm:h-[440px] md:h-[480px] overflow-hidden group cursor-pointer bg-stone-900 border border-stone-200"
          >
            <img
              src={HOME_PAGE_BANNERS.beddingBanner}
              alt="Bedding & Quilts"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-200 bg-stone-900/60 backdrop-blur-xs px-3 py-1 mb-3 border border-white/20">
                100% PURE COTTON & BRIDAL
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal drop-shadow-md mb-2">
                Bedding & Quilts
              </h2>
              <p className="text-xs sm:text-sm text-stone-100 mb-5 max-w-sm font-light drop-shadow-xs">
                Export-quality cotton sheet sets, bridal trousseau, and hand-quilted winter razai.
              </p>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase border-b border-white hover:border-amber-300 transition-all pb-1">
                Explore Collection
              </span>
            </div>
          </div>

          {/* Card 2: Everyday Home Essentials */}
          <div
            onClick={onBrowseProducts}
            className="relative h-[380px] sm:h-[440px] md:h-[480px] overflow-hidden group cursor-pointer bg-stone-900 border border-stone-200"
          >
            <img
              src={HOME_PAGE_BANNERS.towelsBanner}
              alt="Daily Home Essentials"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-200 bg-stone-900/60 backdrop-blur-xs px-3 py-1 mb-3 border border-white/20">
                DAILY HOME TEXTILES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal drop-shadow-md mb-2">
                Daily Essentials
              </h2>
              <p className="text-xs sm:text-sm text-stone-100 mb-5 max-w-sm font-light drop-shadow-xs">
                Designed kitchen aprons, printed pillow sets, and colourful cushion covers for daily living.
              </p>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase border-b border-white hover:border-amber-300 transition-all pb-1">
                Explore Collection
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seasonal Banner (Winter: Razai, Comforters, Sleeping Bags) */}
      <section id="seasonal-banner" className="w-full px-4 md:px-12 lg:px-16 py-14 md:py-18 my-6 sm:my-10 bg-[#FFFFFF] border-y border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 mb-2">
              WINTER HERITAGE COLLECTION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#212121] mb-5 tracking-tight">
              The Winter Razai & Comforters
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-lg">
              The foundation of warm winter sleep in Punjab. Masterfully hand-quilted with pure carded cotton,
              luxurious velvet shells, and thermal sleeping bags for northern travel.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppUrl('Assalam-o-Alaikum! Please show me your Winter Razai and Comforter designs with prices.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#212121] border-b border-[#212121] pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Order Winter Razai on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div
            onClick={onBrowseProducts}
            className="lg:col-span-7 h-[320px] sm:h-[400px] md:h-[460px] overflow-hidden rounded-xs cursor-pointer group shadow-md border border-stone-200 relative"
          >
            <img
              src={HOME_PAGE_BANNERS.winterRazaiBanner}
              alt="Winter Razai & Comforters"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/15 group-hover:bg-stone-900/25 transition-colors" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-2 border border-stone-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-900">Hand-Quilted Winter Razai</p>
              <p className="text-[11px] text-stone-600 font-mono">Traditional carded cotton fill · Starting Rs. 4,200</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Why Shop With Us" Section */}
      <section className="w-full px-4 md:px-12 py-14 sm:py-16 my-6 sm:my-10 bg-[#FAFAFA] border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-stone-600 mb-2">
              PROMISE OF TRUST
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#212121]">
              Why Local Families Choose Ahmed Bedsheets
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: See Quality In Person */}
            <div className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src={HOME_PAGE_BANNERS.showroomInspection}
                  alt="Shop Showroom & In-Person Inspection"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/Product%20Images/bedsheets/1.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-900 border border-stone-200 shadow-xs">
                  <Store className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    See Quality In Person
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light mt-1.5">
                    Visit our physical shop in the Stadium Market. Feel the weight of the cotton, check the quilt stuffing, and choose colors with confidence.
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-stone-400 pt-2 block border-t border-stone-100">
                  Physical Stadium Market Shop
                </span>
              </div>
            </div>

            {/* Card 2: Fair Direct Shop Rates */}
            <div className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src="/Product%20Images/bedsheets/2.jpg"
                  alt="Textile Weaving & Factory Looms"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/Product%20Images/bedsheets/1.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-900 border border-stone-200 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    Fair Direct Shop Rates
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light mt-1.5">
                    Direct sourcing from Punjab textile looms without middleman markups. Transparent wholesale and retail pricing with zero hidden fees.
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-stone-400 pt-2 block border-t border-stone-100">
                  Loom-Direct Wholesale & Retail
                </span>
              </div>
            </div>

            {/* Card 3: Custom Sizes & Stitching */}
            <div className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src="/Product%20Images/curtuns/2.jpg"
                  alt="Custom Tailoring & Stitching"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/Product%20Images/curtuns/1.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-900 border border-stone-200 shadow-xs">
                  <Scissors className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    Custom Sizes & Stitching
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light mt-1.5">
                    Have an imported mattress or high-ceiling windows? We stitch bedsheets, elastic fitted corners, and curtains to your exact measurements.
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-stone-400 pt-2 block border-t border-stone-100">
                  Bespoke Dimensions Tailored
                </span>
              </div>
            </div>

            {/* Card 4: Bridal & Jahez Specialists */}
            <div className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src="/Product%20Images/comforters/2.jpg"
                  alt="Bridal and Jahez Wedding Trousseau"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/Product%20Images/comforters/1.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-900 border border-stone-200 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    Bridal & Jahez Specialists
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light mt-1.5">
                    Complete wedding trousseau sets including luxury jacquard bedsheets, matching comforters, and embroidered velvet razai.
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-stone-400 pt-2 block border-t border-stone-100">
                  Wedding Trousseau & Gifts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Popular Essentials Product Grid */}
      <section className="w-full px-4 md:px-12 py-14 sm:py-16 my-6 sm:my-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block mb-1">
              CURATED SELECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#212121] tracking-tight">
              Most Popular Essentials
            </h2>
            <p className="text-xs text-stone-500 mt-2 tracking-wider uppercase">
              In-stock items ready for immediate shop pickup or home delivery across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.slice(0, 4).map((product) => {
              const whatsappOrderUrl = getWhatsAppUrl(
                `Assalam-o-Alaikum! I want to ask about *${product.name}* at Ahmed Bedsheets (Starting from Rs. ${product.startingPrice.toLocaleString()}).`
              );
              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white border border-stone-200 hover:border-stone-400 p-3 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square w-full bg-stone-100 overflow-hidden mb-3 block cursor-pointer"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-108"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          '/Product%20Images/bedsheets/1.jpg';
                      }}
                    />

                    {/* Ask on WhatsApp Button overlay on hover */}
                    <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="w-full py-2 bg-[#212121] text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-1.5">
                        <WhatsAppLogo className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WhatsApp Order</span>
                      </span>
                    </div>
                  </a>

                  <div className="flex flex-col text-left px-1">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <h3 className="text-sm font-medium text-[#212121] group-hover:text-stone-600 transition-colors">
                        {product.name}
                      </h3>
                      {product.urduName && (
                        <span className="font-light text-stone-400 font-serif text-xs">
                          {product.urduName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-700 font-mono font-semibold">
                      Starts Rs. {product.startingPrice.toLocaleString()} <span className="font-sans text-[11px] text-stone-400 font-normal">{product.unit}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Real Customer Words */}
      <section className="w-full px-4 md:px-12 py-14 sm:py-16 my-6 sm:my-10 bg-[#FAFAFA] border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[#212121] uppercase mb-2">
              #AHMEDBEDSHEETS
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-stone-600">
              Trusted by local families, newlyweds, and hostel students across Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 bg-white border border-stone-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-stone-900 font-medium">{t.customerName}</h4>
                  <span className="text-[11px] text-stone-500 font-mono">{t.city}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">{t.occasion}</p>
                <p className="text-xs text-stone-700 italic leading-relaxed">"{t.comment}"</p>
                <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                  <span className="font-semibold text-stone-700">Purchased: </span>
                  {t.productsBought}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
