import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Stagger delay in ms */
  delay?: number
  className?: string
}

/** Fades + lifts children into view once, using IntersectionObserver. */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // Environment check is stable per session — content just shows if IO is missing.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={ref}
      className={`rv ${visible ? 'is-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
