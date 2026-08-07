import { useCallback, useEffect, useState } from 'react'
import { SITE } from './config'
import { WORKS } from './data/works'
import { Ambient } from './components/Ambient'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Section } from './components/Section'
import { About } from './components/About'
import { Record } from './components/Record'
import { Missions } from './components/Missions'
import { Briefing } from './components/Briefing'
import { Loadout } from './components/Loadout'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Cheats } from './components/Cheats'
import { Reveal } from './components/Reveal'
import { IconArrowRight, IconMail } from './components/Icons'
import './App.css'

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [cheats, setCheats] = useState(false)

  /** ⌘K / Ctrl+K toggles the cheat-code palette. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCheats((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeBriefing = useCallback(() => setOpenIndex(null), [])
  const closeCheats = useCallback(() => setCheats(false), [])
  const openCheats = useCallback(() => setCheats(true), [])

  return (
    <>
      <Ambient />

      <div className="page">
        <Nav onCheat={openCheats} />

        <Hero />

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal>
          <Section id="about" no="01" title="The bio" note="Who you are dealing with">
            <About />
          </Section>
        </Reveal>

        <Reveal>
          <Section id="record" no="02" title="Rap sheet" note="Roles on record">
            <Record />
          </Section>
        </Reveal>

        <Reveal>
          <Section id="missions" no="03" title="Missions" note={`${WORKS.length} completed`}>
            <Missions onOpen={setOpenIndex} />
          </Section>
        </Reveal>

        <Reveal>
          <Section id="loadout" no="04" title="Loadout" note="Tools of the trade">
            <Loadout />
          </Section>
        </Reveal>

        <Reveal>
          <Section id="education" no="05" title="Training" note="Where it started">
            <Education />
          </Section>
        </Reveal>

        <Reveal>
          <Section id="contact" no="06" title="Safehouse" note="Open for work">
            <div className="contact">
              <p className="contact__kicker">Available for new missions</p>
              <p className="contact__mark">
                Got something worth <em>building</em>?
              </p>
              <p className="contact__sub">
                Product work, Web3 builds, or partnerships — send the brief and I will tell you
                straight whether I am the right person for it.
              </p>
              <div className="contact__row">
                <a
                  className="btn btn--primary"
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(SITE.hireSubject)}`}
                >
                  <IconMail size={14} />
                  {SITE.email}
                </a>
                <a className="btn btn--ghost" href={SITE.github} target="_blank" rel="noreferrer">
                  See the code
                  <IconArrowRight />
                </a>
              </div>
            </div>
          </Section>
        </Reveal>

        <Footer />
      </div>

      <Briefing
        project={openIndex === null ? null : (WORKS[openIndex] ?? null)}
        index={openIndex ?? 0}
        onClose={closeBriefing}
      />

      {cheats ? <Cheats onClose={closeCheats} /> : null}
    </>
  )
}
