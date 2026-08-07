import { SITE } from '../config'
import { IconArrowRight, IconCopy } from './Icons'

type Props = {
  onCopyEmail: () => void
  onViewWork: () => void
}

export function Hero({ onCopyEmail, onViewWork }: Props) {
  return (
    <section id="home" className="glass hero">
      <div className="hero__top">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-code">const</span> role ={' '}
          <span className="tok-s">'{SITE.role}'</span>
        </p>
        <span className="status-pill">
          <span className="status-pill__dot" aria-hidden />
          Available for work
        </span>
      </div>

      <div className="hero__grid">
        <div>
          <h1 className="hero__title">
            Abhyuday
            <br />
            <span className="grad">Pratap Singh</span>
          </h1>
          <p className="hero__sub">
            Founder and engineer building in crypto — shipping production fintech, scaling a Web3
            agency to 200+ projects, and driving $9M+ in trading volume through partnerships.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onViewWork}>
              View projects
              <IconArrowRight />
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--mono"
              onClick={onCopyEmail}
              title={SITE.email}
            >
              <IconCopy />
              {SITE.email}
            </button>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  )
}

function CodeCard() {
  return (
    <div className="code-card" aria-hidden>
      <div className="code-card__bar">
        <div className="code-card__traffic">
          <span />
          <span />
          <span />
        </div>
        <span className="code-card__file">abhyuday.ts</span>
      </div>
      <pre className="code-card__body">
        <span className="code-line">
          <span className="tok-comment">// noida, india → building globally</span>
        </span>
        <span className="code-line">
          <span className="tok-k">const</span> <span className="tok-n">dev</span>{' '}
          <span className="tok-p">=</span> <span className="tok-p">{'{'}</span>
        </span>
        <span className="code-line">
          {'  '}
          <span className="tok-fn">stack</span>
          <span className="tok-p">:</span> <span className="tok-p">[</span>
          <span className="tok-s">'rust'</span>
          <span className="tok-p">,</span> <span className="tok-s">'solidity'</span>
          <span className="tok-p">,</span> <span className="tok-s">'ts'</span>
          <span className="tok-p">],</span>
        </span>
        <span className="code-line">
          {'  '}
          <span className="tok-fn">chain</span>
          <span className="tok-p">:</span> <span className="tok-s">'solana'</span>
          <span className="tok-p">,</span>
        </span>
        <span className="code-line">
          {'  '}
          <span className="tok-fn">shipped</span>
          <span className="tok-p">:</span> <span className="tok-n">700</span>
          <span className="tok-p">+,</span>
        </span>
        <span className="code-line">
          {'  '}
          <span className="tok-fn">volume</span>
          <span className="tok-p">:</span> <span className="tok-s">'$9M+'</span>
          <span className="tok-p">,</span>
        </span>
        <span className="code-line">
          {'  '}
          <span className="tok-fn">status</span>
          <span className="tok-p">:</span> <span className="tok-s">'shipping'</span>
          <span className="tok-p">,</span>
        </span>
        <span className="code-line">
          <span className="tok-p">{'}'}</span>
          <span className="code-caret" />
        </span>
      </pre>
    </div>
  )
}
