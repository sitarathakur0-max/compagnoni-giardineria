import React from 'react';
import { MapPin, Phone, ArrowRight, Sparkles, Sprout, Heart, ShieldCheck, CheckCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, BOTANICAL_IMAGES, GOOGLE_MAPS_SEARCH_URL } from '../data/business';
import { FernSprig, BotanicalStamp, OliveSprig } from '../components/BotanicalDecorations';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (topic?: string) => void;
}

export function AboutPage({ onNavigate, onOpenInquiry }: AboutPageProps) {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#212620]">
      {/* Page Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFC8] bg-[#F3EDE2]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-4">
              <Sprout className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>About the Shop</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1E3723] leading-tight mb-4">
              Botanical craft and local care in Campascio.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6A5E] leading-relaxed">
              Compagnoni Giardineria is a local flower and plant shop with a gardening focus, situated along Via Cantonale 215 in Campascio, in the southern Swiss Canton of Graubünden.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 hidden md:block">
          <FernSprig className="w-96 h-96 text-[#1E3723]" />
        </div>
      </section>

      {/* Main About Story */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-[#2D372F] text-base leading-relaxed">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E3723]">
                Rooted at Via Cantonale 215
              </h2>

              <p>
                In the mountain valleys of Switzerland, everyday life is closely tied to the shifting rhythm of the seasons. At <strong className="text-[#1E3723]">{BUSINESS_DATA.name}</strong>, our purpose is simple yet meaningful: to provide our community and visitors with a welcoming local destination for fresh cut flowers, living potted plants, and dependable botanical advice.
              </p>

              <p>
                Our official category as a <em>Florist / Garden</em> shop reflects two interconnected callings. On one hand, we cherish the artistry of floristry—gathering fresh stems, harmonizing tones and textures, and curating arrangements for celebrations, everyday home tables, and solemn remembrances. On the other hand, our gardening focus emphasizes living roots, soil balance, and hardy plant vitality designed to withstand the conditions of our region.
              </p>

              <div className="p-6 rounded-2xl bg-[#F3EDE2]/60 border border-[#E8DFC8] space-y-3">
                <h3 className="font-serif text-xl text-[#1E3723] flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#C85A32]" />
                  <span>Our Botanical Ethos</span>
                </h3>
                <p className="text-sm text-[#5C6A5E] leading-relaxed">
                  We believe living plants should be chosen with care for the space they will inhabit. Rather than generic mass production, we focus on helping customers understand how light, temperature, and watering interact with each plant.
                </p>
              </div>

              <h3 className="font-serif text-2xl text-[#1E3723] pt-4">
                The Climate of Val Poschiavo
              </h3>
              <p>
                Campascio occupies a rare climatic position in Graubünden. Located south of the Bernina pass near the Italian frontier, it enjoys sunny days tempered by crisp mountain nights. This climate fosters rich greenery, fruit orchards, and terrace gardens. At our shop, we understand these local environmental nuances and help our visitors choose plants that feel right at home here.
              </p>
            </div>

            {/* Sidebar / Shop Credentials */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.botanicalCraft}
                  alt="Floral craft and careful botanical stem arrangement at Compagnoni Giardineria"
                  className="w-full h-[360px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-[#1E3723] text-white">
                  <div className="font-serif text-lg text-[#F4E7B5]">Compagnoni Giardineria</div>
                  <div className="text-xs text-stone-300 mt-1">Via Cantonale 215, 7748 Campascio</div>
                </div>
              </div>

              {/* Exact Business Registry Details Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Business Facts</span>
                </div>
                <h4 className="font-serif text-xl text-[#1E3723]">Registered Information</h4>

                <div className="space-y-3 text-xs sm:text-sm text-[#2D372F]">
                  <div className="border-b border-stone-100 pb-2">
                    <span className="text-[#5C6A5E] block text-xs">Official Name</span>
                    <span className="font-semibold text-[#1E3723]">{BUSINESS_DATA.name}</span>
                  </div>
                  <div className="border-b border-stone-100 pb-2">
                    <span className="text-[#5C6A5E] block text-xs">Category</span>
                    <span className="font-semibold text-[#1E3723]">{BUSINESS_DATA.category}</span>
                  </div>
                  <div className="border-b border-stone-100 pb-2">
                    <span className="text-[#5C6A5E] block text-xs">Physical Address</span>
                    <span className="font-semibold text-[#1E3723]">{BUSINESS_DATA.address}</span>
                  </div>
                  <div className="border-b border-stone-100 pb-2">
                    <span className="text-[#5C6A5E] block text-xs">Telephone</span>
                    <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-semibold text-[#C85A32] hover:underline">
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#5C6A5E] block text-xs">Core Description</span>
                    <span className="text-[#1E3723]">{BUSINESS_DATA.description}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E3723] text-white text-xs font-semibold hover:bg-[#2E5034] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#F4E7B5]" />
                    <span>Call 081 846 55 05</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Guidance & Final CTA */}
      <section className="py-16 bg-[#F3EDE2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1E3723] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4E7B5] font-semibold">
                Come Say Hello
              </span>
              <h3 className="font-serif text-3xl text-[#FAF7F2]">
                Planning a trip down Via Cantonale?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Whether you are seeking advice on potting plants or wishing to pick up fresh cut flowers, we are located right on Via Cantonale 215 in Campascio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] text-[#1E3723] text-xs sm:text-sm font-semibold hover:bg-[#F4E7B5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C85A32]" />
                <span>Call the Shop</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C85A32] text-white text-xs sm:text-sm font-semibold hover:bg-[#A64120] transition-colors"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
