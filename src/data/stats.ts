/** Headline metrics — rendered as a plain figure row, tabular numerals. */
export type Stat = {
  value: string
  label: string
}

export const STATS: Stat[] = [
  { value: '$9M+', label: 'Trading volume driven' },
  { value: '700+', label: 'Projects delivered' },
  { value: '20K+', label: 'Users in production' },
  { value: '4.6/5', label: 'Client satisfaction' },
]

export type EducationItem = {
  degree: string
  school: string
  dateRange: string
  notes: string[]
}

export const EDUCATION: EducationItem = {
  degree: 'B.Tech, Computer Science',
  school: 'ABES Engineering College',
  dateRange: 'Sep 2023 — Jul 2027',
  notes: [
    'Specialisation in blockchain and web development.',
    'Four internships completed alongside coursework.',
  ],
}

/** Platforms delivered for — set inline as a single typographic line. */
export const CLIENTS: string[] = [
  'pump.fun',
  'validators.com',
  'cets.wtf',
  'cryptoclass.link',
  'GPCM',
  'Tradewiz',
]
