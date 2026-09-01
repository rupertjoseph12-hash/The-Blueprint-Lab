export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  icon: string;
}

export interface InsideTabItem {
  id: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  mockData: {
    category: string;
    headline: string;
    author: string;
    details: string;
    tags: string[];
  }[];
}

export interface ComparisonRow {
  aspect: string;
  noise: string;
  signal: string;
}

export interface PersonaItem {
  archetype: string;
  profile: string;
  painPoint: string;
  blueprintBenefit: string;
}

export type InterestCategory =
  | 'Peptides'
  | 'Healthy Aging'
  | 'Hormone Optimization'
  | 'GLP-1 Education'
  | 'Longevity'
  | 'Community'
  | 'General Question';

export interface LeadSubmission {
  firstName: string;
  email: string;
  interest: InterestCategory;
  message?: string;
  timestamp: string;
  source: string;
}
