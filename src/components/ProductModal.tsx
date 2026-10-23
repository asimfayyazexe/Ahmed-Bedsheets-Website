import React from 'react';
import { X, CheckCircle2, ShieldCheck, Scissors } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { ProductItem } from '../types';
import { getWhatsAppUrl } from '../data/products';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  React.useEffect(() => {
    if (product) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [product, onClose]);

  if (!product) return null;

  const whatsappInquiryMsg = `Assalam-o-Alaikum Ahmed Bedsheets!
I am interested in:
- Product: *${product.name}*
- Price starting at: Rs. ${product.startingPrice.toLocaleString()}

Please share available sizes, designs, and delivery options.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] md:h-[560px] bg-[#FFFFFF] shadow-2xl border-t sm:border border-stone-200 overflow-hidden flex flex-col md:flex-row rounded-t-2xl sm:rounded-none">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 p-2 sm:p-2.5 text-stone-700 hover:text-stone-950 bg-white/95 hover:bg-white backdrop-blur-md rounded-full cursor-pointer shadow-lg border border-stone-200/80 transition-all active:scale-95 touch-manipulation"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* MOBILE VIEW (< md): Smooth scrollable container with full square image and complete details */}
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain flex flex-col md:hidden">
            {/* Full square image container on mobile */}
            <div className="relative w-full aspect-square bg-[#FBFBFA] flex items-center justify-center overflow-hidden shrink-0 border-b border-stone-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/Product%20Images/bedsheets/1.jpg';
                }}
              />
            </div>

            {/* Mobile details body */}
            <div className="p-4 sm:p-6 space-y-3.5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
                    {product.category}
                  </span>
                  {product.urduName && (
                    <>
                      <span className="text-stone-300">·</span>
                      <span className="text-xs font-serif text-stone-600">{product.urduName}</span>
                    </>
                  )}
                </div>

                <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                  {product.name}
                </h2>
              </div>

              <div className="flex items-baseline gap-2">
                <p className="font-mono text-lg font-bold text-stone-900">
                  Rs. {product.startingPrice.toLocaleString()}
                </p>
                <span className="text-xs font-normal text-stone-500 font-sans">{product.unit}</span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {product.fullDescription}
              </p>

              {/* Specifications */}
              <div className="pt-1.5">
                <span className="block text-[10px] font-bold tracking-wider text-stone-800 uppercase mb-2">
                  Key Specifications
                </span>
                <div className="space-y-1.5">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE ACTION BAR: Always-visible sticky bottom bar with WhatsApp Order & Guarantee badges */}
          <div className="md:hidden shrink-0 p-3.5 sm:p-4 border-t border-stone-200 bg-white/95 backdrop-blur-md space-y-2 pb-[calc(0.875rem+env(safe-area-inset-bottom,0px))]">
            <a
              href={getWhatsAppUrl(whatsappInquiryMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.99] text-white text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm rounded-xs touch-manipulation"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>Order / Inquire on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-stone-500 pt-0.5 px-0.5">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                <span>Pure Fabric Guarantee</span>
              </span>
              <span className="flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                <span>Custom Stitching</span>
              </span>
            </div>
          </div>

          {/* DESKTOP VIEW (md:): Side-by-side 2-column layout */}
          {/* Desktop Visual Column */}
          <div className="hidden md:flex md:w-1/2 md:h-full bg-[#FBFBFA] relative items-center justify-center overflow-hidden shrink-0 border-r border-stone-200 p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  '/Product%20Images/bedsheets/1.jpg';
              }}
            />
          </div>

          {/* Desktop Details Column */}
          <div className="hidden md:flex md:w-1/2 md:h-full flex-col justify-between bg-white overflow-hidden">
            {/* Scrollable details body */}
            <div className="flex-1 min-h-0 overflow-y-auto p-8 space-y-4 overscroll-contain">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
                    {product.category}
                  </span>
                  {product.urduName && (
                    <>
                      <span className="text-stone-300">·</span>
                      <span className="text-xs font-serif text-stone-600">{product.urduName}</span>
                    </>
                  )}
                </div>

                <h2 className="font-serif text-2xl text-stone-900 font-normal leading-snug">
                  {product.name}
                </h2>
              </div>

              <div className="flex items-baseline gap-2">
                <p className="font-mono text-lg font-bold text-stone-900">
                  Rs. {product.startingPrice.toLocaleString()}
                </p>
                <span className="text-xs font-normal text-stone-500 font-sans">{product.unit}</span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {product.fullDescription}
              </p>

              {/* Specifications */}
              <div className="pt-2">
                <span className="block text-[10px] font-bold tracking-wider text-stone-800 uppercase mb-2">
                  Key Specifications
                </span>
                <div className="space-y-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Action buttons */}
            <div className="shrink-0 p-6 md:px-8 md:pb-8 md:pt-4 border-t border-stone-200 bg-white/95 backdrop-blur-xs space-y-2.5">
              <a
                href={getWhatsAppUrl(whatsappInquiryMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.99] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm rounded-xs touch-manipulation"
              >
                <WhatsAppLogo className="w-4 h-4" />
                <span>Order / Inquire on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-0.5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                  <span>Pure Fabric Guarantee</span>
                </span>
                <span className="flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                  <span>Custom Stitching</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
