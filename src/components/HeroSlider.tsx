import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { getWhatsAppUrl, HERO_SLIDES } from '../data/products';

interface HeroSliderProps {
  onBrowseProducts: () => void;
  onScrollDown: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onBrowseProducts,
  onScrollDown
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = HERO_SLIDES;
  const totalSlides = slides.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[75vh] min-h-[520px] sm:min-h-[580px] md:min-h-[640px] max-h-[820px] overflow-hidden select-none bg-stone-950 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Local background slider images with cross-fade */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.headline}
              className={`w-full h-full object-cover transform transition-transform duration-8000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              onError={(e) => {
                // Graceful fallback
                (e.currentTarget as HTMLImageElement).src =
                  '/Home%20Page/Slider/bed.jpg';
              }}
            />

            {/* Dark gradient scrims for maximum legibility and elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/35 to-stone-950/40" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-950/50" />
          </div>
        );
      })}

      {/* Slide Content Overlays */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        const inquiryMsg = `Assalam-o-Alaikum! I saw the *${slide.headline}* on your website slider. Please share available colors, sizes, and rates.`;

        return (
          <div
            key={`content-${slide.id}`}
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ease-out ${
              isActive
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-98 pointer-events-none'
            }`}
          >
            {/* Main Headline */}
            <h1 className="font-serif text-[34px] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white drop-shadow-lg tracking-tight mb-2.5 sm:mb-4 max-w-4xl px-2">
              {slide.headline}
            </h1>

            {/* Subhead */}
            <p className="text-stone-100 text-[11px] sm:text-base md:text-lg font-light max-w-2xl mb-4 sm:mb-8 drop-shadow-sm leading-relaxed px-2">
              {slide.subhead}
            </p>

            {/* Action Buttons - Compact & Side-by-Side on Mobile */}
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={onBrowseProducts}
                className="px-4 py-2.5 sm:px-7 sm:py-3.5 bg-white text-[#212121] text-[11px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.2em] uppercase hover:bg-stone-100 transition-all shadow-md cursor-pointer"
              >
                {slide.ctaText}
              </button>

              <a
                href={getWhatsAppUrl(inquiryMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-6 sm:py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md cursor-pointer"
              >
                <WhatsAppLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        );
      })}

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-stone-900/60 hover:bg-white text-white hover:text-stone-900 backdrop-blur-xs items-center justify-center shadow-lg border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-stone-900/60 hover:bg-white text-white hover:text-stone-900 backdrop-blur-xs items-center justify-center shadow-lg border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Bottom Controls: Centered Slide Dots & Scroll Down */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex items-center justify-center px-6 sm:px-12 pointer-events-none">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 pointer-events-auto bg-stone-900/50 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10">
          {slides.map((_, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-7 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Scroll Down Chevron Button */}
        {onScrollDown && (
          <div className="absolute right-6 sm:right-12 pointer-events-auto">
            <button
              onClick={onScrollDown}
              className="text-white/80 hover:text-white transition-opacity p-2 cursor-pointer animate-bounce bg-stone-900/40 backdrop-blur-xs rounded-full"
              aria-label="Scroll down"
              title="Scroll down"
            >
              <ChevronDown className="w-5 h-5" strokeWidth={1.8} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
