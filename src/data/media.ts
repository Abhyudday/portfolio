import avatar from '../assets/avatar.png'
import buybit from '../assets/buybit.jpg'
import cover from '../assets/banner.jpg'
import dsignrz from '../assets/dsignrs.jpg'
import tradewiz from '../assets/tradewiz.jpg'
import mark from '../assets/polycop.jpeg'

/** Live X profile banner, served from Twitter's CDN. */
const banner = 'https://pbs.twimg.com/profile_banners/1287551172673335296/1779007654/1500x500'

/**
 * Image bindings, kept out of the content files so `works.ts` / `experience.ts`
 * stay pure data. Keys match the `id` fields in those files. `banner` is the live
 * X header; `cover` is the local artwork, still shown in the rail gallery.
 */
export const MEDIA = {
  avatar,
  banner,
  cover,
  mark,
} as const

/** Card media for WORKS entries. Only the P2P bot ships with artwork. */
export const WORK_MEDIA: Record<string, string | undefined> = {
  'p2p-trading-bot': buybit,
}

/** Org avatars for EXPERIENCE entries. */
export const COMPANY_MEDIA: Record<string, string | undefined> = {
  dsignrz,
  tradewiz,
}
