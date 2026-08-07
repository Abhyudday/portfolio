import { useCallback, useEffect, useState } from 'react'
import { SITE, SOCIAL } from './config'
import { WORKS } from './data/works'
import { Grain } from './components/Grain'
import { Hero } from './components/Hero'
import { Figures } from './components/Figures'
import { Roles } from './components/Roles'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { ProjectPanel } from './components/ProjectPanel'
import { Reveal } from './components/Reveal'
import { IconArrowUpRight } from './components/Icons'
import './App.css'

const NAV = [
  { id: 'work', label: 'work', target: 'experience' },
  { id: 'projects', label: 'projects', target: 'projects' },
  { id: 'about', label: 'about', target: 'about' },
  { id: 'contact', label: 'contact', target: 'contact' },
] as const

export default function App() {
  const [toast, setToast] = useState<string | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [active, setActive] = useState<string>('')

  /** Mark the nav item whose section is currently in view. */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const targets = NAV.map((n) => document.getElementById(n.target)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!top) return
        const hit = NAV.find((n) => n.target === top.target.id)
        if (hit) setActive(hit.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setToast('Email copied')
    } catch {
      setToast(SITE.email)
    }
    window.setTimeout(() => setToast(null), 2000)
  }, [])

  const closePanel = useCallback(() => setOpenIndex(null), [])

  return (
    <div className="page">
      <Grain />

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}

      <ProjectPanel
        project={openIndex === null ? null : (WORKS[openIndex] ?? null)}
        index={openIndex ?? 0}
        onClose={closePanel}
      />

      <div className="wrap">
        <nav className="nav" aria-label="Primary">
          <a className="nav__mark" href="#home">
            Abhyuday<em>.site</em>
          </a>

          <div className="nav__links">
            {NAV.map((n) => (
              <a
                key={n.id}
                className={`nav__link ${active === n.id ? 'is-active' : ''}`}
                href={`#${n.target}`}
                aria-current={active === n.id ? 'true' : undefined}
              >
                {n.label}
              </a>
            ))}
          </div>

          <a
            className="nav__cta"
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(SITE.hireSubject)}`}
          >
            Get in touch
          </a>
        </nav>

        <Hero onCopyEmail={copyEmail} />

        <Reveal>
          <Figures />
        </Reveal>

        <Reveal>
          <section id="experience" className="section">
            <p className="slabel">
              <span className="slabel__n">01</span>
              <span>Selected work</span>
            </p>
            <div>
              <Roles />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="projects" className="section">
            <p className="slabel">
              <span className="slabel__n">02</span>
              <span>Projects</span>
            </p>
            <div>
              <ul className="projects">
                {WORKS.map((p, i) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      className="project"
                      onClick={() => setOpenIndex(i)}
                      aria-haspopup="dialog"
                    >
                      <span className="project__n">{String(i + 1).padStart(2, '0')}</span>
                      <span>
                        <span className="project__name">{p.name}</span>
                        <span className="project__sub">{p.subtitle}</span>
                      </span>
                      <span className="project__right">
                        <span>{p.year}</span>
                        <IconArrowUpRight className="project__arrow" size={15} />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="section">
            <p className="slabel">
              <span className="slabel__n">03</span>
              <span>Capability</span>
            </p>
            <div>
              <h2 className="h2">
                A first-principles builder who <em>ships and sells</em>.
              </h2>
              <p className="body" style={{ marginTop: 22 }}>
                I have scaled a venture from zero, driven revenue through strategic partnerships,
                and executed end to end across product, operations, and growth. Most of my work
                sits where engineering meets business development — writing the code and closing
                the deal are the same job when you are the one accountable for the outcome.
              </p>
              <div style={{ marginTop: 40 }}>
                <Skills />
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="education" className="section">
            <p className="slabel">
              <span className="slabel__n">04</span>
              <span>Education</span>
            </p>
            <div>
              <Education />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="section">
            <p className="slabel">
              <span className="slabel__n">05</span>
              <span>Contact</span>
            </p>
            <div>
              <h2 className="h2" style={{ marginBottom: 26 }}>
                Have something worth <em>building</em>?
              </h2>
              <a className="contact__mail" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>

              <dl className="contact__rows">
                <div className="contact__row">
                  <dt>Based in</dt>
                  <dd>{SITE.location}</dd>
                </div>
                <div className="contact__row">
                  <dt>GitHub</dt>
                  <dd>
                    <a href={SITE.github} target="_blank" rel="noreferrer">
                      @abhyudday
                    </a>
                  </dd>
                </div>
                <div className="contact__row">
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
                      in/abhyudday
                    </a>
                  </dd>
                </div>
                <div className="contact__row">
                  <dt>X</dt>
                  <dd>
                    <a href={SOCIAL.x} target="_blank" rel="noreferrer">
                      @abhyuddayy
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </Reveal>

        <footer className="footer">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <div className="footer__social">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
