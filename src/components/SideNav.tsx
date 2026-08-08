import { PROFILE, SITE, SOCIAL } from '../config'
import { MEDIA } from '../data/media'
import { THREADS } from '../data/sections'
import {
  IconBell,
  IconBookmark,
  IconBriefcase,
  IconDots,
  IconHome,
  IconMail,
  IconMoon,
  IconSearch,
  IconSparkle,
  IconSun,
  IconUser,
  IconVerified,
} from './Icons'

const RAIL = [
  { id: 'about', label: 'Home', Icon: IconHome },
  { id: 'record', label: 'Record', Icon: IconBriefcase },
  { id: 'missions', label: 'Missions', Icon: IconSparkle },
  { id: 'loadout', label: 'Loadout', Icon: IconBookmark },
  { id: 'education', label: 'Training', Icon: IconBell },
  { id: 'contact', label: 'Safehouse', Icon: IconMail },
] as const

type Props = {
  active: string
  onSearch: () => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function SideNav({ active, onSearch, theme, onToggleTheme }: Props) {
  return (
    <nav className="rail-left" aria-label="Sections">
      <div className="rail-left-inner">
        <a className="brand" href="#top" aria-label={SITE.name}>
          <img src={MEDIA.mark} alt="" width={40} height={40} />
        </a>

        <ul className="rail-nav">
          {RAIL.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rail-link${active === id ? ' is-active' : ''}`}
                aria-current={active === id ? 'true' : undefined}
              >
                <Icon size={26} />
                <span>{label}</span>
              </a>
            </li>
          ))}
          <li>
            <button type="button" className="rail-link" onClick={onSearch}>
              <IconSearch size={26} />
              <span>Search</span>
              <kbd className="rail-kbd">⌘K</kbd>
            </button>
          </li>
          <li>
            <a className="rail-link" href={SOCIAL.x} target="_blank" rel="noreferrer">
              <IconUser size={26} />
              <span>Profile</span>
            </a>
          </li>
        </ul>

        <a className="btn btn-primary rail-post" href="#contact">
          <span className="rail-post-long">Hire me</span>
          <span className="rail-post-short" aria-hidden="true">
            <IconMail size={20} />
          </span>
        </a>


        <div className="rail-foot">
          <button
            type="button"
            className="rail-account"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <img src={MEDIA.avatar} alt="" width={40} height={40} />
            <span className="rail-account-text">
              <span className="rail-account-name">
                {SITE.shortName}
                <IconVerified size={15} className="badge" />
              </span>
              <span className="rail-account-handle">@{PROFILE.handle}</span>
            </span>
            <span className="rail-account-icon" aria-hidden="true">
              {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

/** Bottom bar for narrow screens — the same jumps, X's mobile tab bar shape. */
export function MobileBar({ active, onSearch }: { active: string; onSearch: () => void }) {
  return (
    <nav className="mobile-bar" aria-label="Sections">
      {RAIL.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`mobile-tab${active === id ? ' is-active' : ''}`}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
        >
          <Icon size={24} />
        </a>
      ))}
      <button type="button" className="mobile-tab" onClick={onSearch} aria-label="Search">
        <IconSearch size={24} />
      </button>
    </nav>
  )
}

/** Sticky top bar on narrow screens, mirroring X's mobile header. */
export function FeedHeader({ active, onSearch }: { active: string; onSearch: () => void }) {
  const current = THREADS.find((t) => t.id === active)

  return (
    <div className="feed-header">
      <img className="feed-header-avatar" src={MEDIA.avatar} alt="" width={32} height={32} />
      <div className="feed-header-text">
        <span className="feed-header-name">{SITE.shortName}</span>
        <span className="feed-header-sub">{current ? current.title : SITE.role}</span>
      </div>
      <button type="button" className="feed-header-btn" onClick={onSearch} aria-label="Search">
        <IconSearch size={20} />
      </button>
      <a
        className="feed-header-btn"
        href={SOCIAL.x}
        target="_blank"
        rel="noreferrer"
        aria-label="Open X profile"
      >
        <IconDots size={18} />
      </a>
    </div>
  )
}
