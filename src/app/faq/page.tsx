"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Where does the data come from?",
    a: "Data is aggregated primarily from DexScreener and on-chain sources for Pump.fun tokens. We index tokens that have crossed major market cap milestones and store historical peak values.",
  },
  {
    q: "What qualifies a token as a signal?",
    a: "A token must have reached at least $1M market cap on Pump.fun (or graduated pools). We track $1M, $5M, $10M, $25M, $50M, and $100M+ milestones.",
  },
  {
    q: "How often is data refreshed?",
    a: "Market data is refreshed approximately every 5 minutes. Peak values are retained even if the token pulls back.",
  },
  {
    q: "How is the Signal Score calculated?",
    a: "The Signal Score (0–100) is derived from real metrics: liquidity depth, 24h volume relative to market cap, how well the token retains value against its peak, and recent momentum. No arbitrary boosts.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Humble Bee Signals is purely educational and informational. Nothing on this site constitutes financial advice. Always do your own research.",
  },
  {
    q: "Why don't I see some tokens?",
    a: "Only tokens that have verifiably crossed the selected market cap thresholds appear. Tokens that never reached the filter threshold or lack reliable data sources are excluded.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-10 text-center font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
        Frequently asked questions
      </h1>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-[#121212]/80 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-white hover:bg-white/[0.02]"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#f5c542]">→</span> {faq.q}
              </span>
              <span className="text-neutral-500">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="border-t border-white/5 px-5 py-4 text-sm text-neutral-400 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
