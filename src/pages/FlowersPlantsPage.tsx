import React from 'react';
import { Sparkles, Droplets, Sun, Wind, Phone, ArrowRight, CheckCircle2, Sprout } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, BOTANICAL_IMAGES } from '../data/business';
import { FernSprig, TerracottaPotIcon, OliveSprig } from '../components/BotanicalDecorations';

interface FlowersPlantsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (topic?: string) => void;
}

export function FlowersPlantsPage({ onNavigate, onOpenInquiry }: FlowersPlantsPageProps) {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#212620]">
      {/* Page Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFC8] bg-[#F3EDE2]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Floral & Foliage Collections</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1E3723] leading-tight mb-4">
              Flowers & living plants for every room and season.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6A5E] leading-relaxed">
              At Compagnoni Giardineria in Campascio, our shop unites fresh seasonal cut flowers with durable potted plants, offering botanical vitality for both indoor spaces and mountain verandas.
            </p>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 hidden md:block">
          <FernSprig className="w-96 h-96 text-[#1E3723]" />
        </div>
      </section>

      {/* Two Pillars: Cut Flowers vs. Potted Greenery */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Floral Artistry Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                <Sparkles className="w-4 h-4" />
                <span>The Florist Art</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
                Fresh cut flowers & seasonal arrangements.
              </h2>
              <p className="text-[#2D372F] text-base leading-relaxed">
                Cut flowers bring an immediate, expressive presence to any setting. Whether gathered as a celebratory hand-tied bouquet, an arrangement for a family dinner, or a simple cluster of seasonal stems in a ceramic pitcher, our floral selections honor the ephemeral elegance of fresh blooms.
              </p>
              <p className="text-[#5C6A5E] text-sm leading-relaxed">
                Because floral availability changes with seasonal arrivals and market harvests, every visit offers something fresh. We invite customers looking for special bouquets or specific color tones to call us in advance at <strong className="text-[#1E3723]">{BUSINESS_DATA.phone}</strong> so we can discuss the freshest stems in stock.
              </p>

              <div className="p-5 rounded-xl bg-[#F3EDE2]/60 border border-[#E8DFC8] space-y-2 text-xs sm:text-sm text-[#2D372F]">
                <div className="font-serif font-semibold text-[#1E3723] text-base">Key Floral Care Guidance:</div>
                <ul className="space-y-1.5 text-[#5C6A5E]">
                  <li>• Cut stems at a 45-degree angle with clean, sharp shears to maximize water uptake.</li>
                  <li>• Remove all submerged foliage from the vase water to prevent bacterial decay.</li>
                  <li>• Refresh water completely every 48 hours and keep flowers away from direct sunlight or drafts.</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('flowers')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] text-white text-xs sm:text-sm font-semibold hover:bg-[#A64120] transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ask About Flower Arrangements</span>
                </button>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E3723] hover:text-[#C85A32]"
                >
                  <Phone className="w-4 h-4 text-[#C85A32]" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.florals}
                  alt="Curated fresh cut flowers and bouquets at Compagnoni Giardineria"
                  className="w-full h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Living Potted Plants Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.pottedGreenery}
                  alt="Lush green potted houseplants and foliage"
                  className="w-full h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E5034]">
                <Sprout className="w-4 h-4" />
                <span>Enduring Greenery</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
                Potted plants for home, office & veranda.
              </h2>
              <p className="text-[#2D372F] text-base leading-relaxed">
                Unlike cut blooms, living potted plants become permanent companions in your living spaces. They purify the air, soften architectural edges, and offer a daily connection to growth and renewal.
              </p>
              <p className="text-[#5C6A5E] text-sm leading-relaxed">
                At our shop on Via Cantonale 215, we emphasize plants with established, healthy root systems. We provide guidance on selecting specimens that fit your natural light—from sun-soaked bay windows to quieter, indirect living areas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8DFC8]">
                  <Sun className="w-5 h-5 text-[#C85A32] mb-2" />
                  <h4 className="font-serif font-semibold text-[#1E3723] text-sm">Light Matching</h4>
                  <p className="text-xs text-[#5C6A5E] mt-1">
                    Matching foliage to bright, moderate, or shade conditions for effortless plant vitality.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DFC8]">
                  <Droplets className="w-5 h-5 text-[#2E5034] mb-2" />
                  <h4 className="font-serif font-semibold text-[#1E3723] text-sm">Moisture Balance</h4>
                  <p className="text-xs text-[#5C6A5E] mt-1">
                    Watering according to soil dampness rather than fixed timers to avoid over-saturation.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('indoor-plants')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3723] text-white text-xs sm:text-sm font-semibold hover:bg-[#2E5034] transition-colors"
                >
                  <Sprout className="w-4 h-4 text-[#F4E7B5]" />
                  <span>Ask About Potted Plants</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C85A32] hover:text-[#A64120]"
                >
                  <span>Visit Via Cantonale 215</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Inquiries CTA Strip */}
      <section className="py-16 bg-[#F3EDE2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1E3723]">
            Looking for something specific today?
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Fresh flower deliveries and potted plant selections arrive regularly at our Campascio shop. Call <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-semibold text-[#1E3723] underline">{BUSINESS_DATA.phone}</a> or visit us at Via Cantonale 215 to see what is currently in bloom.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3723] text-white text-sm font-semibold hover:bg-[#2E5034]"
            >
              <Phone className="w-4 h-4 text-[#F4E7B5]" />
              <span>Call 081 846 55 05</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C85A32] text-white text-sm font-semibold hover:bg-[#A64120]"
            >
              <span>Visit the Shop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
