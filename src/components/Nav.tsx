import { useEffect, useState } from 'react'
import { SITE } from '../config'
import { SECTIONS } from '../data/sections'

type Props = { onCheat: () => void }

export function Nav({ onCheat }: Props) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-42% 0px -52% 0px' },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top">
          <span className="nav__shield" aria-hidden="true">
            A
          </span>
          {SITE.shortName}
        </a>

        <nav className="nav__links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              className={active === s.id ? 'nav__link is-on' : 'nav__link'}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button className="nav__cheat" type="button" onClick={onCheat}>
          Cheat code
          <kbd>⌘K</kbd>
        </button>
      </div>
    </header>
  )
}
