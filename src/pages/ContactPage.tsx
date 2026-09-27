import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ExternalLink,
  Compass,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { BUSINESS_DATA, GOOGLE_MAPS_SEARCH_URL } from '../data/business';
import { ContactFormData, FormErrors } from '../types';
import { FernSprig, OliveSprig, BotanicalStamp } from '../components/BotanicalDecorations';

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    topic: 'flowers',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Please provide an email or phone number so we can respond.';
    } else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.ch).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or botanical inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Your message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Frontend-validated submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'flowers',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#212620]">
      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFC8] bg-[#F3EDE2]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] text-[#1E3723] text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1E3723] leading-tight mb-4">
              Contact Compagnoni Giardineria
            </h1>
            <p className="text-base sm:text-lg text-[#5C6A5E] leading-relaxed">
              We welcome your questions regarding seasonal cut flowers, potted greenery, and container gardening. Connect with us online, call the shop directly, or visit us in Campascio.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 hidden md:block">
          <FernSprig className="w-96 h-96 text-[#1E3723]" />
        </div>
      </section>

      {/* Main Content: Info on left, Form on right */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Business Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C85A32]">
                  Direct Contact
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E3723] mt-1">
                  Visit us or call the shop.
                </h2>
                <p className="text-sm text-[#5C6A5E] mt-3 leading-relaxed">
                  Located along Via Cantonale in Campascio, our shop is conveniently accessible from anywhere in the Poschiavo valley.
                </p>
              </div>

              {/* Exact Business Details Cards */}
              <div className="space-y-4 text-sm text-[#2D372F]">
                {/* Physical Address */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                    <MapPin className="w-4 h-4" />
                    <span>Physical Shop Location</span>
                  </div>
                  <div className="font-serif text-xl text-[#1E3723] font-semibold">{BUSINESS_DATA.name}</div>
                  <div className="text-stone-700">{BUSINESS_DATA.street}</div>
                  <div className="text-stone-700">{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, {BUSINESS_DATA.country}</div>
                  <div className="text-xs text-[#5C6A5E] pt-1">
                    Canton of Graubünden • Val Poschiavo
                  </div>
                  <div className="pt-2">
                    <a
                      href={GOOGLE_MAPS_SEARCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E3723] hover:text-[#C85A32] underline underline-offset-4"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-sm space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2E5034]">
                    <Phone className="w-4 h-4" />
                    <span>Direct Telephone</span>
                  </div>
                  <div className="text-xs text-[#5C6A5E]">
                    For urgent flower inquiries, daily availability, or visit planning:
                  </div>
                  <div>
                    <a
                      id="contact-page-phone-link"
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="font-serif text-2xl sm:text-3xl text-[#1E3723] hover:text-[#C85A32] font-semibold underline underline-offset-4"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                  <div className="text-xs text-[#5C6A5E] pt-1">
                    Direct call link (tap to dial)
                  </div>
                </div>

                {/* Practical Advice Note */}
                <div className="p-5 rounded-xl bg-[#F3EDE2]/70 border border-[#E8DFC8] text-xs text-[#5C6A5E] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1E3723] font-semibold">
                    <HelpCircle className="w-4 h-4 text-[#C85A32]" />
                    <span>Seasonal Planning</span>
                  </div>
                  <p>
                    Because fresh floral deliveries and plant availability vary with mountain weather and seasons, calling ahead at <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="underline text-[#1E3723] font-medium">{BUSINESS_DATA.phone}</a> ensures we can have the freshest selection ready for your arrival.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-md relative">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#EBF2EC] text-[#2E5034] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-3xl text-[#1E3723]">Thank you for your inquiry</h3>
                    <p className="text-[#5C6A5E] text-sm max-w-md mx-auto leading-relaxed">
                      Your message has been received. <strong className="text-[#1E3723]">{formData.name}</strong>, we look forward to assisting you with your botanical and floral needs.
                    </p>
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs text-[#5C6A5E] max-w-md mx-auto">
                      <strong>Need immediate assistance?</strong> You can reach us directly at <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-semibold text-[#1E3723] underline">{BUSINESS_DATA.phone}</a>.
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-full bg-[#1E3723] text-white text-xs font-semibold hover:bg-[#2E5034] transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold">
                        Inquiry Form
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1E3723] mt-1">
                        Send a botanical inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C6A5E] mt-1">
                        Complete this form with your questions, and we will get back to you promptly.
                      </p>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1.5">
                        Your Full Name <span className="text-[#C85A32]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marco Bernasconi"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-all ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.ch"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-all ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                          }`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1.5">
                          Telephone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 081 846 55 05"
                          className="w-full px-4 py-3 rounded-xl border border-[#D9CFC1] text-sm bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-all"
                        />
                      </div>
                    </div>

                    {/* Topic Selection */}
                    <div>
                      <label htmlFor="contact-topic" className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1.5">
                        Topic of Inquiry
                      </label>
                      <select
                        id="contact-topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9CFC1] text-sm bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-all"
                      >
                        <option value="flowers">Fresh Flowers & Arrangements</option>
                        <option value="indoor-plants">Indoor Potted Foliage & Houseplants</option>
                        <option value="gardening">Outdoor Container Gardening & Soil</option>
                        <option value="visit">Planning a Shop Visit at Via Cantonale 215</option>
                        <option value="general">General Botanical Question</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1.5">
                        Your Message <span className="text-[#C85A32]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what flowers or plants you are looking for, or ask about container gardening for your home..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-all ${
                          errors.message ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'msg-error' : undefined}
                      />
                      {errors.message && (
                        <p id="msg-error" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between gap-4">
                      <span className="text-xs text-[#5C6A5E]">
                        Fields marked with <span className="text-[#C85A32]">*</span> are required.
                      </span>

                      <button
                        id="submit-contact-form-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C85A32] hover:bg-[#A64120] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md disabled:opacity-70"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Get in Touch'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="py-20 bg-[#F3EDE2]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#1E3723] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4E7B5] text-xs">
                  <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Interactive Map & Road Directions</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  Find Compagnoni Giardineria in Campascio
                </h3>
                <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
                  Located directly on Via Cantonale 215, 7748 Campascio. Open directions in your favorite navigation service for real-time routing through the Val Poschiavo valley.
                </p>
                <div className="text-xs text-[#F4E7B5] font-serif italic">
                  Address: Via Cantonale 215, 7748 Campascio, Switzerland • Tel: {BUSINESS_DATA.phone}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
                <a
                  id="google-maps-directions-link"
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F4E7B5] text-[#1E3723] text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-md"
                >
                  <MapPin className="w-4 h-4 text-[#C85A32]" />
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-xs text-stone-300 hover:text-white underline underline-offset-4"
                >
                  Or call directly: {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 pointer-events-none opacity-10">
              <FernSprig className="w-80 h-80 text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
