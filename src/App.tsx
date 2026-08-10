import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { THREADS } from './data/sections'
import './App.css'

export default function App() {
  const [active, setActive] = useState<string>(THREADS[0].id)

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

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Navbar active={active} />

      <main className="page" id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />

        <p className="page-end mono">You have reached the end of the timeline.</p>

        <Footer />
      </main>
    </>
  )
}
