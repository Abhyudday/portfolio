import type { ReactNode } from 'react'

type Props = {
  /** Section number, shown as the opening marker */
  no?: string
  /** Short qualifier set to the right of the title */
  note?: string
  children: ReactNode
}

/** Decorated section heading with corner accents — the manixh section marker. */
export function SectionTitle({ no, note, children }: Props) {
  return (
    <div className="section-title">
      <span className="section-title-corners" aria-hidden="true" />
      {no ? <span className="section-title-no num">{no}</span> : null}
      <h2 className="section-title-text">{children}</h2>
      {note ? <span className="section-title-note">{note}</span> : null}
    </div>
  )
}
