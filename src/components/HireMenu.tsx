import { useEffect, useRef, useState } from 'react'
import { SITE, HIRE } from '../config'
import { IconPlus } from './Icons'

const fiverrLogo = 'https://cdn.simpleicons.org/fiverr/1dbf73'
const upworkLogo = 'https://cdn.simpleicons.org/upwork/14A800'

type Props = {
  onContactEmail: () => void
  /** Hero uses the outline button; nav uses the pill hire style. Menu behavior is the same. */
  variant?: 'nav' | 'hero'
}

export function HireMenu({ onContactEmail, variant = 'nav' }: Props) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const menuIds =
    variant === 'hero'
      ? { button: 'hire-menu-button-hero', panel: 'hire-menu-panel-hero' }
      : { button: 'hire-menu-button', panel: 'hire-menu-panel' }
  const wrapClass = variant === 'hero' ? 'hire-wrap hire-wrap--hero' : 'hire-wrap'
  const btnClass = variant === 'hero' ? 'btn btn-outline' : 'btn btn-hire'

  return (
    <div className={wrapClass} ref={wrapRef}>
      <button
        type="button"
        className={btnClass}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuIds.panel}
        id={menuIds.button}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="btn-hire__plus" aria-hidden>
          <IconPlus />
        </span>
        Hire me
      </button>
      {open ? (
        <div
          id={menuIds.panel}
          className="hire-menu"
          role="menu"
          aria-labelledby={menuIds.button}
        >
          <a
            className="hire-menu__item"
            role="menuitem"
            href={HIRE.fiverr}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <img className="hire-menu__logo" src={fiverrLogo} alt="" width={22} height={22} />
            <span>Fiverr</span>
          </a>
          <a
            className="hire-menu__item"
            role="menuitem"
            href={HIRE.upwork}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <img className="hire-menu__logo" src={upworkLogo} alt="" width={22} height={22} />
            <span>Upwork</span>
          </a>
          <button
            type="button"
            className="hire-menu__item hire-menu__item--btn"
            role="menuitem"
            onClick={() => {
              setOpen(false)
              onContactEmail()
            }}
          >
            <span className="hire-menu__icon-mail" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span className="hire-menu__contact-text">
              <span className="hire-menu__contact-label">Contact me</span>
              <span className="hire-menu__contact-email">{SITE.email}</span>
            </span>
          </button>
        </div>
      ) : null}
    </div>
  )
}
