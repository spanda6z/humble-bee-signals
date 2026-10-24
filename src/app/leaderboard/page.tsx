import { MOCK_TOKENS, formatMarketCap, formatVolume, formatChange } from "@/data/tokens";

export default function LeaderboardPage() {
  const ranked = [...MOCK_TOKENS].sort(
    (a, b) => b.peak_market_cap - a.peak_market_cap
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
          Leaderboard
        </h1>
        <p className="mt-2 text-neutral-400">
          Ranked by peak market cap achieved. Live data.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#121212]/60">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-neutral-500">
              <th className="px-4 py-3 font-medium">Rank</th>
              <th className="px-4 py-3 font-medium">Token</th>
              <th className="px-4 py-3 font-medium">Market Cap</th>
              <th className="px-4 py-3 font-medium">Peak Cap</th>
              <th className="px-4 py-3 font-medium">Volume</th>
              <th className="px-4 py-3 font-medium">Liquidity</th>
              <th className="px-4 py-3 font-medium">24h</th>
              <th className="px-4 py-3 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((token, i) => {
              const isPositive = token.current_price_change_24h >= 0;
              return (
                <tr
                  key={token.address}
                  className="border-b border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 font-medium text-[#f5c542]">#{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={token.image_url}
                        alt={token.name}
                        className="h-8 w-8 rounded-full object-cover bg-neutral-800"
                      />
                      <div>
                        <p className="font-medium text-white">{token.name}</p>
                        <p className="text-xs text-neutral-500">
                          ${token.symbol} · {token.address.slice(0, 6)}...
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white">
                    {formatMarketCap(token.current_market_cap)}
                  </td>
                  <td className="px-4 py-3 font-medium text-[#f5c542]">
                    {formatMarketCap(token.peak_market_cap)}
                  </td>
                  <td className="px-4 py-3 text-neutral-300">
                    {formatVolume(token.current_volume_24h)}
                  </td>
                  <td className="px-4 py-3 text-neutral-300">
                    {formatVolume(token.current_liquidity)}
                  </td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      isPositive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {formatChange(token.current_price_change_24h)}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-[#f5c542]/15 px-2 py-0.5 text-xs font-semibold text-[#f5c542]">
                      {token.signal_score}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
