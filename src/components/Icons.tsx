type P = { className?: string; size?: number }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function IconHome({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  )
}

export function IconTerminal({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="m7 10 2.5 2L7 14M12.5 14.5h4.5" />
    </svg>
  )
}

export function IconBriefcase({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
      <path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7M2.5 12.5h19" />
    </svg>
  )
}

export function IconLayers({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  )
}

export function IconSparkle({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4L12 3Z" />
    </svg>
  )
}

export function IconMail({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m21 7.5-8.4 5.4a1.9 1.9 0 0 1-2 0L2.5 7.5" />
    </svg>
  )
}

export function IconPhone({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    </svg>
  )
}

export function IconGlobe({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

export function IconGitHub({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

export function IconX({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function IconLinkedIn({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  )
}

export function IconInstagram({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconGradCap({ className, size = 20 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="m12 4 9.5 4.5L12 13 2.5 8.5 12 4Z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
    </svg>
  )
}

export function IconCopy({ className, size = 16 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
      <path d="M4 16V6a2 2 0 0 1 2-2h10" />
    </svg>
  )
}

export function IconChevron({ className, size = 17 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function IconClose({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.9}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function IconArrowRight({ className, size = 17 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconArrowUpRight({ className, size = 16 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function IconYouTube({ className, size = 18 }: P) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.9 4.1 12 4.1 12 4.1h-.1s-4.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2.1 8.8 2.1 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.7.2 6.6.2 6.6.2s4.9 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.7-.2-3.3-.2-3.3ZM9.9 14.1V8.4l6.3 2.9-6.3 2.8Z" />
    </svg>
  )
}
