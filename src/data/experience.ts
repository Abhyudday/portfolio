export type ExperienceItem = {
  id: string
  title: string
  company: string
  /** Short italic line under the title (e.g. “Web3 creative agency”) */
  tagline: string
  dateRange: string
  duration?: string
  location: string
  description: string[]
  skills?: string[]
  logoUrl?: string
  domain?: string
  companyUrl?: string
  /** Optional scale for logo in timeline (e.g. 1.2) */
  logoZoom?: number
  accent: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'polycop',
    title: 'Customer Support Lead & Technical Writer',
    company: 'Polycop',
    tagline: 'Backed by Polymarket',
    dateRange: 'Jan 2026 – Present',
    location: 'Remote',
    description: [
      'Lead customer support for a prediction-markets product: triage inbound issues, reproduce bugs with clear steps, and coordinate with engineering on fixes so users get timely, accurate answers.',
      'Own technical documentation end to end — user-facing help articles, onboarding flows, and internal runbooks — turning complex trading and market mechanics into plain language.',
      'Partner with product to keep docs and macros aligned with releases; reduce repeat tickets by improving self-serve content and maintaining a consistent support voice across channels.',
    ],
    domain: 'polymarket.com',
    logoUrl: '/logos/polycop.jpeg',
    accent: '#6366f1',
  },
  {
    id: 'dsignrz',
    title: 'Founder',
    company: 'DSIGNRZ',
    tagline: 'Web3 creative agency',
    dateRange: 'Mar 2021 – Present',
    location: 'Noida, India',
    description: [
      'Founded a Web3 creative agency and delivered 200+ projects for crypto and startup clients.',
      'Maintained an average 4.6, building strong client trust and repeat work.',
      'Served global clients with 48% international client share, including projects for pump.fun, validators.com, cets.wtf, and cryptoclass.link.',
    ],
    domain: 'dsignrz.com',
    logoUrl: '/logos/dsignrs.jpg',
    accent: '#8b5cf6',
  },
  {
    id: 'buybit',
    title: 'Founding Engineer',
    company: 'BuyBit',
    tagline: 'Telegram P2P trading bot (Russian market)',
    dateRange: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    description: [
      'Built a Telegram-based P2P crypto trading bot designed for the Russian market.',
      'Developed escrow integration to enable secure and conflict-free transactions between users.',
      'Created a multilingual bot with a clean, simple, and user-friendly interface.',
    ],
    domain: 'telegram.org',
    logoUrl: '/logos/buybit.jpg',
    accent: '#22c55e',
  },
  {
    id: 'tradewiz',
    title: 'Business Developer',
    company: 'Tradewiz',
    tagline: 'Influencer growth and partnerships',
    dateRange: 'Sep 2024 – Jun 2025',
    location: 'Remote',
    description: [
      'Closed 40+ influencer marketing deals that generated millions of dollars in trading volume.',
      'Onboarded crypto influencers with a combined audience of 1.4M+ followers on Twitter.',
      'Built long-term partnerships with well-known KOLs and YouTubers to grow platform adoption.',
    ],
    domain: 'tradewiz.com',
    logoUrl: '/logos/tradewiz.jpg',
    accent: '#0ea5e9',
  },
]
