import avatar from '../assets/avatar.png'
import dsignrz from '../assets/dsignrs.jpg'
import tradewiz from '../assets/tradewiz.jpg'
import mark from '../assets/polycop.jpeg'

/** Live X profile banner, served from Twitter's CDN. */
const banner = 'https://pbs.twimg.com/profile_banners/1287551172673335296/1779007654/1500x500'

/**
 * Image bindings, kept out of the content files so `works.ts` / `experience.ts`
 * stay pure data. Keys match the `id` fields in those files. `banner` is the live
 * X header; `mark` is the brand mark shown in the navbar.
 */
export const MEDIA = {
  avatar,
  banner,
  mark,
} as const

/** Org avatars for EXPERIENCE entries. */
export const COMPANY_MEDIA: Record<string, string | undefined> = {
  dsignrz,
  tradewiz,
}
