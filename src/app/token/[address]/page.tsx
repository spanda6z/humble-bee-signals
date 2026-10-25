import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_TOKENS, formatMarketCap, formatVolume, formatChange } from "@/data/tokens";
import { MOCK_SIGNALS, MOCK_FLEXES } from "@/data/signals";
import { MILESTONES } from "@/lib/config";
import { EarlySignalCard } from "@/components/EarlySignalCard";
import { FlexCard } from "@/components/FlexCard";

interface Props {
  params: Promise<{ address: string }>;
}

export default async function TokenPage({ params }: Props) {
  const { address } = await params;
  const token = MOCK_TOKENS.find(
    (t) => t.address === address || t.address.toLowerCase() === address.toLowerCase()
  );
  const tokenBySymbol = MOCK_TOKENS.find(
    (t) => t.symbol.toLowerCase() === address.toLowerCase()
  );
  const t = token || tokenBySymbol;
  if (!t) notFound();

  const signals = MOCK_SIGNALS.filter(
    (s) => s.tokenAddress === t.address || s.tokenSymbol === t.symbol
  );
  const flexes = MOCK_FLEXES.filter(
    (f) => f.tokenAddress === t.address || f.tokenSymbol === t.symbol
  );

  const hitMilestones = MILESTONES.filter((m) => t.peak_market_cap >= m.value);
  const nextMilestone = MILESTONES.find((m) => t.peak_market_cap < m.value);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.image_url}
            alt={t.name}
            className="h-16 w-16 rounded-full object-cover bg-neutral-800 ring-2 ring-[#f5c542]/30"
          />
          <div>
            <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold text-white">
              {t.name}
            </h1>
            <p className="text-neutral-400">${t.symbol} · Solana</p>
            <p className="mt-1 font-mono text-xs text-neutral-600 break-all">{t.address}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/post-signal" className="btn-gold rounded-full px-4 py-2 text-sm font-semibold">
            Post Signal
          </Link>
          <Link
            href="/post-flex"
            className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400"
          >
            Post Flex
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Market Cap", value: formatMarketCap(t.current_market_cap) },
          { label: "Peak Cap", value: formatMarketCap(t.peak_market_cap), gold: true },
          { label: "24h Volume", value: formatVolume(t.current_volume_24h) },
          {
            label: "24h Change",
            value: formatChange(t.current_price_change_24h),
            color: t.current_price_change_24h >= 0 ? "text-emerald-400" : "text-red-400",
          },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/5 bg-[#121212]/80 p-4">
            <p className="text-[11px] uppercase tracking-wider text-neutral-500">{s.label}</p>
            <p
              className={`mt-1 font-[family-name:var(--font-space)] text-xl font-bold ${
                s.gold ? "text-[#f5c542]" : s.color || "text-white"
              }`}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-[family-name:var(--font-space)] text-xl font-bold text-white mb-4">
          Milestones
        </h2>
        <div className="flex flex-wrap gap-2">
          {MILESTONES.map((m) => {
            const hit = t.peak_market_cap >= m.value;
            return (
              <div
                key={m.label}
                className={`rounded-full px-4 py-2 text-sm font-medium border ${
                  hit
                    ? "border-[#f5c542]/40 bg-[#f5c542]/15 text-[#f5c542]"
                    : "border-white/10 bg-white/5 text-neutral-500"
                }`}
              >
                {hit ? "✓" : "○"} {m.label}
              </div>
            );
          })}
        </div>
        {nextMilestone && (
          <p className="mt-3 text-sm text-neutral-500">
            Next: <span className="text-white">{nextMilestone.label}</span> — peak{" "}
            {formatMarketCap(t.peak_market_cap)}
          </p>
        )}
        {hitMilestones.length > 0 && (
          <p className="mt-1 text-sm text-neutral-500">
            Hit {hitMilestones.length}: {hitMilestones.map((m) => m.label).join(", ")}
          </p>
        )}
      </section>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-space)] text-xl font-bold text-white mb-4">
          Signals ({signals.length})
        </h2>
        {signals.length === 0 ? (
          <p className="text-neutral-500 text-sm">No signals yet for this token.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signals.map((s) => (
              <EarlySignalCard key={s.id} signal={s} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-space)] text-xl font-bold text-white mb-4">
          Flexes ({flexes.length})
        </h2>
        {flexes.length === 0 ? (
          <p className="text-neutral-500 text-sm">No flexes yet. Be the first.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flexes.map((f) => (
              <FlexCard key={f.id} flex={f} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
