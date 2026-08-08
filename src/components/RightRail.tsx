import { SITE, SOCIAL } from '../config'
import { CLIENTS } from '../data/stats'
import { SKILL_GROUPS } from '../data/skills'
import { WORKS } from '../data/works'
import { EXPERIENCE } from '../data/experience'
import { COMPANY_MEDIA, MEDIA, WORK_MEDIA } from '../data/media'
import { CLIENTS_HEADING, FOOTER_BLURB } from '../data/copy'
import { IconArrowUpRight, IconGlobe, IconSearch } from './Icons'

/** Every image in the repo, each with an honest caption. */
const GALLERY = [
  { src: MEDIA.banner, label: 'Profile banner', alt: 'Profile banner artwork' },
  { src: MEDIA.avatar, label: SITE.shortName, alt: `${SITE.name} portrait` },
  { src: MEDIA.mark, label: 'Site mark', alt: 'Site brand mark' },
  ...EXPERIENCE.filter((job) => COMPANY_MEDIA[job.id]).map((job) => ({
    src: COMPANY_MEDIA[job.id] as string,
    label: job.company,
    alt: `${job.company} logo`,
  })),
  ...WORKS.filter((work) => WORK_MEDIA[work.id]).map((work) => ({
    src: WORK_MEDIA[work.id] as string,
    label: work.name,
    alt: `${work.name} artwork`,
  })),
]

export function RightRail({ onSearch }: { onSearch: () => void }) {
  return (
    <aside className="rail-right" aria-label="Highlights">
      <div className="rail-right-inner">
        <button type="button" className="rail-search" onClick={onSearch}>
          <IconSearch size={18} />
          <span>Search</span>
          <kbd>⌘K</kbd>
        </button>

        <section className="rail-card">
          <h2 className="rail-card-title">Media</h2>
          <ul className="gallery">
            {GALLERY.map((item) => (
              <li key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rail-card">
          <h2 className="rail-card-title">Stack</h2>
          <ul className="rail-trends">
            {SKILL_GROUPS.map((group) => (
              <li key={group.title}>
                <span className="rail-trend-kicker">{group.title}</span>
                <span className="rail-trend-name">{group.items.join(' · ')}</span>
                <span className="rail-trend-count num">{group.items.length} tools</span>
              </li>
            ))}
          </ul>
          <a className="rail-card-more" href="#loadout">
            Show more
          </a>
        </section>

        <section className="rail-card">
          <h2 className="rail-card-title">{CLIENTS_HEADING}</h2>
          <ul className="rail-follow">
            {CLIENTS.map((client) => (
              <li key={client}>
                <span className="rail-follow-mark" aria-hidden="true">
                  {client.charAt(0).toUpperCase()}
                </span>
                <span className="rail-follow-text">
                  <span className="rail-follow-name">{client}</span>
                  <span className="rail-follow-handle">Delivered for</span>
                </span>
                <span className="rail-follow-btn">Shipped</span>
              </li>
            ))}
          </ul>
          <a className="rail-card-more" href="#missions">
            Show more
          </a>
        </section>

        <footer className="rail-foot-note">
          <p>{FOOTER_BLURB}</p>
          <p className="rail-foot-links">
            <a href={SITE.website} target="_blank" rel="noreferrer">
              <IconGlobe size={13} /> {SITE.website.replace('https://', '')}
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer">
              @abhyuddayy <IconArrowUpRight size={11} />
            </a>
          </p>
          <p className="rail-foot-copy">
            © {SITE.year} {SITE.name}
          </p>
        </footer>
      </div>
    </aside>
  )
}
