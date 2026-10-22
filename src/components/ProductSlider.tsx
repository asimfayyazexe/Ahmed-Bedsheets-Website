import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { ProductItem } from '../types';
import { getWhatsAppUrl } from '../data/products';

interface ProductSliderProps {
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  title?: string;
  subtitle?: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  onSelectProduct,
  title = 'Top Selling Products',
  subtitle = 'Explore our handcrafted Pakistani cotton bedsheets, winter quilts, comforters, curtains & towels'
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const current = sliderRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        current.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-10 sm:py-12 px-4 sm:px-6 md:px-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block mb-1.5">
              FEATURED COLLECTION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#212121] tracking-tight">
              {title}
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1 max-w-xl font-light">
              {subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-stone-800 transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-stone-800 transition-colors cursor-pointer shadow-2xs"
              aria-label="Next products"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => {
            const whatsappMsg = `Assalam-o-Alaikum! I am interested in *${product.name}* (Rs. ${product.startingPrice.toLocaleString()} ${product.unit}). Please share pictures and sizes.`;

            return (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[260px] sm:w-[290px] md:w-[320px] bg-[#FFFFFF] border border-stone-200 hover:border-stone-400 flex flex-col justify-between overflow-hidden group shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Local product image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        '/Product%20Images/bedsheets/1.jpg';
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors leading-tight">
                        {product.name}
                      </h3>
                      {product.urduName && (
                        <span className="font-serif text-stone-500 text-xs shrink-0 font-normal">
                          {product.urduName}
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-stone-500 line-clamp-2 mb-3 font-light leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Price & Unit */}
                    <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                          Starts at
                        </span>
                        <span className="font-mono text-base font-bold text-stone-900">
                          Rs. {product.startingPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500 font-sans">
                        {product.unit}
                      </span>
                    </div>

                    {/* Action */}
                    <a
                      href={getWhatsAppUrl(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 text-[10px] font-semibold tracking-wider uppercase bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs rounded-xs"
                    >
                      <WhatsAppLogo className="w-3.5 h-3.5 shrink-0" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
