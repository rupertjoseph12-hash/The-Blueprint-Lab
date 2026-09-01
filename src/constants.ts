import { PillarItem, InsideTabItem, ComparisonRow, PersonaItem, InterestCategory } from './types';

export const COMMUNITY_URL = 'https://www.skool.com/the-agewell-peptide-blueprint';
export const OWNER_IMAGE_URL = 'https://cdn.phototourl.com/free/2026-09-01-de099197-700b-4d07-a90b-71b63cbb12d1.png';
export const BRAND_NAME = 'The AgeWell Blueprint';
export const FOUNDER_NAME = 'Denise Forner';

export const INTEREST_OPTIONS: InterestCategory[] = [
  'Peptides',
  'Healthy Aging',
  'Hormone Optimization',
  'GLP-1 Education',
  'Longevity',
  'Community',
  'General Question',
];

export const PILLARS: PillarItem[] = [
  {
    id: 'peptides',
    title: 'Peptide Education',
    subtitle: 'Demystifying the science & terminology',
    description: 'Understand the biological pathways, naming conventions, and evidence-aware conversations surrounding peptides without confusion or hype.',
    topics: ['Cellular signaling pathways', 'Terminology & classification', 'Reconstitution principles', 'Storage & purity concepts'],
    icon: 'Dna',
  },
  {
    id: 'protocols',
    title: 'Protocols & Discussion',
    subtitle: 'Nuanced, evidence-aware exploration',
    description: 'Explore how protocols are thoughtfully discussed in real-world contexts, understanding cycles, combinations, and questions to ask healthcare providers.',
    topics: ['Cycling & rest periods', 'Stacking considerations', 'Tracking biomarker metrics', 'Sourcing verification fundamentals'],
    icon: 'Compass',
  },
  {
    id: 'hormones',
    title: 'Hormone & Metabolic Wellness',
    subtitle: 'From GLP-1 support to hormone balance',
    description: 'Dive into grounded education covering metabolic health, GLP-1 companion strategies, energy preservation, and body composition throughout midlife and beyond.',
    topics: ['GLP-1 lifestyle integration', 'Lean muscle preservation', 'Hormonal shift navigation', 'Metabolic flexibility'],
    icon: 'Activity',
  },
  {
    id: 'longevity',
    title: 'Longevity & Healthy Aging',
    subtitle: 'Approaching vitality with intention',
    description: 'Think beyond a number on a birthday cake. Learn how sleep, mitochondrial support, circadian rhythms, and proactive health align with modern science.',
    topics: ['Mitochondrial health', 'Inflammaging reduction', 'Cognitive resilience', 'Proactive longevity habits'],
    icon: 'Sparkles',
  },
];

export const INSIDE_MODULES: InsideTabItem[] = [
  {
    id: 'community',
    name: 'Community Feed',
    badge: 'Real-Time Discussions',
    title: 'Ask questions, share experiences, and learn together.',
    description: 'A moderated, respectful haven where members ask nuanced questions without getting dismissed or flooded with conflicting social media chatter.',
    features: [
      'Searchable threads categorized by topic and peptide type',
      'Direct input and moderation from Denise Forner',
      'Daily experience sharing from members on similar wellness journeys',
      'Safe, spam-free space focused on constructive education'
    ],
    mockData: [
      {
        category: 'Member Discussion',
        headline: 'Understanding BPC-157 vs TB-500: Key differences in tissue recovery discussions',
        author: 'Sarah M. (Member)',
        details: 'Shared notes from my discussion with my functional practitioner on recovery pathways...',
        tags: ['Recovery', 'Peptide 101', 'Discussion']
      },
      {
        category: 'Ask Denise',
        headline: 'Navigating nausea and muscle loss on GLP-1s: Best companion nutrition protocols',
        author: 'Denise Forner (Founder)',
        details: 'Pinning key strategies for adequate protein distribution and electrolyte timing...',
        tags: ['GLP-1 Support', 'Metabolic', 'Guidance']
      }
    ]
  },
  {
    id: 'classroom',
    name: 'The Classroom',
    badge: 'Structured Learning',
    title: 'Step-by-step educational modules organized by depth.',
    description: 'From absolute fundamentals to advanced protocol discussions, progress through structured video lessons, written summaries, and downloadable reference guides.',
    features: [
      'Peptide Foundations: Terminology, safety concepts, and how they work',
      'The GLP-1 Companion Guide: Protecting lean mass and metabolic health',
      'Hormone Optimization Essentials: Questions to ask your clinician',
      'Longevity Blueprint: Sleep, mitochondrial support, and daily habits'
    ],
    mockData: [
      {
        category: 'Module 1 • Foundations',
        headline: 'Decoding Peptide Terminology: Amino Acids, Chains, and Receptor Agonists',
        author: 'Curriculum Level 1',
        details: '6 video modules • 4 PDF cheat sheets • Self-paced reference guide',
        tags: ['Core Fundamentals', 'Beginner Friendly']
      },
      {
        category: 'Module 3 • Protocols',
        headline: 'Cycling Frameworks: Why "More" is Rarely Better in Longevity',
        author: 'Curriculum Level 2',
        details: 'Comprehensive breakdown of receptor sensitivity, washouts, and biological rest.',
        tags: ['Protocol Deep Dive', 'Intermediate']
      }
    ]
  },
  {
    id: 'live-qa',
    name: 'Live Q&A Sessions',
    badge: 'Direct Access',
    title: 'Interactive live calls with Denise and guest experts.',
    description: 'Bring your questions to recurring live sessions. Hear practical breakdowns of emerging research, case studies, and common protocol hurdles in real time.',
    features: [
      'Interactive live video calls with open Q&A sessions',
      'Full timestamped video replays stored in your private member portal',
      'Pre-submit questions if you cannot attend live',
      'Guest discussions with health and longevity researchers'
    ],
    mockData: [
      {
        category: 'Upcoming Live Session',
        headline: 'Monthly Blueprint Round Table: Fall Protocol Transitions & Immune Support',
        author: 'Hosted by Denise Forner',
        details: 'Interactive Q&A • Live chat • Community protocol review session',
        tags: ['Live Call', 'Interactive', 'Replays Included']
      }
    ]
  },
  {
    id: 'vault',
    name: 'The Vault',
    badge: 'Resource Archive',
    title: 'Ever-expanding library of reference sheets and guides.',
    description: 'Instant access to vetting checklists, reconstitution calculation charts, lab testing guides, and vetted question frameworks for your doctor visits.',
    features: [
      'Printable reconstitution and math calculation worksheets',
      'Doctor Consultation Cheat Sheets: What lab markers to request',
      'Peptide Glossary: 30+ commonly discussed peptides summarized',
      'Curated scientific literature and clinical trial directories'
    ],
    mockData: [
      {
        category: 'Printable Resource',
        headline: 'The Clinical Conversation Blueprint: How to Talk with Your Doctor',
        author: 'Downloadable PDF',
        details: 'A 12-point guide to discussing hormone panels and peptide research with your physician.',
        tags: ['Doctor Guide', 'Printable', 'PDF']
      },
      {
        category: 'Reference Tool',
        headline: 'Comprehensive Peptide Reference Matrix (Indications & Safety Profiles)',
        author: 'Interactive Vault Doc',
        details: 'Categorized by longevity, mitochondrial, tissue support, and metabolic pathways.',
        tags: ['Glossary', 'Reference Sheet']
      }
    ]
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: 'Information Source',
    noise: 'Scattered TikTok videos, Reddit rumors & conflicting screenshots',
    signal: 'Curated, structured educational modules guided by Denise Forner'
  },
  {
    aspect: 'Community Dynamic',
    noise: 'Anonymous forums filled with aggressive hype or fear-mongering',
    signal: 'Respectful, supportive private community of adults focused on healthy aging'
  },
  {
    aspect: 'Depth & Quality',
    noise: 'Fragmented bits of information leaving you more confused',
    signal: 'One organized ecosystem connecting theory, practical context & live Q&As'
  },
  {
    aspect: 'Tone & Ethics',
    noise: 'Unrealistic miracle promises, fake "before & afters" and high-pressure sales',
    signal: 'Evidence-aware, grounded conversations respecting individuality and health safety'
  }
];

