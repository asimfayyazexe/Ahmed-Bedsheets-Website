import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { PageId } from '../types';
import { SHOP_INFO, getWhatsAppUrl } from '../data/products';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-stone-200 pt-12 pb-10 text-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main 3-Column Directory without inner divider lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
          {/* Column 1: SHOP PRODUCTS (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-900">
              OUR PRODUCTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Full & Single Bedsheets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Winter Razai (Quilts)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    All-Season Comforters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Thermal Blackout Curtains
                  </button>
                </li>
              </ul>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Pillow Cover Sets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Decorative Cushion Covers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Designed Kitchen Aprons
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                  >
                    Custom Home Textile Orders
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: PAGES (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-900">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-[13px] text-stone-600">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Full Product Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  About Our Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Contact & Order
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SHOP LOCATION & DIRECT CONTACT (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-900">
              SHOP LOCATION & CONTACT
            </h4>
            <div className="space-y-2.5 text-[13px] text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900 leading-snug">
                    {SHOP_INFO.address}
                  </p>
                  <p className="text-stone-500 text-xs">{SHOP_INFO.city}, {SHOP_INFO.province}, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <Clock className="w-4 h-4 text-stone-700 shrink-0" />
                <span className="text-[12px] font-medium text-stone-700">
                  Mon - Sun: 9:00 AM - 10:00 PM
                </span>
              </div>

              {/* Direct Phone & WhatsApp (unboxed, clean typography) */}
              <div className="pt-2 space-y-2">
                <p className="text-[10px] font-bold tracking-wider uppercase text-stone-500">
                  Direct Phone & WhatsApp
                </p>
                <div className="space-y-2">
                  {SHOP_INFO.contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <p className="font-semibold text-stone-900 text-xs">{contact.name}</p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="font-mono text-[12px] text-stone-600 hover:text-black transition-colors"
                        >
                          {contact.phoneDisplay}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-stone-700 hover:text-black flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                          title={`Call ${contact.name}`}
                        >
                          <Phone className="w-3.5 h-3.5 text-stone-600" />
                          <span>Call</span>
                        </a>
                        <a
                          href={getWhatsAppUrl(`Assalam-o-Alaikum ${contact.name}! I am contacting from Ahmed Bedsheets website.`, contact.whatsappNumber)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:text-[#20ba59] flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                          title={`WhatsApp ${contact.name}`}
                        >
                          <WhatsAppLogo className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar (without top hr line) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-stone-500 gap-3">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} AHMED BEDSHEETS. ALL RIGHTS RESERVED. PUNJAB, PAKISTAN.
          </p>
          <p className="text-center sm:text-right">
            Designed and developed by{' '}
            <a
              href="https://www.asimfayyaz.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-700 hover:text-black underline underline-offset-2 transition-colors"
            >
              Asim Fayyaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
