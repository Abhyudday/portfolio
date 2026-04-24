import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { SITE, SOCIAL } from './config'
import { WORKS } from './data/works'
import { EXPERIENCE } from './data/experience'
import {
  IconBag,
  IconChevron,
  IconCopy,
  IconHome,
  IconMoon,
  IconSun,
  IconUser,
  IconWorks,
} from './components/Icons'
import { WorkBrandIcon } from './components/WorkBrandIcon'
import { WorksModal } from './components/WorksModal'
import { HireMenu } from './components/HireMenu'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { SkillsSection } from './components/SkillsSection'
import avatarImg from './assets/avatar.png'
import './App.css'

type Theme = 'dark' | 'light'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function hireMailto() {
  const q = `mailto:${encodeURIComponent(SITE.email)}?subject=${encodeURIComponent(SITE.hireSubject)}`
  window.location.href = q
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as Theme) || 'dark'
  })
  const [toast, setToast] = useState<string | null>(null)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [navActive, setNavActive] = useState<'home' | 'about' | 'works' | 'experience'>('home')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2200)
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email)
      showToast('Email copied')
    } catch {
      showToast('Could not copy — email is in the button title')
    }
  }, [showToast])

  const openProject = useCallback((projectId: string) => {
    setActiveProjectId(projectId)
    setNavActive('works')
  }, [])

  const closeProject = useCallback(() => {
    setActiveProjectId(null)
  }, [])

  const activeProject = activeProjectId ? (WORKS.find((w) => w.id === activeProjectId) ?? null) : null

  const goToProjects = useCallback(() => {
    setNavActive('works')
    scrollToId('projects')
  }, [])

  const onSubmitContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const message = String(fd.get('message') || '').trim()
    const subject = `Project inquiry from ${name || 'portfolio'}`
    const body = `From: ${name}\nReply-to: ${email}\n\n${message}`
    window.location.href = `mailto:${encodeURIComponent(SITE.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="page">
      {toast ? <div className="toast" role="status">{toast}</div> : null}

      <WorksModal project={activeProject} onClose={closeProject} />

      <header className="shell">
        <nav className="nav card" aria-label="Primary">
          <div className="nav__icons">
            <button
              type="button"
              className={`icon-btn ${navActive === 'home' ? 'is-active' : ''}`}
              aria-current={navActive === 'home' ? 'page' : undefined}
              aria-label="Home"
              onClick={() => {
                setNavActive('home')
                scrollToId('home')
              }}
            >
              <IconHome />
            </button>
            <button
              type="button"
              className={`icon-btn ${navActive === 'about' ? 'is-active' : ''}`}
              aria-label="About"
              onClick={() => {
                setNavActive('about')
                scrollToId('about')
              }}
            >
              <IconUser />
            </button>
            <button
              type="button"
              className={`icon-btn ${navActive === 'works' ? 'is-active' : ''}`}
              aria-label="Works — jump to projects"
              onClick={goToProjects}
            >
              <IconWorks />
            </button>
            <button
              type="button"
              className={`icon-btn ${navActive === 'experience' ? 'is-active' : ''}`}
              aria-label="Experience — work history"
              onClick={() => {
                setNavActive('experience')
                scrollToId('experience')
              }}
            >
              <IconBag />
            </button>
          </div>
          <div className="nav__actions">
            <button
              type="button"
              className="icon-btn"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
            <HireMenu onContactEmail={hireMailto} />
          </div>
        </nav>

        <section id="home" className="hero card">
          <div className="hero__top">
            <p className="eyebrow">
              <span className="dot" /> {SITE.role}
            </p>
            <span className="badge-available">
              <span className="badge-available__dot" aria-hidden />
              Available for work
            </span>
          </div>
          <div className="hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title">{SITE.headline}</h1>
              <p className="hero__sub">
                {SITE.role} from {SITE.location}. {SITE.bio}
              </p>
              <div className="hero__actions">
                <HireMenu onContactEmail={hireMailto} variant="hero" />
                <button type="button" className="btn btn-outline" onClick={copyEmail} title={SITE.email}>
                  <IconCopy />
                  Copy email
                </button>
              </div>
            </div>
            <div className="hero__avatar-wrap">
              <div className="hero__avatar">
                <img
                  className="hero__avatar--img"
                  src={avatarImg}
                  alt="Illustrated avatar"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience card">
          <div className="section-head section-head--stack">
            <p className="eyebrow">
              <span className="dot" /> Experience
            </p>
            <h2 className="section-title">Work history</h2>
            <p className="section-desc">
              Founder-led Web3 studio work, founding engineering on Telegram products, and business development in
              crypto growth — with a résumé-style layout and timeline.
            </p>
          </div>
          <ExperienceTimeline items={EXPERIENCE} />
        </section>

        <section id="about" className="works-intro card">
          <div className="section-head section-head--stack">
            <p className="eyebrow">
              <span className="dot" /> About
            </p>
            <h2 className="section-title">My works</h2>
            <p className="section-desc">
              Purposeful interfaces and solid engineering across Web3, bots, and growth. Open any project below for
              case studies, links, and live demos.
            </p>
          </div>
        </section>

        <SkillsSection />

        <section id="projects" className="projects-block card">
          <div className="section-head">
            <p className="eyebrow">
              <span className="dot" /> Projects
            </p>
            <button type="button" className="link-arrow" onClick={goToProjects}>
              View all →
            </button>
          </div>
          <ul className="project-list">
            {WORKS.map((p) => (
              <li key={p.id}>
                <button type="button" className="project-row" onClick={() => openProject(p.id)}>
                  <WorkBrandIcon emoji={p.emoji} />
                  <div className="project-row__text">
                    <span className="project-row__name">{p.name}</span>
                    <span className="project-row__sub">{p.subtitle}</span>
                  </div>
                  <IconChevron className="project-row__chev" />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact card">
          <div className="contact__head">
            <p className="eyebrow">
              <span className="dot" /> Hire me
            </p>
            <span className="badge-available">
              <span className="badge-available__dot" aria-hidden />
              Available for work
            </span>
          </div>
          <h2 className="section-title">Project inquiry</h2>
          <p className="section-desc contact__sub">
            Have an idea and need engineering help? Send a note — your default mail app will open with this message.
          </p>
          <form className="contact-form" onSubmit={onSubmitContact}>
            <div className="contact-form__row">
              <label className="field">
                <span className="field__label">Name</span>
                <input className="field__input" name="name" required autoComplete="name" placeholder="Your name" />
              </label>
              <label className="field">
                <span className="field__label">Email</span>
                <input
                  className="field__input"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="field">
              <span className="field__label">Message</span>
              <textarea className="field__input field__textarea" name="message" required rows={4} placeholder="Tell me about the project, timeline, and stack." />
            </label>
            <button type="submit" className="btn btn-submit">
              Submit inquiry
            </button>
          </form>
        </section>

        <section className="social card" aria-label="Social links">
          <p className="eyebrow eyebrow--grow">
            <span className="dot" /> Follow me
          </p>
          <div className="social__links">
            <a className="social__btn" href={SOCIAL.x} target="_blank" rel="noreferrer" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a className="social__btn" href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a className="social__btn" href={SOCIAL.website} target="_blank" rel="noreferrer" aria-label="Website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
            </a>
            <a className="social__btn" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
              </svg>
            </a>
          </div>
        </section>

        <footer className="footer">
          © {SITE.year} {SITE.name} — developer portfolio.
        </footer>
      </header>
    </div>
  )
}
