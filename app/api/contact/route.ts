import { NextResponse } from "next/server"

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  projectType?: string
  description?: string
  website?: string
}

const MAX_FIELD_LENGTH = 1000
const DESCRIPTION_MAX_LENGTH = 4000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 6

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const sanitizeField = (value: unknown) => {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim()
}

const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim()
  }

  return request.headers.get("x-real-ip") ?? "unknown"
}

const checkRateLimit = (key: string) => {
  const now = Date.now()
  const existing = rateLimitStore.get(key)

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  existing.count += 1
  rateLimitStore.set(key, existing)
  return true
}

const hasSuspiciousInput = (value: string) => {
  return /https?:\/\/|<script|<\/script>|javascript:/i.test(value)
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  const origin = request.headers.get("origin")
  const host = request.headers.get("host")

  if (process.env.NODE_ENV === "production") {
    if (!origin || !host) {
      return NextResponse.json({ error: "Forbidden request origin." }, { status: 403 })
    }

    try {
      const originHost = new URL(origin).host
      if (originHost !== host) {
        return NextResponse.json({ error: "Forbidden request origin." }, { status: 403 })
      }
    } catch {
      return NextResponse.json({ error: "Forbidden request origin." }, { status: 403 })
    }
  }

  const clientIp = getClientIp(request)
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
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
  const website = sanitizeField(payload.website)

  if (!firstName || !lastName || !email || !projectType || !description) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  // Honeypot field: bots often fill hidden fields.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  if (
    firstName.length > MAX_FIELD_LENGTH ||
    lastName.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    projectType.length > MAX_FIELD_LENGTH ||
    description.length > DESCRIPTION_MAX_LENGTH
  ) {
    return NextResponse.json({ error: "One or more fields exceed allowed length." }, { status: 400 })
  }

  if (
    hasSuspiciousInput(firstName) ||
    hasSuspiciousInput(lastName) ||
    hasSuspiciousInput(projectType) ||
    hasSuspiciousInput(description)
  ) {
    return NextResponse.json({ error: "Suspicious input detected." }, { status: 400 })
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
    "",
    `IP: ${clientIp}`,
  ].join("\n")

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  let telegramResponse: Response

  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    })
  } catch {
    clearTimeout(timeoutId)
    return NextResponse.json({ error: "Telegram request failed." }, { status: 502 })
  }

  clearTimeout(timeoutId)

  if (!telegramResponse.ok) {
    const telegramError = await telegramResponse.text()
    console.error("Telegram API error:", telegramError)
    return NextResponse.json({ error: "Failed to send message to Telegram." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
