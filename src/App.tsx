import { useCallback, useEffect, useState } from 'react'
import { WORKS } from './data/works'
import { THREADS } from './data/sections'
import { ProfileHeader } from './components/ProfileHeader'
import { SideNav, MobileBar, FeedHeader } from './components/SideNav'
import { RightRail } from './components/RightRail'
import { PostDetail } from './components/PostDetail'
import { Palette } from './components/Palette'
import {
  PinnedStats,
  ThreadAbout,
  ThreadContact,
  ThreadEducation,
  ThreadLoadout,
  ThreadMissions,
  ThreadRecord,
} from './components/Threads'
import './App.css'

type Theme = 'dark' | 'light'

export default function App() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [search, setSearch] = useState(false)
  const [active, setActive] = useState<string>(THREADS[0].id)
  const [theme, setTheme] = useState<Theme>('dark')

  /** ⌘K / Ctrl+K toggles search. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearch((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  /** Highlight the thread currently under the top of the viewport. */
  useEffect(() => {
    const els = THREADS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: 0 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const closeDetail = useCallback(() => setOpenId(null), [])
  const closeSearch = useCallback(() => setSearch(false), [])
  const openSearch = useCallback(() => setSearch(true), [])
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const openIndex = openId === null ? -1 : WORKS.findIndex((w) => w.id === openId)

  return (
    <>
      <a className="skip" href="#feed">
        Skip to content
      </a>

      <div className="shell" id="top">
        <SideNav
          active={active}
          onSearch={openSearch}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="feed" id="feed">
          <FeedHeader active={active} onSearch={openSearch} />

          <ProfileHeader />

          <nav className="tabs" aria-label="Threads">
            {THREADS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`tab${active === t.id ? ' is-active' : ''}`}
                aria-current={active === t.id ? 'true' : undefined}
              >
                <span>{t.title}</span>
              </a>
            ))}
          </nav>

          <PinnedStats />
          <ThreadAbout />
          <ThreadRecord />
          <ThreadMissions onOpen={setOpenId} />
          <ThreadLoadout />
          <ThreadEducation />
          <ThreadContact />

          <p className="feed-end">You have reached the end of the timeline.</p>
        </main>

        <RightRail onSearch={openSearch} />
      </div>

      <MobileBar active={active} onSearch={openSearch} />

      <PostDetail
        project={openIndex < 0 ? null : (WORKS[openIndex] ?? null)}
        index={openIndex < 0 ? 0 : openIndex}
        onClose={closeDetail}
      />

      {search ? <Palette onClose={closeSearch} /> : null}
    </>
  )
}
