import React from 'react';
import { Sprout, Phone, ArrowRight, Sun, Droplets, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, BOTANICAL_IMAGES } from '../data/business';
import { TerracottaPotIcon, OliveSprig, FernSprig } from '../components/BotanicalDecorations';

interface GardeningPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (topic?: string) => void;
}

export function GardeningPage({ onNavigate, onOpenInquiry }: GardeningPageProps) {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#212620]">
      {/* Page Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFC8] bg-[#F3EDE2]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-4">
              <Sprout className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Cultivation & Garden Craft</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1E3723] leading-tight mb-4">
              The gardening perspective: soil, pots & seasonal care.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6A5E] leading-relaxed">
              At Compagnoni Giardineria, gardening is approached with thoughtful respect for natural Alpine cycles, healthy root foundations, and container craftsmanship.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 hidden md:block">
          <OliveSprig className="w-96 h-96 text-[#2E5034]" />
        </div>
      </section>

      {/* Gardening Principles */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            <div className="lg:col-span-7 space-y-6 text-[#2D372F] text-base leading-relaxed">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
                Gardening in Val Poschiavo: Seasons & microclimates.
              </h2>
              <p>
                Gardening in our valley is shaped by a dialogue between altitude and sunlight. While the valley floor receives generous southern sun, mountain breezes and cool alpine nights remind us that plants must be resilient and well-nourished.
              </p>
              <p>
                Our shop on Via Cantonale 215 brings a committed gardening focus to everything we do. We assist homeowners, hobby gardeners, and terrace tenders in selecting potted specimens and container essentials that thrive in this environment.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#F3EDE2]/60 border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                    <Layers className="w-5 h-5 text-[#C85A32]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1E3723]">Soil Composition & Drainage</h3>
                    <p className="text-xs sm:text-sm text-[#5C6A5E] mt-1">
                      Good potting soil is living matter. Adequate aeration, coarse drainage material, and organic balance ensure roots never suffocate during prolonged wet spells.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F3EDE2]/60 border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                    <TerracottaPotIcon className="w-6 h-6 text-[#2E5034]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1E3723]">The Merit of Terracotta Containers</h3>
                    <p className="text-xs sm:text-sm text-[#5C6A5E] mt-1">
                      Breathable terracotta pots help buffer summer heat and wick away excess moisture, providing ideal root conditions for both perennial herbs and flowering specimens.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F3EDE2]/60 border border-[#E8DFC8] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                    <Sun className="w-5 h-5 text-[#C85A32]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1E3723]">Seasonal Transitions</h3>
                    <p className="text-xs sm:text-sm text-[#5C6A5E] mt-1">
                      From spring potting preparation through sunny summer growth, autumn sheltering, and winter rest, we provide advice on guiding your container plants safely through the calendar year.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.gardenPottery}
                  alt="Terracotta garden pottery and lush green plants in garden setting"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 rounded-2xl bg-[#1E3723] text-[#FAF7F2] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#F4E7B5] font-semibold">
                  Personal Botanical Counsel
                </div>
                <h4 className="font-serif text-xl text-white">Have a garden or terrace question?</h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Drop by Via Cantonale 215 in Campascio or call <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-[#F4E7B5] underline font-semibold">{BUSINESS_DATA.phone}</a>. We are always glad to discuss soil, repotting, or plant placement.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] text-[#1E3723] text-xs font-semibold hover:bg-[#F4E7B5]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Call 081 846 55 05</span>
                  </a>
                  <button
                    onClick={() => onOpenInquiry('outdoor-gardening')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C85A32] text-white text-xs font-semibold hover:bg-[#A64120]"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ask Question</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Repotting & Care Checklist */}
      <section className="py-20 bg-[#F3EDE2]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E3723]">
              Simple rules for thriving container greenery
            </h2>
            <p className="text-[#5C6A5E] text-sm mt-2">
              Practical advice gathered from hands-on shop experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] shadow-sm">
              <span className="font-serif text-2xl font-bold text-[#C85A32] block mb-2">01</span>
              <h3 className="font-serif text-xl text-[#1E3723] mb-2">Repotting Space</h3>
              <p className="text-xs text-[#5C6A5E] leading-relaxed">
                When roots begin circling the bottom of a nursery pot, move up just 2–4 cm in pot diameter. Providing too much empty soil can retain excess moisture and chill sensitive root zones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] shadow-sm">
              <span className="font-serif text-2xl font-bold text-[#2E5034] block mb-2">02</span>
              <h3 className="font-serif text-xl text-[#1E3723] mb-2">Drainage Holes</h3>
              <p className="text-xs text-[#5C6A5E] leading-relaxed">
                Never pot directly into an undrained container. Always use inner nursery pots with drainage holes or drill containers, pairing with saucers to catch water without leaving roots submerged.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] shadow-sm">
              <span className="font-serif text-2xl font-bold text-[#C85A32] block mb-2">03</span>
              <h3 className="font-serif text-xl text-[#1E3723] mb-2">Acclimatizing</h3>
              <p className="text-xs text-[#5C6A5E] leading-relaxed">
                When moving indoor potted plants to outdoor terraces in late spring, introduce them gradually to outdoor breezes and direct sunlight over 7–10 days to prevent sun scorch.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3723] text-white text-sm font-semibold hover:bg-[#2E5034] transition-colors"
            >
              <span>Visit Us at Via Cantonale 215</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
