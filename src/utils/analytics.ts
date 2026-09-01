import { LeadSubmission } from '../types';

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Dispatch custom DOM event for external analytics scripts (GTM, Meta Pixel, Skool, etc.)
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('agewell_analytics', {
      detail: { eventName, properties, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(event);

    // Also forward to dataLayer if present
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...properties,
      });
    }

    console.log(`[Analytics Event] ${eventName}:`, properties || {});
  }
}

export function saveLead(lead: LeadSubmission): void {
  try {
    const existingRaw = localStorage.getItem('agewell_leads');
    const leads: LeadSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    leads.push(lead);
    localStorage.setItem('agewell_leads', JSON.stringify(leads));
    trackEvent('contact_form_submit', {
      interest: lead.interest,
      source: lead.source,
      hasMessage: Boolean(lead.message),
    });
  } catch (error) {
    console.error('Failed to save lead to local storage:', error);
  }
}

export function getSavedLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem('agewell_leads');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
