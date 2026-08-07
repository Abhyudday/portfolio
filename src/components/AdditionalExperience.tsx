import { ADDITIONAL_EXPERIENCE } from '../data/experience'
import { IconGitHub, IconYouTube } from './Icons'

const ICONS: Record<string, typeof IconYouTube> = {
  youtube: IconYouTube,
  freelance: IconGitHub,
}

export function AdditionalExperience() {
  return (
    <div className="extra-grid">
      {ADDITIONAL_EXPERIENCE.map((item) => {
        const Icon = ICONS[item.id]
        return (
          <article key={item.id} className="extra-card">
            <div className="extra-card__top">
              <h3 className="extra-card__title">
                {Icon ? (
                  <span style={{ color: item.accent, marginRight: 8, verticalAlign: -3 }}>
                    <Icon size={15} />
                  </span>
                ) : null}
                {item.title}
              </h3>
              {item.stat ? <span className="chip-stat">{item.stat}</span> : null}
            </div>
            <p className="extra-card__sub">{item.tagline}</p>
            <ul className="extra-card__list">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
