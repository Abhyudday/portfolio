import { SKILL_GROUPS } from '../data/skills'

/** Key/value rows — reads like a spec sheet rather than a tag cloud. */
export function Skills() {
  return (
    <div className="skills">
      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="skillrow">
          <h3 className="skillrow__k">{group.title}</h3>
          <ul className="skillrow__v">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
