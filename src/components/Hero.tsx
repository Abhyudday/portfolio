import { SITE } from '../config'
import { CLIENTS } from '../data/stats'
import { IconArrowUpRight, IconCopy } from './Icons'

type Props = {
  onCopyEmail: () => void
}

export function Hero({ onCopyEmail }: Props) {
  return (
    <header id="home" className="hero">
      <p className="hero__kicker">
        <span>{SITE.role}</span>
        <span className="hero__rule" aria-hidden />
        <span>{SITE.location}</span>
      </p>

      <h1 className="hero__name">
        Abhyuday
        <em>Pratap Singh</em>
      </h1>

      <div className="hero__cols">
        <div>
          <p className="lede">
            I build crypto products and the businesses around them — a production fintech app
            serving 20,000+ users, an agency that has shipped 700+ projects, and $9M+ in trading
            volume driven through partnerships.
          </p>
          <div className="hero__actions">
            <a className="ulink" href="#projects">
              See the work
              <IconArrowUpRight />
            </a>
            <button type="button" className="ulink" onClick={onCopyEmail} title={SITE.email}>
              <IconCopy />
              {SITE.email}
            </button>
          </div>
        </div>

        <div>
          <p className="hero__kicker" style={{ marginBottom: 14 }}>
            <span>Delivered for</span>
          </p>
          <ul className="clients">
            {CLIENTS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
