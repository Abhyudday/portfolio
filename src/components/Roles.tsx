import { EXPERIENCE, ADDITIONAL_EXPERIENCE } from '../data/experience'

export function Roles() {
  return (
    <>
      <div className="roles">
        {EXPERIENCE.map((r) => (
          <article key={r.id} className="role">
            <div>
              <h3 className="role__title">
                {r.title}
                <span className="role__co">{r.company}</span>
              </h3>
              <p className="role__meta">
                <span>{r.dateRange}</span>
                <span>
                  {r.tagline} · {r.location}
                </span>
                {r.stat ? <span className="role__stat">{r.stat}</span> : null}
              </p>
            </div>

            <ul className="role__notes">
              {r.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="also">
        <h3 className="also__h">Also</h3>
        {ADDITIONAL_EXPERIENCE.map((r) => (
          <div key={r.id} className="also__item">
            <h4>{r.title}</h4>
            <p>
              {r.tagline}. {r.description[0]}
            </p>
            {r.stat ? <span>{r.stat}</span> : null}
          </div>
        ))}
      </div>
    </>
  )
}
