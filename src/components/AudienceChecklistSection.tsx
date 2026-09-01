import React from 'react';
import { TARGET_PERSONAS } from '../constants';
import { CheckCircle, Users, Check, Sparkles } from 'lucide-react';

export const AudienceChecklistSection: React.FC = () => {
  const checklistItems = [
    'You are curious about peptides and want to understand the real science and terminology.',
    'You want deeper, more thoughtful conversations than 30-second social media clips provide.',
    'You are proactive about healthy aging, metabolic support, and preserving vitality.',
    'You want to learn how protocols, cycling, and stacking are discussed by experienced researchers.',
    'You are tired of piecing fragmented information together from random screenshots and DMs.',
    'You want a respectful community where you can ask questions without judgment or aggressive hype.',
    'You want practical reference guides, lab marker frameworks, and live coaching calls.',
    'You believe that education and informed self-advocacy are key to longevity.',
  ];

  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-[#0D0D10] border-y border-[#1F1F28] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Community Fit</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-4">
            Is This Your Kind of <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">Community?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            You don&apos;t have to be a biohacker or a physician to join. We welcome anyone who wants to approach healthy aging with clarity and intention.
          </p>
        </div>

        {/* 2-Column Layout: Visual Checklist + 4 Persona Archetypes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: "This is for you if..." Checklist Card */}
          <div className="lg:col-span-6 bg-[#121215] rounded-2xl p-7 sm:p-9 border border-[#26262F] shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1F1F28]">
              <div className="w-10 h-10 rounded-xl bg-[#18181D] border border-[#2E2E38] flex items-center justify-center text-[#D4AF37]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-cormorant text-2xl font-bold text-[#F5F5F7]">
                  This is for you if...
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">
                  Check the statements that resonate with you
                </p>
              </div>
            </div>

            <div className="space-y-3.5 mb-8">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Reassuring note */}
            <div className="p-4 rounded-xl bg-[#18181D] border border-[#2E2E38] flex items-center gap-3 text-xs sm:text-sm text-[#E0E0E0] font-medium">
              <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>You don&apos;t need to know everything before you come in. We start where you are.</span>
            </div>
          </div>

          {/* Right: The 4 Member Archetypes */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#F5F5F7]">
                Who You&apos;ll Meet Inside
              </h3>
              <p className="text-xs text-[#9CA3AF] uppercase tracking-wider font-semibold">
                Diverse backgrounds united by a proactive approach to wellness
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {TARGET_PERSONAS.map((persona, idx) => (
                <div
                  key={idx}
                  className="bg-[#121215] p-5 rounded-xl border border-[#26262F] hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#18181D] text-[#D4AF37] border border-[#2E2E38] text-[11px] font-bold uppercase tracking-wider mb-2">
                    {persona.archetype}
                  </div>
                  
                  <p className="text-xs text-[#9CA3AF] mb-2 leading-relaxed">
                    {persona.profile}
                  </p>

                  <div className="pt-2 border-t border-[#1F1F28] text-[11px] text-[#E0E0E0] font-medium">
                    <strong className="text-[#D4AF37]">How Blueprint Helps:</strong> {persona.blueprintBenefit}
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusivity banner */}
            <div className="p-4 rounded-xl bg-[#121215] border border-[#D4AF37]/25 text-white flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  A Safe, Moderated Community
                </p>
                <p className="text-xs text-[#9CA3AF]">
                  Zero spam • Zero aggressive sales • Pure peer and expert education
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
