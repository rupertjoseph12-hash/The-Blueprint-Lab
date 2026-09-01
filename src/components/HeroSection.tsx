import React from 'react';
import { COMMUNITY_URL, OWNER_IMAGE_URL, FOUNDER_NAME } from '../constants';
import { trackEvent } from '../utils/analytics';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles, BookOpen, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: (source?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const handlePrimaryClick = () => {
    trackEvent('hero_cta_click', { action: 'enter_blueprint', destination: 'skool' });
  };

  const handleSecondaryClick = () => {
    trackEvent('hero_cta_click', { action: 'start_conversation', destination: 'contact_form' });
    onOpenContact('hero_secondary_cta');
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-blueprint-grid"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7E9F8E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Editorial Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Private Member Community • Hosted on Skool</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-bold text-[#F5F5F7] tracking-tight mb-6">
              Redefine the <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D4AF37]">Way You Age.</span>
            </h1>

            {/* High-Intent Supporting Statement */}
            <p className="text-lg md:text-xl text-[#D1D5DB] font-medium leading-relaxed max-w-2xl mb-4">
              Science-forward education, real conversations, and community support for people exploring peptides, protocols, hormone optimization, GLP-1s, and healthier aging.
            </p>

            {/* Clarifying Paragraph */}
            <p className="text-base text-[#9CA3AF] leading-relaxed max-w-xl mb-8">
              The AgeWell Blueprint gives you one trusted place to learn, ask better questions, and connect with people navigating the evolving world of longevity and wellness.
            </p>

            {/* Dual Conversion CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* PATH 1: High Intent -> Skool Community */}
              <a
                id="hero-primary-cta"
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-lg shadow-[#D4AF37]/15 hover:shadow-xl transition-all duration-200 group text-center"
              >
                <span>ENTER THE BLUEPRINT</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* PATH 2: Low/Mid Intent -> Lead/Contact Form */}
              <button
                id="hero-secondary-cta"
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold tracking-wider uppercase text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span>START A CONVERSATION</span>
              </button>
            </div>

            {/* Subtle Trust Badge line */}
            <div className="pt-2 border-t border-[#1F1F28] w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-[#9CA3AF]">
              <span className="flex items-center gap-1.5 text-[#F5F5F7]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7E9F8E]" />
                Expert-Led by Denise Forner
              </span>
              <span className="text-[#383844] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                Structured Video Classroom
              </span>
              <span className="text-[#383844] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#7E9F8E]" />
                Live Q&A & Resources
              </span>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Photo Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Gold Frame Line */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/25 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-2xl border border-white/5 rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#121215] border border-[#272730]">
                <img
                  src={OWNER_IMAGE_URL}
                  alt={`Founder of ${COMMUNITY_URL ? 'AgeWell Blueprint' : ''} - ${FOUNDER_NAME}`}
                  className="w-full h-auto object-cover object-center aspect-[4/5] filter brightness-[1.01] contrast-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom gradient for badge legibility */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0B]/95 via-[#0A0A0B]/40 to-transparent p-5 sm:p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                        Founder & Guide
                      </p>
                      <h3 className="font-serif-cormorant text-2xl font-bold text-white tracking-wide">
                        {FOUNDER_NAME}
                      </h3>
                    </div>
                    
                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-white">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span>Community Open</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Blueprint Feature Pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#121215] border border-[#2E2E38] shadow-2xl rounded-xl p-3.5 flex items-center gap-3 max-w-[260px] animate-in fade-in zoom-in-95 duration-500">
                <div className="w-10 h-10 rounded-lg bg-[#18181D] border border-[#2E2E38] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Grounded Science
                  </p>
                  <p className="text-xs text-[#E0E0E0] font-medium leading-tight">
                    Education over hype. Nuance over dogmatism.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
