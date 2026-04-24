export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'Languages/Frameworks',
    items: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'Solidity', 'HTML/CSS'],
  },
  {
    title: 'Databases/APIs',
    items: ['PostgreSQL', 'Tatum API', 'Birdeye', 'Solscan', 'Telegram API'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Figma', 'VS Code', 'Linux'],
  },
]

export type SkillPillVariant = 'default' | 'feature' | 'live' | 'alert'

const VARIANT_ORDER: SkillPillVariant[] = ['default', 'feature', 'live', 'alert']

export function skillPillVariant(index: number): SkillPillVariant {
  return VARIANT_ORDER[index % VARIANT_ORDER.length]!
}
