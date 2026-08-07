import type { ReactNode } from 'react'

type Props = {
  /** Mono eyebrow text, rendered after a green slash prefix */
  eyebrow: string
  title: string
  desc?: string
  /** Optional right-aligned action (renders the head as a row) */
  action?: ReactNode
  titleId?: string
}

export function SectionHead({ eyebrow, title, desc, action, titleId }: Props) {
  const head = (
    <div>
      <p className="section__eyebrow">
        <span className="slash">//</span> {eyebrow}
      </p>
      <h2 className="section__title" id={titleId}>
        {title}
      </h2>
      {desc ? <p className="section__desc">{desc}</p> : null}
    </div>
  )

  if (!action) return head

  return (
    <div className="section__head-row">
      {head}
      {action}
    </div>
  )
}
