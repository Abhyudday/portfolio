export const SITE = {
  name: 'Abhyuday Pratap Singh',
  shortName: 'Abhyuday',
  role: 'Software engineer / founder',
  location: 'Noida, India',
  email: 'hi@abhyuday.site',
  website: 'https://abhyuday.site',
  github: 'https://github.com/abhyudday',
  hireSubject: 'Work together',
  year: new Date().getFullYear(),
} as const

export const SOCIAL = {
  x: 'https://x.com/abhyuddayy',
  instagram: 'https://instagram.com/abhyudday',
  linkedin: 'https://linkedin.com/in/abhyudday/',
} as const

/**
 * Profile chrome for the X-style shell. `handle` is the real handle from
 * SOCIAL.x, and `since` is the DSIGNRZ founding date — the header shows a
 * "Building since" line rather than inventing an account join date, and the
 * row under the bio carries real figures instead of invented follower counts.
 */
export const PROFILE = {
  handle: 'abhyuddayy',
  since: 'March 2021',
  siteLabel: 'abhyuday.site',
} as const
