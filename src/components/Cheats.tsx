import { useEffect, useMemo, useRef, useState } from 'react'
import { SITE, SOCIAL } from '../config'
import { WORKS } from '../data/works'
import { SECTIONS } from '../data/sections'

export type CheatEntry = {
  code: string
  label: string
  kind: string
  run: () => void
}

type Props = { onClose: () => void }

const go = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const open = (url: string) => () => window.open(url, '_blank', 'noopener,noreferrer')

export function Cheats({ onClose }: Props) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const entries = useMemo<CheatEntry[]>(
    () => [
      ...SECTIONS.map((s) => ({
        code: `GO${s.label.slice(0, 3).toUpperCase()}`,
        label: s.label,
        kind: 'Jump',
        run: go(s.id),
      })),
      ...WORKS.map((w) => ({
        code: 'LAUNCH',
        label: w.name,
        kind: 'Mission',
        run: open(w.url),
      })),
      { code: 'HITMEUP', label: SITE.email, kind: 'Contact', run: open(`mailto:${SITE.email}`) },
      { code: 'GITGUD', label: 'GitHub', kind: 'Social', run: open(SITE.github) },
      { code: 'POSTUP', label: 'X / Twitter', kind: 'Social', run: open(SOCIAL.x) },
      { code: 'SUITUP', label: 'LinkedIn', kind: 'Social', run: open(SOCIAL.linkedin) },
      { code: 'SNAPSHOT', label: 'Instagram', kind: 'Social', run: open(SOCIAL.instagram) },
    ],
    [],
  )

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return entries
    return entries.filter((e) =>
      `${e.code} ${e.label} ${e.kind}`.toLowerCase().includes(needle),
    )
  }, [entries, q])

  useEffect(() => {
    inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Keep the highlighted row inside the scroll viewport.
  useEffect(() => {
    listRef.current?.children[sel]?.scrollIntoView({ block: 'nearest' })
  }, [sel])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSel((s) => (results.length ? (s + 1) % results.length : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((s) => (results.length ? (s - 1 + results.length) % results.length : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const hit = results[sel]
      if (hit) {
        hit.run()
        onClose()
      }
    }
  }

  return (
    <div
      className="cheat"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="cheat__box"
        role="dialog"
        aria-modal="true"
        aria-label="Cheat codes"
        onKeyDown={onKeyDown}
      >
        <div className="cheat__top">
          <span className="cheat__caret" aria-hidden="true">
            &gt;
          </span>
          <input
            ref={inputRef}
            className="cheat__input"
            value={q}
            onChange={(e) => {
              setQ(e.target.value)
              setSel(0)
            }}
            placeholder="Enter cheat code"
            aria-label="Search cheat codes"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cheat__esc">Esc</span>
        </div>

        <div className="cheat__list" ref={listRef}>
          {results.length === 0 ? (
            <p className="cheat__empty">Code not recognised</p>
          ) : (
            results.map((e, i) => (
              <button
                key={`${e.code}-${e.label}`}
                type="button"
                className={i === sel ? 'cheat__item is-sel' : 'cheat__item'}
                onMouseEnter={() => setSel(i)}
                onClick={() => {
                  e.run()
                  onClose()
                }}
              >
                <span className="cheat__code">{e.code}</span>
                <span className="cheat__lab">{e.label}</span>
                <span className="cheat__kind">{e.kind}</span>
              </button>
            ))
          )}
        </div>

        <div className="cheat__foot">
          <span>↑↓ Select</span>
          <span>↵ Activate</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  )
}
