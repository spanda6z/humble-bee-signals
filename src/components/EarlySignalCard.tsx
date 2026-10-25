"use client";

import Link from "next/link";
import { EarlySignal } from "@/data/signals";
import { EARLY_ACCESS_PRICE_SOL, PAYMENT_ADDRESS, solanaPayUrl } from "@/lib/config";
import { formatMarketCap } from "@/data/tokens";
import { useState } from "react";

interface Props {
  signal: EarlySignal;
  unlocked?: boolean;
}

export function EarlySignalCard({ signal, unlocked = false }: Props) {
  const [showPay, setShowPay] = useState(false);
  const locked = signal.isEarly && !unlocked;

  return (
    <div className="signal-card rounded-2xl bg-[#121212]/p-4 relative overflow-hidden">
      {locked && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm rounded-2xl p-4">
          <div className="text-3xl mb-2">🔒</div>
          <p className="text-sm font-semibold text-white">Early Signal</p>
          <p className="text-xs text-neutral-400 mt-1 text-center">
            Unlock full thesis & entry for {EARLY_ACCESS_PRICE_SOL} SOL
          </p>
          <button
            onClick={() => setShowPay(true)}
            className="btn-gold mt-4 rounded-full px-5 py-2 text-sm font-semibold"
          >
            Pay {EARLY_ACCESS_PRICE_SOL} SOL to Unlock
          </button>
          {showPay && (
            <div className="mt-4 w-full max-w-xs rounded-xl border border-[#f5c542]/30 bg-black/90 p-3 text-left">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Send to</p>
              <p className="break-all font-mono text-xs text-[#f5c542]">{PAYMENT_ADDRESS}</p>
              <p className="mt-2 text-[10px] text-neutral-500">
                Amount: <span className="text-white font-medium">{EARLY_ACCESS_PRICE_SOL} SOL</span>
                {signal.id && (
                  <> · Memo: <span className="text-white">{signal.id}</span></>
                )}
              </p>
              <a
                href={solanaPayUrl(EARLY_ACCESS_PRICE_SOL, signal.id)}
                className="mt-3 block text-center text-xs text-[#f5c542] underline"
              >
                Open in wallet
              </a>
            </div>
          )}
        </div>
      )}

      <div className={locked ? "select-none blur-[2px]" : ""}>
        <div className="flex items-start justify-between gap-3">
          <Link href={`/token/${signal.tokenAddress}`} className="flex min-w-0 items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={signal.tokenImage}
              alt={signal.tokenName}
              className="h-10 w-10 rounded-full object-cover bg-neutral-800 ring-1 ring-white/10"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-[family-name:var(--font-space)] font-semibold text-white">
                  {signal.tokenName}
                </h3>
                {signal.isEarly && (
                  <span className="shrink-0 rounded bg-[#f5c542]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#f5c542]">
                    EARLY
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-500">${signal.tokenSymbol}</p>
            </div>
          </Link>
          <div className="text-right shrink-0">
            <p className="text-xs text-neutral-500">{signal.callerName || signal.caller}</p>
            <p className="text-[10px] text-neutral-600">
              {new Date(signal.postedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-300 leading-relaxed line-clamp-3">
          {signal.thesis}
        </p>

        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          <span className="rounded-lg bg-white/5 px-2 py-1 text-neutral-400">
            Entry: <span className="text-white font-medium">{formatMarketCap(signal.entryMcap)}</span>
          </span>
          {signal.targetMcap && (
            <span className="rounded-lg bg-white/5 px-2 py-1 text-neutral-400">
              Target: <span className="text-[#f5c542] font-medium">{formatMarketCap(signal.targetMcap)}</span>
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-neutral-500 border-t border-white/5 pt-3">
          <span>♥ {signal.likes}</span>
          <span>👁 {signal.views}</span>
        </div>
      </div>
    </div>
  );
}
