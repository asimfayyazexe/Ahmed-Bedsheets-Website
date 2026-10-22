import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { PageId } from '../types';
import { SHOP_INFO, getWhatsAppUrl } from '../data/products';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'PRODUCTS', page: 'products' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT & ORDER', page: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF] shadow-xs">
      {/* Top Announcement Bar (Hidden on mobile) */}
      <div className="hidden sm:flex bg-[#212121] text-[#EDEAE3] px-4 md:px-8 py-2 text-[11px] font-medium tracking-widest items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 opacity-80" />
            <span>CALL {SHOP_INFO.phoneDisplay}</span>
          </a>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span className="hidden sm:inline tracking-wider">OKARA CANTT, PAKISTAN</span>
        </div>

        <div className="flex items-center">
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum Ahmed Bedsheets! I would like to inquire about your products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#25D366] hover:text-[#20ba59] transition-transform hover:scale-110 p-1"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <WhatsAppLogo className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-[#E8E2D6] px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-800 hover:text-stone-600 focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Brand Wordmark */}
        <div className="flex items-center">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left cursor-pointer group"
          >
            <span className="block text-[17px] sm:text-[22px] md:text-[27px] lg:text-[29px] font-serif font-extrabold sm:font-black tracking-[0.14em] sm:tracking-[0.22em] text-[#0A0A0A] group-hover:opacity-85 transition-opacity whitespace-nowrap leading-tight">
              AHMED BEDSHEETS
            </span>
            <span className="block text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-medium tracking-[0.16em] sm:tracking-[0.24em] uppercase text-stone-500 mt-0.5 whitespace-nowrap">
              And Quilt Center Okara Cantt, Pakistan
            </span>
          </button>
        </div>

        {/* Nav Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-semibold tracking-[0.2em] text-[#2C2A29]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-1 relative transition-colors cursor-pointer hover:text-stone-600 ${
                  isActive ? 'text-stone-950 font-bold' : 'text-[#3E3C38]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#212121]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search, Call, WhatsApp */}
        <div className="flex items-center gap-3 sm:gap-4 text-[#212121]">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 hover:text-stone-500 transition-colors cursor-pointer text-stone-900"
            aria-label="Search products"
            title="Search"
          >
            <Search className="w-5 h-5 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
          </button>

          {/* Call Icon on desktop */}
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="p-1.5 hover:text-stone-500 transition-colors hidden sm:block"
            aria-label="Call shop"
            title="Call"
          >
            <Phone className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.8} />
          </a>

          {/* WhatsApp Logo (Hidden on mobile) */}
          <a
            href={getWhatsAppUrl('Assalam-o-Alaikum! I have a question about products at Ahmed Bedsheets.')}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#25D366] hover:text-[#20ba59] hover:scale-110 transition-all cursor-pointer hidden sm:flex items-center justify-center"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <WhatsAppLogo className="w-5 h-5 sm:w-[20px] sm:h-[20px]" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D6] bg-[#FFFFFF] px-6 py-5 flex flex-col gap-4 text-xs font-semibold tracking-widest text-[#2C2A29] animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                onNavigate(link.page);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 border-b border-stone-200/60 flex justify-between items-center ${
                currentPage === link.page ? 'text-stone-950 font-bold' : 'text-stone-700'
              }`}
            >
              <span>{link.label}</span>
              <span className="text-stone-400">→</span>
            </button>
          ))}

          {/* Shop Contacts in Drawer */}
          <div className="pt-2 flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
              Direct Phone & WhatsApp:
            </span>
            {SHOP_INFO.contacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phone}`}
                className="flex items-center justify-between py-2 px-2.5 bg-stone-100 rounded-xs text-stone-800 text-xs hover:bg-stone-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-700" />
                  <span className="font-medium">{contact.name}</span>
                </div>
                <span className="font-mono font-bold text-[11px]">{contact.phoneDisplay}</span>
              </a>
            ))}

            <a
              href={getWhatsAppUrl('Assalam-o-Alaikum! Inquiring from mobile.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase shadow-xs transition-colors rounded-xs"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
