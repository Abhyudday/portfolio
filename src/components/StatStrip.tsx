import { STATS } from '../data/stats'

export function StatStrip() {
  return (
    <ul className="stats" aria-label="Key metrics">
      {STATS.map((s) => (
        <li key={s.label} className="stat">
          <span className="stat__value">{s.value}</span>
          <span className="stat__label">{s.label}</span>
          <span className="stat__note">{s.note}</span>
        </li>
      ))}
    </ul>
  )
}
