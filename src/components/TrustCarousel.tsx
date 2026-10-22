import React, { useState, useEffect, useRef } from 'react';
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { getWhatsAppUrl } from '../data/products';

interface TrustItem {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isWhatsApp?: boolean;
}

export const TrustCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const trustItems: TrustItem[] = [
    {
      id: 0,
      title: 'Free Delivery',
      subtitle: 'On orders over Rs. 5,000',
      icon: <Truck className="w-5 h-5 text-stone-900" strokeWidth={2} />
    },
    {
      id: 1,
      title: 'Quality Assurance',
      subtitle: '100% pure combed cotton',
      icon: <ShieldCheck className="w-5 h-5 text-stone-900" strokeWidth={2} />
    },
    {
      id: 2,
      title: 'Return Within 7 Days',
      subtitle: 'Damaged item guarantee',
      icon: <RotateCcw className="w-5 h-5 text-stone-900" strokeWidth={2} />
    },
    {
      id: 3,
      title: 'WhatsApp Support',
      subtitle: 'Fast response 24/7',
      icon: <WhatsAppLogo className="w-5 h-5 text-[#25D366]" />,
      isWhatsApp: true
    }
  ];

  // Auto-cycle on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustItems.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [trustItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trustItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-b border-stone-200 py-4 sm:py-5 px-4 sm:px-8 select-none shadow-2xs">
      {/* Desktop / Tablet View: All 4 displayed across in 4 columns */}
      <div className="hidden md:grid md:grid-cols-4 max-w-7xl mx-auto divide-x divide-stone-300">
        {trustItems.map((item) => {
          const content = (
            <div className="flex items-center justify-center gap-3.5 px-4 py-1.5 group">
              <div className="w-11 h-11 rounded-full bg-white border border-stone-300 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-stone-400 transition-all">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="text-xs lg:text-[13px] font-black tracking-wider uppercase text-stone-950 leading-tight">
                  {item.title}
                </p>
                <p className="text-[11px] lg:text-xs text-stone-600 font-medium mt-1 leading-snug">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );

          return item.isWhatsApp ? (
            <a
              key={item.id}
              href={getWhatsAppUrl('Assalam-o-Alaikum! I need help with an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              {content}
            </a>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </div>

      {/* Mobile View: Small Interactive Auto Carousel without arrows */}
      <div
        className="md:hidden relative flex flex-col items-center justify-center max-w-sm mx-auto py-1"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full overflow-hidden px-2">
          {trustItems.map((item, index) => {
            const isActive = currentIndex === index;
            if (!isActive) return null;

            const card = (
              <div className="flex items-center justify-center gap-3.5 py-1.5 animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-2xs flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-black tracking-wide uppercase text-stone-950 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );

            return item.isWhatsApp ? (
              <a
                key={item.id}
                href={getWhatsAppUrl('Assalam-o-Alaikum! I need help with an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                {card}
              </a>
            ) : (
              <div key={item.id}>{card}</div>
            );
          })}
        </div>

        {/* Small dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {trustItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-5 h-1.5 bg-stone-900' : 'w-1.5 h-1.5 bg-stone-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
