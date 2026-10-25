"use client";

import Link from "next/link";
import { FlexPost } from "@/data/signals";
import { formatMarketCap } from "@/data/tokens";

interface Props {
  flex: FlexPost;
}

export function FlexCard({ flex }: Props) {
  const multipleLabel =
    flex.multiple >= 1000
      ? `${(flex.multiple / 1000).toFixed(1)}k×`
      : `${flex.multiple.toFixed(1)}×`;

  return (
    <div className="signal-card rounded-2xl bg-gradient-to-br from-[#121212] to-[#1a1508] border border-[#f5c542]/10 p-4">
      <div className="flex items-center justify-between gap-2">
        <Link href={`/token/${flex.tokenAddress}`} className="flex items-center gap-2.5 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={flex.tokenImage}
            alt={flex.tokenName}
            className="h-9 w-9 rounded-full object-cover bg-neutral-800"
          />
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-space)] font-semibold text-white text-sm">
              {flex.tokenName}
            </p>
            <p className="text-xs text-neutral-500">${flex.tokenSymbol}</p>
          </div>
        </Link>
        <div className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-sm font-bold text-emerald-400">
          {multipleLabel}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-black/40 p-2">
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Entry</p>
          <p className="mt-0.5 text-sm font-medium text-white">{formatMarketCap(flex.entryMcap)}</p>
        </div>
        <div className="rounded-xl bg-black/40 p-2">
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Exit</p>
          <p className="mt-0.5 text-sm font-medium text-[#f5c542]">{formatMarketCap(flex.exitMcap)}</p>
        </div>
        <div className="rounded-xl bg-black/40 p-2">
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">PnL</p>
          <p className="mt-0.5 text-sm font-medium text-emerald-400">+{flex.pnlSol.toFixed(1)} SOL</p>
        </div>
      </div>

      {flex.note && (
        <p className="mt-3 text-xs text-neutral-400 italic">&ldquo;{flex.note}&rdquo;</p>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-neutral-500">
        <span>{flex.traderName || flex.trader}</span>
        <span>♥ {flex.likes}</span>
      </div>
    </div>
  );
}
