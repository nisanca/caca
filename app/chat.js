import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  const { message } = await req.json()

  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant chatbot on a personal website.' },
      { role: 'user', content: message },
    ],
  })

  return Response.json({ reply: chatCompletion.choices[0].message.content })
}
