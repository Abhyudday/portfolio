export const SECTIONS = [
  { id: 'about', label: 'Bio' },
  { id: 'record', label: 'Record' },
  { id: 'missions', label: 'Missions' },
  { id: 'loadout', label: 'Loadout' },
  { id: 'contact', label: 'Contact' },
] as const

export type ThreadMeta = {
  id: string
  /** Thread number, shown as the opening marker */
  no: string
  title: string
  note: string
}

/**
 * One thread per section. Titles and notes carry over verbatim from the
 * previous section headers so none of the copy is lost.
 */
export const THREADS: ThreadMeta[] = [
  { id: 'about', no: '01', title: 'The bio', note: 'Who you are dealing with' },
  { id: 'record', no: '02', title: 'Rap sheet', note: 'Roles on record' },
  { id: 'missions', no: '03', title: 'Missions', note: 'completed' },
  { id: 'loadout', no: '04', title: 'Loadout', note: 'Tools of the trade' },
  { id: 'education', no: '05', title: 'Training', note: 'Where it started' },
  { id: 'contact', no: '06', title: 'Safehouse', note: 'Open for work' },
]
