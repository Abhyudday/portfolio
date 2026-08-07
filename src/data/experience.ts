export type ExperienceItem = {
  id: string
  title: string
  company: string
  /** Short qualifier under the title */
  tagline: string
  dateRange: string
  location: string
  description: string[]
  /** Primary highlight, set in mono beside the role */
  stat?: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'gpcm',
    title: 'Software Development Engineer',
    company: 'GPCM',
    tagline: 'Crypto fintech, Dubai',
    dateRange: 'Jun 2025 — Present',
    location: 'Remote',
    description: [
      'Built and maintained a live production fintech application single-handedly, serving 20,000+ users and $2.2M+ in transaction volume.',
      'Owned the product end to end — architecture, development, deployment, maintenance — balancing technical execution against business priorities to keep it stable, secure, and scalable.',
    ],
    stat: '$2.2M+ processed',
  },
  {
    id: 'dsignrz',
    title: 'Founder',
    company: 'DSIGNRZ',
    tagline: 'Web3 creative agency',
    dateRange: 'Mar 2021 — Present',
    location: 'Noida',
    description: [
      'Scaled a creative agency to 200+ delivered projects as sole decision-maker across hiring, client negotiation, and delivery.',
      'Held a 4.6/5 client satisfaction rating by building structured account-management processes that drove repeat business.',
      'Grew international client share to 48% of business, delivering for crypto platforms including pump.fun, validators.com, cets.wtf, and cryptoclass.link.',
    ],
    stat: '200+ projects',
  },
  {
    id: 'tradewiz',
    title: 'Business Developer',
    company: 'Tradewiz',
    tagline: 'Influencer growth and partnerships',
    dateRange: 'Sep 2024 — Jun 2025',
    location: 'Remote',
    description: [
      'Closed 40+ influencer marketing partnerships, generating $4M+ in trading volume through direct relationship management.',
      'Onboarded $5M+ in additional trading volume by designing and running targeted growth campaigns.',
      'Managed relationships with crypto influencers totalling 1.4M+ followers, working across marketing and product.',
    ],
    stat: '$9M+ volume',
  },
]

/** Secondary track — set as a compact two-column list. */
export const ADDITIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'youtube',
    title: 'YouTube Creator',
    company: 'Crypto and Web3',
    tagline: 'Channel built to 5,000+ subscribers',
    dateRange: 'Ongoing',
    location: 'Remote',
    description: ['Secured 20+ brand integration deals with crypto and Web3 companies.'],
    stat: '5K+ subs',
  },
  {
    id: 'freelance',
    title: 'Freelance',
    company: 'Independent client work',
    tagline: 'Web, design, and Web3 development',
    dateRange: 'Ongoing',
    location: 'Global',
    description: ['Delivered 500+ projects across 350+ clients.'],
    stat: '350+ clients',
  },
]
