import { useEffect, useRef } from 'react'
import type { WorkProject } from '../data/works'
import { PROFILE, SITE } from '../config'
import { MEDIA, WORK_MEDIA } from '../data/media'
import { LinkCard } from './LinkCard'
import { IconArrowLeft, IconArrowUpRight, IconTarget, IconVerified } from './Icons'

type Props = {
  project: WorkProject | null
  index: number
  onClose: () => void
}

/**
 * Expanded post view — X's single-post page, shown as an overlay. Escape closes
 * and focus lands on the back control, the same behaviour the previous briefing
 * modal had.
 */
export function PostDetail({ project, index, onClose }: Props) {
  const backRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    backRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const titleId = `detail-${project.id}`

  return (
    <div
      className="detail"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="detail-box" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="detail-bar">
          <button ref={backRef} type="button" className="detail-back" onClick={onClose}>
            <IconArrowLeft size={19} />
            <span className="sr-only">Back</span>
          </button>
          <span className="detail-bar-title">
            Post
            <span className="detail-bar-sub num">M{String(index + 1).padStart(2, '0')}</span>
          </span>
        </div>

        <div className="detail-body">
          <header className="detail-author">
            <img src={MEDIA.avatar} alt="" width={48} height={48} />
            <span className="detail-author-text">
              <span className="detail-author-name">
                {SITE.name}
                <IconVerified size={17} className="badge" />
              </span>
              <span className="detail-author-handle">@{PROFILE.handle}</span>
            </span>
          </header>

          <h2 id={titleId} className="detail-name">
            {project.name}
          </h2>
          <p className="detail-sub">{project.subtitle}</p>
          <p className="detail-desc">{project.description}</p>

          <ul className="chips">
            {project.stack.map((s) => (
              <li className="chip" key={s}>
                {s}
              </li>
            ))}
          </ul>

          <LinkCard
            url={project.url}
            title={project.name}
            description={project.subtitle}
            image={WORK_MEDIA[project.id]}
            imageAlt={`${project.name} artwork`}
          />

          <p className="detail-time num">
            {project.year} · {project.platform}
          </p>

          <dl className="detail-meta">
            <div>
              <dt>Year</dt>
              <dd className="num">{project.year}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            {project.metric ? (
              <div>
                <dt>Objective cleared</dt>
                <dd className="num">
                  <IconTarget size={13} /> {project.metric}
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Status</dt>
              <dd>Shipped</dd>
            </div>
          </dl>

          <div className="detail-cta">
            <a className="btn btn-primary" href={project.url} target="_blank" rel="noreferrer">
              {project.ctaLabel}
              <IconArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
