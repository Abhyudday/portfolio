import { SITE, SOCIAL } from '../config'
import { SECTIONS } from '../data/sections'

export function Footer() {
  return (
    <footer className="shell foot">
      <div className="foot__grid">
        <div>
          <div className="foot__mark">{SITE.shortName}</div>
          <p className="foot__blurb">
            Crypto products and the businesses around them. Built out of {SITE.location}.
          </p>
        </div>

        <div>
          <div className="foot__h">Navigate</div>
          <div className="foot__list">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="foot__h">Elsewhere</div>
          <div className="foot__list">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <div className="foot__h">Contact</div>
          <div className="foot__list">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.website} target="_blank" rel="noreferrer">
              abhyuday.site
            </a>
          </div>
        </div>
      </div>

      <div className="foot__bar">
        <span>
          © {SITE.year} {SITE.name}
        </span>
        <span className="foot__bar-right">Press ⌘K for cheat codes</span>
      </div>
    </footer>
  )
}
