type P = { size?: number; className?: string }

const stroke = (size: number, w = 1.6) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: w,
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

/* ---------------------------------------------------------------- nav rail */

export function IconHome({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <path d="M3.6 10.4 12 3.5l8.4 6.9V20a1 1 0 0 1-1 1h-4.6v-6.3H9.2V21H4.6a1 1 0 0 1-1-1z" />
    </svg>
  )
}

export function IconSearch({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <circle cx="10.6" cy="10.6" r="7" />
      <path d="m15.8 15.8 5 5" />
    </svg>
  )
}

export function IconBell({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <path d="M18.3 15.4V10a6.3 6.3 0 1 0-12.6 0v5.4L3.9 18h16.2z" />
      <path d="M9.6 18a2.4 2.4 0 0 0 4.8 0" />
    </svg>
  )
}

export function IconBookmark({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <path d="M6 3.6h12a.8.8 0 0 1 .8.8v16l-6.8-4.4-6.8 4.4v-16a.8.8 0 0 1 .8-.8z" />
    </svg>
  )
}

export function IconUser({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <circle cx="12" cy="8.2" r="4.4" />
      <path d="M4.4 20.4c.9-3.9 3.9-6 7.6-6s6.7 2.1 7.6 6" />
    </svg>
  )
}

export function IconBriefcase({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <rect x="2.8" y="7.2" width="18.4" height="13" rx="2.2" />
      <path d="M8.8 7.2V5.4a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v1.8M2.8 12.4h18.4" />
    </svg>
  )
}

export function IconSparkle({ size = 24, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <path d="M12 3.2l1.9 4.7 4.7 1.9-4.7 1.9L12 16.4l-1.9-4.7-4.7-1.9 4.7-1.9zM18.4 15.6l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </svg>
  )
}

export function IconDots({ size = 20, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  )
}

/* ------------------------------------------------------------ post actions */

export function IconReply({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 1.9)} className={className}>
      <path d="M20.4 11.4c0 4-3.6 7.2-8 7.2a9.4 9.4 0 0 1-2.2-.26L5.3 20.6l1.2-3.7a6.9 6.9 0 0 1-2.9-5.5c0-4 3.6-7.2 8-7.2s8.8 3.2 8.8 7.2z" />
    </svg>
  )
}

export function IconRepost({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 1.9)} className={className}>
      <path d="M6.6 4.6 3.4 8h13a2.6 2.6 0 0 1 2.6 2.6V13M17.4 19.4 20.6 16h-13A2.6 2.6 0 0 1 5 13.4V11" />
    </svg>
  )
}

export function IconHeart({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 1.9)} className={className}>
      <path d="M12 20.2 4.9 13.3A4.6 4.6 0 0 1 12 7.4a4.6 4.6 0 0 1 7.1 5.9z" />
    </svg>
  )
}

export function IconHeartFill({ size = 18, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M12 20.9 4.4 13.6a5.3 5.3 0 0 1 7.6-7.2 5.3 5.3 0 0 1 7.6 7.2z" />
    </svg>
  )
}

export function IconViews({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 1.9)} className={className}>
      <path d="M4.4 20V9.8M9.6 20V4.4M14.8 20v-8.4M20 20V7.2" />
    </svg>
  )
}

export function IconShare({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 1.9)} className={className}>
      <path d="M12 3.2v11.4M7.8 7.4 12 3.2l4.2 4.2" />
      <path d="M4.6 14.6v4a2 2 0 0 0 2 2h10.8a2 2 0 0 0 2-2v-4" />
    </svg>
  )
}

export function IconCheck({ size = 18, className }: P) {
  return (
    <svg {...stroke(size, 2.1)} className={className}>
      <path d="m4.6 12.6 4.8 4.8L19.4 7.4" />
    </svg>
  )
}

/* ------------------------------------------------------------------ badges */

/** Blue verification badge. */
export function IconVerified({ size = 19, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.63 13.43 1.75 12 1.75s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
    </svg>
  )
}

export function IconPin({ size = 16, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M17.7 3.4 20.6 6.3a1 1 0 0 1-.36 1.64l-2.5.9-4.42 4.42.53 3.2a1 1 0 0 1-1.69.87L9.5 14.9l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-2.43-2.66a1 1 0 0 1 .87-1.69l3.2.53 4.42-4.42.9-2.5a1 1 0 0 1 1.64-.36z" />
    </svg>
  )
}

export function IconCalendar({ size = 16, className }: P) {
  return (
    <svg {...stroke(size, 1.7)} className={className}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.2" />
      <path d="M3.4 10h17.2M8.2 3.4v3.6M15.8 3.4v3.6" />
    </svg>
  )
}

export function IconLocation({ size = 16, className }: P) {
  return (
    <svg {...stroke(size, 1.7)} className={className}>
      <path d="M12 21.2s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.1" r="2.6" />
    </svg>
  )
}

export function IconLink({ size = 16, className }: P) {
  return (
    <svg {...stroke(size, 1.7)} className={className}>
      <path d="M10.2 13.8a3.6 3.6 0 0 0 5.1 0l3.4-3.4a3.6 3.6 0 0 0-5.1-5.1l-1.3 1.3" />
      <path d="M13.8 10.2a3.6 3.6 0 0 0-5.1 0l-3.4 3.4a3.6 3.6 0 0 0 5.1 5.1l1.3-1.3" />
    </svg>
  )
}

export function IconSun({ size = 20, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <circle cx="12" cy="12" r="4.6" />
      <path d="M12 2.4v2.4M12 19.2v2.4M2.4 12h2.4M19.2 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" />
    </svg>
  )
}

export function IconMoon({ size = 20, className }: P) {
  return (
    <svg {...stroke(size, 1.8)} className={className}>
      <path d="M20.4 14.6A8.8 8.8 0 0 1 9.4 3.6a8.8 8.8 0 1 0 11 11z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ arrows */

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

export function IconChevronDown({ size = 14, className }: P) {
  return (
    <svg {...stroke(size, 2.2)} className={className}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  )
}

export function IconArrowLeft({ size = 20, className }: P) {
  return (
    <svg {...stroke(size, 2)} className={className}>
      <path d="M20 12H4.4M11 4.6 3.6 12l7.4 7.4" />
    </svg>
  )
}

export function IconClose({ size = 15, className }: P) {
  return (
    <svg {...stroke(size, 2)} className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
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

/* ----------------------------------------------------------------- socials */

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

export function IconTelegram({ size = 16, className }: P) {
  return (
    <svg {...solid(size)} className={className}>
      <path d="M21.6 4.3 2.9 11.5c-.9.35-.87 1.62.04 1.93l4.16 1.42 1.6 4.9c.27.83 1.35 1 1.86.29l2.2-3.06 4.3 3.16c.7.51 1.7.13 1.88-.72l3-14.1c.17-.8-.6-1.47-1.34-1.19zM9.4 14.2l8.1-5.7-6.4 7.2-.2 2.7z" />
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
