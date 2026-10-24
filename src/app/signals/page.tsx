"use client";

import { useMemo, useState } from "react";
import { MOCK_TOKENS } from "@/data/tokens";
import { SignalCard } from "@/components/SignalCard";

const CAP_FILTERS = [
  { label: "All ≥ $1M", value: 1_000_000 },
  { label: "≥ $5M", value: 5_000_000 },
  { label: "≥ $10M", value: 10_000_000 },
  { label: "≥ $25M", value: 25_000_000 },
  { label: "≥ $50M", value: 50_000_000 },
  { label: "≥ $100M", value: 100_000_000 },
];

const SORT_OPTIONS = [
  { label: "Highest Cap", value: "highest_cap" },
  { label: "Peak Cap", value: "peak_cap" },
  { label: "Volume", value: "volume" },
  { label: "Liquidity", value: "liquidity" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Biggest Gainers", value: "gainers" },
];

export default function SignalsPage() {
  const [search, setSearch] = useState("");
  const [minCap, setMinCap] = useState(1_000_000);
  const [sort, setSort] = useState("oldest");

  const filtered = useMemo(() => {
    let list = MOCK_TOKENS.filter((t) => t.current_market_cap >= minCap);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.symbol.toLowerCase().includes(q) ||
          t.address.toLowerCase().includes(q)
      );
    }

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "highest_cap":
          return b.current_market_cap - a.current_market_cap;
        case "peak_cap":
          return b.peak_market_cap - a.peak_market_cap;
        case "volume":
          return b.current_volume_24h - a.current_volume_24h;
        case "liquidity":
          return b.current_liquidity - a.current_liquidity;
        case "newest":
          return new Date(b.launched_at).getTime() - new Date(a.launched_at).getTime();
        case "oldest":
          return new Date(a.launched_at).getTime() - new Date(b.launched_at).getTime();
        case "gainers":
          return b.current_price_change_24h - a.current_price_change_24h;
        default:
          return 0;
      }
    });

    return list;
  }, [search, minCap, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
          All Signals
        </h1>
        <p className="mt-2 text-neutral-400">
          Live Pump.fun tokens crossing market cap milestones. Data refreshes every 5 minutes.
        </p>
      </div>

      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by name, symbol, or contract address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#121212] py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {CAP_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setMinCap(f.value)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
              minCap === f.value
                ? "bg-[#f5c542] text-black"
                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {SORT_OPTIONS.map((s) => (
          <button
            key={s.value}
            onClick={() => setSort(s.value)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              sort === s.value
                ? "bg-[#f5c542]/15 text-[#f5c542]"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-neutral-500">
          No tokens match your filters.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((token) => (
            <SignalCard key={token.address} token={token} />
          ))}
        </div>
      )}
    </div>
  );
}
