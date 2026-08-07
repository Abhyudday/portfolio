export type WorkProject = {
  id: string
  emoji: string
  name: string
  subtitle: string
  description: string
  url: string
  ctaLabel: string
  platform: string
  /** Highlight metric shown as a mono chip (e.g. “717% weekly gains”) */
  metric?: string
  /** Theme key for the card gradient */
  hue: 'emerald' | 'violet' | 'cyan' | 'amber' | 'rose'
}

export const WORKS: WorkProject[] = [
  {
    id: 'pumpfunds',
    emoji: '🚀',
    name: 'PumpFunds',
    subtitle: 'Solana memecoin investing platform',
    description:
      'A web app offering expert-curated memecoin portfolios for beginner and traditional investors. Displays real-time performance, portfolio allocation, and historical returns — with top-performing funds reaching up to 717% weekly gains.',
    url: 'https://pumpfund.online/',
    ctaLabel: 'Try it',
    platform: 'Web · Solana',
    metric: '717% weekly gains',
    hue: 'emerald',
  },
  {
    id: 'p2p-trading-bot',
    emoji: '🔁',
    name: 'P2P Trading Bot',
    subtitle: 'Telegram crypto exchange',
    description:
      'A peer-to-peer Telegram bot enabling users to trade ETH, LTC, BTC, and SOL through automated payment verification and escrow release.',
    url: 'https://t.me/BuyBitP2Pbot',
    ctaLabel: 'Open in Telegram',
    platform: 'Telegram bot · P2P',
    metric: '4 assets',
    hue: 'violet',
  },
  {
    id: 'paper-trading',
    emoji: '📈',
    name: 'Paper Trading Platform',
    subtitle: 'Solana trading simulator',
    description:
      'A Telegram bot and web app offering real-time token data, live PnL tracking, and interactive price charts for risk-free Solana trading practice.',
    url: 'https://samran-frontend-production-b2ea.up.railway.app/',
    ctaLabel: 'Try it',
    platform: 'Telegram + Web · Solana',
    metric: 'Live PnL',
    hue: 'cyan',
  },
]
