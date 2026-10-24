# Humble Bee Signals (Clone)

A full multi-page clone of [Humble Bee Signals](https://bee-market-buzz.lovable.app) — a live Pump.fun market-cap milestone discovery dashboard.

## Features

- **Home** — Hero, live stats, featured signals
- **Signals** — Search, market-cap filters, sorting (oldest / newest / volume / gainers / etc.)
- **Leaderboard** — Ranked table by peak market cap
- **Top Winners** — Tokens that crossed $10M+
- **About / FAQ / Contact**

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- Mock data (ready to swap for real DexScreener / custom API)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deploys.

## Next steps (real data)

Replace `src/data/tokens.ts` with a real data source:

1. DexScreener API for current prices / volume / liquidity
2. A backend job that tracks when Pump.fun tokens cross $1M / $5M / $10M etc. and stores peak values
3. Or a Supabase / Postgres table updated every few minutes
