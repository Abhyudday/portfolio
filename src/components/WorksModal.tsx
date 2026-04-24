import { useEffect, useRef } from 'react'
import type { WorkProject } from '../data/works'
import { WorkBrandIcon } from './WorkBrandIcon'
import { IconX, IconArrowRight } from './Icons'

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
  const panelRef = useRef<HTMLDivElement>(null)
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
    <div className="modal-root" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel modal-panel--project" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal-head modal-head--project">
          <div>
            <p className="eyebrow">
              <span className="dot" /> Project
            </p>
            <h2 id={titleId} className="modal-title">
              {project.name}
            </h2>
            <p className="modal-sub">{project.subtitle}</p>
          </div>
          <button ref={closeRef} type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close project">
            <IconX />
          </button>
        </div>

        <div className="modal-body modal-body--project">
          <WorkDetail project={project} />
        </div>
      </div>
    </div>
  )
}

function WorkDetail({ project: p }: { project: WorkProject }) {
  return (
    <article className="work-detail">
      <div className="work-detail__meta card-inset">
        <MetaRow label="Platform" value={p.platform} />
        <MetaRow label="Link" value={linkLabel(p.url)} />
      </div>

      <div className="work-detail__hero">
        <WorkBrandIcon emoji={p.emoji} size={56} />
        <div>
          <p className="work-detail__desc">{p.description}</p>
          <a className="btn btn-primary" href={p.url} target="_blank" rel="noreferrer">
            {p.ctaLabel}
            <IconArrowRight />
          </a>
        </div>
      </div>

      <div className="work-detail__gallery" aria-label="Project preview placeholders">
        {[1, 2, 3].map((i) => (
          <div key={i} className="gallery-tile" />
        ))}
      </div>
    </article>
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
