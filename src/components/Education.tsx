import { EDUCATION } from '../data/stats'

export function Education() {
  return (
    <div className="edu">
      <div>
        <h3 className="edu__degree">{EDUCATION.degree}</h3>
        <p className="edu__school">{EDUCATION.school}</p>
        <ul className="edu__notes">
          {EDUCATION.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
      <span className="edu__when">{EDUCATION.dateRange}</span>
    </div>
  )
}
