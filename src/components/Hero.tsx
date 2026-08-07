import { SITE, SOCIAL } from '../config'
import avatar from '../assets/avatar.png'
import {
  IconArrowRight,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconStar,
  IconStarOutline,
  IconX,
} from './Icons'

const WANTED = 4

export function Hero() {
  return (
    <header id="top" className="shell hero">
      <p className="hero__loc">
        {SITE.location} · {SITE.role}
      </p>

      <div className="hero__grid">
        <div>
          <h1 className="hero__mark">
            <span className="hero__mark-1">Abhyuday</span>
            <span className="hero__mark-2">Pratap&nbsp;Singh</span>
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__tag">
            I build crypto products and the businesses around them — a production fintech app
            serving <b>20,000+ users</b>, an agency that has shipped <b>700+ projects</b>, and{' '}
            <b>$9M+ in trading volume</b> driven through partnerships.
          </p>
        </div>

        <div className="hero__card">
          <img className="hero__photo" src={avatar} alt={SITE.name} width={452} height={506} />
          <div className="hero__card-meta">
            <span>Wanted</span>
            <span className="hero__stars" aria-label={`${WANTED} of 5 stars`}>
              {Array.from({ length: 5 }, (_, i) =>
                i < WANTED ? <IconStar key={i} /> : <IconStarOutline key={i} />,
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="hero__foot">
        <a className="btn btn--primary" href="#missions">
          View missions
          <IconArrowRight />
        </a>
        <a className="btn btn--ghost" href={`mailto:${SITE.email}?subject=${SITE.hireSubject}`}>
          <IconMail size={14} />
          {SITE.email}
        </a>

        <span className="hero__div" aria-hidden="true" />

        <div className="hero__socials">
          <a className="hero__soc" href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGitHub />
          </a>
          <a className="hero__soc" href={SOCIAL.x} target="_blank" rel="noreferrer" aria-label="X">
            <IconX />
          </a>
          <a
            className="hero__soc"
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a
            className="hero__soc"
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      </div>
    </header>
  )
}
