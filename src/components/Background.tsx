/** Fixed ambient layer: dot grid, drifting aurora blobs, and film grain. */
export function Background() {
  return (
    <div className="bg-layer" aria-hidden>
      <div className="bg-grid" />
      <div className="aurora aurora--green" />
      <div className="aurora aurora--violet" />
      <div className="aurora aurora--cyan" />
      <div className="bg-noise" />
    </div>
  )
}
