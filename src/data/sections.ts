export type SectionMeta = {
  id: string
  /** Section number, shown as the opening marker */
  no: string
  title: string
  note: string
}

/**
 * One entry per section, in page order. `id` doubles as the anchor target and
 * the IntersectionObserver key, so it matches the title people actually read.
 */
export const SECTIONS: SectionMeta[] = [
  { id: 'about', no: '01', title: 'About', note: 'Who you are dealing with' },
  { id: 'experience', no: '02', title: 'Experience', note: 'Roles on record' },
  { id: 'projects', no: '03', title: 'Projects', note: 'Selected work' },
  { id: 'skills', no: '04', title: 'Skills', note: 'Tools of the trade' },
  { id: 'education', no: '05', title: 'Education', note: 'Where it started' },
  { id: 'contact', no: '06', title: 'Contact', note: 'Open for work' },
]
