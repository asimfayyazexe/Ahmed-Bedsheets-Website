import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { WhatsAppLogo } from './WhatsAppLogo';
import { getWhatsAppUrl } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappUrl = getWhatsAppUrl(
    'Assalam-o-Alaikum Ahmed Bedsheets! I would like to inquire about your products.'
  );

  const buttonElement = (
    <div
      id="floating-whatsapp-fixed-anchor"
      style={{
        position: 'fixed',
        bottom: '36px',
        right: '18px',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        userSelect: 'none'
      }}
    >
      {/* Desktop Tooltip on hover */}
      <div
        className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-1.5 bg-[#1F1F1F] text-white text-[12px] font-medium tracking-wide rounded-full shadow-xl opacity-0 translate-x-2 hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-stone-700"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Circular WhatsApp Button (Fixed to bottom right on both mobile & desktop) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ahmed Bedsheets on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          minWidth: '56px',
          minHeight: '56px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.65), 0 2px 8px rgba(0, 0, 0, 0.35)',
          border: '2.5px solid #FFFFFF',
          color: '#FFFFFF',
          textDecoration: 'none',
          cursor: 'pointer',
          touchAction: 'manipulation'
        }}
        className="active:scale-90 transition-transform duration-150 hover:brightness-105"
      >
        {/* Animated Green Ping Notification Dot */}
        <span
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            display: 'flex',
            height: '14px',
            width: '14px',
            pointerEvents: 'none'
          }}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-85" />
          <span
            style={{
              position: 'relative',
              display: 'inline-flex',
              borderRadius: '50%',
              height: '14px',
              width: '14px',
              backgroundColor: '#10B981',
              border: '2px solid #FFFFFF'
            }}
          />
        </span>

        {/* Crisp WhatsApp Icon */}
        <WhatsAppLogo size={30} className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );

  if (!mounted) return null;

  return createPortal(buttonElement, document.body);
};
