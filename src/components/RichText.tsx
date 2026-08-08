import type { ReactNode } from 'react'

/**
 * Renders post copy the way X renders it: `**bold**` and `*em*` for the inline
 * markup that used to be `<b>` / `<em>` tags, plus automatic blue links for
 * @handles, #tags and bare URLs. Copy itself is never altered — this only
 * decides which characters are markup and which are text.
 */

type Token = { text: string; bold?: boolean; em?: boolean }

/** Split on `**bold**` first, then `*em*` inside whatever is left. */
function tokenise(input: string): Token[] {
  const out: Token[] = []

  for (const chunk of input.split(/(\*\*[^*]+\*\*)/g)) {
    if (!chunk) continue

    if (chunk.startsWith('**') && chunk.endsWith('**') && chunk.length > 4) {
      out.push({ text: chunk.slice(2, -2), bold: true })
      continue
    }

    for (const part of chunk.split(/(\*[^*]+\*)/g)) {
      if (!part) continue
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        out.push({ text: part.slice(1, -1), em: true })
      } else {
        out.push({ text: part })
      }
    }
  }

  return out
}

const ENTITY = /(https?:\/\/[^\s,)]+|@[A-Za-z0-9_]{2,}|#[A-Za-z0-9_]{2,})/g

/** Turn @handles, #tags and URLs into blue links. */
function linkify(text: string, keyBase: string): ReactNode[] {
  return text.split(ENTITY).map((part, i) => {
    const key = `${keyBase}-${i}`

    if (part.startsWith('http')) {
      return (
        <a key={key} className="mention" href={part} target="_blank" rel="noreferrer">
          {part.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </a>
      )
    }

    if (part.startsWith('@')) {
      return (
        <a
          key={key}
          className="mention"
          href={`https://x.com/${part.slice(1)}`}
          target="_blank"
          rel="noreferrer"
        >
          {part}
        </a>
      )
    }

    if (part.startsWith('#')) {
      return (
        <span key={key} className="mention">
          {part}
        </span>
      )
    }

    return part
  })
}

export function RichText({ text }: { text: string }) {
  return (
    <>
      {tokenise(text).map((token, i) => {
        const inner = linkify(token.text, `t${i}`)
        if (token.bold) return <b key={i}>{inner}</b>
        if (token.em) return <em key={i}>{inner}</em>
        return <span key={i}>{inner}</span>
      })}
    </>
  )
}
