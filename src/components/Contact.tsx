import { PROFILE, SITE, SOCIAL } from '../config'
import { CONTACT } from '../data/copy'
import { SECTIONS } from '../data/sections'
import { HireMenu } from './HireMenu'
import {
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconLocation,
  IconMail,
  IconX,
} from './Icons'
import { RichText } from './RichText'
import { SectionTitle } from './SectionTitle'

const section = SECTIONS[5]

const LINKS = [
  { label: SITE.email, url: `mailto:${SITE.email}`, icon: <IconMail size={14} />, external: false },
  { label: `@${PROFILE.handle}`, url: SOCIAL.x, icon: <IconX size={13} />, external: true },
  { label: 'LinkedIn', url: SOCIAL.linkedin, icon: <IconLinkedIn size={14} />, external: true },
  {
    label: 'Instagram',
    url: SOCIAL.instagram,
    icon: <IconInstagram size={14} />,
    external: true,
  },
]

/** Section 06 — how to get in touch. */
export function Contact() {
  return (
    <section className="section" id={section.id}>
      <SectionTitle no={section.no} note={section.note}>
        {section.title}
      </SectionTitle>

      <div className="panel contact">
        <p className="contact-kicker">
          <span className="live-dot" aria-hidden="true" />
          {CONTACT.kicker}
        </p>

        <p className="contact-mark">
          <RichText text={CONTACT.mark} />
        </p>
        <p className="contact-sub">{CONTACT.sub}</p>

        <div className="contact-actions">
          <HireMenu className="btn btn-primary" />
          <a className="btn btn-secondary" href={SITE.github} target="_blank" rel="noreferrer">
            <IconGitHub size={14} />
            {CONTACT.primaryCta}
          </a>
        </div>

        <ul className="contact-links mono">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                className="contact-link"
                href={l.url}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
              >
                {l.icon}
                {l.label}
              </a>
            </li>
          ))}
          <li className="contact-place">
            <IconLocation size={14} />
            {SITE.location}
          </li>
        </ul>
      </div>
    </section>
  )
}
