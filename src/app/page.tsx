import Link from "next/link";
import { MOCK_TOKENS, formatMarketCap, formatVolume, formatChange } from "@/data/tokens";
import { SignalCard } from "@/components/SignalCard";

export default function HomePage() {
  const totalSignals = MOCK_TOKENS.length;
  const above1m = MOCK_TOKENS.filter((t) => t.current_market_cap >= 1_000_000).length;
  const highestCapToken = [...MOCK_TOKENS].sort(
    (a, b) => b.current_market_cap - a.current_market_cap
  )[0];
  const avgVolume =
    MOCK_TOKENS.reduce((s, t) => s + t.current_volume_24h, 0) / MOCK_TOKENS.length;
  const biggestGainerToken = [...MOCK_TOKENS].sort(
    (a, b) => b.current_price_change_24h - a.current_price_change_24h
  )[0];

  const featured = [...MOCK_TOKENS]
    .sort((a, b) => b.current_market_cap - a.current_market_cap)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center pt-8 pb-4">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5c542]/30 bg-[#f5c542]/10 px-3.5 py-1.5 text-xs font-medium text-[#f5c542]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5c542]" />
          Live Pump.fun on-chain signals
        </div>

        <h1 className="font-[family-name:var(--font-space)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Humble Bee{" "}
          <span className="text-[#f5c542]">Signals</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Discover Pump.fun tokens that reached major market cap milestones with live
          blockchain data. Real tokens. Real numbers. No hype.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signals"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Explore Signals
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/top-winners"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/20"
          >
            <span aria-hidden>🏆</span>
            Top Winners
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <div className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            ◎ Total Signals
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-space)] text-2xl font-bold text-white">
            {totalSignals}
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            ⚡ Above $1M
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-space)] text-2xl font-bold text-white">
            {above1m}
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            Highest Cap
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-space)] text-2xl font-bold text-[#f5c542]">
            {formatMarketCap(highestCapToken.current_market_cap)}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">${highestCapToken.symbol}</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            Avg Volume
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-space)] text-2xl font-bold text-white">
            {formatVolume(avgVolume)}
          </p>
        </div>

        <div className="col-span-2 rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center backdrop-blur-sm sm:col-span-1">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">
            ↗ Biggest Gainer
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-space)] text-2xl font-bold text-emerald-400">
            {formatChange(biggestGainerToken.current_price_change_24h)}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">${biggestGainerToken.symbol}</p>
        </div>
      </section>

      {/* Featured */}
      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white sm:text-3xl">
              Featured Signals
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Live qualifying Pump.fun tokens — {featured.length} shown.
            </p>
          </div>
          <Link
            href="/signals"
            className="shrink-0 text-sm font-medium text-[#f5c542] transition hover:text-[#ffd666] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((token) => (
            <SignalCard key={token.address} token={token} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 mb-8 flex flex-col items-center rounded-2xl border border-[#f5c542]/15 bg-gradient-to-b from-[#f5c542]/5 to-transparent px-6 py-12 text-center">
        <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white sm:text-3xl">
          Ready to explore?
        </h2>
        <p className="mt-2 max-w-md text-sm text-neutral-400">
          Browse all signals, filter by market cap, and track the biggest winners on Pump.fun.
        </p>
        <Link
          href="/signals"
          className="btn-gold mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold"
        >
          Explore All Signals
          <span aria-hidden>→</span>
        </Link>
      </section>
    </div>
  );
}
