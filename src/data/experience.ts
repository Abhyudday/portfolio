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
  /** Primary highlight stat shown as a mono chip (e.g. “$9M+ volume”) */
  stat?: string
  /** Sorted newest-first */
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'gpcm',
    title: 'Software Development Engineer',
    company: 'GPCM',
    tagline: 'Crypto fintech · Dubai, UAE',
    dateRange: 'Jun 2025 – Present',
    location: 'Remote',
    description: [
      'Single-handedly built and maintained a live production fintech application serving 20,000+ users and $2.2M+ in transaction volume.',
      'Owned the product end-to-end — architecture, development, deployment, and maintenance — balancing technical execution with business priorities to keep it stable, secure, and scalable.',
    ],
    domain: 'gpcm.com',
    accent: '#14f195',
    stat: '$2.2M+ volume',
  },
  {
    id: 'dsignrz',
    title: 'Founder',
    company: 'DSIGNRZ',
    tagline: 'Web3 creative agency',
    dateRange: 'Mar 2021 – Present',
    location: 'Noida, India',
    description: [
      'Founded and scaled a creative agency to 200+ delivered projects as sole decision-maker across hiring, client negotiation, and delivery — building cross-functional teams and driving structured problem-solving under ambiguity.',
      'Maintained a 4.6/5 client satisfaction rating by building structured account-management processes that drove repeat business.',
      'Grew international client share to 48% of business, delivering projects for global crypto platforms including pump.fun, validators.com, cets.wtf, and cryptoclass.link.',
    ],
    domain: 'dsignrz.com',
    logoUrl: '/logos/dsignrs.jpg',
    accent: '#9945ff',
    stat: '200+ projects',
  },
  {
    id: 'tradewiz',
    title: 'Business Developer',
    company: 'Tradewiz',
    tagline: 'Influencer growth and partnerships',
    dateRange: 'Sep 2024 – Jun 2025',
    location: 'Remote',
    description: [
      'Closed 40+ influencer marketing partnerships, generating $4M+ in trading volume through direct relationship management.',
      'Onboarded $5M+ in additional trading volume by designing and executing targeted growth campaigns.',
      'Built and managed relationships with crypto influencers (1.4M+ combined followers) and partnered cross-functionally with marketing and product teams.',
    ],
    domain: 'tradewiz.com',
    logoUrl: '/logos/tradewiz.jpg',
    accent: '#38bdf8',
    stat: '$4M+ volume',
  },
]

/** Additional experience — smaller cards, not in the main timeline */
export const ADDITIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'youtube',
    title: 'YouTube Creator',
    company: 'Crypto & Web3 Content',
    tagline: '5,000+ subscribers · 20+ brand integrations',
    dateRange: 'Ongoing',
    location: 'Remote',
    description: [
      'Built and scaled a crypto-focused YouTube channel to 5,000+ subscribers.',
      'Secured 20+ brand integration deals with crypto and Web3 companies.',
    ],
    accent: '#f43f5e',
    stat: '5K+ subs',
  },
  {
    id: 'freelance',
    title: 'Freelancer',
    company: 'Independent Client Work',
    tagline: 'Web, design & Web3 development',
    dateRange: 'Ongoing',
    location: 'Global',
    description: [
      'Delivered 500+ projects across 350+ clients spanning web, design, and Web3 development.',
    ],
    accent: '#fbbf24',
    stat: '500+ projects',
  },
]
