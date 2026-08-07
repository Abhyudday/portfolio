import { SKILL_GROUPS } from '../data/skills'

export function Loadout() {
  return (
    <div className="loadout">
      {SKILL_GROUPS.map((group) => (
        <div className="loadout__col" key={group.title}>
          <h3 className="loadout__h">
            {group.title}
            <span aria-hidden="true" />
          </h3>
          <ul className="loadout__items">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
