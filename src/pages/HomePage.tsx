import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Compass,
  Sprout,
  Sun,
  Droplets,
  HeartHandshake,
  CheckCircle,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, BOTANICAL_IMAGES, GOOGLE_MAPS_SEARCH_URL } from '../data/business';
import {
  FernSprig,
  TerracottaPotIcon,
  OliveSprig,
  BotanicalStamp,
} from '../components/BotanicalDecorations';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (topic?: string) => void;
}

export function HomePage({ onNavigate, onOpenInquiry }: HomePageProps) {
  // Interactive Plant Visit Planner state
  const [selectedSpace, setSelectedSpace] = useState<'indoor' | 'balcony' | 'floral' | 'patio'>('indoor');
  const [selectedLight, setSelectedLight] = useState<'bright' | 'indirect' | 'low'>('indirect');

  const plannerQuestions: Record<string, string[]> = {
    'indoor-indirect': [
      'Inquire about foliage plants adapted to moderate indoor light.',
      'Check recommended watering frequency during mountain valley winters.',
      'Ask about quality potting compost and proper pot drainage.',
    ],
    'indoor-bright': [
      'Inquire about sunlight-tolerant houseplants and hardy green specimens.',
      'Ask about leaf humidity care when domestic heating is active.',
      'Check terracotta planter options for natural root aeration.',
    ],
    'indoor-low': [
      'Ask for resilient shade-tolerant foliage suitable for north-facing rooms.',
      'Verify best potting soil moisture management to avoid overwatering.',
      'Inquire about seasonal hardiness and steady indoor temperatures.',
    ],
    'balcony-bright': [
      'Inquire about seasonal terrace blooms that thrive in sunny valley afternoons.',
      'Ask about soil volume and water retention in exposed planters.',
      'Check protection methods against sudden alpine temperature shifts.',
    ],
    'balcony-indirect': [
      'Ask for balcony plants that enjoy gentle morning light or sheltered shade.',
      'Inquire about container sizing for perennial herbs or green foliage.',
      'Check wind-resistant foliage varieties suitable for mountain valleys.',
    ],
    'balcony-low': [
      'Ask for shade-loving container specimens and lush green foliage.',
      'Check proper soil aeration and slow-release natural nutrition.',
      'Discuss wintering and frost protection before cold mountain nights.',
    ],
    'floral-bright': [
      'Inquire about fresh seasonal cut blooms currently available in the shop.',
      'Ask for advice on stem cutting angles and fresh water replenishment.',
      'Discuss balanced floral arrangements suited for natural daylight rooms.',
    ],
    'floral-indirect': [
      'Inquire about delicate cut flowers and fresh fragrant foliage.',
      'Ask for flower vase care guidelines away from direct heat sources.',
      'Call ahead at 081 846 55 05 for custom seasonal bouquet preparation.',
    ],
    'floral-low': [
      'Ask for long-lasting seasonal cut stems that hold well in ambient room light.',
      'Check water temperature recommendations for maximum vase freshness.',
      'Discuss foliage pairings that highlight subtle textures and shapes.',
    ],
    'patio-bright': [
      'Inquire about substantial container specimens suited for sunny courtyard areas.',
      'Ask about heavy terracotta pots to anchor plants in valley winds.',
      'Check seasonal watering rhythms for outdoor potted collections.',
    ],
    'patio-indirect': [
      'Inquire about semi-shade potted perennials and architectural foliage.',
      'Ask about organic soil mixes with balanced drainage.',
      'Check seasonal flowering periods adapted to the Poschiavo climate.',
    ],
    'patio-low': [
      'Ask for deep-shade garden pots and woodland-style foliage.',
      'Discuss moss-friendly and moisture-retaining potting compositions.',
      'Inquire about frost tolerance as autumn transitions into winter.',
    ],
  };

  const currentQuestions = plannerQuestions[`${selectedSpace}-${selectedLight}`] || [
    'Inquire about current seasonal availability at Via Cantonale 215.',
    'Ask for practical care instructions matching your home environment.',
    'Call 081 846 55 05 for day-of advice and personal recommendations.',
  ];

  return (
    <div className="w-full bg-[#FAF7F2] text-[#212620]">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section
        id="hero-section"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E8DFC8]"
      >
        {/* Subtle background decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4E7B5]/30 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EBF2EC]/50 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Botanical badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] border border-[#2E5034]/20 text-[#1E3723] text-xs font-semibold tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Campascio, Switzerland • Via Cantonale 215</span>
              </div>

              {/* Main Display Title */}
              <div className="space-y-2">
                <span className="block text-xs uppercase tracking-[0.25em] text-[#C85A32] font-semibold">
                  Florist & Garden Shop
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#1E3723]">
                  A living sanctuary of flowers, plants & garden craft.
                </h1>
              </div>

              {/* Hero Prose */}
              <p className="text-base sm:text-lg text-[#5C6A5E] leading-relaxed max-w-2xl">
                Welcome to <strong className="text-[#1E3723] font-semibold">{BUSINESS_DATA.name}</strong>, where botanical passion meets the southern Alpine valley of Campascio. We bring together fresh cut flowers, living potted plants, and an authentic gardening perspective for homes, balconies, and mountain gardens.
              </p>

              {/* Direct CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  id="hero-call-cta"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1E3723] text-[#FAF7F2] hover:bg-[#2E5034] text-sm font-semibold transition-all shadow-sm hover:shadow-md"
                  title="Call shop at 081 846 55 05"
                >
                  <Phone className="w-4 h-4 text-[#F4E7B5]" />
                  <span>Call the Shop</span>
                </a>

                <button
                  id="hero-visit-cta"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C85A32] text-white hover:bg-[#A64120] text-sm font-semibold transition-all shadow-sm hover:shadow-md"
                >
                  <span>Visit Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-ask-cta"
                  onClick={() => onOpenInquiry('general')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FAF7F2] text-[#1E3723] border border-[#1E3723]/30 hover:border-[#1E3723] hover:bg-[#F3EDE2] text-sm font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                  <span>Ask About Plants & Flowers</span>
                </button>
              </div>

              {/* Exact Details pill */}
              <div className="pt-4 border-t border-[#E8DFC8] flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#5C6A5E]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C85A32]" />
                  <span><strong className="text-[#1E3723]">Location:</strong> Via Cantonale 215, 7748 Campascio</span>
                </div>
                <div className="hidden sm:block text-[#E8DFC8]">•</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2E5034]" />
                  <span><strong className="text-[#1E3723]">Telephone:</strong> {BUSINESS_DATA.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Composition (Asymmetrical Editorial) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Framed Botanical Image */}
                <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-stone-200">
                  <img
                    src={BOTANICAL_IMAGES.hero}
                    alt="Botanical garden greenhouse with lush foliage and terracotta pots at Compagnoni Giardineria"
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132317]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFC8]/60 text-xs">
                    <p className="font-serif text-sm font-semibold text-[#1E3723]">Compagnoni Giardineria • Campascio</p>
                    <p className="text-[#5C6A5E] mt-0.5">Where floral expression meets practical plant knowledge.</p>
                  </div>
                </div>

                {/* Floating Stamp */}
                <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#FAF7F2] rounded-full p-2 shadow-lg border border-[#E8DFC8]">
                  <BotanicalStamp text="CAMPASCIO • VAL POSCHIAVO" className="w-24 h-24" />
                </div>

                {/* Floating Accent Card */}
                <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#1E3723] text-white shadow-xl border border-white/10 max-w-[210px]">
                  <TerracottaPotIcon className="w-9 h-9 text-[#F4E7B5] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <div className="font-serif font-semibold text-[#F4E7B5] text-xs">Garden Focus</div>
                    <div className="text-stone-300 mt-0.5">Living plants for valley homes and sunny terraces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DETAILED INTRODUCTION TO THE FLOWER & PLANT SHOP
          ========================================================================= */}
      <section id="shop-introduction" className="py-20 md:py-28 bg-[#F3EDE2]/60 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] mb-3">
              <Sprout className="w-4 h-4" />
              <span>The Botanical Spirit</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723] leading-tight">
              A dedicated flower and plant shop rooted in living botany.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image on left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF7F2]">
                <img
                  src={BOTANICAL_IMAGES.shopInterior}
                  alt="Interior atmosphere of botanical plant shop showing lush potted greenery"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFC8]">
                  <div className="flex items-center justify-between text-xs text-[#5C6A5E]">
                    <span className="font-serif italic text-sm text-[#1E3723]">Via Cantonale 215, Campascio</span>
                    <span className="font-medium text-[#C85A32]">Florist / Garden</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rich Editorial Content on right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-[#2D372F] text-base leading-relaxed">
              <p className="text-lg font-serif italic text-[#1E3723] leading-relaxed">
                At Compagnoni Giardineria, plants and flowers are celebrated not merely as fleeting ornaments, but as vital living elements that transform daily environments and connect us to natural cycles.
              </p>
              <p>
                Located along the main valley corridor of Via Cantonale in Campascio, our shop unites two intertwined disciplines: the refined art of the florist and the enduring patience of the gardener. Fresh cut flowers arrive to celebrate moments of joy, gratitude, and remembrance, while our potted plants and gardening essentials offer long-term greenery for interiors, verandas, and outdoor spaces.
              </p>
              <p>
                Val Poschiavo is known for its distinctive microclimates, where sunny southern slopes meet cool mountain currents. This unique setting makes thoughtful plant care both an adventure and an art. Whether you are seeking a fresh floral bouquet or hearty potted specimens that thrive in Alpine light, our shop provides an attentive, personal atmosphere where questions are always welcomed.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="intro-ask-cta"
                  onClick={() => onOpenInquiry('flowers')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3723] text-white hover:bg-[#2E5034] text-sm font-semibold transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#F4E7B5]" />
                  <span>Ask About Plants & Flowers</span>
                </button>
                <a
                  id="intro-call-cta"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C85A32] hover:text-[#A64120] underline underline-offset-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 081 846 55 05</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SUBSTANTIAL "ABOUT THE GARDEN SHOP" (STRICTLY FACT-GROUNDED)
          ========================================================================= */}
      <section id="about-garden-shop" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Editorial Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                <OliveSprig className="w-8 h-4 text-[#2E5034]" />
                <span>About Compagnoni Giardineria</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723] leading-tight">
                Grounded in Campascio: A dedicated florist & garden destination.
              </h2>
              <div className="space-y-4 text-[#2D372F] leading-relaxed">
                <p>
                  Compagnoni Giardineria operates as a local florist and garden shop located at <strong className="text-[#1E3723]">Via Cantonale 215, 7748 Campascio, Switzerland</strong>. Our business is categorized under <em>Florist / Garden</em>, reflecting a purposeful combination of floral styling and hands-on plant stewardship.
                </p>
                <p>
                  In a mountain valley community, a garden shop is more than a commercial storefront—it is a trusted physical meeting point for plant enthusiasts, homeowners, and visitors passing through the Val Poschiavo. Rather than relying on distant catalogs, our customers value seeing, feeling, and selecting living plants in person.
                </p>
                <p>
                  We focus on quality, healthy root systems, fresh cut blossoms, and practical botanical advice. Our physical location on Via Cantonale makes visiting simple and accessible from throughout the region.
                </p>
              </div>

              {/* Factual Highlights Box */}
              <div className="p-6 rounded-2xl bg-[#EBF2EC] border border-[#2E5034]/20 space-y-4">
                <h3 className="font-serif text-lg font-semibold text-[#1E3723] flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2E5034]" />
                  <span>Verified Shop Credentials</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2D372F]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                    <span><strong className="text-[#1E3723]">Official Trade Name:</strong> Compagnoni Giardineria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                    <span><strong className="text-[#1E3723]">Core Category:</strong> Florist / Garden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                    <span><strong className="text-[#1E3723]">Registered Address:</strong> Via Cantonale 215, 7748 Campascio, Switzerland</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                    <span><strong className="text-[#1E3723]">Direct Phone:</strong> 081 846 55 05</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                    <span><strong className="text-[#1E3723]">Primary Focus:</strong> Flower and plant shop with gardening focus</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual & Practical Card Layout */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.florals}
                  alt="Vibrant seasonal cut blooms and floral craftsmanship"
                  className="w-full h-[320px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#1E3723] text-[#FAF7F2] flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-[#F4E7B5] font-serif text-sm block">Floral Artistry & Care</span>
                    <span>Fresh stems, bouquets, and seasonal decorative botanicals</span>
                  </div>
                  <button
                    onClick={() => onNavigate('flowers-plants')}
                    className="p-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2]"
                    aria-label="View flowers and plants"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Three Botanical Pillars based only on general facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#E8DFC8] shadow-sm">
                  <TerracottaPotIcon className="w-7 h-7 text-[#C85A32] mb-3" />
                  <h4 className="font-serif text-lg font-semibold text-[#1E3723] mb-1">Potted Greenery</h4>
                  <p className="text-xs text-[#5C6A5E] leading-relaxed">
                    Selected foliage specimens suited for indoor living rooms, bright verandas, and sunny windowsills.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#E8DFC8] shadow-sm">
                  <Sprout className="w-7 h-7 text-[#2E5034] mb-3" />
                  <h4 className="font-serif text-lg font-semibold text-[#1E3723] mb-1">Gardening Outlook</h4>
                  <p className="text-xs text-[#5C6A5E] leading-relaxed">
                    Rooted guidance on soil health, container potting, watering rhythms, and seasonal care in mountain valleys.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3723] hover:text-[#C85A32] transition-colors"
                >
                  <span>Read more about our garden shop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-xs font-semibold text-[#C85A32] hover:underline"
                >
                  Call 081 846 55 05
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXPLORING FLOWERS, PLANTS, AND GARDEN LIFE
          ========================================================================= */}
      <section id="botanical-guide" className="py-20 md:py-28 bg-[#F3EDE2]/40 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-3">
              <Sun className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Botanical Knowledge</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
              Exploring flowers, plants, and garden life.
            </h2>
            <p className="text-[#5C6A5E] mt-3 text-base leading-relaxed">
              Living with plants is an enriching seasonal discipline. Here is how we think about botanical care, from cut stems to potted foliage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guide Column 1: Fresh Flowers */}
            <div className="bg-white rounded-2xl p-7 border border-[#E8DFC8] shadow-sm flex flex-col justify-between hover:border-[#C85A32]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F9EFE9] text-[#C85A32] flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1E3723] mb-3">Cut Flowers & Stems</h3>
                <p className="text-xs sm:text-sm text-[#5C6A5E] leading-relaxed mb-4">
                  Fresh cut blooms bring vibrant colors, texture, and natural perfume into your home. Their care requires clean cool water, trimming stem ends at a sharp angle to maximize hydration, and placing vases away from intense direct heat or drafty doorways.
                </p>
                <div className="text-xs text-[#1E3723] font-medium bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC8]">
                  <strong>Care rule:</strong> Change vase water every two days and gently recut stems by 1 cm to extend floral longevity.
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFC8]">
                <button
                  onClick={() => onOpenInquiry('flowers')}
                  className="text-xs font-semibold text-[#C85A32] hover:text-[#A64120] inline-flex items-center gap-1.5"
                >
                  <span>Ask About Flower Arrangements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Guide Column 2: Potted Indoor Greenery */}
            <div className="bg-white rounded-2xl p-7 border border-[#E8DFC8] shadow-sm flex flex-col justify-between hover:border-[#2E5034]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF2EC] text-[#2E5034] flex items-center justify-center mb-5">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1E3723] mb-3">Indoor Potted Greenery</h3>
                <p className="text-xs sm:text-sm text-[#5C6A5E] leading-relaxed mb-4">
                  Houseplants enrich indoor air and bring calm structure to rooms. Success begins with understanding your home’s exposure: bright indirect light accommodates most foliage, while watering should always be guided by soil dryness rather than a rigid calendar.
                </p>
                <div className="text-xs text-[#1E3723] font-medium bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC8]">
                  <strong>Care rule:</strong> Always check the top 3 cm of soil before watering. Plants prefer thorough watering with drainage over constant dampness.
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFC8]">
                <button
                  onClick={() => onOpenInquiry('indoor-plants')}
                  className="text-xs font-semibold text-[#2E5034] hover:text-[#1E3723] inline-flex items-center gap-1.5"
                >
                  <span>Ask About Potted Houseplants</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Guide Column 3: Garden Life & Containers */}
            <div className="bg-white rounded-2xl p-7 border border-[#E8DFC8] shadow-sm flex flex-col justify-between hover:border-[#C85A32]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#1E3723] border border-[#E8DFC8] flex items-center justify-center mb-5">
                  <TerracottaPotIcon className="w-7 h-7 text-[#C85A32]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1E3723] mb-3">Outdoor & Container Life</h3>
                <p className="text-xs sm:text-sm text-[#5C6A5E] leading-relaxed mb-4">
                  Balconies, terraces, and garden borders in Campascio encounter Alpine conditions. Using porous terracotta planters allows root systems to breathe and moderates soil temperature during hot afternoons and crisp mountain evenings.
                </p>
                <div className="text-xs text-[#1E3723] font-medium bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC8]">
                  <strong>Care rule:</strong> Ensure every outdoor planter has a drainage hole to prevent waterlogging from sudden mountain rain showers.
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFC8]">
                <button
                  onClick={() => onOpenInquiry('outdoor-gardening')}
                  className="text-xs font-semibold text-[#C85A32] hover:text-[#A64120] inline-flex items-center gap-1.5"
                >
                  <span>Ask About Garden Containers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: RELATIONSHIP BETWEEN A PLANT SHOP AND GARDENING
          ========================================================================= */}
      <section id="shop-and-gardening" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                <Sprout className="w-4 h-4 text-[#2E5034]" />
                <span>Holistic Botany</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723] leading-tight">
                The vital link between a plant shop and gardening.
              </h2>
              <p className="text-[#2D372F] text-base leading-relaxed">
                Many see flower shops and outdoor gardens as separate worlds, but at Compagnoni Giardineria they share a single philosophy: respect for plant biology, seasonal rhythms, and soil vitality.
              </p>
              <p className="text-[#5C6A5E] text-sm leading-relaxed">
                A plant shop with a gardening focus recognizes that every flower arrangement, potted fern, or balcony planter is part of an ongoing continuum. Gardening teaches us patience, seasonal awareness, and the foundational importance of root health. When you bring a plant home from our shop, you are stepping into that same ongoing practice of botanical care.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8DFC8]">
                  <div className="w-8 h-8 rounded-full bg-[#F4E7B5]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-serif font-bold text-[#1E3723] text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1E3723] text-base">Root Health Precedes Leaf Beauty</h4>
                    <p className="text-xs text-[#5C6A5E] mt-0.5">
                      Vibrant flowers and lush leaves are the outcome of what happens beneath the soil. Proper potting media and aeration make all the difference.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8DFC8]">
                  <div className="w-8 h-8 rounded-full bg-[#EBF2EC] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-serif font-bold text-[#2E5034] text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1E3723] text-base">Seasonal Attunement</h4>
                    <p className="text-xs text-[#5C6A5E] mt-0.5">
                      Understanding when plants awaken in spring, bloom through high summer, and rest in winter creates effortless longevity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8DFC8]">
                  <div className="w-8 h-8 rounded-full bg-[#F9EFE9] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-serif font-bold text-[#C85A32] text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1E3723] text-base">Personalized Botanical Guidance</h4>
                    <p className="text-xs text-[#5C6A5E] mt-0.5">
                      Every window, terrace, and garden has its own micro-climate. Our team is always happy to discuss specific conditions at the shop counter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('gardening')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3723] text-[#FAF7F2] hover:bg-[#2E5034] text-sm font-semibold transition-colors"
                >
                  <span>Explore Gardening Perspectives</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Images Layout */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={BOTANICAL_IMAGES.gardenPottery}
                    alt="Terracotta pots with green garden foliage"
                    className="w-full h-[460px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132317]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#E8DFC8]">
                    <div className="font-serif text-lg font-semibold text-[#1E3723]">
                      Craftsmanship & Terracotta
                    </div>
                    <p className="text-xs text-[#5C6A5E] mt-1">
                      Natural materials that breathe with the plant and harmonize with Alpine valley architecture.
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                      <span>Via Cantonale 215, Campascio</span>
                      <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="underline hover:text-[#A64120]">
                        081 846 55 05
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE VISIT & INQUIRY PLANNER (USEFUL GUIDE FOR CUSTOMERS)
          ========================================================================= */}
      <section id="visit-planner" className="py-20 md:py-28 bg-[#F3EDE2]/60 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Customer Visit Guide</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
              Planning a visit or looking for plants & flowers?
            </h2>
            <p className="text-[#5C6A5E] mt-3 text-base leading-relaxed">
              Before dropping by Via Cantonale 215 or calling the shop, take a moment to consider your space. Select your setting below to see tailored botanical questions you can ask.
            </p>
          </div>

          {/* Interactive Planner Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-md">
            {/* Step 1: Choose Space */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-3">
                1. Where will your plants or flowers live?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'indoor', label: 'Living Room / Interior', icon: Sprout },
                  { id: 'balcony', label: 'Balcony / Window Box', icon: Sun },
                  { id: 'patio', label: 'Terrace / Garden Patio', icon: TerracottaPotIcon },
                  { id: 'floral', label: 'Fresh Cut Table Blooms', icon: Sparkles },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = selectedSpace === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSpace(item.id as any)}
                      className={`p-4 rounded-xl border text-left flex flex-col items-start gap-2.5 transition-all ${
                        active
                          ? 'border-[#C85A32] bg-[#F9EFE9] text-[#1E3723] shadow-sm'
                          : 'border-[#E8DFC8] bg-[#FAF7F2] text-[#5C6A5E] hover:border-[#C85A32]/40'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${active ? 'text-[#C85A32]' : 'text-[#5C6A5E]'}`} />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Light Exposure */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-3">
                2. What is your light exposure?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'indirect', label: 'Bright Indirect Light', desc: 'East or West exposure, soft sun' },
                  { id: 'bright', label: 'Full Sunny Light', desc: 'South-facing, direct afternoon rays' },
                  { id: 'low', label: 'Gentle / Shaded Light', desc: 'North-facing or deeper room shade' },
                ].map((item) => {
                  const active = selectedLight === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedLight(item.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        active
                          ? 'border-[#2E5034] bg-[#EBF2EC] text-[#1E3723]'
                          : 'border-[#E8DFC8] bg-[#FAF7F2] text-[#5C6A5E] hover:border-[#2E5034]/40'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#1E3723]">{item.label}</div>
                      <div className="text-[11px] text-[#5C6A5E] mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generated Guide / Checklist */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tailored Inquiries for Compagnoni Giardineria</span>
                </div>
                <span className="text-[11px] text-[#5C6A5E] hidden sm:inline">Use these when you visit or call</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#2D372F]">
                {currentQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1E3723] text-[#F4E7B5] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#5C6A5E]">
                  Ready to talk with us? Call <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-semibold text-[#1E3723] underline">{BUSINESS_DATA.phone}</a> or visit us at Via Cantonale 215.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1E3723] text-white text-xs font-semibold hover:bg-[#2E5034]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F4E7B5]" />
                    <span>Call Shop</span>
                  </a>
                  <button
                    onClick={() => onOpenInquiry(selectedSpace)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C85A32] text-white text-xs font-semibold hover:bg-[#A64120]"
                  >
                    <span>Ask About Plants</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: THE LOCAL SETTING & PHYSICAL SHOP LOCATION
          ========================================================================= */}
      <section id="local-setting" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Landscape */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={BOTANICAL_IMAGES.alpineLandscape}
                  alt="Scenic mountain valley in Graubünden Switzerland near Campascio"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132317]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#1E3723]/90 text-white backdrop-blur-sm text-xs">
                  <div className="font-serif text-base text-[#F4E7B5]">Val Poschiavo • Graubünden</div>
                  <p className="text-stone-300 mt-0.5">
                    7748 Campascio, located along the southern Swiss valley path connecting Poschiavo to the Italian Valtellina border.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Storytelling */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                <Compass className="w-4 h-4 text-[#2E5034]" />
                <span>Geographic Setting</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723] leading-tight">
                Rooted in Campascio: Where alpine air meets southern light.
              </h2>
              <div className="space-y-4 text-[#2D372F] text-base leading-relaxed">
                <p>
                  Campascio sits in the southern sector of the Canton of Graubünden, in the picturesque Val Poschiavo. Famed for its orchards, fruit culture, and dramatic mountain scenery, this valley benefits from a mild southern exposure shielded by soaring alpine peaks.
                </p>
                <p>
                  This special microclimate allows both hardy alpine plants and warmth-loving Mediterranean flora to flourish side by side. At <strong className="text-[#1E3723]">{BUSINESS_DATA.name}</strong>, our location on <strong className="text-[#1E3723]">Via Cantonale 215</strong> places us directly on the valley’s central road, offering convenient access whether you are traveling from Poschiavo, Brusio, or across the border.
                </p>
                <p>
                  When selecting plants for your home or outdoor space, local context matters. Soil temperature, morning frosts, and afternoon valley breezes require thoughtful plant matching—guidance our shop is delighted to offer in person.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] text-[#1E3723] border border-[#1E3723]/30 hover:border-[#1E3723] hover:bg-[#F3EDE2] text-sm font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C85A32]" />
                  <span>View Map Coordinates</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>

                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3723] hover:text-[#C85A32]"
                >
                  <Phone className="w-4 h-4 text-[#C85A32]" />
                  <span>Call 081 846 55 05</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRACTICAL CONTACT & VISIT SECTION
          ========================================================================= */}
      <section id="practical-visit" className="py-20 md:py-28 bg-[#F3EDE2]/60 border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32] mb-3">
              <MapPin className="w-4 h-4" />
              <span>Plan Your Visit</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723]">
              Find us at Via Cantonale 215, Campascio.
            </h2>
            <p className="text-[#5C6A5E] mt-2 text-base">
              A welcoming local destination for cut flowers, potted specimens, and garden essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Location & Details Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E8DFC8] shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold">
                    Compagnoni Giardineria
                  </span>
                  <h3 className="font-serif text-2xl text-[#1E3723] mt-1">Florist / Garden Shop</h3>
                </div>

                <div className="space-y-4 text-sm text-[#2D372F]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1E3723]">Address</div>
                      <div>{BUSINESS_DATA.street}</div>
                      <div>{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, {BUSINESS_DATA.country}</div>
                      <div className="text-xs text-[#5C6A5E] mt-1">Situated on Via Cantonale in Campascio</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2E5034] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1E3723]">Telephone</div>
                      <a
                        id="visit-section-phone"
                        href={`tel:${BUSINESS_DATA.phoneRaw}`}
                        className="text-lg font-serif font-semibold text-[#C85A32] hover:text-[#A64120] underline"
                      >
                        {BUSINESS_DATA.phone}
                      </a>
                      <div className="text-xs text-[#5C6A5E] mt-1">Call for questions, flower inquiries, or current hours</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs text-[#5C6A5E] space-y-1.5">
                    <div className="font-semibold text-[#1E3723]">Planning Ahead:</div>
                    <p>
                      Because shop schedules may adjust with mountain seasons and floral market arrivals, we warmly invite customers to give us a brief call at <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="underline text-[#1E3723] font-medium">{BUSINESS_DATA.phone}</a> when planning a visit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3723] text-white text-xs font-semibold hover:bg-[#2E5034] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F4E7B5]" />
                  <span>Open Directions in Maps</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] text-white text-xs font-semibold hover:bg-[#A64120] transition-colors"
                >
                  <span>Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Visual Map Preview */}
            <div className="lg:col-span-7 bg-[#1E3723] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4E7B5] text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Campascio • Val Poschiavo</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
                  Convenient access on the valley road.
                </h3>
                <p className="text-stone-300 text-sm max-w-lg leading-relaxed">
                  Via Cantonale is the primary route winding through the Poschiavo valley, easily reached from Brusio, Poschiavo village, and the surrounding hamlets. Ample roadside convenience for collecting floral arrangements or picking up potted plants.
                </p>
              </div>

              {/* Decorative Map Card mockup */}
              <div className="relative z-10 mt-8 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#F4E7B5] uppercase tracking-wider font-semibold">Street Address</div>
                    <div className="text-base font-serif font-bold text-white mt-0.5">{BUSINESS_DATA.street}</div>
                    <div className="text-xs text-stone-300">{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, {BUSINESS_DATA.country}</div>
                  </div>
                  <a
                    href={GOOGLE_MAPS_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#F4E7B5] text-[#1E3723] font-semibold text-xs hover:bg-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Background botanical graphics */}
              <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-10">
                <FernSprig className="w-72 h-72 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: MULTIPLE NATURAL CTAs BANNER
          ========================================================================= */}
      <section id="natural-ctas-strip" className="py-14 bg-[#1E3723] text-white border-b border-[#2E5034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4E7B5] font-semibold">
                Direct Communication
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                How would you like to connect with Compagnoni Giardineria?
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                id="strip-call-btn"
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF7F2] text-[#1E3723] hover:bg-[#F4E7B5] text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-[#C85A32]" />
                <span>Call the Shop: {BUSINESS_DATA.phone}</span>
              </a>

              <button
                id="strip-visit-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C85A32] text-white hover:bg-[#A64120] text-xs sm:text-sm font-semibold transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us at Via Cantonale 215</span>
              </button>

              <button
                id="strip-ask-btn"
                onClick={() => onOpenInquiry('general')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FAF7F2] text-xs sm:text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#F4E7B5]" />
                <span>Ask About Plants & Flowers</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SUBSTANTIAL FINAL BOTANICAL CTA & CONTACT SECTION
          ========================================================================= */}
      <section id="final-botanical-cta" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="relative rounded-3xl bg-[#FAF7F2] border-2 border-[#E8DFC8] p-8 sm:p-14 lg:p-20 shadow-xl overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 pointer-events-none opacity-20">
              <FernSprig className="w-64 h-64 text-[#1E3723]" />
            </div>
            <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-15">
              <OliveSprig className="w-72 h-72 text-[#C85A32]" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Serving Campascio & Val Poschiavo</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E3723] leading-tight">
                Cultivating botanical warmth and floral beauty together.
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                Whether you are searching for fresh seasonal flowers to brighten an occasion, selecting long-lasting potted greenery for your home, or seeking honest botanical advice for your garden containers, <strong className="text-[#1E3723]">{BUSINESS_DATA.name}</strong> welcomes you to our shop at Via Cantonale 215.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  id="final-call-action"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E3723] text-[#FAF7F2] hover:bg-[#2E5034] text-sm font-semibold transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#F4E7B5]" />
                  <span>Call 081 846 55 05</span>
                </a>

                <button
                  id="final-get-in-touch"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C85A32] text-white hover:bg-[#A64120] text-sm font-semibold transition-all shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="final-ask-plants"
                  onClick={() => onOpenInquiry('flowers')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#1E3723] border border-[#1E3723]/30 hover:border-[#1E3723] hover:bg-[#F3EDE2] text-sm font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                  <span>Ask About Plants & Flowers</span>
                </button>
              </div>

              <div className="pt-6 border-t border-[#E8DFC8]/80 text-xs text-[#5C6A5E] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Compagnoni Giardineria • Via Cantonale 215, 7748 Campascio, Switzerland</span>
                <span className="font-semibold text-[#1E3723]">Phone: {BUSINESS_DATA.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
