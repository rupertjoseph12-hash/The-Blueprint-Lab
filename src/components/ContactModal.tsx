import React, { useState, useEffect } from 'react';
import { INTEREST_OPTIONS } from '../constants';
import { InterestCategory, LeadSubmission } from '../types';
import { saveLead, trackEvent } from '../utils/analytics';
import { X, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSource = 'modal_direct',
}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<InterestCategory>('Peptides');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      trackEvent('contact_form_open', { source: initialSource });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialSource]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName.trim()) {
      setErrorMsg('Please enter your first name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const lead: LeadSubmission = {
      firstName: firstName.trim(),
      email: email.trim(),
      interest,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      source: initialSource,
    };

    setTimeout(() => {
      saveLead(lead);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#121215] border border-[#2E2E38] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#18181D] hover:bg-[#26262F] flex items-center justify-center text-[#9CA3AF] hover:text-[#F5F5F7] border border-[#2E2E38] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
              Message Received, {firstName}
            </h3>

            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              Thank you for reaching out regarding <strong className="text-[#D4AF37]">{interest}</strong>. Denise&apos;s team has received your information and will be in touch with practical guidance.
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3 h-3 text-[#D4AF37]" />
                <span>Start a Conversation</span>
              </div>
              <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#F5F5F7] leading-tight">
                Connect with Denise&apos;s Team
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
                Tell us what questions or areas of longevity you&apos;d like to explore.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-first-name" className="block text-[11px] font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  First Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="modal-first-name"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-[11px] font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  Email Address <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@domain.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div>
                <label htmlFor="modal-interest" className="block text-[11px] font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  Primary Area of Interest <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  id="modal-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value as InterestCategory)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all cursor-pointer"
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#18181D] text-[#F5F5F7]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-[11px] font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  Optional Question or Note
                </label>
                <textarea
                  id="modal-message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What is the main topic you'd like clarity on?"
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60 group"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#0A0A0B]" />
                      <span>START THE CONVERSATION</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#9CA3AF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7E9F8E]" />
                <span>Your information is private and never shared.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
