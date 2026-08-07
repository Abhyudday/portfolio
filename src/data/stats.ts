/** Headline metrics shown in the hero stat strip */
export type Stat = {
  label: string
  value: string
  /** Mono caption under the value */
  note: string
}

export const STATS: Stat[] = [
  { value: '$9M+', label: 'Trading volume', note: 'driven via BD' },
  { value: '200+', label: 'Projects delivered', note: 'agency clients' },
  { value: '4.6/5', label: 'Client rating', note: 'satisfaction' },
  { value: '20K+', label: 'Users served', note: 'production app' },
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
  dateRange: 'Sep 2023 – Jul 2027 (Expected)',
  notes: [
    'Specialization in Blockchain and Web Development.',
    'Completed 4+ internships alongside coursework.',
  ],
}

/** Client logos / platforms delivered for — used in the marquee */
export const CLIENTS: string[] = [
  'pump.fun',
  'validators.com',
  'cets.wtf',
  'cryptoclass.link',
  'GPCM',
  'Tradewiz',
  'DSIGNRZ',
]
