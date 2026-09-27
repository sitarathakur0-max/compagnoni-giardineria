import React, { useState } from 'react';
import { X, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { ContactFormData, FormErrors } from '../types';

interface AskBotanicalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function AskBotanicalModal({ isOpen, onClose, defaultTopic = 'flowers' }: AskBotanicalModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    topic: defaultTopic,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() && !formData.phone.trim()) {
      errs.email = 'Please provide either an email or phone number so we can reply.';
    } else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please describe what plants, flowers, or advice you are inquiring about.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a little more detail (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', topic: 'flowers', message: '' });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132317]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E8DFC8] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#1E3723] text-[#FAF7F2] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F4E7B5]/20 flex items-center justify-center text-[#F4E7B5]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-white">Ask About Plants & Flowers</h3>
              <p className="text-xs text-[#F4E7B5]">Direct inquiry to Compagnoni Giardineria</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-stone-300 hover:text-white p-1 rounded-lg focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#EBF2EC] text-[#1E3723] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#2E5034]" />
              </div>
              <h4 className="font-serif text-2xl text-[#1E3723]">Inquiry Received</h4>
              <p className="text-sm text-[#5C6A5E] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1E3723]">{formData.name}</strong>. Your botanical inquiry has been prepared. For immediate assistance or day-of floral requests, please give us a direct call.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3723] text-white text-sm font-medium hover:bg-[#2E5034] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F4E7B5]" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>
              </div>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="text-xs text-[#5C6A5E] hover:underline"
                >
                  Close window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F3EDE2]/60 p-3.5 rounded-xl border border-[#E8DFC8] text-xs text-[#5C6A5E] flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>
                  Prefer speaking directly? Call us at <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-semibold text-[#1E3723] underline">{BUSINESS_DATA.phone}</a>. We are glad to answer questions about seasonal plant availability and flower selections.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Rossi"
                  className={`w-full px-3.5 py-2 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.ch"
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 079 123 45 67"
                    className="w-full px-3.5 py-2 rounded-lg border border-[#D9CFC1] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D9CFC1] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                >
                  <option value="flowers">Fresh Flowers & Arrangements</option>
                  <option value="indoor-plants">Indoor Potted Greenery & Foliage</option>
                  <option value="outdoor-gardening">Outdoor Plants & Container Gardening</option>
                  <option value="visiting-planning">Visiting the Shop at Via Cantonale 215</option>
                  <option value="general">General Botanical Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3723] mb-1">
                  How can we help? *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what plants or flowers you are looking for, or describe your indoor/balcony space..."
                  className={`w-full px-3.5 py-2 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC1]'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs text-[#5C6A5E] hover:text-[#1E3723] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A64120] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Botanical Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
