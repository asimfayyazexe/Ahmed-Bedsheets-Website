import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, Navigation, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { WhatsAppLogo } from '../components/WhatsAppLogo';
import { SHOP_INFO, ALL_PRODUCTS, getWhatsAppUrl, CUSTOMIZED_PRODUCTS } from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productInterest, setProductInterest] = useState(ALL_PRODUCTS[0]?.name ?? '');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp inquiry text
    const text = `*New Order / Inquiry for Ahmed Bedsheets*
Name: ${name || 'Customer'}
Phone: ${phone || 'Not specified'}
Interested In: ${productInterest}
Message: ${message || 'Please send available designs and rates.'}

(Note: I acknowledge the 20% advance payment for Cash on Delivery orders).`;

    const url = getWhatsAppUrl(text);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#FFFFFF] py-14 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block mb-2">
            PHYSICAL SHOP & DIRECT HELPLINE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#212121] tracking-tight">
            Contact & Order
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Visit us at Shop No 20, New Stadium Market, Okara Cantt or place your delivery orders directly via WhatsApp or phone.
            We are open Monday to Sunday from 9:00 AM to 10:00 PM.
          </p>
        </div>

        {/* Quick Action Contact Banner for Both Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {SHOP_INFO.contacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-stone-300 shadow-2xs flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">
                    Direct Contact
                  </span>
                  <span className="text-base font-bold text-stone-900 font-serif">
                    {contact.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-stone-800 bg-stone-100 px-2 py-0.5 border border-stone-200">
                  {contact.phoneDisplay}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
                <a
                  href={`tel:${contact.phone}`}
                  className="py-2 px-3 bg-stone-900 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-black transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={getWhatsAppUrl(`Assalam-o-Alaikum ${contact.name}! I would like to inquire about Ahmed Bedsheets products.`, contact.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-emerald-800 transition-colors"
                >
                  <WhatsAppLogo className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Order Policies & Payment Terms Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Policy 1: 20% Advance on Cash on Delivery */}
          <div className="p-6 bg-stone-50 border border-stone-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-2xs flex items-center justify-center text-stone-900 shrink-0">
                <Truck className="w-5 h-5 text-stone-800" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-900 bg-amber-100/90 px-2.5 py-0.5 border border-amber-200">
                COD Policy
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-semibold leading-snug">
              20% Advance on Cash on Delivery
            </h3>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
              20% advance payment is required to confirm Cash on Delivery (COD) orders. Balance 80% is payable to the courier at your doorstep anywhere in Punjab.
            </p>
          </div>

          {/* Policy 2: 7-Day Damaged Item Return / Refund */}
          <div className="p-6 bg-stone-50 border border-stone-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-2xs flex items-center justify-center text-stone-900 shrink-0">
                <RotateCcw className="w-5 h-5 text-stone-800" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-900 bg-emerald-100/90 px-2.5 py-0.5 border border-emerald-200">
                Guarantee
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-semibold leading-snug">
              7-Day Damaged Item Return / Refund
            </h3>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
              7-day return or exchange available if the product is damaged or defective upon delivery. Simply send photos on WhatsApp to initiate immediate replacement or refund.
            </p>
          </div>
        </div>

        {/* Customise Your Order Section with Image */}
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 overflow-hidden shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
              <img
                src="/Contact%20%26%20Order/2.jpg"
                alt="Custom Bedding Craftsmanship and Tailoring"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                Custom Tailoring
              </div>
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Bespoke Made-to-Order Service
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-semibold leading-tight">
                You Can Customise Your Order
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
                Every home has unique requirements — whether you need non-standard mattress dimensions with deep fitted elastic corners, specific winter razai filling weights (from light cotton to heavy freeze warmth), custom window curtain drop lengths, or coordinated bridal trousseau sets. At Ahmed Bedsheets & Quilt Center, our master craftsmen tailor, stitch, and finish your linens to your exact specifications. Simply share your required dimensions or photo inspiration on WhatsApp for a custom estimate.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl("Assalam-o-Alaikum! I would like to customise my order with specific sizes and requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-2xs"
                >
                  <WhatsAppLogo className="w-3.5 h-3.5" />
                  <span>Customise on WhatsApp</span>
                </a>
                <span className="text-[11px] text-stone-500 font-mono">
                  Custom sizes · Special weights · Fast dispatch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customized Products Section (Static 4 Cards, No Tags, Direct WhatsApp Link) */}
        <div className="space-y-4">
          {/* Header */}
          <div className="border-b border-stone-200 pb-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 block mb-0.5">
              CUSTOM WORK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#212121] tracking-tight">
              Customized Products
            </h3>
          </div>

          {/* Static 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMIZED_PRODUCTS.map((product) => {
              const whatsappOrderUrl = getWhatsAppUrl(product.whatsappText);
              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white border border-stone-200 hover:border-stone-400 p-3 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  {/* Product Image without any tags */}
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square w-full bg-stone-100 overflow-hidden mb-3 block cursor-pointer"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-108"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          '/Product%20Images/bedsheets/1.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Inquire on WhatsApp overlay on hover */}
                    <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="w-full py-2 bg-[#212121] text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-1.5">
                        <WhatsAppLogo className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Inquire on WhatsApp</span>
                      </span>
                    </div>
                  </a>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between px-1">
                    <div>
                      <h4 className="text-sm font-medium text-[#212121] group-hover:text-stone-600 transition-colors mb-1">
                        {product.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-2 mb-3 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 text-[10px] font-semibold tracking-wider uppercase bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs mt-auto"
                    >
                      <WhatsAppLogo className="w-3.5 h-3.5 shrink-0" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Form Left, Details & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form (Sends directly to WhatsApp) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-stone-200 shadow-2xs space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-stone-900 font-medium">Place Order or Inquire via WhatsApp</h2>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your details below. When you click send, WhatsApp will open with your pre-filled order inquiry.
              </p>
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Order inquiry formatted! WhatsApp should now open on your device.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asim / Fatima"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Phone / WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Product of Interest *
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white"
                >
                  {ALL_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} ({prod.category})
                    </option>
                  ))}
                  <option value="Custom Size Stitching">Custom Size Stitching (Bedsheet / Curtains)</option>
                  <option value="Bridal Wedding Trousseau">Bridal / Wedding Jahez Package</option>
                  <option value="Wholesale Bulk Inquiries">Wholesale / Bulk Commercial Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Message / Quantity / Dimensions
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Please share photos of king size cotton bedsheets and delivery charges for Lahore..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white"
                />
              </div>

              {/* Order Policy Reassurance Badge */}
              <div className="p-3 bg-stone-50 border border-stone-200 text-[11px] text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>20% Advance on COD · 7-Day Damaged Item Return Guarantee</span>
                </div>
                <p className="text-[10.5px] text-stone-500 font-light leading-snug">
                  Pay 20% advance to confirm your parcel; remaining 80% is payable to courier on arrival.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#212121] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Order to WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Shop Details, Hours & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Hours Card */}
            <div className="bg-white p-8 border border-stone-200 shadow-2xs space-y-5">
              <h3 className="font-serif text-xl text-stone-900 font-medium">Shop Information</h3>

              <div className="space-y-4 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-stone-900 block">
                      Shop Address
                    </span>
                    <p className="mt-0.5 font-medium text-stone-900">{SHOP_INFO.address}</p>
                    <p>{SHOP_INFO.city}, {SHOP_INFO.province}, {SHOP_INFO.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider text-stone-900 block">
                      Shop Timings
                    </span>
                    <p className="mt-0.5 font-semibold text-stone-900">Mon - Sun: 9:00 AM - 10:00 PM</p>
                    <p className="text-emerald-700 font-medium mt-0.5">Open All 7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                  <div className="space-y-2 w-full">
                    <span className="font-bold uppercase tracking-wider text-stone-900 block">
                      Contact Numbers
                    </span>
                    {SHOP_INFO.contacts.map((contact, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-2 border-b border-stone-100 pb-1.5 last:border-none">
                        <div>
                          <p className="font-semibold text-stone-900">{contact.name}</p>
                          <a href={`tel:${contact.phone}`} className="font-mono text-stone-700 hover:text-stone-950 hover:underline">
                            {contact.phoneDisplay}
                          </a>
                        </div>
                        <a
                          href={`tel:${contact.phone}`}
                          className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          Call
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-50 border-2 border-dashed border-stone-300 p-8 rounded-xs text-center flex flex-col items-center justify-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 mb-2">
                <Navigation className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-stone-900 font-medium">
                Shop Location
              </h4>
              <p className="text-xs text-stone-800 font-semibold max-w-xs mt-1">
                {SHOP_INFO.address}
              </p>
              <p className="text-[11px] text-stone-500 max-w-xs mt-0.5 mb-4">
                {SHOP_INFO.city}, {SHOP_INFO.province}, {SHOP_INFO.country}
              </p>
              <a
                href="https://maps.google.com/?q=Shop+No+20+New+Stadium+Market+Okara+Cantt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white border border-stone-300 text-stone-800 text-[11px] font-semibold tracking-wider uppercase hover:bg-stone-50 transition-colors shadow-2xs"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
