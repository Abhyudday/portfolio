import { MEDIA, WORK_MEDIA } from '../data/media'
import { THREADS } from '../data/sections'
import { WORKS } from '../data/works'
import { IconArrowUpRight, IconTarget } from './Icons'
import { SectionTitle } from './SectionTitle'

const thread = THREADS[2]

/** Thread 03 — shipped work. */
export function Projects() {
  return (
    <section className="section" id={thread.id}>
      <SectionTitle no={thread.no} note={thread.note}>
        {thread.title}
      </SectionTitle>

      <ul className="project-grid">
        {WORKS.map((w) => (
          <li className="project-card" key={w.id}>
            <div className="project-banner">
              <img src={WORK_MEDIA[w.id] ?? MEDIA.cover} alt="" loading="lazy" />
            </div>

            <div className="project-body">
              <div className="project-head">
                <h3 className="project-name">{w.name}</h3>
                <span className="project-year mono">{w.year}</span>
              </div>

              <p className="project-subtitle">{w.subtitle}</p>
              <p className="project-desc">{w.description}</p>

              <ul className="tech-row">
                {w.stack.map((t) => (
                  <li className="tech" key={t}>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="project-foot">
                <span className="project-platform">{w.platform}</span>
                {w.metric ? (
                  <span className="project-metric">
                    <IconTarget size={13} />
                    {w.metric}
                  </span>
                ) : null}
              </div>

              <a className="btn btn-secondary" href={w.url} target="_blank" rel="noreferrer">
                {w.ctaLabel}
                <IconArrowUpRight size={13} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
