import { SECTIONS } from '../data/sections'
import { SKILL_GROUPS } from '../data/skills'
import { SectionTitle } from './SectionTitle'

const section = SECTIONS[3]

/** Enough copies to fill the track no matter how short the group is. */
const COPIES = 4

/** Section 04 — skills, one scrolling row per group. */
export function Skills() {
  return (
    <section className="section" id={section.id}>
      <SectionTitle no={section.no} note={section.note}>
        {section.title}
      </SectionTitle>

      <div className="panel skills">
        {SKILL_GROUPS.map((group, i) => (
          <div className="skill-row" key={group.title}>
            <p className="skill-row-title">{group.title}</p>
            <div className="marquee" data-reverse={i % 2 === 1 ? 'true' : undefined}>
              <ul className="marquee-track" aria-label={group.items.join(', ')}>
                {Array.from({ length: COPIES }).flatMap((_, copy) =>
                  group.items.map((item) => (
                    <li className="pill" key={`${copy}-${item}`} aria-hidden={copy > 0}>
                      {item}
                    </li>
                  )),
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
