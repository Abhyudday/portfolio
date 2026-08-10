import { SECTIONS } from '../data/sections'
import { WORKS } from '../data/works'
import { IconArrowUpRight, IconTarget } from './Icons'
import { SectionTitle } from './SectionTitle'

const section = SECTIONS[2]

/** Section 03 — shipped work. */
export function Projects() {
  return (
    <section className="section" id={section.id}>
      <SectionTitle no={section.no} note={section.note}>
        {section.title}
      </SectionTitle>

      <ul className="project-grid">
        {WORKS.map((w) => (
          <li className="project-card" key={w.id}>
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
