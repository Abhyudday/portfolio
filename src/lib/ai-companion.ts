import companionContext from '@/data/ai-companion-context.md?raw'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'

function buildSystemPrompt(context: string) {
  return `You are the friendly AI companion on a personal portfolio site. You answer visitor questions on behalf of the site owner.

Rules:
- Base every factual claim only on the context below. If something is not in the context, say you do not have that information and suggest contacting the owner via the site.
- Keep answers concise (a few short paragraphs at most unless asked for detail).
- Use a warm, professional tone.
- Do not invent employers, dates, links, or project details that are not explicitly in the context.

Context about the site owner:

${context}`
}

export async function askAiCompanion(userMessage: string): Promise<string> {
  const key = import.meta.env.VITE_GROQ_API_KEY
  if (!key || !String(key).trim()) {
    throw new Error(
      'Missing VITE_GROQ_API_KEY. Add it to a .env file in the project root (see Groq console for a free API key).',
    )
  }

  const body = {
    model: 'llama-3.1-8b-instant',
    messages: [
      { role: 'system' as const, content: buildSystemPrompt(companionContext) },
      { role: 'user' as const, content: userMessage },
    ],
    max_tokens: 600,
    temperature: 0.6,
  }

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText)
    throw new Error(errText || `Request failed (${res.status})`)
  }

  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>
  }
  const text = data.choices?.[0]?.message?.content?.trim()
  if (!text) {
    throw new Error('Empty response from model')
  }
  return text
}
