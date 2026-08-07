export type SkillGroup = {
  title: string
  items: string[]
}

/** Ordered by emphasis: technical stack first, then business, then interests */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Technical',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Rust',
      'Solidity',
      'PostgreSQL',
      'Git',
      'Docker',
      'Tatum API',
      'Birdeye',
      'Solscan',
    ],
  },
  {
    title: 'Business',
    items: [
      'Strategic Partnerships',
      'Business Development',
      'Growth Strategy',
      'Client & Stakeholder Management',
      'Negotiation',
    ],
  },
  {
    title: 'Interests',
    items: ['Swimming', 'Music'],
  },
]
