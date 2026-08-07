import { CLIENTS } from '../data/stats'

export function About() {
  return (
    <div className="about">
      <div className="about__copy">
        <p>
          I have scaled a venture from zero, driven revenue through <b>strategic partnerships</b>,
          and executed end to end across product, operations, and growth.
        </p>
        <p>
          Most of my work sits where engineering meets business development — writing the code and
          closing the deal are the same job when you are the one accountable for the outcome.
        </p>
        <p>
          Currently building crypto fintech at <b>GPCM</b>, running the Web3 creative agency{' '}
          <b>DSIGNRZ</b>, and shipping <em>Solana products</em> on the side.
        </p>
      </div>

      <div className="about__side">
        <div className="about__side-h">Delivered for</div>
        <ul className="about__clients">
          {CLIENTS.map((c) => (
            <li className="about__client" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
