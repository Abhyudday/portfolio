import { useEffect, useMemo, useRef, useState } from 'react'
import { SITE, SOCIAL } from '../config'
import { WORKS } from '../data/works'
import { EXPERIENCE } from '../data/experience'
import { SKILL_GROUPS } from '../data/skills'
import { THREADS } from '../data/sections'
import { IconArrowUpRight, IconClose, IconSearch } from './Icons'

export type Entry = {
  label: string
  kind: string
  hint?: string
  external?: boolean
  run: () => void
}

const go = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const open = (url: string) => () => window.open(url, '_blank', 'noopener,noreferrer')

/** X's search overlay, standing in for the old cheat-code palette. */
export function Palette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const entries = useMemo<Entry[]>(
    () => [
      ...THREADS.map((t) => ({
        label: t.title,
        kind: 'Thread',
        hint: t.note,
        run: go(t.id),
      })),
      ...WORKS.map((w) => ({
        label: w.name,
        kind: 'Mission',
        hint: w.platform,
        external: true,
        run: open(w.url),
      })),
      ...EXPERIENCE.map((job) => ({
        label: `${job.title} · ${job.company}`,
        kind: 'Role',
        hint: job.dateRange,
        run: go('record'),
      })),
      ...SKILL_GROUPS.flatMap((group) =>
        group.items.map((item) => ({
          label: item,
          kind: group.title,
          run: go('loadout'),
        })),
      ),
      { label: SITE.email, kind: 'Contact', external: true, run: open(`mailto:${SITE.email}`) },
      { label: 'GitHub', kind: 'Social', external: true, run: open(SITE.github) },
      { label: 'X / Twitter', kind: 'Social', external: true, run: open(SOCIAL.x) },
      { label: 'LinkedIn', kind: 'Social', external: true, run: open(SOCIAL.linkedin) },
      { label: 'Instagram', kind: 'Social', external: true, run: open(SOCIAL.instagram) },
    ],
    [],
  )

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return entries
    return entries.filter((e) =>
      `${e.label} ${e.kind} ${e.hint ?? ''}`.toLowerCase().includes(needle),
    )
  }, [entries, q])

  useEffect(() => {
    inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
      className="palette"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="palette-box"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onKeyDown={onKeyDown}
      >
        <div className="palette-top">
          <IconSearch size={19} />
          <input
            ref={inputRef}
            className="palette-input"
            value={q}
            onChange={(e) => {
              setQ(e.target.value)
              setSel(0)
            }}
            placeholder="Search threads, missions, stack"
            aria-label="Search"
            autoComplete="off"
            spellCheck={false}
          />
          <button type="button" className="palette-x" onClick={onClose} aria-label="Close search">
            <IconClose size={14} />
          </button>
        </div>

        <div className="palette-list" ref={listRef}>
          {results.length === 0 ? (
            <p className="palette-empty">No results for “{q.trim()}”</p>
          ) : (
            results.map((e, i) => (
              <button
                key={`${e.kind}-${e.label}`}
                type="button"
                className={i === sel ? 'palette-item is-sel' : 'palette-item'}
                onMouseEnter={() => setSel(i)}
                onClick={() => {
                  e.run()
                  onClose()
                }}
              >
                <span className="palette-item-text">
                  <span className="palette-label">{e.label}</span>
                  {e.hint ? <span className="palette-hint">{e.hint}</span> : null}
                </span>
                <span className="palette-kind">{e.kind}</span>
                {e.external ? <IconArrowUpRight size={13} /> : null}
              </button>
            ))
          )}
        </div>

        <div className="palette-foot">
          <span>↑↓ Select</span>
          <span>↵ Open</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  )
}
