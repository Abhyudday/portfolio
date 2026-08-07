import { ADDITIONAL_EXPERIENCE, EXPERIENCE } from '../data/experience'

export function Record() {
  return (
    <>
      <div className="sheet">
        {EXPERIENCE.map((role) => (
          <article className="sheet__row" key={role.id}>
            <div className="sheet__when">
              {role.dateRange}
              <span className="sheet__loc">{role.location}</span>
            </div>

            <div>
              <div className="sheet__role">
                <h3 className="sheet__title">
                  {role.title} <span className="sheet__at">@ {role.company}</span>
                </h3>
                {role.stat ? <span className="sheet__stat">{role.stat}</span> : null}
              </div>

              <p className="sheet__tag">{role.tagline}</p>

              <ul className="sheet__list">
                {role.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="side-roles">
        {ADDITIONAL_EXPERIENCE.map((role) => (
          <div className="side-role" key={role.id}>
            <div className="side-role__top">
              <span className="side-role__name">{role.title}</span>
              {role.stat ? <span className="side-role__stat">{role.stat}</span> : null}
            </div>
            <p className="side-role__tag">{role.tagline}</p>
          </div>
        ))}
      </div>
    </>
  )
}
