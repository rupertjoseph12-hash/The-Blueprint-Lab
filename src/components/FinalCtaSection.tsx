import React from 'react';
import { Logo } from './Logo';
import { COMMUNITY_URL } from '../constants';
import { trackEvent } from '../utils/analytics';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenContact: (source?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  const handleJoinClick = () => {
    trackEvent('final_cta_join_click');
  };

  const handleContactClick = () => {
    trackEvent('final_cta_contact_click');
    onOpenContact('final_cta_section');
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#08080A] text-white overflow-hidden border-t border-[#1F1F28]">
      
      {/* Subtle organic light orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5E796D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Watermark Logo Above Headline */}
        <div className="flex justify-center mb-8">
          <Logo variant="light" size="lg" />
        </div>

        {/* Headline */}
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
          Don&apos;t Just Age. <br />
          <span className="italic font-normal text-[#D4AF37]">Age With Intention.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Explore the evidence-informed conversations, structured classroom modules, and supportive community behind The AgeWell Blueprint.
        </p>

        {/* Dual Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {/* Primary High-Intent: Skool */}
          <a
            id="final-enter-blueprint-btn"
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-2xl transition-all duration-200 group"
          >
            <span>ENTER THE BLUEPRINT</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary Low/Mid-Intent: Contact Form */}
          <button
            id="final-start-conversation-btn"
            onClick={handleContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>START A CONVERSATION</span>
          </button>
        </div>

        {/* Subtle Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#9CA3AF] pt-6 border-t border-[#1F1F28] max-w-xl mx-auto">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7E9F8E]" />
            Private & Moderated Skool Community
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Regular Live Q&A Calls with Denise
          </span>
        </div>

      </div>
    </section>
  );
};
