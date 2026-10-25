/** Platform payment address — receives 1 SOL early-access fees */
export const PAYMENT_ADDRESS = "9jq5a6eGuhHLZcB5v9f9EM5yJnNRrBwY7gQqEHbmRP2V";

/** Early access price in SOL */
export const EARLY_ACCESS_PRICE_SOL = 1;

/** Solana Pay / transfer deep link helper */
export function solanaPayUrl(amountSol: number = EARLY_ACCESS_PRICE_SOL, memo?: string) {
  const params = new URLSearchParams({
    amount: String(amountSol),
  });
  if (memo) params.set("memo", memo);
  return `solana:${PAYMENT_ADDRESS}?${params.toString()}`;
}

export const MILESTONES = [
  { label: "$1M", value: 1_000_000 },
  { label: "$5M", value: 5_000_000 },
  { label: "$10M", value: 10_000_000 },
  { label: "$25M", value: 25_000_000 },
  { label: "$50M", value: 50_000_000 },
  { label: "$100M", value: 100_000_000 },
  { label: "$1B", value: 1_000_000_000 },
] as const;
