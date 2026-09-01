import React, { useState } from 'react';
import { INTEREST_OPTIONS } from '../constants';
import { InterestCategory, LeadSubmission } from '../types';
import { saveLead } from '../utils/analytics';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const LeadCaptureSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<InterestCategory>('Peptides');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName.trim()) {
      setErrorMsg('Please enter your first name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const leadData: LeadSubmission = {
      firstName: firstName.trim(),
      email: email.trim(),
      interest,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      source: 'embedded_lead_section',
    };

    setTimeout(() => {
      saveLead(leadData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFirstName('');
    setEmail('');
    setInterest('Peptides');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0D0D10] border-t border-[#1F1F28] relative overflow-hidden"
    >
      {/* Background blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Path 2: Start a Conversation</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F7] tracking-tight mb-3">
            Not Ready to Enter the Blueprint Yet?
          </h2>

          <p className="text-lg text-[#D4AF37] font-serif italic mb-3">
            &quot;Start with a conversation.&quot;
          </p>

          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto">
            Whether you have a specific question about peptide terminology, want to know if this community fits your situation, or just want to connect with Denise&apos;s team — we are here.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#121215] rounded-2xl border border-[#26262F] shadow-2xl p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif-cormorant text-3xl font-bold text-[#F5F5F7]">
                Thank You, {firstName}.
              </h3>

              <p className="text-base text-[#D1D5DB] max-w-md mx-auto leading-relaxed">
                Denise&apos;s team has received your message regarding <strong className="text-[#D4AF37]">{interest}</strong>. We look forward to connecting with you shortly.
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] uppercase tracking-wider underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300 font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="lead-first-name" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-2">
                    First Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="lead-first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. Eleanor"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-2">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Area of Interest Dropdown */}
              <div>
                <label htmlFor="lead-interest" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-2">
                  What are you most interested in? <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  id="lead-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value as InterestCategory)}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all cursor-pointer"
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#18181D] text-[#F5F5F7]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Message */}
              <div>
                <label htmlFor="lead-message" className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-2">
                  What questions or goals are on your mind? <span className="text-[#6B7280] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="lead-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what topics or questions you are currently navigating..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#18181D] border border-[#2E2E38] text-[#F5F5F7] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  id="lead-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 group"
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

                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <ShieldCheck className="w-4 h-4 text-[#7E9F8E]" />
                  <span>Your email is private. No spam ever.</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
