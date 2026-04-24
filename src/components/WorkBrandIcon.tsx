export function WorkBrandIcon({ emoji, size = 44 }: { emoji: string; size?: number }) {
  const fontSize = Math.round(size * 0.48)
  return (
    <span
      className="work-brand work-brand--emoji"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="work-brand__emoji" style={{ fontSize }}>
        {emoji}
      </span>
    </span>
  )
}
