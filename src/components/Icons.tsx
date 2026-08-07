type P = { size?: number; className?: string }

const stroke = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

const solid = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
})

export function IconArrowUpRight({ size = 14, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function IconArrowRight({ size = 14, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconClose({ size = 15, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

/** Wanted-level star. Filled when earned, outlined when not. */
export function IconStar({ size = 13, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M12 2.6l2.7 6.06 6.6.6-4.96 4.4 1.44 6.47L12 16.75l-5.78 3.38 1.44-6.47L2.7 9.26l6.6-.6z" />
    </svg>
  )
}

export function IconStarOutline({ size = 13, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M12 3.4l2.5 5.6 6.1.56-4.6 4.07 1.34 6-5.34-3.13L6.66 19.6 8 13.63 3.4 9.56l6.1-.56z" />
    </svg>
  )
}

export function IconTarget({ size = 14, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 1.6v3M12 19.4v3M1.6 12h3M19.4 12h3" />
    </svg>
  )
}

export function IconGitHub({ size = 17, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.9c.51.1.7-.22.7-.49v-1.7c-2.84.62-3.44-1.37-3.44-1.37-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.08 1.57 1.06 1.57 1.06.91 1.57 2.39 1.12 2.97.85.09-.66.36-1.12.65-1.38-2.27-.26-4.65-1.14-4.65-5.05 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.05a9.7 9.7 0 0 1 5.1 0c1.94-1.33 2.8-1.05 2.8-1.05.55 1.4.2 2.44.1 2.7.65.72 1.05 1.63 1.05 2.75 0 3.92-2.39 4.78-4.67 5.04.37.32.7.94.7 1.9v2.82c0 .27.18.6.71.49A10.2 10.2 0 0 0 12 1.8z" />
    </svg>
  )
}

export function IconX({ size = 16, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M17.4 3h3.2l-7 8 7.9 10h-6l-4.4-5.6L5.6 21H2.4l7.3-8.3L2.1 3h6.1l4.1 5.3zm-1.1 16.1h1.8L7.5 4.8H5.6z" />
    </svg>
  )
}

export function IconLinkedIn({ size = 16, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.2h4V21H3zM9.3 9.2h3.83v1.62h.05c.53-1 1.84-2.06 3.78-2.06 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21h-4z" />
    </svg>
  )
}

export function IconInstagram({ size = 16, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconGlobe({ size = 16, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.4 3.6 5.5 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.5-3.6-9S9.6 5.4 12 3z" />
    </svg>
  )
}

export function IconMail({ size = 16, className }: P) {
  return (
    <svg {...stroke(size)} className={className}>
      <rect x="2.6" y="4.6" width="18.8" height="14.8" rx="2.2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </svg>
  )
}
