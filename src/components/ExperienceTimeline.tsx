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
}: Pick<ExperienceItem, 'company' | 'logoUrl' | 'domain' | 'accent'>) {
  const [failed, setFailed] = useState(false)
  const src = logoUrl ?? (domain ? faviconUrl(domain) : null)

  if (!src || failed) {
    return (
      <span className="tl-logo tl-logo--fallback" style={{ background: accent }} aria-hidden>
        {company.slice(0, 1).toUpperCase()}
      </span>
    )
  }

  return (
    <img
      className="tl-logo"
      src={src}
      alt=""
      width={44}
      height={44}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="timeline">
      {items.map((item, index) => (
        <li key={item.id} className="tl-item">
          <div className="tl-item__rail">
            <div
              className="tl-item__node"
              style={{ ['--node-accent' as string]: item.accent }}
            >
              <CompanyLogo
                company={item.company}
                logoUrl={item.logoUrl}
                domain={item.domain}
                accent={item.accent}
              />
            </div>
            {index < items.length - 1 ? <div className="tl-item__line" aria-hidden /> : null}
          </div>

          <div className="tl-item__body">
            <div className="tl-item__head">
              <h3 className="tl-item__title">
                {item.title} <span className="tl-item__sep">at</span>{' '}
                {item.companyUrl ? (
                  <a
                    className="tl-item__company"
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="tl-item__company">{item.company}</span>
                )}
              </h3>
              <span className="tl-item__when">{item.dateRange}</span>
            </div>

            <p className="tl-item__meta">
              <span className="tl-item__tagline">{item.tagline}</span>
              <span className="tl-item__sep" aria-hidden>
                ·
              </span>
              <span>{item.location}</span>
              {item.stat ? <span className="chip-stat">{item.stat}</span> : null}
            </p>

            <ul className="tl-item__bullets">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}
