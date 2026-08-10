import { THREADS } from '../data/sections'
import { SKILL_GROUPS } from '../data/skills'
import { SectionTitle } from './SectionTitle'

const thread = THREADS[3]

/** Enough copies to fill the track no matter how short the group is. */
const COPIES = 4

/** Thread 04 — the loadout, one scrolling row per group. */
export function Skills() {
  return (
    <section className="section" id={thread.id}>
      <SectionTitle no={thread.no} note={thread.note}>
        {thread.title}
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
