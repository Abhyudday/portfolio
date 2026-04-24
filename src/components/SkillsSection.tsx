import { SKILL_GROUPS, skillPillVariant } from '../data/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="skills card" aria-labelledby="skills-heading">
      <div className="section-head section-head--stack">
        <p className="eyebrow">
          <span className="dot" /> Skills
        </p>
        <h2 className="section-title" id="skills-heading">
          Tech stack
        </h2>
        <p className="section-desc">
          Languages, data layers, and tools I use to ship products end to end.
        </p>
      </div>
      <div className="skills__body">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__category">{group.title}</h3>
            <ul className="skills__chips" aria-label={group.title}>
              {group.items.map((item, i) => (
                <li key={item}>
                  <span className={`skill-pill skill-pill--${skillPillVariant(i)}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
