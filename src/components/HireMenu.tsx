import { useEffect, useId, useRef, useState } from 'react'
import { HIRE } from '../config'
import { IconArrowUpRight, IconChevronDown, IconMail } from './Icons'

type Props = {
  /** Visible button label. */
  label?: string
  /** Extra classes for the trigger button. */
  className?: string
}

/**
 * "Hire me" split into the three places work actually comes in. Behaves like X's
 * profile overflow menu: click to open, Escape or an outside click to close,
 * arrow keys to walk the list, and focus returns to the trigger on close.
 */
export function HireMenu({ label = 'Hire me', className = 'btn btn-primary' }: Props) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const itemsRef = useRef<Array<HTMLAnchorElement | null>>([])
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const onDocDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', onDocDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  /** Move focus into the menu once it opens. */
  useEffect(() => {
    if (open) itemsRef.current[0]?.focus()
  }, [open])

  const onItemKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = e.key === 'ArrowDown' ? i + 1 : i - 1
      const wrapped = (next + HIRE.length) % HIRE.length
      itemsRef.current[wrapped]?.focus()
    }
  }

  return (
    <div className="hire" ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        className={className}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
      >
        {label}
        <IconChevronDown size={14} className={open ? 'hire-caret is-open' : 'hire-caret'} />
      </button>

      {open ? (
        <div className="hire-menu" id={menuId} role="menu" aria-label="Ways to hire me">
          {HIRE.map((item, i) => {
            const isMail = item.id === 'email'
            return (
              <a
                key={item.id}
                ref={(el) => {
                  itemsRef.current[i] = el
                }}
                className="hire-item"
                role="menuitem"
                href={item.url}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noreferrer'}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => onItemKey(e, i)}
              >
                <span className="hire-item-text">
                  <span className="hire-item-label">{item.label}</span>
                  <span className="hire-item-hint">{item.hint}</span>
                </span>
                {isMail ? <IconMail size={14} /> : <IconArrowUpRight size={13} />}
              </a>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
