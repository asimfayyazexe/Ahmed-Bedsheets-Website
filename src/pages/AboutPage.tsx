import React from 'react';
import { Store, HeartHandshake, CheckCircle2, Award, Sparkles, Phone, Clock, MapPin } from 'lucide-react';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { SHOP_INFO, getWhatsAppUrl, ABOUT_PAGE_DATA } from '../data/products';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] py-12 sm:py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
            ESTABLISHED 2002 • OKARA CANTT, PAKISTAN
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#212121] tracking-tight">
            About Ahmed Bedsheets
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Founded by <strong className="font-semibold text-stone-900">Majid Bhutta in 2002</strong>, serving families with quality home textiles for over two decades.
          </p>
        </div>

        {/* Two Photographic Highlights - Tall Clean Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full rounded-xs overflow-hidden border border-stone-200 shadow-xs group bg-stone-100">
            <img
              src={ABOUT_PAGE_DATA.showroomImage}
              alt="Stadium Market Showroom"
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  '/About%20Page/shop%20img.jpg';
              }}
            />
          </div>

          <div className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full rounded-xs overflow-hidden border border-stone-200 shadow-xs group bg-stone-100">
            <img
              src={ABOUT_PAGE_DATA.craftsmanshipImage}
              alt="Artisan Bedding & Craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  '/About%20Page/owner%20img.jpg';
              }}
            />
          </div>
        </div>

        {/* Core Narrative / Main Story Card */}
        <div className="bg-white border border-stone-200/90 shadow-2xs p-7 sm:p-12 relative overflow-hidden">
          {/* Subtle decorative quote accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F0] rounded-bl-full pointer-events-none -mr-8 -mt-8" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-[11px] font-semibold text-amber-900 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Over Two Decades of Trust & Craftsmanship</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 leading-snug">
              Our Journey & Dedication to Every Home
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Ahmed Bedsheets was Founded by <strong className="font-semibold text-stone-900">Majid Bhutta in 2002</strong>, our shop at Stadium Market, Okara Cantt, Pakistan, has been serving families with quality home textiles for over two decades.
              </p>
              <p>
                We offer a wide range of products, including bedsheets, comforters, curtains, pillows, razai, towels, and more.
              </p>
              <p className="bg-[#FAF8F3] p-4 sm:p-5 border-l-4 border-stone-800 text-stone-800 font-normal">
                Our mission is simple: to bring comfort to every home with <strong className="font-bold text-stone-950">high-quality products at affordable prices</strong>.
              </p>
              <p>
                From summer essentials to cozy winter collections and new-home furnishings, we have something for every family.
              </p>
              <p>
                We believe in honest business, transparent pricing, and friendly customer service.
              </p>
              <p>
                For us, every customer matters, and every purchase is an opportunity to build lasting trust.
              </p>
            </div>

            {/* Core Values & Urdu Motto Banner */}
            <div className="mt-8 pt-8 border-t border-stone-200/80 bg-[#FAF8F3] p-6 sm:p-8 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-stone-500 text-[11px] uppercase tracking-widest font-bold">
                <HeartHandshake className="w-4 h-4 text-stone-700" />
                <span>Our Guiding Values</span>
              </div>
              <p className="text-base sm:text-xl text-stone-900 font-medium leading-relaxed">
                <strong className="font-bold text-stone-950">Achhi quality, munasib qeemat, aur imaandari</strong> — these values have guided us since day one.
              </p>
              <div className="pt-2">
                <span className="font-serif italic text-lg sm:text-2xl text-stone-800 tracking-wide block">
                  “Apka bharosa, hamari pehchan.”
                </span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block mt-1">
                  (Your trust is our identity)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Highlights & Shop Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shop Location Card */}
          <div className="bg-white p-7 border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900 font-medium">Stadium Market Storefront</h3>
                <span className="text-[11px] text-stone-500 font-mono">Okara Cantt, Punjab, Pakistan</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Visit our authentic retail showroom at <strong className="text-stone-800">{SHOP_INFO.address}</strong>. Experience fabric softness, examine stitch density, and choose custom quilt weight in person.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-stone-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-xs">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                <span>{SHOP_INFO.openingHours}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>New Stadium Market</span>
              </span>
            </div>
          </div>

          {/* Founders & Contact Card */}
          <div className="bg-white p-7 border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <Award className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900 font-medium">Founder & Leadership</h3>
                <span className="text-[11px] text-stone-500">Majid Bhutta (Founded 2002) & M Abdullah Shaban</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Two generations of business expertise ensuring every bedsheet, winter razai, comforter, and curtain meets the highest standards of durability and fair pricing.
            </p>
            <div className="pt-2 space-y-2">
              {SHOP_INFO.contacts.map((contact) => (
                <div key={contact.phone} className="flex items-center justify-between text-xs bg-stone-50 p-2.5 border border-stone-200/60 rounded-xs">
                  <div>
                    <span className="font-semibold text-stone-800 block">{contact.name}</span>
                    <span className="text-stone-500 font-mono text-[11px]">{contact.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${contact.phone}`}
                      className="p-1.5 bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
                      title={`Call ${contact.name}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={getWhatsAppUrl(`Assalam-o-Alaikum ${contact.name}! I am contacting you through Ahmed Bedsheets website.`, contact.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-colors"
                      title={`WhatsApp ${contact.name}`}
                    >
                      <WhatsAppLogo className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Catalog Highlights */}
        <div className="p-8 sm:p-10 bg-stone-50 border border-stone-200 rounded-xs space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500">COMPLETE HOME TEXTILES</span>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
              What We Offer For Your Home
            </h3>
            <p className="text-xs text-stone-600">
              From summer breathable cottons to warm winter quilts and complete bridal setups
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {[
              { title: 'Bedsheets', desc: 'Full & Single Sets' },
              { title: 'Comforters', desc: 'All-Season Microfiber' },
              { title: 'Curtains', desc: 'Blackout & Drapery' },
              { title: 'Pillow Sets', desc: 'Printed Covers & Fillings' },
              { title: 'Winter Razai', desc: 'Hand-Layered Quilts' },
              { title: 'Kitchen Aprons', desc: 'Lightweight & Practical' },
            ].map((item) => (
              <div key={item.title} className="p-3 bg-white border border-stone-200/80 rounded-xs shadow-2xs">
                <span className="font-serif text-sm font-semibold text-stone-900 block">{item.title}</span>
                <span className="text-[10px] text-stone-500 block mt-0.5">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
              Why Families Trust Us Since 2002
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900">Pure Cotton & Honest Fabric</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                No misleading blends. We provide genuine long-staple cotton bedsheets that remain soft and vibrant wash after wash.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <Award className="w-4 h-4 text-emerald-700" />
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900">Traditional Winter Razai</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Our signature quilts and razai are filled with clean carded wadding and stitched with care for Punjab’s chilling winter nights.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800">
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900">Transparent Pricing</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Direct shopkeeper rates without middlemen markup. Honesty and fair dealing (imaandari) are our daily commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Call to visit or WhatsApp */}
        <div className="text-center pt-4 space-y-4">
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            We welcome you to visit our shop at Stadium Market Okara Cantt or contact us directly on WhatsApp for fabric inquiries and delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl('Assalam-o-Alaikum! I read about Ahmed Bedsheets and want to inquire about your collections.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#212121] text-white text-xs font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors shadow-md"
            >
              <WhatsAppLogo className="w-4 h-4 text-[#25D366]" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-900 border border-stone-300 text-xs font-semibold tracking-widest uppercase hover:bg-stone-50 transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4 text-stone-600" />
              <span>Call Shop: {SHOP_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