export const TARGET_PERSONAS: PersonaItem[] = [
  {
    archetype: 'The Curious Beginner',
    profile: 'You’ve heard about peptides or GLP-1s, but the scientific terms feel intimidating.',
    painPoint: 'Feeling overwhelmed by where to start and scared of making mistakes.',
    blueprintBenefit: 'Step-by-step foundation lessons that explain the basics in plain, approachable English.'
  },
  {
    archetype: 'The Frustrated Seeker',
    profile: 'You feel that your energy, metabolism, or vitality has changed, but standard advice fell flat.',
    painPoint: 'Feeling dismissed or left alone to figure things out without guidance.',
    blueprintBenefit: 'A welcoming space where your questions are taken seriously and you gain the knowledge to advocate for yourself.'
  },
  {
    archetype: 'The Health-Conscious Adult',
    profile: 'You are in your 40s, 50s, 60s+ and want to take proactive ownership of your aging trajectory.',
    painPoint: 'Not wanting to wait until a health crisis occurs before learning about longevity tools.',
    blueprintBenefit: 'Actionable protocols on sleep, mitochondrial vitality, cellular recovery, and metabolic health.'
  },
  {
    archetype: 'The Experienced Researcher',
    profile: 'You already know the terminology, but lack a high-caliber community for thoughtful discussion.',
    painPoint: 'Tired of wading through beginner noise or aggressive bro-science in public forums.',
    blueprintBenefit: 'Sophisticated roundtables, advanced protocol breakdowns, and evidence-informed discussions.'
  }
];

export const FAQS = [
  {
    q: 'What is The AgeWell Blueprint?',
    a: 'The AgeWell Blueprint is an expert-led private educational community created by Denise Forner. It provides clear, science-forward education, structured resources, live Q&A calls, and a collaborative discussion space around peptides, protocols, hormone optimization, GLP-1 support, and healthy aging.'
  },
  {
    q: 'Do I need prior knowledge about peptides to join?',
    a: 'Not at all. The community is thoughtfully structured to welcome both curious beginners starting with foundational terminology and experienced researchers looking for deeper, nuanced protocol discussions.'
  },
  {
    q: 'Where is the community hosted?',
    a: 'The community is hosted on the Skool platform, giving you seamless web and mobile app access to the community discussion feed, structured video classroom, calendar of live events, and the resource vault in one place.'
  },
  {
    q: 'Does this community provide medical prescriptions or individual medical advice?',
    a: 'No. The AgeWell Blueprint is strictly an educational community designed to empower you with knowledge, research, and intelligent questions for your personal healthcare team. We never diagnose, treat, prescribe, or provide individual medical advice.'
  },
  {
    q: 'What if I have questions before deciding to join?',
    a: 'We encourage you to use our "Start a Conversation" contact form on this page. Denise’s team will review your area of interest and connect with you to help you determine if the Blueprint is the right fit.'
  }
];
