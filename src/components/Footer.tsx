import React from 'react';
import { Phone, MapPin, ExternalLink, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, NAVIGATION_LINKS, GOOGLE_MAPS_SEARCH_URL } from '../data/business';
import { FernSprig, BotanicalStamp } from './BotanicalDecorations';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E3723] text-[#FAF7F2] relative overflow-hidden border-t-4 border-[#C85A32]">
      {/* Background botanical illustration accents */}
      <div className="absolute -top-10 -right-10 pointer-events-none opacity-10">
        <FernSprig className="w-80 h-80 text-[#FAF7F2]" />
      </div>
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-5">
        <FernSprig className="w-96 h-96 text-[#FAF7F2] rotate-90" />
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] tracking-tight">
                  {BUSINESS_DATA.name}
                </span>
              </div>
              <p className="text-[#F4E7B5] font-serif italic text-lg mb-4">
                {BUSINESS_DATA.description}
              </p>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 max-w-sm">
                A dedicated floral and botanical destination in Campascio, nestled in the southern Swiss valley of Val Poschiavo. Rooted in seasonal living, healthy foliage, and practical gardening wisdom.
              </p>
            </div>

            <div className="pt-2">
              <BotanicalStamp text="CAMPASCIO • SUISSE" className="w-20 h-20" />
            </div>
          </div>

          {/* Column 2: Exact Location & Contact Details */}
          <div className="md:col-span-4 lg:col-span-5 space-y-6">
            <h3 className="font-serif text-xl text-[#F4E7B5] tracking-wide border-b border-stone-600/40 pb-2">
              Shop Details & Inquiries
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C85A32]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Physical Address</div>
                  <div className="text-stone-200 mt-0.5">{BUSINESS_DATA.street}</div>
                  <div className="text-stone-300">{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, {BUSINESS_DATA.country}</div>
                  <a
                    href={GOOGLE_MAPS_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F4E7B5] hover:text-white text-xs mt-2 font-medium underline-offset-4 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#F4E7B5]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Telephone Inquiries</div>
                  <div className="text-stone-300 text-xs mt-0.5">Call for current seasonal availability, visits & advice</div>
                  <a
                    id="footer-call-link"
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-block text-xl font-serif font-semibold text-[#F4E7B5] hover:text-white mt-1 underline-offset-4 hover:underline"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-xs text-stone-300 flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#F4E7B5] shrink-0" />
                <span>Located along the main valley route Via Cantonale in Campascio. For day-of visits, calling ahead is always welcome.</span>
              </div>
            </div>
          </div>

          {/* Column 3: Site Navigation & Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="font-serif text-xl text-[#F4E7B5] tracking-wide border-b border-stone-600/40 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as PageId)}
                    className="group text-stone-300 hover:text-[#F4E7B5] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <div className="p-4 rounded-xl bg-[#2D5034]/50 border border-[#FAF7F2]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F4E7B5] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                  <span>Local Swiss Business</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Serving the Campascio, Brusio, and Poschiavo community with botanical expertise and living plants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-12 pt-8 border-t border-stone-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved. Campascio, Switzerland.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-[#F4E7B5] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
