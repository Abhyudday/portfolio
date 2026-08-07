import { SKILL_GROUPS } from '../data/skills'
import { SectionHead } from './SectionHead'

export function SkillsSection() {
  return (
    <section id="skills" className="glass section skills" aria-labelledby="skills-heading">
      <SectionHead
        eyebrow="skills"
        title="Stack & strengths"
        desc="What I build with, and what I bring to the table beyond code."
        titleId="skills-heading"
      />
      <div className="skills__body">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className={`skills__group skills__group--${group.title.toLowerCase()}`}
          >
            <div className="skills__group-head">
              <h3 className="skills__category">{group.title}</h3>
              <span className="skills__count">{String(group.items.length).padStart(2, '0')}</span>
              <span className="skills__rule" aria-hidden />
            </div>
            <ul className="skills__chips" aria-label={group.title}>
              {group.items.map((item) => (
                <li key={item}>
                  <span className="chip">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
