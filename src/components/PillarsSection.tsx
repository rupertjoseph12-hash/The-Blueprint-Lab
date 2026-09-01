import React from 'react';
import { PILLARS } from '../constants';
import { Dna, Compass, Activity, Sparkles, Check, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillar?: (id: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna':
        return <Dna className="w-6 h-6 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="the-blueprint" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            Core Curriculum & Discussion Pillars
          </p>
          
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-4">
            One Place for the <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">Conversations That Matter.</span>
          </h2>

          <p className="text-base text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
            Instead of wandering through hundreds of disconnected forums, our education is organized into four foundational pillars of modern health and vitality.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className="group bg-[#121215] hover:bg-[#18181F] rounded-2xl p-7 border border-[#26262F] hover:border-[#D4AF37]/50 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D4AF37] transition-colors" />

              <div>
                {/* Pillar Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#18181D] border border-[#2E2E38] flex items-center justify-center shadow-xs">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-serif-cormorant text-xl font-bold text-[#383844] group-hover:text-[#D4AF37] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-cormorant text-2xl font-bold text-[#F5F5F7] mb-2 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Topics list */}
              <div className="pt-4 border-t border-[#1F1F28]">
                <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
                  Key Discussion Topics:
                </p>
                <ul className="space-y-1.5">
                  {pillar.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-xs text-[#D1D5DB] gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
