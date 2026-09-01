import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenContact: (source?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-4">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">Questions.</span>
          </h2>

          <p className="text-base text-[#9CA3AF] max-w-xl mx-auto">
            Clear answers to help you understand the purpose, structure, and expectations within the community.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121215] rounded-xl border border-[#26262F] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#18181D] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-cormorant text-lg sm:text-xl font-bold text-[#F5F5F7]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#18181D] border border-[#2E2E38] flex items-center justify-center text-[#D4AF37] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-[#0A0A0B] border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#D1D5DB] leading-relaxed border-t border-[#1F1F28] bg-[#0E0E11]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-6 rounded-2xl bg-[#121215] border border-[#2E2E38] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="font-serif-cormorant text-xl font-bold text-[#F5F5F7] mb-1">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Reach out directly to Denise&apos;s team. We will be glad to assist you.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('faq_bottom_cta')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ask Denise&apos;s Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
