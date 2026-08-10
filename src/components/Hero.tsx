import { PROFILE, SITE, SOCIAL } from '../config'
import { BIO } from '../data/copy'
import { MEDIA } from '../data/media'
import { STATS } from '../data/stats'
import { HireMenu } from './HireMenu'
import {
  IconBriefcase,
  IconCalendar,
  IconGitHub,
  IconGlobe,
  IconInstagram,
  IconLinkedIn,
  IconLocation,
  IconVerified,
  IconX,
} from './Icons'
import { RichText } from './RichText'

const SOCIALS = [
  { label: 'GitHub', url: SITE.github, icon: <IconGitHub size={15} /> },
  { label: 'X', url: SOCIAL.x, icon: <IconX size={14} /> },
  { label: 'LinkedIn', url: SOCIAL.linkedin, icon: <IconLinkedIn size={15} /> },
  { label: 'Instagram', url: SOCIAL.instagram, icon: <IconInstagram size={15} /> },
]

/** Profile hero: banner, avatar, name, bio, meta rows, figures, socials. */
export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-banner">
        <img src={MEDIA.banner} alt="" loading="eager" />
      </div>

      <div className="hero-body">
        <div className="hero-top">
          <span className="hero-avatar">
            <img src={MEDIA.avatar} alt={SITE.shortName} width={112} height={112} />
          </span>
          <div className="hero-cta">
            <HireMenu className="btn btn-primary" />
          </div>
        </div>

        <h1 className="hero-name">
          {SITE.name}
          <IconVerified size={17} className="hero-badge" />
        </h1>
        <p className="hero-handle mono">@{PROFILE.handle}</p>

        <p className="hero-bio">
          <RichText text={BIO} />
        </p>

        <ul className="hero-meta mono">
          <li>
            <IconBriefcase size={14} />
            {SITE.role}
          </li>
          <li>
            <IconLocation size={14} />
            {SITE.location}
          </li>
          <li>
            <IconGlobe size={14} />
            <a className="hero-meta-link" href={SITE.website} target="_blank" rel="noreferrer">
              {PROFILE.siteLabel}
            </a>
          </li>
          <li>
            <IconCalendar size={14} />
            Building since {PROFILE.since}
          </li>
        </ul>

        <ul className="stat-grid">
          {STATS.map((s) => (
            <li className="stat" key={s.label}>
              <span className="stat-value num">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <ul className="hero-socials">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a className="social" href={s.url} target="_blank" rel="noreferrer">
                {s.icon}
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
