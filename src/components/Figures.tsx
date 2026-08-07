import { STATS } from '../data/stats'

/** Headline figures, set as a plain rule-topped row. */
export function Figures() {
  return (
    <ul className="figs" aria-label="Key figures">
      {STATS.map((s) => (
        <li key={s.label} className="fig">
          <span className="fig__v">{s.value}</span>
          <span className="fig__l">{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
