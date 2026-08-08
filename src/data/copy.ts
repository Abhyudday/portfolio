/**
 * Long-form copy, lifted verbatim from the previous layout. `**` marks what was
 * bold and `*` what was emphasised; RichText renders those and turns @handles,
 * #tags and URLs blue the way X does.
 */

/**
 * Profile bio — was the hero tagline, rewritten to read the way someone actually
 * writes their own bio. Same three numbers, plainer voice.
 */
export const BIO =
  'I build crypto products and the businesses around them. So far that is a fintech app in production with **20,000+ users**, **700+ projects** out the door at my agency, and **$9M+ in trading volume** from partnerships I set up myself.'

/** Thread 01 — the three about paragraphs, in order. */
export const ABOUT: string[] = [
  'I have scaled a venture from zero, driven revenue through **strategic partnerships**, and executed end to end across product, operations, and growth.',
  'Most of my work sits where engineering meets business development — writing the code and closing the deal are the same job when you are the one accountable for the outcome.',
  'Currently building crypto fintech at **GPCM**, running the Web3 creative agency **DSIGNRZ**, and shipping *Solana products* on the side.',
]

/** Thread 06 — contact. */
export const CONTACT = {
  kicker: 'Available for new missions',
  mark: 'Got something worth *building*?',
  sub: 'Product work, Web3 builds, or partnerships — send the brief and I will tell you straight whether I am the right person for it.',
  primaryCta: 'See the code',
} as const

/** Secondary-track heading, was the small "side roles" row. */
export const ALSO_RUNNING = 'Also running, in parallel:'

/** Delivered-for rail heading, was the about sidebar heading. */
export const CLIENTS_HEADING = 'Delivered for'

/** Footer. */
export const FOOTER_BLURB =
  'Crypto products and the businesses around them. Built out of Noida, India.'
