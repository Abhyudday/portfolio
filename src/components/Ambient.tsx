/** Vice City backdrop: sunset glow, horizon grid, CRT scanlines, vignette. */
export function Ambient() {
  return (
    <div className="amb" aria-hidden="true">
      <div className="amb__sun" />
      <div className="amb__grid" />
      <div className="amb__scan" />
      <div className="amb__vig" />
    </div>
  )
}
