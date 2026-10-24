import { MOCK_TOKENS } from "@/data/tokens";
import { SignalCard } from "@/components/SignalCard";

export default function TopWinnersPage() {
  const winners = [...MOCK_TOKENS]
    .filter((t) => t.peak_market_cap >= 10_000_000)
    .sort((a, b) => b.peak_market_cap - a.peak_market_cap);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
          Top Winners
        </h1>
        <p className="mt-2 text-neutral-400">
          Pump.fun tokens that crossed $10M market cap.
        </p>
      </div>

      {winners.length === 0 ? (
        <p className="py-20 text-center text-neutral-500">No tokens above $10M yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {winners.map((token) => (
            <SignalCard key={token.address} token={token} />
          ))}
        </div>
      )}
    </div>
  );
}
