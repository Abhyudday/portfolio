import { EDUCATION } from '../data/stats'

export function Education() {
  return (
    <div className="edu">
      <h3>{EDUCATION.degree}</h3>
      <p className="edu__meta">
        {EDUCATION.school} · {EDUCATION.dateRange}
      </p>
      <ul className="edu__notes">
        {EDUCATION.notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  )
}
