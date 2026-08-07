import { STATS } from '../data/stats'

/** Rail fill per figure — visual weighting only, index-aligned with STATS. */
const FILL = ['88%', '74%', '66%', '92%']

export function Stats() {
  return (
    <div className="shell">
      <div className="hud">
        <div className="hud__bar">
          <span className="hud__bar-dot" aria-hidden="true" />
          Career stats
          <span className="hud__bar-right">Live</span>
        </div>

        <dl className="hud__grid">
          {STATS.map((s, i) => (
            <div className="hud__cell" key={s.label}>
              <dd className="hud__val">{s.value}</dd>
              <dt className="hud__lab">{s.label}</dt>
              <div className="hud__rail" aria-hidden="true">
                <i style={{ width: FILL[i] ?? '70%' }} />
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
