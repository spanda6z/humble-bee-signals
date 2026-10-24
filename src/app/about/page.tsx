export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
        About <span className="text-[#f5c542]">Humble Bee</span>
      </h1>

      <div className="mt-8 space-y-5 text-neutral-300 leading-relaxed">
        <p>
          Humble Bee Signals is a live discovery platform for Pump.fun tokens on Solana that have
          crossed meaningful market cap milestones — $1M, $5M, $10M, $25M, $50M, and $100M+.
        </p>
        <p>
          Every token displayed comes from live blockchain-indexed data. We do not fabricate market
          caps, prices, or holder counts. If a token doesn&apos;t qualify, it doesn&apos;t appear.
        </p>
        <p>
          Data is aggregated from DexScreener and refreshed every ~5 minutes. Each token&apos;s history
          (price, market cap, volume, liquidity) is stored so peak values remain visible even after a
          pullback.
        </p>
        <p>
          The Signal Score (0–100) is derived from real metrics: liquidity depth, 24h volume vs market
          cap, retention against peak, and momentum. No arbitrary bonuses.
        </p>
        <p className="font-medium text-white">
          Humble Bee Signals is educational and informational only. Not financial advice.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-[#f5c542]/20 bg-[#f5c542]/5 p-5">
        <p className="flex items-start gap-3 text-sm text-neutral-300">
          <span className="text-lg">⚠️</span>
          <span>
            Humble Bee Signals provides educational and informational content only. Nothing here is
            financial advice. Crypto is highly risky — always do your own research.
          </span>
        </p>
      </div>
    </div>
  );
}
