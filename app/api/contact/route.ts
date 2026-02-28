import { NextResponse } from "next/server"

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  projectType?: string
  description?: string
}

const MAX_FIELD_LENGTH = 1000

const sanitizeField = (value: unknown) => {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim()
}

const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID." },
      { status: 500 },
    )
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const firstName = sanitizeField(payload.firstName)
  const lastName = sanitizeField(payload.lastName)
  const email = sanitizeField(payload.email)
  const projectType = sanitizeField(payload.projectType)
  const description = sanitizeField(payload.description)

  if (!firstName || !lastName || !email || !projectType || !description) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  if (
    firstName.length > MAX_FIELD_LENGTH ||
    lastName.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    projectType.length > MAX_FIELD_LENGTH ||
    description.length > 4000
  ) {
    return NextResponse.json({ error: "One or more fields exceed allowed length." }, { status: 400 })
  }

  const message = [
    "New Project Brief",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    "",
    "Description:",
    description,
  ].join("\n")

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      disable_web_page_preview: true,
    }),
  })

  if (!telegramResponse.ok) {
    const telegramError = await telegramResponse.text()
    console.error("Telegram API error:", telegramError)
    return NextResponse.json({ error: "Failed to send message to Telegram." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
