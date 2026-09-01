import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EmpathySection } from './components/EmpathySection';
import { PillarsSection } from './components/PillarsSection';
import { CommunityPreviewSection } from './components/CommunityPreviewSection';
import { FounderSection } from './components/FounderSection';
import { AudienceChecklistSection } from './components/AudienceChecklistSection';
import { SignalNoiseSection } from './components/SignalNoiseSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactModalSource, setContactModalSource] = useState('global');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleOpenContact = (source: string = 'global') => {
    setContactModalSource(source);
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B] text-[#E0E0E0]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* 2. Emotional Empathy Section */}
        <EmpathySection onOpenContact={handleOpenContact} />

        {/* 3. Core Pillars Curriculum */}
        <PillarsSection />

        {/* 4. Inside the Community Interactive Preview */}
        <CommunityPreviewSection onOpenContact={handleOpenContact} />

        {/* 5. Meet Denise / Founder Story */}
        <FounderSection onOpenContact={handleOpenContact} />

        {/* 6. Who This Is For Checklist */}
        <AudienceChecklistSection />

        {/* 7. Signal vs Noise Comparison */}
        <SignalNoiseSection onOpenContact={handleOpenContact} />

        {/* 8. Embedded Lead Capture & Question Form */}
        <LeadCaptureSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection onOpenContact={handleOpenContact} />

        {/* 10. Final Dramatic Call to Action */}
        <FinalCtaSection onOpenContact={handleOpenContact} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenContact={handleOpenContact} onOpenLegal={handleOpenLegal} />

      {/* Global Interactive Contact / Lead Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        initialSource={contactModalSource}
      />

      {/* Global Legal & Medical Disclaimer Modals */}
      <LegalModal
        type={legalModalType}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
