import type { ReactNode } from 'react'

type Props = {
  id: string
  no: string
  title: string
  note?: string
  children: ReactNode
}

export function Section({ id, no, title, note, children }: Props) {
  return (
    <section id={id} className="shell sec">
      <div className="sec__head">
        <span className="sec__no">{no}</span>
        <h2 className="sec__title">{title}</h2>
        {note ? <span className="sec__note">{note}</span> : null}
      </div>
      {children}
    </section>
  )
}
