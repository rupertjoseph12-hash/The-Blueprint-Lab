import React from 'react';
import { FOUNDER_NAME } from '../constants';
import { HelpCircle, Layers, CheckCircle2, MessageCircleQuestion } from 'lucide-react';

interface EmpathySectionProps {
  onOpenContact: (source?: string) => void;
}

export const EmpathySection: React.FC<EmpathySectionProps> = ({ onOpenContact }) => {
  const painPoints = [
    {
      title: 'Conflicting Information',
      desc: 'One podcast tells you one thing, a blog says the opposite, and forum posts offer contradictory advice.',
    },
    {
      title: 'Feeling Dismissed or Rushed',
      desc: 'Standard appointments are often too short to address complex longevity or protocol questions thoughtfully.',
    },
    {
      title: 'Scattered Screenshots & DMs',
      desc: 'Trying to piece together health protocols from social media clips and unvetted group chats.',
    },
    {
      title: 'Navigating Alone in the Dark',
      desc: 'Wanting to make intelligent, proactive choices for your future self without a supportive sounding board.',
    },
  ];

  return (
    <section
      id="empathy-section"
      className="py-20 md:py-28 bg-[#0D0D10] border-y border-[#1F1F28] relative overflow-hidden"
    >
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Reality of Modern Wellness</span>
          </div>
          
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-5">
            You Were Never Meant to <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">Figure It All Out Alone.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            The wellness world is full of information — but information without context can leave you more confused than when you started.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Denise's Quote Card + Core Friction Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Denise's Quote Card in Deep Dark Luxury Styling */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#121215] text-[#F5F5F7] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#D4AF37]/25">
              
              {/* Quote Mark Accent */}
              <div className="font-serif-cormorant text-6xl leading-none text-[#D4AF37]/30 -mb-4 select-none">
                “
              </div>

              <blockquote className="space-y-4 text-base sm:text-lg font-light leading-relaxed text-[#E0E0E0] mb-8">
                <p>
                  I have sat across from enough clients to know that most people coming into this space are not here because they want to look better in a swimsuit.
                </p>
                <p className="text-[#F5F5F7] font-normal italic">
                  They are here because they are exhausted. Because something feels off. Because nobody has been able to tell them why.
                </p>
                <p>
                  Because they have been dismissed, undertreated, or simply left alone to figure it out.
                </p>
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-cormorant text-xl font-bold text-white tracking-wide">
                    {FOUNDER_NAME}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                    Educator & Community Founder
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#18181D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>

          {/* Right: The Breakdown of Friction vs The Blueprint Solution */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-[#121215] rounded-xl p-5 border border-[#26262F] shadow-xs hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#18181D] border border-[#2E2E38] flex items-center justify-center text-[#D4AF37] mb-3">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-serif-cormorant text-lg font-bold text-[#F5F5F7] mb-1.5">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* The Resolution Callout */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-xl p-5 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#F5F5F7] mb-1">
                  The AgeWell Blueprint was created for exactly this reason.
                </p>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  To provide you with a respectful, structured sanctuary where questions can be explored, terminology is simplified, and you can connect with people on a similar journey.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
