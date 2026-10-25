import Link from "next/link";
import { MOCK_TOKENS } from "@/data/tokens";
import { MOCK_SIGNALS, MOCK_FLEXES } from "@/data/signals";
import { EarlySignalCard } from "@/components/EarlySignalCard";
import { FlexCard } from "@/components/FlexCard";
import { SignalCard } from "@/components/SignalCard";
import { EARLY_ACCESS_PRICE_SOL } from "@/lib/config";

export default function HomePage() {
  const earlySignals = MOCK_SIGNALS.filter((s) => s.isEarly).slice(0, 3);
  const recentFlexes = MOCK_FLEXES.slice(0, 3);
  const topTokens = [...MOCK_TOKENS]
    .sort((a, b) => b.peak_market_cap - a.peak_market_cap)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="flex flex-col items-center text-center pt-6 pb-4">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f5c542]/30 bg-[#f5c542]/10 px-3.5 py-1.5 text-xs font-medium text-[#f5c542]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5c542]" />
          Early signals · Flex · Milestones
        </div>

        <h1 className="font-[family-name:var(--font-space)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Humble Bee <span className="text-[#f5c542]">Signals</span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
          Post early calls. Unlock with {EARLY_ACCESS_PRICE_SOL} SOL. Flex your bags.
          Track every coin&apos;s milestones.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signals"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Browse Early Signals
          </Link>
          <Link
            href="/post-signal"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Post a Signal
          </Link>
          <Link
            href="/post-flex"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-2.5 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/20"
          >
            Post Flex
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white">
              🔒 Early Signals
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Pay {EARLY_ACCESS_PRICE_SOL} SOL to unlock thesis & entry before the crowd.
            </p>
          </div>
          <Link href="/signals" className="text-sm font-medium text-[#f5c542] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {earlySignals.map((s) => (
            <EarlySignalCard key={s.id} signal={s} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white">
              💰 Recent Flex
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Auto-generated PnL cards from the hive.
            </p>
          </div>
          <Link href="/flex" className="text-sm font-medium text-[#f5c542] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentFlexes.map((f) => (
            <FlexCard key={f.id} flex={f} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white">
              🏆 Milestone Leaders
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Highest peak market caps tracked.
            </p>
          </div>
          <Link href="/leaderboard" className="text-sm font-medium text-[#f5c542] hover:underline">
            Leaderboard →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topTokens.map((t) => (
            <Link key={t.address} href={`/token/${t.address}`}>
              <SignalCard token={t} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
