export type WorkProject = {
  id: string
  emoji: string
  name: string
  subtitle: string
  description: string
  url: string
  ctaLabel: string
  platform: string
}

export const WORKS: WorkProject[] = [
  {
    id: 'solana-paper',
    emoji: '🪙',
    name: 'Solana Paper Trading Web App',
    subtitle: 'Practice trading memecoins risk-free.',
    description:
      'A web app for paper trading Solana memecoins using real-time data — perfect for honing your skills without risking real SOL.',
    url: 'https://samran-frontend-production-b2ea.up.railway.app/',
    ctaLabel: 'Try it',
    platform: 'Web · Solana',
  },
  {
    id: 'pumpfund',
    emoji: '🎯',
    name: 'PumpFund',
    subtitle: 'Invest in Solana memecoin funds.',
    description:
      'PumpFunds lets you invest in curated Solana “Funds” that mirror elite wallets in real time — your wallet auto-executes their buys and sells in sub-seconds.',
    url: 'https://pumpfund.online/',
    ctaLabel: 'Try it',
    platform: 'Web · Solana',
  },
  {
    id: 'soltap',
    emoji: '💳',
    name: 'Soltap',
    subtitle: 'Use your smartphone as a Solana card.',
    description:
      'NFC-powered Solana payments — just tap, confirm, done. Built for speed, safety, and everyday use.',
    url: 'https://github.com/Abhyudday/SolTap',
    ctaLabel: 'View on GitHub',
    platform: 'Mobile · NFC · Solana',
  },
  {
    id: 'tip-anyone-bot',
    emoji: '💰',
    name: 'Tip Anyone Bot',
    subtitle: 'Send SOL to anyone on Telegram.',
    description:
      'Just mention their @username in a group chat, and they can claim your tip instantly.',
    url: 'https://t.me/TipSolanaBot',
    ctaLabel: 'Open in Telegram',
    platform: 'Telegram bot · Solana',
  },
  {
    id: 'p2p-trading-bot',
    emoji: '🔁',
    name: 'P2P Trading Bot',
    subtitle: 'Convert crypto to fiat with escrow.',
    description:
      'A peer-to-peer Telegram bot that helps users trade crypto safely using automated payment verification and escrow release.',
    url: 'https://t.me/BuyBitP2Pbot',
    ctaLabel: 'Try it out',
    platform: 'Telegram bot · P2P',
  },
]
