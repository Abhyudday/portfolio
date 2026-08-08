import avatar from '../assets/avatar.png'
import banner from '../assets/banner.jpg'
import buybit from '../assets/buybit.jpg'
import dsignrz from '../assets/dsignrs.jpg'
import tradewiz from '../assets/tradewiz.jpg'
import mark from '../assets/polycop.jpeg'

/**
 * Image bindings, kept out of the content files so `works.ts` / `experience.ts`
 * stay pure data. Keys match the `id` fields in those files.
 */
export const MEDIA = {
  avatar,
  banner,
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
