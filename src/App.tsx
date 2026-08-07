import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { SITE, SOCIAL } from './config'
import { WORKS } from './data/works'
import { EXPERIENCE } from './data/experience'
import {
  IconArrowUpRight,
  IconBriefcase,
  IconChevron,
  IconGitHub,
  IconGlobe,
  IconHome,
  IconInstagram,
  IconLayers,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconTerminal,
  IconX,
} from './components/Icons'
import { Background } from './components/Background'
import { Hero } from './components/Hero'
import { StatStrip } from './components/StatStrip'
import { Marquee } from './components/Marquee'
import { SectionHead } from './components/SectionHead'
import { Reveal } from './components/Reveal'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { AdditionalExperience } from './components/AdditionalExperience'
import { Education } from './components/Education'
import { SkillsSection } from './components/SkillsSection'
import { WorksModal } from './components/WorksModal'
import './App.css'

type NavId = 'home' | 'work' | 'projects' | 'contact'

const NAV_ITEMS: { id: NavId; label: string; target: string; Icon: typeof IconHome }[] = [
  { id: 'home', label: 'Home', target: 'home', Icon: IconHome },
  { id: 'work', label: 'Work', target: 'experience', Icon: IconBriefcase },
  { id: 'projects', label: 'Projects', target: 'projects', Icon: IconLayers },
  { id: 'contact', label: 'Contact', target: 'contact', Icon: IconTerminal },
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [toast, setToast] = useState<string | null>(null)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [navActive, setNavActive] = useState<NavId>('home')

  /** Highlight the nav item for whichever section is currently in view. */
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => ({
      id: n.id,
      el: document.getElementById(n.target),
    })).filter((s): s is { id: NavId; el: HTMLElement } => s.el !== null)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const match = sections.find((s) => s.el === visible.target)
        if (match) setNavActive(match.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => io.observe(s.el))
    return () => io.disconnect()
  }, [])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2200)
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email)
      showToast('email copied')
    } catch {
      showToast(SITE.email)
    }
  }, [showToast])

  const openProject = useCallback((projectId: string) => {
    setActiveProjectId(projectId)
  }, [])

  const closeProject = useCallback(() => setActiveProjectId(null), [])

  const goToProjects = useCallback(() => scrollToId('projects'), [])

  const activeProject = activeProjectId
    ? (WORKS.find((w) => w.id === activeProjectId) ?? null)
    : null

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
      <Background />

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}

      <WorksModal project={activeProject} onClose={closeProject} />

      <div className="shell">
        <nav className="nav" aria-label="Primary">
          <div className="nav__brand">
            <span className="nav__brand-dot" aria-hidden>
              A
            </span>
            <span>
              abhyuday<span className="nav__brand-mono">.site</span>
            </span>
          </div>

          <div className="nav__links">
            {NAV_ITEMS.map(({ id, label, target }) => (
              <button
                key={id}
                type="button"
                className={`nav__link ${navActive === id ? 'is-active' : ''}`}
                aria-current={navActive === id ? 'page' : undefined}
                aria-label={label}
                onClick={() => {
                  setNavActive(id)
                  scrollToId(target)
                }}
              >
                <span className="nav__link-indicator" aria-hidden />
                <span className="nav__link-label">{label}</span>
              </button>
            ))}
          </div>

          <div className="nav__right">
            <a
              className="btn btn--primary btn--mono"
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(SITE.hireSubject)}`}
            >
              Hire me
            </a>
          </div>
        </nav>

        <Hero onCopyEmail={copyEmail} onViewWork={goToProjects} />

        <Reveal>
          <StatStrip />
        </Reveal>

        <Reveal>
          <section className="glass section" style={{ paddingBlock: 22 }}>
            <p className="section__eyebrow" style={{ marginBottom: 16 }}>
              <span className="slash">//</span> delivered for
            </p>
            <Marquee />
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="glass section">
            <SectionHead
              eyebrow="about"
              title="First-principles builder"
              desc="Founder and business builder with hands-on experience scaling a venture from zero — driving revenue through strategic partnerships and executing end-to-end across product, operations, and growth. Generated $9M+ in trading volume through business development and campaign execution, and built a 200+ client global agency with a 4.6/5 satisfaction rating. Comfortable owning ambiguity in fast-paced environments."
            />
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="glass section">
            <SectionHead
              eyebrow="experience"
              title="Where I've shipped"
              desc="Production fintech, a founder-led Web3 studio, and crypto growth partnerships."
            />
            <div style={{ marginTop: 26 }}>
              <ExperienceTimeline items={EXPERIENCE} />
            </div>
            <AdditionalExperience />
          </section>
        </Reveal>

        <Reveal>
          <SkillsSection />
        </Reveal>

        <Reveal>
          <section id="projects" className="glass section">
            <SectionHead
              eyebrow="projects"
              title="Things I've built"
              desc="Solana-native products — investing, trading, and bots."
              action={
                <button type="button" className="link-arrow" onClick={goToProjects}>
                  {WORKS.length} projects
                  <IconArrowUpRight size={14} />
                </button>
              }
            />
            <ul className="proj-grid">
              {WORKS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="proj-card"
                    data-hue={p.hue}
                    onClick={() => openProject(p.id)}
                  >
                    <span className="proj-icon" aria-hidden>
                      {p.emoji}
                    </span>
                    <span className="proj-card__text">
                      <span className="proj-card__name-row">
                        <span className="proj-card__name">{p.name}</span>
                        {p.metric ? <span className="proj-card__metric">{p.metric}</span> : null}
                      </span>
                      <span className="proj-card__sub">{p.subtitle}</span>
                      <span className="proj-card__platform">{p.platform}</span>
                    </span>
                    <IconChevron className="proj-card__chev" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section id="education" className="glass section">
            <SectionHead eyebrow="education" title="Studying while shipping" />
            <Education />
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="glass section">
            <SectionHead
              eyebrow="contact"
              title="Let's build something"
              desc="Have an idea and need engineering help? Send a note — your mail app will open with the message ready."
            />

            <div className="contact-rows">
              <a className="contact-row" href={`mailto:${SITE.email}`}>
                <span className="contact-row__icon">
                  <IconMail size={17} />
                </span>
                <span className="contact-row__text">
                  <span className="contact-row__label">Email</span>
                  <span className="contact-row__value">{SITE.email}</span>
                </span>
              </a>
              <a className="contact-row" href={`tel:${SITE.phone.replace(/\s/g, '')}`}>
                <span className="contact-row__icon">
                  <IconPhone size={17} />
                </span>
                <span className="contact-row__text">
                  <span className="contact-row__label">Phone</span>
                  <span className="contact-row__value">{SITE.phone}</span>
                </span>
              </a>
              <a className="contact-row" href={SITE.github} target="_blank" rel="noreferrer">
                <span className="contact-row__icon">
                  <IconGitHub size={17} />
                </span>
                <span className="contact-row__text">
                  <span className="contact-row__label">GitHub</span>
                  <span className="contact-row__value">github.com/abhyudday</span>
                </span>
              </a>
              <span className="contact-row">
                <span className="contact-row__icon">
                  <IconGlobe size={17} />
                </span>
                <span className="contact-row__text">
                  <span className="contact-row__label">Location</span>
                  <span className="contact-row__value">{SITE.location}</span>
                </span>
              </span>
            </div>

            <form className="contact-form" onSubmit={onSubmitContact}>
              <div className="contact-form__row">
                <label className="field">
                  <span className="field__label">name</span>
                  <input
                    className="field__input"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>
                <label className="field">
                  <span className="field__label">email</span>
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
                <span className="field__label">message</span>
                <textarea
                  className="field__input field__textarea"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the project, timeline, and stack."
                />
              </label>
              <button type="submit" className="btn btn--primary btn--submit">
                Send inquiry
              </button>
            </form>
          </section>
        </Reveal>

        <section className="glass social" aria-label="Social links">
          <p className="social__label">
            <span style={{ color: 'var(--green)' }}>//</span> find me online
          </p>
          <div className="social__links">
            <a
              className="social__btn"
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IconGitHub />
            </a>
            <a className="social__btn" href={SOCIAL.x} target="_blank" rel="noreferrer" aria-label="X">
              <IconX />
            </a>
            <a
              className="social__btn"
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
            <a
              className="social__btn"
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
            <a
              className="social__btn"
              href={SITE.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
            >
              <IconGlobe />
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <span className="footer__built">
            <span className="footer__pulse" aria-hidden />
            built with react + typescript
          </span>
        </footer>
      </div>
    </div>
  )
}
