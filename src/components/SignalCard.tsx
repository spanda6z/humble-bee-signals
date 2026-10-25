"use client";

import { Token, formatMarketCap, formatVolume, formatChange } from "@/data/tokens";

interface Props {
  token: Token;
}

export function SignalCard({ token }: Props) {
  const isPositive = token.current_price_change_24h >= 0;

  return (
    <div className="signal-card group rounded-2xl bg-[#121212]/p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-800 ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={token.image_url}
              alt={token.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect fill='%231a1a1a' width='44' height='44'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' fill='%23f5c542' font-size='18'%3E🐝%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-[family-name:var(--font-space)] text-base font-semibold text-white">
                {token.name}
              </h3>
              <span className="shrink-0 rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-400">
                SOLANA
              </span>
            </div>
            <p className="truncate text-sm text-neutral-500">${token.symbol}</p>
          </div>
        </div>
        <div className="shrink-0 rounded-full bg-[#f5c542]/15 px-2.5 py-1 text-xs font-semibold text-[#f5c542]">
          {token.signal_score}/100
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Market Cap</p>
          <p className="mt-0.5 font-medium text-white">{formatMarketCap(token.current_market_cap)}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Peak Cap</p>
          <p className="mt-0.5 font-medium text-[#f5c542]">{formatMarketCap(token.peak_market_cap)}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">24h Volume</p>
          <p className="mt-0.5 font-medium text-white">{formatVolume(token.current_volume_24h)}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Liquidity</p>
          <p className="mt-0.5 font-medium text-white">{formatVolume(token.current_liquidity)}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-sm">
        <span className="text-neutral-500">{token.age_label}</span>
        <span
          className={`flex items-center gap-1 font-medium ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          <span aria-hidden>{isPositive ? "↗" : "↘"}</span>
          {formatChange(token.current_price_change_24h)}
        </span>
      </div>
    </div>
  );
}
