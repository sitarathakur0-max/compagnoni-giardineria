import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Flower2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, NAVIGATION_LINKS } from '../data/business';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8]/70 transition-all duration-300">
      {/* Top micro-banner: address & direct contact */}
      <div className="bg-[#1E3723] text-[#FAF7F2] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-[#F4E7B5] shrink-0" aria-hidden="true" />
            <span>{BUSINESS_DATA.address}</span>
            <span className="hidden md:inline text-[#F4E7B5]/60">•</span>
            <span className="hidden md:inline text-[#F4E7B5] font-serif italic">Val Poschiavo, Graubünden</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-300/80 hidden lg:inline">Questions or visit planning?</span>
            <a
              id="top-banner-phone"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#F4E7B5] hover:text-white font-semibold transition-colors underline-offset-4 hover:underline"
              title="Call Compagnoni Giardineria directly"
            >
              <Phone className="w-3 h-3 text-[#E27D56]" aria-hidden="true" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="group text-left flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg p-1 -m-1"
          aria-label="Compagnoni Giardineria - Return to Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#1E3723] flex items-center justify-center text-[#F4E7B5] group-hover:bg-[#C85A32] transition-colors shadow-sm shrink-0">
            <Flower2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-[1.7rem] leading-none text-[#1E3723] tracking-tight group-hover:text-[#C85A32] transition-colors">
              Compagnoni Giardineria
            </span>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#C85A32] mt-0.5">
              Florist & Garden • Campascio
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => handleNavClick(link.id as PageId)}
                className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                  isActive
                    ? 'text-[#1E3723] font-semibold'
                    : 'text-[#5C6A5E] hover:text-[#1E3723] hover:bg-[#F3EDE2]/60'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C85A32] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#FAF7F2] text-[#1E3723] border border-[#1E3723]/25 hover:border-[#1E3723] hover:bg-[#F3EDE2] transition-all"
            title="Call Compagnoni Giardineria directly"
          >
            <Phone className="w-4 h-4 text-[#C85A32]" aria-hidden="true" />
            <span>Call the Shop</span>
          </a>

          <button
            id="nav-visit-btn"
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-[#C85A32] text-white hover:bg-[#A64120] transition-colors shadow-sm"
          >
            <span>Visit Us</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            id="mobile-quick-call"
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-9 h-9 rounded-full bg-[#1E3723] text-[#F4E7B5] flex items-center justify-center"
            aria-label="Call shop"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1E3723] hover:bg-[#F3EDE2] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id as PageId)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EBF2EC] text-[#1E3723] font-semibold'
                      : 'text-[#2D372F] hover:bg-[#F3EDE2]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C85A32]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-[#E8DFC8] flex flex-col gap-3">
            <a
              id="mobile-drawer-phone"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E3723] text-white font-medium"
            >
              <Phone className="w-4 h-4 text-[#F4E7B5]" />
              <span>Call the Shop: {BUSINESS_DATA.phone}</span>
            </a>

            <button
              id="mobile-drawer-visit"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 rounded-xl bg-[#C85A32] text-white font-medium flex items-center justify-center gap-2"
            >
              <span>Visit Us at Via Cantonale 215</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
