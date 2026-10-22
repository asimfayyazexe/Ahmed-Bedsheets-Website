import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HeroBedroomVisual } from './VisualRenders';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[780px] overflow-hidden group">
      {/* Visual Render of the iconic cozy bedroom */}
      <div className="absolute inset-0 w-full h-full">
        <HeroBedroomVisual className="w-full h-full" />
      </div>

      {/* Subtle overlay for optimal editorial text contrast without dimming the sunlight */}
      <div className="absolute inset-0 bg-stone-900/15 pointer-events-none" />

      {/* Hero Content (Bed in full bloom. + SHOP NOW) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white drop-shadow-md tracking-tight mb-6 transition-transform duration-500">
          Bed in full bloom.
        </h1>

        <button
          onClick={onShopNow}
          className="px-8 py-3.5 bg-white text-[#212121] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 hover:text-black transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
        >
          SHOP NOW
        </button>

        {/* Scroll down indicator chevron */}
        <button
          onClick={onShopNow}
          aria-label="Scroll to featured collections"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 hover:text-white transition-opacity p-2 cursor-pointer animate-bounce"
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};
