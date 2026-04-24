import { useState } from 'react'
import type { ExperienceItem } from '../data/experience'

function faviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`
}

function CompanyLogo({
  company,
  logoUrl,
  domain,
  accent,
  logoZoom = 1,
}: Pick<ExperienceItem, 'company' | 'logoUrl' | 'domain' | 'accent' | 'logoZoom'>) {
  const [failed, setFailed] = useState(false)
  const src = logoUrl ?? (domain ? faviconUrl(domain) : null)

  if (!src || failed) {
    return (
      <span className="exp-logo exp-logo--fallback" style={{ background: accent }} aria-hidden>
        {company.slice(0, 1).toUpperCase()}
      </span>
    )
  }

  const zoomStyle =
    logoZoom !== 1
      ? ({ transform: `scale(${logoZoom})`, transformOrigin: 'center center' } as const)
      : undefined

  return (
    <img
      className="exp-logo"
      src={src}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      style={zoomStyle}
      onError={() => setFailed(true)}
    />
  )
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="exp-timeline">
      {items.map((item, index) => (
        <li key={item.id} className="exp-item">
          <div className="exp-item__rail">
            <div className="exp-item__logo-slot">
              <CompanyLogo
                company={item.company}
                logoUrl={item.logoUrl}
                domain={item.domain}
                accent={item.accent}
                logoZoom={item.logoZoom}
              />
            </div>
            {index < items.length - 1 ? <div className="exp-item__connector" aria-hidden /> : null}
          </div>
          <div className="exp-item__body">
            <div className="exp-item__head">
              <div className="exp-item__head-main">
                <h3 className="exp-item__title">
                  {item.title},{' '}
                  {item.companyUrl ? (
                    <a className="exp-item__company-inline" href={item.companyUrl} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  ) : (
                    <span className="exp-item__company-inline">{item.company}</span>
                  )}
                </h3>
                <p className="exp-item__tagline">{item.tagline}</p>
              </div>
              <div className="exp-item__head-aside">
                <span className="exp-item__when">{item.dateRange}</span>
                {item.duration ? <span className="exp-item__dur">{item.duration}</span> : null}
                <span className="exp-item__where">{item.location}</span>
              </div>
            </div>
            <ul className="exp-item__bullets">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {item.skills?.length ? (
              <ul className="exp-item__skills" aria-label="Skills">
                {item.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  )
}
