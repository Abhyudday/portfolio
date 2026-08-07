import { CLIENTS } from '../data/stats'

/** Infinite scrolling strip of platforms delivered for. Duplicated once for a seamless loop. */
export function Marquee() {
  const items = [...CLIENTS, ...CLIENTS]
  return (
    <div className="marquee" aria-label="Platforms and clients delivered for">
      <div className="marquee__track">
        {items.map((name, i) => (
          <span className="marquee__item" key={`${name}-${i}`} aria-hidden={i >= CLIENTS.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
