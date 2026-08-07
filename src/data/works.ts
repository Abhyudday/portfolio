export type WorkProject = {
  id: string
  name: string
  subtitle: string
  description: string
  url: string
  ctaLabel: string
  platform: string
  /** Highlight metric shown in the detail panel */
  metric?: string
  year: string
  stack: string[]
}

export const WORKS: WorkProject[] = [
  {
    id: 'pumpfunds',
    name: 'PumpFunds',
    subtitle: 'Curated memecoin portfolios for people who do not trade',
    description:
      'A web app offering expert-curated memecoin portfolios for beginner and traditional investors. Displays real-time performance, portfolio allocation, and historical returns — with top-performing funds reaching up to 717% weekly gains.',
    url: 'https://pumpfund.online/',
    ctaLabel: 'Open PumpFunds',
    platform: 'Web app',
    metric: '717% best weekly return',
    year: '2025',
    stack: ['TypeScript', 'Solana', 'Birdeye'],
  },
  {
    id: 'p2p-trading-bot',
    name: 'P2P Trading Bot',
    subtitle: 'Escrowed peer-to-peer crypto exchange inside Telegram',
    description:
      'A peer-to-peer Telegram bot enabling users to trade ETH, LTC, BTC, and SOL through automated payment verification and escrow release.',
    url: 'https://t.me/BuyBitP2Pbot',
    ctaLabel: 'Open in Telegram',
    platform: 'Telegram bot',
    metric: 'ETH · LTC · BTC · SOL',
    year: '2024',
    stack: ['Python', 'Tatum API', 'PostgreSQL'],
  },
  {
    id: 'paper-trading',
    name: 'Paper Trading',
    subtitle: 'Risk-free Solana trading simulator with live PnL',
    description:
      'A Telegram bot and web app offering real-time token data, live PnL tracking, and interactive price charts for risk-free Solana trading practice.',
    url: 'https://samran-frontend-production-b2ea.up.railway.app/',
    ctaLabel: 'Open simulator',
    platform: 'Telegram + web',
    metric: 'Live PnL tracking',
    year: '2024',
    stack: ['TypeScript', 'Solana', 'Solscan'],
  },
]
