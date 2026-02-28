# Dokploy Deployment

This project is configured for Dokploy using the root `Dockerfile`.

## Deployment Type

- Use **Dockerfile / Git Repository**
- Dockerfile path: `./Dockerfile`
- Build context: `.`
- Exposed container port: `3000`

## Why This Setup

- `next.config.mjs` uses `output: "standalone"` to run a Next.js server with API routes.
- The Docker image runs `node server.js` from the standalone build output.
- This is required for secure Telegram form submission via `/api/contact`.

## Required Environment Variables

- `TELEGRAM_BOT_TOKEN` = bot token from BotFather (example: `123456:ABC...`)
- `TELEGRAM_CHAT_ID` = target chat/channel ID where messages should arrive

## Dokploy Steps

1. Create a new application in Dokploy from your Git repo.
2. Select Dockerfile deployment.
3. Keep branch/path settings as needed for your repo.
4. Set container port to `3000`.
5. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
6. Deploy.

## Notes

- Do not expose the bot token to client-side code.
- The form sends data to `/api/contact`, and the server forwards it to Telegram Bot API.
