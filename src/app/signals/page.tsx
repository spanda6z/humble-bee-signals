"use client";

import { useState } from "react";
import { MOCK_SIGNALS } from "@/data/signals";
import { EarlySignalCard } from "@/components/EarlySignalCard";
import { EARLY_ACCESS_PRICE_SOL } from "@/lib/config";

export default function SignalsPage() {
  const [filter, setFilter] = useState<"all" | "early" | "public">("all");

  const list = MOCK_SIGNALS.filter((s) => {
    if (filter === "early") return s.isEarly;
    if (filter === "public") return !s.isEarly;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
          Signals
        </h1>
        <p className="mt-2 text-neutral-400">
          Early signals are locked. Pay {EARLY_ACCESS_PRICE_SOL} SOL to unlock thesis & entry before
          public release.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(
          [
            { id: "all", label: "All" },
            { id: "early", label: "🔒 Early only" },
            { id: "public", label: "Public" },
          ] as const
        ).map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === f.id
                ? "bg-[#f5c542] text-black"
                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => (
          <EarlySignalCard key={s.id} signal={s} />
        ))}
      </div>
    </div>
  );
}
