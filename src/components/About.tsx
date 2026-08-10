import { ABOUT } from '../data/copy'
import { THREADS } from '../data/sections'
import { RichText } from './RichText'
import { SectionTitle } from './SectionTitle'

const thread = THREADS[0]

/** Thread 01 — the bio paragraphs. */
export function About() {
  return (
    <section className="section" id={thread.id}>
      <SectionTitle no={thread.no} note={thread.note}>
        {thread.title}
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
