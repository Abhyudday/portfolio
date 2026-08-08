import { PROFILE, SITE, SOCIAL } from '../config'
import { MEDIA } from '../data/media'
import { BIO } from '../data/copy'
import { STATS } from '../data/stats'
import { HireMenu } from './HireMenu'
import { RichText } from './RichText'
import {
  IconArrowUpRight,
  IconBriefcase,
  IconCalendar,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconLocation,
  IconGlobe,
  IconVerified,
  IconX,
} from './Icons'

/**
 * X profile header. The metric row under the bio carries the real STATS figures
 * instead of invented follower counts, and "Building since" uses the DSIGNRZ
 * founding date rather than a made-up account join date.
 */
export function ProfileHeader() {
  return (
    <header className="profile">
      <div className="profile-banner">
        <img src={MEDIA.banner} alt="" />
      </div>

      <div className="profile-top">
        <span className="profile-avatar">
          <img src={MEDIA.avatar} alt={SITE.name} width={134} height={134} />
        </span>

        <div className="profile-cta">
          <a className="btn btn-ghost" href={SOCIAL.x} target="_blank" rel="noreferrer">
            <IconX size={14} />
            <span className="sr-only">Open X profile</span>
          </a>
          <HireMenu />
        </div>
      </div>

      <div className="profile-body">
        <h1 className="profile-name">
          {SITE.name}
          <IconVerified className="badge" size={22} />
        </h1>
        <p className="profile-handle">@{PROFILE.handle}</p>

        <p className="profile-bio">
          <RichText text={BIO} />
        </p>

        <ul className="profile-meta">
          <li>
            <IconBriefcase size={15} />
            {SITE.role}
          </li>
          <li>
            <IconLocation size={15} />
            {SITE.location}
          </li>
          <li>
            <IconGlobe size={15} />
            <a href={SITE.website} target="_blank" rel="noreferrer" className="mention">
              {PROFILE.siteLabel}
            </a>
          </li>
          <li>
            <IconCalendar size={15} />
            Building since {PROFILE.since}
          </li>
        </ul>

        <ul className="profile-figures">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <b className="num">{stat.value}</b>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>

        <ul className="profile-socials">
          <li>
            <a href={SITE.github} target="_blank" rel="noreferrer">
              <IconGitHub size={15} />
              GitHub
              <IconArrowUpRight size={12} />
            </a>
          </li>
          <li>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedIn size={15} />
              LinkedIn
              <IconArrowUpRight size={12} />
            </a>
          </li>
          <li>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <IconInstagram size={15} />
              Instagram
              <IconArrowUpRight size={12} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
