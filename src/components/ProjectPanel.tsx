import { useEffect, useRef } from 'react'
import type { WorkProject } from '../data/works'
import { IconArrowUpRight, IconClose } from './Icons'

type Props = {
  project: WorkProject | null
  index: number
  onClose: () => void
}

/** Slide-over detail panel. Escape closes; focus lands on the close control. */
export function ProjectPanel({ project, index, onClose }: Props) {
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

  const titleId = `panel-${project.id}`

  return (
    <div
      className="panel-scrim"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="panel__top">
          <div>
            <p className="panel__n">{String(index + 1).padStart(2, '0')} — Project</p>
            <h2 id={titleId} className="panel__title">
              {project.name}
            </h2>
            <p className="panel__sub">{project.subtitle}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="panel__x"
            onClick={onClose}
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>

        <dl className="panel__meta">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>{project.platform}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(' · ')}</dd>
          </div>
          {project.metric ? (
            <div>
              <dt>Highlight</dt>
              <dd>{project.metric}</dd>
            </div>
          ) : null}
        </dl>

        <p className="panel__desc">{project.description}</p>

        <a className="ulink" href={project.url} target="_blank" rel="noreferrer">
          {project.ctaLabel}
          <IconArrowUpRight />
        </a>
      </div>
    </div>
  )
}
