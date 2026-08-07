import { useEffect, useRef } from 'react'
import type { WorkProject } from '../data/works'
import { IconArrowUpRight, IconClose } from './Icons'

type Props = {
  project: WorkProject | null
  onClose: () => void
}

function linkLabel(url: string) {
  try {
    const u = new URL(url)
    return u.hostname + (u.pathname !== '/' ? u.pathname : '')
  } catch {
    return url
  }
}

export function WorksModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const titleId = `project-modal-${project.id}`

  return (
    <div
      className="modal-root"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-hue={project.hue}
      >
        <div className="modal-head">
          <div>
            <p className="modal-eyebrow">
              <span style={{ color: 'var(--green)' }}>//</span> project
            </p>
            <h2 id={titleId} className="modal-title">
              {project.name}
            </h2>
            <p className="modal-sub">{project.subtitle}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close project"
          >
            <IconClose />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <MetaRow label="Platform" value={project.platform} />
            <MetaRow label="Link" value={linkLabel(project.url)} />
            {project.metric ? <MetaRow label="Highlight" value={project.metric} /> : null}
          </div>

          <p className="modal-desc">{project.description}</p>

          <a className="btn btn--primary" href={project.url} target="_blank" rel="noreferrer">
            {project.ctaLabel}
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="meta-row">
      <span className="meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  )
}
