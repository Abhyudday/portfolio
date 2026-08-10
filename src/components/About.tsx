import { ABOUT } from '../data/copy'
import { SECTIONS } from '../data/sections'
import { RichText } from './RichText'
import { SectionTitle } from './SectionTitle'

const section = SECTIONS[0]

/** Section 01 — the bio paragraphs. */
export function About() {
  return (
    <section className="section" id={section.id}>
      <SectionTitle no={section.no} note={section.note}>
        {section.title}
      </SectionTitle>

      <div className="panel about">
        {ABOUT.map((p) => (
          <p className="about-p" key={p}>
            <RichText text={p} />
          </p>
        ))}
      </div>
    </section>
  )
}
