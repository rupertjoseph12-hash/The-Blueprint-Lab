import React from 'react';
import { OWNER_IMAGE_URL, FOUNDER_NAME, COMMUNITY_URL } from '../constants';
import { trackEvent } from '../utils/analytics';
import { ArrowUpRight, MessageSquare, HeartHandshake, BookOpen, Compass, Shield } from 'lucide-react';

interface FounderSectionProps {
  onOpenContact: (source?: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="meet-denise" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait with Sophisticated Framing */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Accent Border & Offset Background */}
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl transform translate-x-3 translate-y-3 -z-10" />
              <div className="absolute -inset-2 border border-[#D4AF37]/25 rounded-2xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#121215] border border-[#272730]">
                <img
                  src={OWNER_IMAGE_URL}
                  alt={`Portrait of ${FOUNDER_NAME}`}
                  className="w-full h-auto object-cover object-center aspect-[4/5] filter brightness-[1.01]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0B]/95 via-[#0A0A0B]/40 to-transparent p-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Community Founder & Guide
                  </p>
                  <h3 className="font-serif-cormorant text-2xl font-bold text-white">
                    {FOUNDER_NAME}
                  </h3>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#121215] border border-[#2E2E38] shadow-2xl rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#18181D] border border-[#2E2E38] flex items-center justify-center text-[#D4AF37]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#F5F5F7] uppercase tracking-wider">
                    Client-Centered Guide
                  </p>
                  <p className="text-[11px] text-[#9CA3AF]">
                    Listening, educating & advocating
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Denise's Personal Philosophy & Approach */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Behind the Blueprint</span>
            </div>

            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-2">
              Meet Denise.
            </h2>

            <p className="text-lg text-[#D4AF37] font-serif italic mb-6">
              &quot;Because health is personal.&quot;
            </p>

            <div className="space-y-4 text-base text-[#D1D5DB] leading-relaxed mb-8">
              <p>
                Having spent years working closely with clients, I recognized a recurring pattern: most people seeking longevity and peptide information aren&apos;t looking for quick hacks or empty trends.
              </p>
              <p className="text-[#9CA3AF]">
                They are searching because something in their body feels different, and they are tired of navigating fragmented advice across twenty open browser tabs, unvetted forums, and rushed appointments.
              </p>
              <p>
                I founded <strong className="text-[#F5F5F7]">The AgeWell Blueprint</strong> not to replace your healthcare team, but to give you a credible, respectful sanctuary where you can demystify the science, ask intelligent questions, and connect with people walking a similar path.
              </p>
            </div>

            {/* Core Values / Denise's Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 pt-4 border-t border-[#1F1F28]">
              <div className="p-3.5 rounded-xl bg-[#121215] border border-[#26262F]">
                <BookOpen className="w-4 h-4 text-[#D4AF37] mb-1.5" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                  The Educator
                </h4>
                <p className="text-xs text-[#9CA3AF]">
                  Translating complex biological concepts into clear, practical frameworks.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121215] border border-[#26262F]">
                <Compass className="w-4 h-4 text-[#D4AF37] mb-1.5" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                  The Guide
                </h4>
                <p className="text-xs text-[#9CA3AF]">
                  Helping you ask better questions and advocate for your health choices.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121215] border border-[#26262F]">
                <Shield className="w-4 h-4 text-[#7E9F8E] mb-1.5" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                  Community Steward
                </h4>
                <p className="text-xs text-[#9CA3AF]">
                  Fostering a supportive, hype-free space grounded in safety and respect.
                </p>
              </div>
            </div>

            {/* Signature & Dual CTAs */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
              <div className="font-serif-cormorant text-2xl font-bold italic text-[#D4AF37]">
                — Denise
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('founder_section_join_click')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg shadow-md transition-all group"
                >
                  <span>GET TO KNOW THE BLUEPRINT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => onOpenContact('founder_section_contact')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Start a Conversation</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
