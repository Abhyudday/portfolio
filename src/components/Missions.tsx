import { WORKS } from '../data/works'
import { IconArrowUpRight, IconTarget } from './Icons'

type Props = { onOpen: (index: number) => void }

export function Missions({ onOpen }: Props) {
  return (
    <div className="missions">
      {WORKS.map((p, i) => (
        <button
          key={p.id}
          type="button"
          className="mission"
          onClick={() => onOpen(i)}
          aria-haspopup="dialog"
        >
          <div className="mission__top">
            <span className="mission__id">M{String(i + 1).padStart(2, '0')}</span>
            <span>{p.platform}</span>
            <span className="mission__year">{p.year}</span>
          </div>

          <h3 className="mission__name">{p.name}</h3>
          <p className="mission__sub">{p.subtitle}</p>

          {p.metric ? (
            <span className="mission__metric">
              <IconTarget size={13} />
              {p.metric}
            </span>
          ) : null}

          <div className="mission__foot">
            {p.stack.slice(0, 2).join(' · ')}
            <span className="mission__go">
              Briefing
              <IconArrowUpRight size={13} />
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
