import { PROFILE, SITE, SOCIAL } from '../config'
import { FOOTER_BLURB } from '../data/copy'

/** Sign-off: what this is, where to find me, whose it is. */
export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-blurb">{FOOTER_BLURB}</p>

      <p className="footer-links mono">
        <a href={SITE.website} target="_blank" rel="noreferrer">
          {PROFILE.siteLabel}
        </a>
        <span className="footer-sep" aria-hidden="true">
          ·
        </span>
        <a href={SOCIAL.x} target="_blank" rel="noreferrer">
          @{PROFILE.handle}
        </a>
      </p>

      <p className="footer-copy mono">
        © {SITE.year} {SITE.name}
      </p>
    </footer>
  )
}
