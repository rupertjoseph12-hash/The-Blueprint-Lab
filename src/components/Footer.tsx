import React from 'react';
import { Logo } from './Logo';
import { COMMUNITY_URL, FOUNDER_NAME } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: (source?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenLegal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050507] text-[#9CA3AF] border-t border-[#1F1F28] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1F1F28]">
          
          {/* Col 1: Brand & Overview */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Science-forward education, community, and conversations around peptides, longevity, hormone optimization, and healthy aging.
            </p>
            <p className="text-xs text-[#6B7280]">
              Created and curated by <strong className="text-[#D4AF37]">{FOUNDER_NAME}</strong>.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5F5F7]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('the-blueprint')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Core Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('whats-inside')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Inside the Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('meet-denise')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Meet Denise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Who It&apos;s For
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5F5F7]">
              Get Started
            </h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Join the official Skool community or initiate a direct conversation.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#D4AF37] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-colors shadow-md group"
              >
                <span>Enter Community on Skool</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => onOpenContact('footer_cta')}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#18181D] text-[#F5F5F7] text-xs font-medium hover:bg-[#22222A] border border-[#2E2E38] hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
              >
                <span>Start a Conversation</span>
              </button>
            </div>
          </div>

        </div>

        {/* Educational Medical Disclaimer */}
        <div className="py-8 border-b border-[#1F1F28]">
          <div className="p-4 rounded-xl bg-[#121215] border border-[#26262F] text-[11px] sm:text-xs leading-relaxed text-[#6B7280]">
            <p className="font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
              Educational & Informational Disclaimer:
            </p>
            <p>
              Information provided through this website, The AgeWell Blueprint community, and associated communications is strictly for educational, informational, and community discussion purposes. It is not intended as medical advice, diagnosis, treatment, or prescriptive recommendation, nor does it establish a doctor-patient relationship. Always seek the direct guidance of a licensed, qualified medical healthcare professional before initiating, modifying, or discontinuing any peptide, hormone, pharmaceutical, or nutritional regimen.
            </p>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>
            © {new Date().getFullYear()} The AgeWell Blueprint. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Health Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
