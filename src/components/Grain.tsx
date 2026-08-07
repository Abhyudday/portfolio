/** Faint six-column rule grid plus film grain. Deliberately almost invisible. */
export function Grain() {
  return (
    <div className="grain" aria-hidden>
      <div className="grain__cols">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="grain__noise" />
    </div>
  )
}
