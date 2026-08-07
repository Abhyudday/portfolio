import { EDUCATION } from '../data/stats'
import { IconGradCap } from './Icons'

export function Education() {
  return (
    <div className="edu">
      <span className="edu__badge" aria-hidden>
        <IconGradCap />
      </span>
      <div>
        <h3 className="edu__degree">{EDUCATION.degree}</h3>
        <p className="edu__school">
          {EDUCATION.school} <span className="edu__when">· {EDUCATION.dateRange}</span>
        </p>
        <ul className="edu__notes">
          {EDUCATION.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
