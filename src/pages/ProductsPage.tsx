import React, { useState, useEffect } from 'react';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { ProductItem, CategoryFilter } from '../types';
import { getWhatsAppUrl } from '../data/products';

interface ProductsPageProps {
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  targetProductId?: string | null;
  onClearTargetProduct?: () => void;
  targetCategory?: CategoryFilter | null;
  onClearTargetCategory?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onSelectProduct,
  targetProductId,
  onClearTargetProduct,
  targetCategory,
  onClearTargetCategory
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(targetCategory || 'All');

  // Sync category when targetCategory prop changes
  useEffect(() => {
    if (targetCategory) {
      setActiveFilter(targetCategory);
    }
  }, [targetCategory]);

  // Redirect and scroll directly to product card or category when selected from Search
  useEffect(() => {
    if (targetProductId) {
      // If a category was also specified, keep it; otherwise set 'All' so product is guaranteed in DOM
      if (targetCategory) {
        setActiveFilter(targetCategory);
      } else {
        setActiveFilter('All');
      }

      const timer = setTimeout(() => {
        const el = document.getElementById(`product-${targetProductId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (onClearTargetProduct) onClearTargetProduct();
        if (onClearTargetCategory) onClearTargetCategory();
      }, 150);

      return () => clearTimeout(timer);
    } else if (targetCategory) {
      setActiveFilter(targetCategory);
      const timer = setTimeout(() => {
        window.scrollTo({ top: 380, behavior: 'smooth' });
      }, 100);
      if (onClearTargetCategory) onClearTargetCategory();
      return () => clearTimeout(timer);
    }
  }, [targetProductId, targetCategory]);

  const filterTabs: CategoryFilter[] = [
    'All',
    'Full Bedsheets',
    'Single Bedsheets',
    'Comforters',
    'Curtains',
    'Apron',
    'Pillow Sets',
    'Cushion Covers',
    'Winter Razai'
  ];

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-[#FFFFFF] py-10 sm:py-12 px-3 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block mb-2">
            CATALOG & PRICING
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#212121] tracking-tight">
            Our Complete Product Catalog
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-light">
            Export-grade fabrics, Punjab cotton bedsheets, and handmade winter quilts.
            Every item can be ordered directly via WhatsApp or purchased at our shop.
          </p>
        </div>

        {/* Categories Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-5xl mx-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all rounded-xs border cursor-pointer ${
                    isActive
                      ? 'bg-[#212121] text-white border-[#212121] shadow-xs'
                      : 'bg-white text-stone-700 hover:text-stone-950 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Results count & clear filter */}
          <div className="flex items-center justify-between text-xs text-stone-500 mt-5 pt-3 border-t border-stone-100 max-w-7xl mx-auto">
            <span>
              Showing <strong className="text-stone-900 font-semibold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
              {activeFilter !== 'All' && <span> in <strong className="text-stone-900 font-semibold">{activeFilter}</strong></span>}
            </span>
            {activeFilter !== 'All' && (
              <button
                onClick={() => setActiveFilter('All')}
                className="text-stone-600 hover:text-stone-950 underline font-medium cursor-pointer"
              >
                Show All Categories
              </button>
            )}
          </div>
        </div>

        {/* All Product Cards Grid - 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredProducts.map((product) => {
            const whatsappMessage = `Assalam-o-Alaikum! I want to ask about *${product.name}* at Ahmed Bedsheets (Starting from Rs. ${product.startingPrice.toLocaleString()}). Please share available designs and sizes.`;
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="group bg-white border border-stone-200 hover:border-stone-400 rounded-xs flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Visual Photography Showcase (Clickable to open details) */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-square w-full bg-stone-100 overflow-hidden border-b border-stone-100 cursor-pointer"
                  title="Click to view details"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content - Responsive 2-column mobile */}
                <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1 min-h-[1.5rem] sm:min-h-[1.75rem]">
                      <h2
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-[13px] sm:text-base text-stone-900 font-medium group-hover:text-stone-600 transition-colors line-clamp-1 cursor-pointer"
                        title="Click to view details"
                      >
                        {product.name}
                      </h2>
                      {product.urduName && (
                        <span className="font-serif text-stone-500 text-[10px] sm:text-xs shrink-0 ml-1 font-normal">
                          {product.urduName}
                        </span>
                      )}
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-stone-600 leading-relaxed line-clamp-2 mb-2 sm:mb-3 font-light">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Pricing and Direct WhatsApp Action */}
                  <div className="pt-2 sm:pt-2.5 border-t border-stone-100 flex flex-col gap-1.5 sm:gap-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[8.5px] sm:text-[10px] text-stone-500 uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-stone-900">
                        Rs. {product.startingPrice.toLocaleString()}{' '}
                        <span className="text-[9px] sm:text-[10px] font-normal text-stone-500 font-sans">
                          {product.unit}
                        </span>
                      </span>
                    </div>

                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 sm:py-2.5 px-2 sm:px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[9.5px] sm:text-[11px] font-semibold tracking-wider uppercase hover:shadow-xs transition-all shadow-2xs flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer touch-manipulation active:scale-[0.98] rounded-xs"
                    >
                      <WhatsAppLogo className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Tailoring / Sizing Callout Banner */}
        <div className="mt-16 p-8 bg-stone-50 border border-stone-200 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-stone-900 font-medium">
              Need Custom Sizing for Imported Beds or Windows?
            </h3>
            <p className="text-xs text-stone-600 max-w-xl font-light">
              We provide tailored stitching for non-standard mattresses, deewans, charpai, and long salon windows.
              Send your measurements on WhatsApp for an immediate quote.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum! I have custom size requirements for bedsheets / curtains. Here are my dimensions:')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#212121] text-white text-xs font-semibold tracking-widest uppercase hover:bg-stone-900 transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <WhatsAppLogo className="w-4 h-4 text-[#25D366]" />
            <span>Request Custom Size</span>
          </a>
        </div>
      </div>
    </div>
  );
};
