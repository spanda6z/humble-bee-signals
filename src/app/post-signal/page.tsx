"use client";

import { useState } from "react";
import Link from "next/link";
import { EARLY_ACCESS_PRICE_SOL } from "@/lib/config";

export default function PostSignalPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isEarly, setIsEarly] = useState(true);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="text-4xl mb-4">🐝</div>
        <h1 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white">
          Signal posted
        </h1>
        <p className="mt-2 text-neutral-400">
          {isEarly
            ? `Early signal is locked. Users pay ${EARLY_ACCESS_PRICE_SOL} SOL to unlock.`
            : "Public signal is live on the feed."}
        </p>
        <Link href="/signals" className="btn-gold mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold">
          View Signals
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold text-white">
        Post Early Signal
      </h1>
      <p className="mt-2 text-sm text-neutral-400">
        Share a call. Mark as Early to lock it behind {EARLY_ACCESS_PRICE_SOL} SOL until you release it.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            Token mint or symbol
          </label>
          <input
            required
            placeholder="e.g. landscape or contract address"
            className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            Thesis
          </label>
          <textarea
            required
            rows={4}
            placeholder="Why this token, entry context, risk notes..."
            className="w-full resize-y rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
              Entry mcap ($)
            </label>
            <input
              required
              type="number"
              placeholder="180000"
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
              Target mcap ($)
            </label>
            <input
              type="number"
              placeholder="10000000"
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#121212] px-4 py-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isEarly}
            onChange={(e) => setIsEarly(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-600 text-[#f5c542] focus:ring-[#f5c542]"
          />
          <div>
            <p className="text-sm font-medium text-white">Early signal (locked)</p>
            <p className="text-xs text-neutral-500">
              Users pay {EARLY_ACCESS_PRICE_SOL} SOL to see thesis & entry until unlock time
            </p>
          </div>
        </label>

        <button type="submit" className="btn-gold w-full rounded-full py-3 text-sm font-semibold">
          Post Signal
        </button>
      </form>
    </div>
  );
}
