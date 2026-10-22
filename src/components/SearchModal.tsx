import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { ProductItem, CategoryFilter } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onSearchSubmitRedirect?: (params: {
    category?: CategoryFilter | null;
    productId?: string | null;
    query?: string;
  }) => void;
}

const CATEGORY_MAP: { [key: string]: CategoryFilter } = {
  bedsheet: 'Full Bedsheets',
  bedsheets: 'Full Bedsheets',
  chadar: 'Full Bedsheets',
  sheet: 'Full Bedsheets',
  sheets: 'Full Bedsheets',
  bridal: 'Full Bedsheets',
  single: 'Single Bedsheets',
  curtain: 'Curtains',
  curtains: 'Curtains',
  parda: 'Curtains',
  parde: 'Curtains',
  drape: 'Curtains',
  drapes: 'Curtains',
  apron: 'Apron',
  aprons: 'Apron',
  kitchen: 'Apron',
  quilt: 'Winter Razai',
  quilts: 'Winter Razai',
  razai: 'Winter Razai',
  comforter: 'Comforters',
  comforters: 'Comforters',
  pillow: 'Pillow Sets',
  pillows: 'Pillow Sets',
  takia: 'Pillow Sets',
  pillowcase: 'Pillow Sets',
  pillowcases: 'Pillow Sets',
  'pillow cover': 'Pillow Sets',
  'pillow covers': 'Pillow Sets',
  cushion: 'Cushion Covers',
  cushions: 'Cushion Covers'
};

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSearchSubmitRedirect
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filtered = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          (p.filterGroup && p.filterGroup.toLowerCase().includes(trimmed)) ||
          p.shortDescription.toLowerCase().includes(trimmed) ||
          (p.urduName && p.urduName.includes(trimmed))
      )
    : [];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!trimmed) {
      if (onSearchSubmitRedirect) {
        onSearchSubmitRedirect({ category: 'All', productId: null, query: '' });
      }
      onClose();
      return;
    }

    // Check if query matches a known category
    let matchedCategory: CategoryFilter | null = null;
    for (const [kw, cat] of Object.entries(CATEGORY_MAP)) {
      if (trimmed === kw || trimmed.includes(kw)) {
        matchedCategory = cat;
        break;
      }
    }

    const firstProduct = filtered.length > 0 ? filtered[0] : null;

    if (onSearchSubmitRedirect) {
      onSearchSubmitRedirect({
        category: matchedCategory || (firstProduct ? (firstProduct.category as CategoryFilter) : null),
        productId: firstProduct ? firstProduct.id : null,
        query: trimmed
      });
    } else if (firstProduct) {
      onSelectProduct(firstProduct);
      onClose();
    } else {
      onClose();
    }
  };

  const handleQuickSearchClick = (term: string) => {
    setQuery(term);
    const tLower = term.toLowerCase();
    let matchedCategory: CategoryFilter | null = null;
    for (const [kw, cat] of Object.entries(CATEGORY_MAP)) {
      if (tLower === kw || tLower.includes(kw)) {
        matchedCategory = cat;
        break;
      }
    }

    const matchedProds = products.filter(
      (p) =>
        p.name.toLowerCase().includes(tLower) ||
        p.category.toLowerCase().includes(tLower) ||
        (p.filterGroup && p.filterGroup.toLowerCase().includes(tLower))
    );
    const firstProd = matchedProds.length > 0 ? matchedProds[0] : null;

    if (onSearchSubmitRedirect) {
      onSearchSubmitRedirect({
        category: matchedCategory || (firstProd ? (firstProd.category as CategoryFilter) : null),
        productId: firstProd ? firstProd.id : null,
        query: term
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" />

      <div className="relative min-h-screen px-4 pt-16 pb-20 flex justify-center">
        <div className="relative w-full max-w-3xl bg-[#FFFFFF] p-5 sm:p-8 shadow-2xl border border-stone-200 rounded-xs">
          {/* Search Form with Enter key support & Search Button */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
            <div className="flex items-center gap-3 flex-1 bg-stone-50 hover:bg-stone-100/70 focus-within:bg-white focus-within:ring-2 focus-within:ring-stone-900 border border-stone-200 px-3.5 py-2.5 rounded-xs transition-all">
              <Search className="w-5 h-5 text-stone-500 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search bedsheets, razai, comforters, curtains, towels..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-sm sm:text-base bg-transparent focus:outline-hidden text-stone-900 placeholder:text-stone-400 font-light"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                  title="Clear search text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dedicated Search Action Button */}
            <button
              type="submit"
              className="py-2.5 px-4 sm:px-6 bg-[#212121] hover:bg-[#111111] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer rounded-xs shrink-0 flex items-center gap-1.5 shadow-xs active:scale-[0.98]"
              title="Search and redirect"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xs transition-colors cursor-pointer shrink-0"
              aria-label="Close search"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </form>

          {/* Quick categories pills */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 py-1 font-light text-[11px] sm:text-xs">Quick categories:</span>
            {['Full Bedsheets', 'Single Bedsheets', 'Winter Razai', 'Comforters', 'Curtains', 'Apron'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handleQuickSearchClick(term)}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer border border-stone-200/80 text-[11px] rounded-xs flex items-center gap-1 group"
              >
                <span>{term}</span>
                <ArrowRight className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          {/* Search Results */}
          {trimmed ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-500">
                  Search Results ({filtered.length})
                </h4>
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="text-xs text-stone-700 hover:text-stone-950 font-medium underline cursor-pointer"
                >
                  View on Products Page →
                </button>
              </div>

              {filtered.length === 0 ? (
                <div className="py-8 text-center space-y-3">
                  <p className="text-sm text-stone-500 font-light">
                    No items found for "{query}". Try searching for "bedsheets", "cotton", or "razai".
                  </p>
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer hover:bg-stone-800 transition-colors"
                  >
                    <span>Browse All Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-[60vh] overflow-y-auto pr-1">
                  {filtered.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        onClose();
                      }}
                      className="flex gap-3 sm:gap-4 p-3 bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50/70 transition-all cursor-pointer group shadow-2xs rounded-xs"
                      title="Click to redirect to this product card"
                    >
                      <div className="w-16 h-16 bg-stone-100 shrink-0 overflow-hidden border border-stone-200 rounded-xs">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              '/Product%20Images/bedsheets/1.jpg';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-baseline gap-1">
                            <h5 className="text-xs font-semibold text-stone-900 group-hover:text-stone-600 transition-colors truncate">
                              {prod.name}
                            </h5>
                            {prod.urduName && (
                              <span className="text-[11px] text-stone-400 font-serif shrink-0">{prod.urduName}</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-500 font-light truncate">{prod.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-stone-100">
                          <p className="text-xs font-mono font-bold text-stone-900">
                            Rs. {prod.startingPrice.toLocaleString()}
                          </p>
                          <span className="text-[10px] text-emerald-700 font-semibold group-hover:underline flex items-center gap-0.5">
                            <span>View Card</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="py-8 text-center border-t border-stone-100 text-stone-400 text-xs font-light space-y-1">
              <p>Type product name, category, or fabric and press <strong className="text-stone-600 font-semibold">Enter</strong> or click <strong className="text-stone-600 font-semibold">Search</strong>.</p>
              <p className="text-[11px]">We'll take you directly to the relevant category or product card.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
