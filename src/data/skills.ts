export type SkillGroup = {
  title: string
  items: string[]
}

/** Rendered as key/value rows — order sets visual priority. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'Solidity'],
  },
  {
    title: 'Infra',
    items: ['PostgreSQL', 'Docker', 'Git'],
  },
  {
    title: 'Web3',
    items: ['Solana', 'Tatum API', 'Birdeye', 'Solscan'],
  },
  {
    title: 'Business',
    items: [
      'Strategic partnerships',
      'Business development',
      'Growth strategy',
      'Stakeholder management',
      'Negotiation',
    ],
  },
]
