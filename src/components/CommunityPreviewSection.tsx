import React, { useState } from 'react';
import { INSIDE_MODULES, COMMUNITY_URL } from '../constants';
import { trackEvent } from '../utils/analytics';
import {
  MessageSquare,
  GraduationCap,
  Video,
  FileText,
  Users,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Search,
  Tag
} from 'lucide-react';

interface CommunityPreviewSectionProps {
  onOpenContact: (source?: string) => void;
}

export const CommunityPreviewSection: React.FC<CommunityPreviewSectionProps> = ({ onOpenContact }) => {
  const [activeTabId, setActiveTabId] = useState<string>(INSIDE_MODULES[0].id);

  const activeModule = INSIDE_MODULES.find((m) => m.id === activeTabId) || INSIDE_MODULES[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'community':
        return <MessageSquare className="w-4 h-4" />;
      case 'classroom':
        return <GraduationCap className="w-4 h-4" />;
      case 'live-qa':
        return <Video className="w-4 h-4" />;
      case 'vault':
        return <FileText className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    trackEvent('preview_tab_switch', { tabId: id });
  };

  return (
    <section id="whats-inside" className="py-20 md:py-28 bg-[#0D0D10] text-[#FAF8F5] relative overflow-hidden bg-blueprint-dark border-y border-[#1F1F28]">
      
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7E9F8E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Skool Portal Preview</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Glimpse Inside the <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">AgeWell Ecosystem.</span>
          </h2>

          <p className="text-base text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
            Explore how our private members interact, learn, and access vetted educational resources without information overwhelm.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
          {INSIDE_MODULES.map((module) => {
            const isActive = module.id === activeTabId;
            return (
              <button
                key={module.id}
                onClick={() => handleTabChange(module.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#0A0A0B] shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#18181D] text-[#9CA3AF] hover:text-white hover:bg-[#22222A] border border-[#2E2E38]'
                }`}
              >
                {getTabIcon(module.id)}
                <span>{module.name}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Interactive Mockup Card Container */}
        <div className="bg-[#121215] border border-[#D4AF37]/20 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Module Details & Key Features */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#D4AF37]/20">
                  {activeModule.badge}
                </span>

                <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                  {activeModule.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {activeModule.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeModule.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons within Module */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('community_preview_join_click', { module: activeModule.id })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg shadow-md transition-colors"
                >
                  <span>Explore on Skool</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenContact(`preview_${activeModule.id}`)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Ask a Question</span>
                </button>
              </div>
            </div>

            {/* Right: Realistic Portal Interface Mockup */}
            <div className="lg:col-span-7 bg-[#0A0A0B] rounded-xl p-5 border border-[#26262F] shadow-inner">
              
              {/* Mockup Topbar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#26262F] text-xs text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-[#6B7280]">skool.com/the-agewell-peptide-blueprint</span>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#18181D] border border-[#2E2E38] text-[11px]">
                    <Search className="w-3 h-3 text-[#6B7280]" />
                    <span className="text-[#6B7280]">Search threads...</span>
                  </div>
                </div>
              </div>

              {/* Mock Feed / Content Cards */}
              <div className="space-y-3">
                {activeModule.mockData.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#121215] hover:bg-[#18181E] rounded-lg p-4 border border-[#26262F] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wide">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#D4AF37]" /> Member Access
                      </span>
                    </div>

                    <h4 className="font-serif-cormorant text-lg font-bold text-white mb-1.5 leading-snug">
                      {item.headline}
                    </h4>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-3">
                      {item.details}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-[11px] text-[#CBD5E1] font-medium">
                        {item.author}
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#0A0A0B] text-[#9CA3AF] border border-[#26262F]"
                          >
                            <Tag className="w-2.5 h-2.5 text-[#D4AF37]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtle member activity ticker */}
              <div className="mt-4 pt-3 border-t border-[#26262F] flex items-center justify-between text-[11px] text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Curated by Denise Forner & Active Community Members</span>
                </div>
                <span className="text-[#D4AF37] font-medium">Weekly Updated</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
