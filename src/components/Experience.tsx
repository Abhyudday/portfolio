import { useState } from 'react'
import { ALSO_RUNNING } from '../data/copy'
import { ADDITIONAL_EXPERIENCE, EXPERIENCE, type ExperienceItem } from '../data/experience'
import { COMPANY_MEDIA } from '../data/media'
import { THREADS } from '../data/sections'
import { IconCalendar, IconChevronDown, IconLocation } from './Icons'
import { SectionTitle } from './SectionTitle'

const thread = THREADS[1]

/** Roles still running read as active; everything else is on record. */
const statusOf = (item: ExperienceItem) =>
  /present|ongoing/i.test(item.dateRange) ? 'present' : 'past'

type CardProps = {
  item: ExperienceItem
  isExpanded: boolean
  onToggle: () => void
}

function ExperienceCard({ item, isExpanded, onToggle }: CardProps) {
  const status = statusOf(item)
  const logo = COMPANY_MEDIA[item.id]

  return (
    <li className="xp-item">
      <span className={`xp-dot is-${status}`} aria-hidden="true" />

      <article className="xp-card">
        <header className="xp-head">
          <span className="xp-logo">
            {logo ? (
              <img src={logo} alt="" width={34} height={34} />
            ) : (
              <span className="xp-logo-letter">{item.company.charAt(0)}</span>
            )}
          </span>

          <div className="xp-head-text">
            <h3 className="xp-company">{item.company}</h3>
            <p className="xp-role">{item.title}</p>
            <p className="xp-tagline">{item.tagline}</p>
          </div>

          {item.stat ? <span className="xp-stat num">{item.stat}</span> : null}
        </header>

        <div className="xp-meta mono">
          <span>
            <IconCalendar size={13} />
            {item.dateRange}
          </span>
          <span className="xp-meta-sep" aria-hidden="true" />
          <span>
            <IconLocation size={13} />
            {item.location}
          </span>

          <button
            type="button"
            className={isExpanded ? 'xp-toggle is-open' : 'xp-toggle'}
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.company} details`}
          >
            <IconChevronDown size={15} />
          </button>
        </div>

        <div className={isExpanded ? 'xp-collapse is-open' : 'xp-collapse'}>
          <ul className="xp-bullets">
            {item.description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  )
}

/** Thread 02 — the timeline, plus the parallel tracks underneath. */
export function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(0)

  return (
    <section className="section" id={thread.id}>
      <SectionTitle no={thread.no} note={thread.note}>
        {thread.title}
      </SectionTitle>

      <ul className="xp-timeline">
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard
            key={item.id}
            item={item}
            isExpanded={expandedIdx === i}
            onToggle={() => setExpandedIdx(expandedIdx === i ? -1 : i)}
          />
        ))}
      </ul>

      <p className="side-heading">{ALSO_RUNNING}</p>

      <ul className="side-grid">
        {ADDITIONAL_EXPERIENCE.map((item) => (
          <li className="side-card" key={item.id}>
            <div className="side-card-head">
              <h3 className="side-title">{item.title}</h3>
              {item.stat ? <span className="side-stat num">{item.stat}</span> : null}
            </div>
            <p className="side-company">{item.company}</p>
            <p className="side-tagline">{item.tagline}</p>
            <ul className="side-bullets">
              {item.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="side-meta mono">
              {item.dateRange} · {item.location}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
