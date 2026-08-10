import { SITE } from '../config'
import { MEDIA } from '../data/media'
import { SECTIONS } from '../data/sections'
import { IconGitHub } from './Icons'

type Props = {
  /** Id of the section currently in view. */
  active: string
}

/** Sticky blurred top bar: brand mark, section links, GitHub pill. */
export function Navbar({ active }: Props) {
  return (
    <nav className="nav" aria-label="Sections">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          <img className="nav-mark" src={MEDIA.mark} alt="" width={22} height={22} />
          <span className="nav-brand-text">{SITE.shortName}</span>
        </a>

        <ul className="nav-links">
          {SECTIONS.map((t) => (
            <li key={t.id}>
              <a
                className={active === t.id ? 'nav-link is-active' : 'nav-link'}
                href={`#${t.id}`}
                aria-current={active === t.id ? 'true' : undefined}
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-star" href={SITE.github} target="_blank" rel="noreferrer">
          <IconGitHub size={14} />
          <span className="nav-star-text">GitHub</span>
        </a>
      </div>
    </nav>
  )
}
