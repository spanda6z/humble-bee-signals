import Link from "next/link";
import { MOCK_TOKENS, formatMarketCap, formatVolume, formatChange } from "@/data/tokens";
import { SignalCard } from "@/components/SignalCard";

export default function HomePage() {
  const totalSignals = MOCK_TOKENS.length;
  const above1m = MOCK_TOKENS.filter((t) => t.current_market_cap >= 1_000_000).length;
  const highestCap = Math.max(...MOCK_TOKENS.map((t) => t.current_market_cap));
  const avgVolume =
    MOCK_TOKENS.reduce((s, t) => s + t.current_volume_24h, 0) / MOCK_TOKENS.length;
  const biggestGainer = Math.max(...MOCK_TOKENS.map((t) => t.current_price_change_24h));

  const featured = [...MOCK_TOKENS]
    .sort((a, b) => b.current_market_cap - a.current_market_cap)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <section className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5c542]/30 bg-[#f5c542]/10 px-3 py-1 text-xs font-medium text-[#f5c542]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5c542]" />
          Live Pump.fun on-chain signals
        </div>

        <h1 className="font-[family-name:var(--font-space)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Humble Bee <span className="text-[#f5c542]">Signals</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg">
          Discover Pump.fun tokens that reached major market cap milestones with live
          blockchain data. Real tokens. Real numbers. No hype.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/signals" className="btn-gold rounded-full px-6 py-2.5 text-sm">
            Explore Signals →
          </Link>
          <Link
            href="/top-winners"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            🏆 Top Winners
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { label: "Total Signals", value: totalSignals.toString(), icon: "◎" },
          { label: "Above $1M", value: above1m.toString(), icon: "⚡" },
          { label: "Highest Cap", value: formatMarketCap(highestCap), icon: "📈" },
          { label: "Avg Volume", value: formatVolume(avgVolume), icon: "📊" },
          {
            label: "Biggest Gainer",
            value: formatChange(biggestGainer),
            icon: "↗",
            highlight: true,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4 text-center"
          >
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              {stat.icon} {stat.label}
            </p>
            <p
              className={`mt-1 font-[family-name:var(--font-space)] text-xl font-bold ${
                stat.highlight ? "text-emerald-400" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold">
              Featured Signals
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Live qualifying Pump.fun tokens — {featured.length} shown.
            </p>
          </div>
          <Link
            href="/signals"
            className="text-sm font-medium text-[#f5c542] hover:underline"
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
    </div>
  );
}
