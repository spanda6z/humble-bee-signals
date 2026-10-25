"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatMarketCap } from "@/data/tokens";

export default function PostFlexPage() {
  const [token, setToken] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [pnlSol, setPnlSol] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const multiple = useMemo(() => {
    const e = parseFloat(entry);
    const x = parseFloat(exit);
    if (!e || !x || e <= 0) return null;
    return x / e;
  }, [entry, exit]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="text-4xl mb-4">💰</div>
        <h1 className="font-[family-name:var(--font-space)] text-2xl font-bold text-white">
          Flex posted
        </h1>
        <p className="mt-2 text-neutral-400">Your branded card is on the feed.</p>
        <Link href="/flex" className="btn-gold mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold">
          View Flex Feed
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold text-white">
        Post Flex
      </h1>
      <p className="mt-2 text-sm text-neutral-400">
        We generate a branded PnL card. Optional screenshot as proof.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Token</label>
          <input required value={token} onChange={(e) => setToken(e.target.value)} placeholder="Symbol or mint"
            className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Entry mcap ($)</label>
            <input required type="number" value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="180000"
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Exit mcap ($)</label>
            <input required type="number" value={exit} onChange={(e) => setExit(e.target.value)} placeholder="5000000"
              className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">PnL (SOL)</label>
          <input required type="number" step="0.1" value={pnlSol} onChange={(e) => setPnlSol(e.target.value)} placeholder="42.5"
            className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Note (optional)</label>
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Scaled out 70%, rest moonbag"
            className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Proof screenshot (optional)</label>
          <input type="file" accept="image/*"
            className="w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-neutral-400 file:mr-3 file:rounded-lg file:border-0 file:bg-[#f5c542]/20 file:px-3 file:py-1 file:text-xs file:font-medium file:text-[#f5c542]" />
        </div>

        {(entry || exit || pnlSol) && (
          <div className="rounded-2xl border border-[#f5c542]/20 bg-gradient-to-br from-[#121212] to-[#1a1508] p-4">
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Preview card</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">{token || "TOKEN"}</span>
              {multiple && (
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-sm font-bold text-emerald-400">
                  {multiple >= 1000 ? `${(multiple / 1000).toFixed(1)}k×` : `${multiple.toFixed(1)}×`}
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-black/40 p-2">
                <p className="text-neutral-500">Entry</p>
                <p className="text-white font-medium">{entry ? formatMarketCap(parseFloat(entry)) : "—"}</p>
              </div>
              <div className="rounded-lg bg-black/40 p-2">
                <p className="text-neutral-500">Exit</p>
                <p className="text-[#f5c542] font-medium">{exit ? formatMarketCap(parseFloat(exit)) : "—"}</p>
              </div>
              <div className="rounded-lg bg-black/40 p-2">
                <p className="text-neutral-500">PnL</p>
                <p className="text-emerald-400 font-medium">{pnlSol ? `+${pnlSol} SOL` : "—"}</p>
              </div>
            </div>
            {note && <p className="mt-2 text-xs text-neutral-400 italic">&ldquo;{note}&rdquo;</p>}
          </div>
        )}

        <button type="submit" className="btn-gold w-full rounded-full py-3 text-sm font-semibold">
          Generate & Post Flex
        </button>
      </form>
    </div>
  );
}
