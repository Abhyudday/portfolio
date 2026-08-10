import { CLIENTS_HEADING } from '../data/copy'
import { SECTIONS } from '../data/sections'
import { CLIENTS, EDUCATION } from '../data/stats'
import { SectionTitle } from './SectionTitle'

const section = SECTIONS[4]

/** Section 05 — education, and who the work went out to. */
export function Education() {
  return (
    <section className="section" id={section.id}>
      <SectionTitle no={section.no} note={section.note}>
        {section.title}
      </SectionTitle>

      <div className="panel edu">
        <div className="edu-head">
          <h3 className="edu-degree">{EDUCATION.degree}</h3>
          <span className="edu-dates mono">{EDUCATION.dateRange}</span>
        </div>
        <p className="edu-school">{EDUCATION.school}</p>
        <ul className="edu-notes">
          {EDUCATION.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="panel clients">
        <p className="clients-heading">{CLIENTS_HEADING}</p>
        <ul className="client-row">
          {CLIENTS.map((c) => (
            <li className="client" key={c}>
              <span className="client-mark" aria-hidden="true">
                {c.charAt(0).toUpperCase()}
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
