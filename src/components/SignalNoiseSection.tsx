import React from 'react';
import { COMPARISON_DATA, COMMUNITY_URL } from '../constants';
import { trackEvent } from '../utils/analytics';
import { Radio, XCircle, CheckCircle, ArrowUpRight, MessageSquare } from 'lucide-react';

interface SignalNoiseSectionProps {
  onOpenContact: (source?: string) => void;
}

export const SignalNoiseSection: React.FC<SignalNoiseSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="signal-vs-noise" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The AgeWell Difference</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-4">
            Less Noise. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">More Signal.</span>
          </h2>

          <p className="text-base text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
            Instead of collecting hundreds of screenshots, bookmarks, and conflicting opinions across social media, have one structured place to return to.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto bg-[#121215] rounded-2xl border border-[#26262F] shadow-2xl overflow-hidden mb-12">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 sm:grid-cols-12 bg-[#18181D] border-b border-[#26262F] text-white p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <div className="sm:col-span-4 text-[#D4AF37]">The Challenge</div>
            <div className="hidden sm:block sm:col-span-4 text-[#9CA3AF]">The Typical Internet Experience</div>
            <div className="hidden sm:block sm:col-span-4 text-[#D4AF37]">The AgeWell Blueprint</div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#1F1F28]">
            {COMPARISON_DATA.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-12 p-5 sm:p-6 gap-4 sm:gap-6 items-center hover:bg-[#181820] transition-colors"
              >
                {/* Aspect Label */}
                <div className="sm:col-span-4 font-serif-cormorant text-xl font-bold text-[#F5F5F7]">
                  {row.aspect}
                </div>

                {/* Noise (Internet Confusion) */}
                <div className="sm:col-span-4 bg-[#0A0A0B] sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-[#26262F] sm:border-0">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#9CA3AF]">
                    <XCircle className="w-4 h-4 text-[#EF4444]/70 flex-shrink-0 mt-0.5" />
                    <span>{row.noise}</span>
                  </div>
                </div>

                {/* Signal (The Blueprint) */}
                <div className="sm:col-span-4 bg-[#D4AF37]/10 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-[#D4AF37]/20 sm:border-0">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F5F7] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{row.signal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action within section */}
        <div className="max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('signal_section_join_click')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-md transition-all group"
          >
            <span>JOIN THE BLUEPRINT</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => onOpenContact('signal_section_contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 rounded-xl transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>ASK A QUESTION</span>
          </button>
        </div>

      </div>
    </section>
  );
};
