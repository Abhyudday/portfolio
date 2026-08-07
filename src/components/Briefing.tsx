import { useEffect, useRef } from 'react'
import type { WorkProject } from '../data/works'
import { IconArrowUpRight, IconClose } from './Icons'

type Props = {
  project: WorkProject | null
  index: number
  onClose: () => void
}

/** Mission briefing overlay. Escape closes; focus lands on the close control. */
export function Briefing({ project, index, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const titleId = `brief-${project.id}`

  return (
    <div
      className="brief"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="brief__box" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="brief__bar">
          Mission briefing — M{String(index + 1).padStart(2, '0')}
          <button
            ref={closeRef}
            type="button"
            className="brief__x"
            onClick={onClose}
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>

        <div className="brief__body">
          <h2 id={titleId} className="brief__name">
            {project.name}
          </h2>
          <p className="brief__sub">{project.subtitle}</p>
          <p className="brief__desc">{project.description}</p>

          <dl className="brief__meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            {project.metric ? (
              <div>
                <dt>Objective cleared</dt>
                <dd>{project.metric}</dd>
              </div>
            ) : null}
            <div>
              <dt>Status</dt>
              <dd>Shipped</dd>
            </div>
          </dl>

          <div className="brief__stack">
            {project.stack.map((s) => (
              <span className="brief__chip" key={s}>
                {s}
              </span>
            ))}
          </div>

          <div className="brief__cta">
            <a
              className="btn btn--primary"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.ctaLabel}
              <IconArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
