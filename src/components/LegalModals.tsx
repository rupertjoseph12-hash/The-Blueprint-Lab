import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';
import { FOUNDER_NAME } from '../constants';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Lock className="w-5 h-5 text-[#D4AF37]" />,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              <p>
                At <strong>The AgeWell Blueprint</strong>, we deeply respect your privacy and confidentiality. We only collect the minimal personal data necessary to process your inquiries and facilitate your participation in our educational community.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                1. Information We Collect
              </h4>
              <p className="text-[#9CA3AF]">
                When you submit an inquiry form on this site, we collect your name, email address, selected interest category, and any message you voluntarily provide.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                2. How We Use Your Information
              </h4>
              <p className="text-[#9CA3AF]">
                Your information is used solely to respond to your specific inquiries, provide educational updates, and help guide your exploration of the AgeWell Blueprint community. We never sell, rent, or trade your personal information to third-party data brokers.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                3. Third-Party Platforms
              </h4>
              <p className="text-[#9CA3AF]">
                Our community is hosted on Skool. When joining the community, you are subject to Skool&apos;s standard terms and privacy policies.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Terms of Use',
          icon: <FileText className="w-5 h-5 text-[#D4AF37]" />,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              <p>
                Welcome to <strong>The AgeWell Blueprint</strong>. By accessing this website or participating in our private educational community, you agree to adhere to these Terms of Use.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                1. Educational Purpose Only
              </h4>
              <p className="text-[#9CA3AF]">
                All content, videos, live Q&A calls, written guides, and community discussions are provided solely for educational and informational purposes. No content constitutes medical advice, clinical diagnosis, or prescriptive treatment.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                2. Community Code of Conduct
              </h4>
              <p className="text-[#9CA3AF]">
                Members are expected to treat one another with dignity, empathy, and respect. Commercial solicitations, unauthorized advertising, spam, aggressive dogmatism, and harassment will result in immediate removal from the community.
              </p>
              <h4 className="font-bold text-[#F5F5F7] uppercase text-xs tracking-wider">
                3. Intellectual Property
              </h4>
              <p className="text-[#9CA3AF]">
                Curriculum materials, proprietary frameworks, and videos authored by {FOUNDER_NAME} and The AgeWell Blueprint remain our intellectual property and may not be reproduced without explicit written consent.
              </p>
            </div>
          ),
        };
      case 'disclaimer':
      default:
        return {
          title: 'Health & Medical Disclaimer',
          icon: <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              <div className="p-3.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#E5C158] text-xs">
                <strong>IMPORTANT NOTICE:</strong> Please review this medical disclaimer carefully before interacting with any content or participating in discussions.
              </div>
              <p>
                The information provided on this website, within The AgeWell Blueprint community on Skool, and across associated communications is strictly for general educational and informational purposes.
              </p>
              <p>
                <strong>No Doctor-Patient Relationship:</strong> Interaction with {FOUNDER_NAME}, community moderators, or other members does not constitute medical care, healthcare provider-patient relationships, diagnosis, or treatment.
              </p>
              <p className="text-[#9CA3AF]">
                <strong>Always Consult a Professional:</strong> You must not rely on the information provided as an alternative to medical advice from your physician or other professional healthcare providers. Never disregard professional medical advice or delay seeking it because of something you have read on this website or in the community.
              </p>
              <p className="text-[#9CA3AF]">
                <strong>No Guarantees or Endorsements:</strong> The AgeWell Blueprint does not sell prescription pharmaceuticals or provide individualized dosing regimens. References to specific peptides, protocols, or studies are for research and educational discourse only.
              </p>
            </div>
          ),
        };
    }
  };

  const content = getContent();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#121215] border border-[#2E2E38] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1F1F28] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#18181D] border border-[#2E2E38]">
              {content.icon}
            </div>
            <h3 className="font-serif-cormorant text-2xl font-bold text-[#F5F5F7]">
              {content.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#18181D] hover:bg-[#26262F] flex items-center justify-center text-[#9CA3AF] hover:text-[#F5F5F7] border border-[#2E2E38] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-2 space-y-4 flex-1">
          {content.text}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-[#1F1F28] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#D4AF37] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
