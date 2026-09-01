import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMMUNITY_URL } from '../constants';
import { trackEvent } from '../utils/analytics';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleJoinClick = (source: string) => {
    trackEvent('join_blueprint_click', { source, location: 'navbar' });
  };

  const handleContactClick = (source: string) => {
    setMobileMenuOpen(false);
    onOpenContact(source);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#26262F] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#0A0A0B]/60 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
            aria-label="The AgeWell Blueprint Home"
          >
            <Logo variant="light" size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#9CA3AF]">
            <button
              onClick={() => handleNavClick('the-blueprint')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              The Blueprint
            </button>
            <button
              onClick={() => handleNavClick('whats-inside')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              What&apos;s Inside
            </button>
            <button
              onClick={() => handleNavClick('meet-denise')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              Meet Denise
            </button>
            <button
              onClick={() => handleNavClick('who-its-for')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              Who It&apos;s For
            </button>
            <button
              onClick={() => handleNavClick('signal-vs-noise')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              Signal vs Noise
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#F5F5F7] transition-colors py-1 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Dual CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Low-intent / question CTA */}
            <button
              id="nav-ask-question-btn"
              onClick={() => handleContactClick('navbar_secondary_cta')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] rounded-lg border border-[#2E2E38] hover:border-[#D4AF37]/40 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Ask a Question</span>
            </button>

            {/* High-intent direct community CTA */}
            <a
              id="nav-enter-community-btn"
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleJoinClick('navbar_primary_cta')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg shadow-md hover:shadow-[#D4AF37]/20 transition-all group"
            >
              <span>Enter Community</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleContactClick('mobile_nav_quick_contact')}
              className="sm:hidden inline-flex items-center justify-center p-2 text-xs font-medium text-[#F5F5F7] bg-[#18181D] rounded-lg border border-[#2E2E38]"
              aria-label="Ask a Question"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#F5F5F7] hover:bg-[#18181D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#26262F] bg-[#0E0E12] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 pt-2 border-t border-[#1F1F28]">
            <button
              onClick={() => handleNavClick('the-blueprint')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              The Blueprint
            </button>
            <button
              onClick={() => handleNavClick('whats-inside')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              What&apos;s Inside
            </button>
            <button
              onClick={() => handleNavClick('meet-denise')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              Meet Denise
            </button>
            <button
              onClick={() => handleNavClick('who-its-for')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              Who It&apos;s For
            </button>
            <button
              onClick={() => handleNavClick('signal-vs-noise')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              Signal vs Noise
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-3 py-2 text-base font-medium text-[#E0E0E0] hover:bg-[#181820] hover:text-white rounded-md"
            >
              FAQ
            </button>
          </div>

          <div className="pt-2 border-t border-[#1F1F28] flex flex-col gap-2.5">
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleJoinClick('mobile_menu_primary')}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#0A0A0B] bg-[#D4AF37] rounded-lg shadow-sm"
            >
              <span>ENTER THE COMMUNITY</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0A0B]" />
            </a>

            <button
              onClick={() => handleContactClick('mobile_menu_secondary')}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#F5F5F7] bg-[#18181D] hover:bg-[#22222A] rounded-lg border border-[#2E2E38]"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>START A CONVERSATION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
