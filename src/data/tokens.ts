export interface Token {
  address: string;
  symbol: string;
  name: string;
  image_url: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  launched_at: string;
  first_seen_at: string;
  peak_market_cap: number;
  peak_at: string;
  current_market_cap: number;
  current_liquidity: number;
  current_volume_24h: number;
  current_price_change_24h: number;
  signal_score: number;
  age_label: string;
}

export const MOCK_TOKENS: Token[] = [
  {
    address: "6ehEcTMCc85aNF4x9CWx8HuvWGhxQtvKdhKVf2HDpump",
    symbol: "TOESCOIN",
    name: "TOES",
    image_url: "https://cdn.dexscreener.com/cms/images/eEd07gpIegaJRCp3?width=800&height=800&quality=95&format=auto",
    website: "https://toescoin.fun/",
    twitter: "https://x.com/toescoinsol",
    telegram: "https://t.me/toescoinchat",
    launched_at: "2026-05-19T09:23:44+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 7442432,
    peak_at: "2026-08-04T21:15:03.251+00:00",
    current_market_cap: 4187839,
    current_liquidity: 321872.75,
    current_volume_24h: 1173404.12,
    current_price_change_24h: -10.95,
    signal_score: 33,
    age_label: "Age 3mo",
  },
  {
    address: "GLZVTxXaoer6S3dPUsxvNj3wbWR36JL5pTYU3vPspump",
    symbol: "TRUMPCOIN",
    name: "TRUMP 2028",
    image_url: "https://cdn.dexscreener.com/cms/images/U6i6SNupWPvZETh3?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-07-01T00:00:00+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 51750000,
    peak_at: "2026-08-15T00:00:00+00:00",
    current_market_cap: 51750000,
    current_liquidity: 518510,
    current_volume_24h: 257020,
    current_price_change_24h: 116088.0,
    signal_score: 46,
    age_label: "Age 3mo",
  },
  {
    address: "cyber1savagepump",
    symbol: "SAVAGE",
    name: "Cyber Savage",
    image_url: "https://cdn.dexscreener.com/cms/images/ed5mLS02PkNjDufq?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-07-10T00:00:00+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 1870000,
    peak_at: "2026-08-20T00:00:00+00:00",
    current_market_cap: 1330000,
    current_liquidity: 103880,
    current_volume_24h: 8250000,
    current_price_change_24h: 4331.0,
    signal_score: 76,
    age_label: "Age 3mo",
  },
  {
    address: "babycupseypump",
    symbol: "BABYCUPSEY",
    name: "Baby Cupsey",
    image_url: "https://cdn.dexscreener.com/cms/images/pGNx-TaSTJFewG1I?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-07-15T00:00:00+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 1860000,
    peak_at: "2026-08-10T00:00:00+00:00",
    current_market_cap: 1840000,
    current_liquidity: 889810,
    current_volume_24h: 364390,
    current_price_change_24h: 3301.0,
    signal_score: 76,
    age_label: "Age 3mo",
  },
  {
    address: "hyperbullpump",
    symbol: "HBULL",
    name: "Hyper Bull",
    image_url: "https://cdn.dexscreener.com/cms/images/5QvWLn5C7U0Ujn5T?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-07-20T00:00:00+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 1920000,
    peak_at: "2026-08-12T00:00:00+00:00",
    current_market_cap: 1000000,
    current_liquidity: 157950,
    current_volume_24h: 351220,
    current_price_change_24h: 12.17,
    signal_score: 44,
    age_label: "Age 3mo",
  },
  {
    address: "cupseywiftrump",
    symbol: "CUPSEY2028",
    name: "Cupsey Wif Trump Hat",
    image_url: "https://cdn.dexscreener.com/cms/images/xIHF97kZn7t08A54?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-07-22T00:00:00+00:00",
    first_seen_at: "2026-07-25T11:30:31.263+00:00",
    peak_market_cap: 1070000,
    peak_at: "2026-08-05T00:00:00+00:00",
    current_market_cap: 1070000,
    current_liquidity: 83990,
    current_volume_24h: 3730000,
    current_price_change_24h: 1860.0,
    signal_score: 83,
    age_label: "Age 3mo",
  },
  {
    address: "catonfonepump",
    symbol: "landscape",
    name: "catonfone",
    image_url: "https://cdn.dexscreener.com/cms/images/CRqhkbA2fyOUWIaF?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-09-30T00:00:00+00:00",
    first_seen_at: "2026-10-01T00:00:00+00:00",
    peak_market_cap: 27050000000,
    peak_at: "2026-10-20T00:00:00+00:00",
    current_market_cap: 27050000000,
    current_liquidity: 0.01,
    current_volume_24h: 28.06,
    current_price_change_24h: 52442887.0,
    signal_score: 45,
    age_label: "Age 24d",
  },
  {
    address: "acfundpump",
    symbol: "AC",
    name: "American Children Fund",
    image_url: "https://cdn.dexscreener.com/cms/images/JW9Y-e3N42Vtb0oi?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-10-20T00:00:00+00:00",
    first_seen_at: "2026-10-20T00:00:00+00:00",
    peak_market_cap: 6140000000,
    peak_at: "2026-10-22T00:00:00+00:00",
    current_market_cap: 6140000000,
    current_liquidity: 4680000000,
    current_volume_24h: 1.97,
    current_price_change_24h: -19.26,
    signal_score: 52,
    age_label: "Age 4d",
  },
  {
    address: "southparkmode",
    symbol: "PARKIFY",
    name: "South Park Mode",
    image_url: "https://cdn.dexscreener.com/cms/images/wUOOxFXnqPqatvwn?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-08-01T00:00:00+00:00",
    first_seen_at: "2026-08-05T00:00:00+00:00",
    peak_market_cap: 1430000000,
    peak_at: "2026-09-15T00:00:00+00:00",
    current_market_cap: 1430000000,
    current_liquidity: 1070000000,
    current_volume_24h: 38.45,
    current_price_change_24h: 0.0,
    signal_score: 54,
    age_label: "Age 2mo",
  },
  {
    address: "babytrollpump",
    symbol: "BABYTROLL",
    name: "Baby Troll",
    image_url: "https://cdn.dexscreener.com/cms/images/jp1a7LAdqn87wGMg?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-09-01T00:00:00+00:00",
    first_seen_at: "2026-09-05T00:00:00+00:00",
    peak_market_cap: 1240000000,
    peak_at: "2026-10-01T00:00:00+00:00",
    current_market_cap: 1240000000,
    current_liquidity: 153970,
    current_volume_24h: 41.51,
    current_price_change_24h: 445608.0,
    signal_score: 45,
    age_label: "Age 1mo",
  },
  {
    address: "oggiefrog",
    symbol: "OGGIE",
    name: "The OG Frog",
    image_url: "https://cdn.dexscreener.com/cms/images/eEd07gpIegaJRCp3?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-08-15T00:00:00+00:00",
    first_seen_at: "2026-08-20T00:00:00+00:00",
    peak_market_cap: 649150000,
    peak_at: "2026-09-20T00:00:00+00:00",
    current_market_cap: 649150000,
    current_liquidity: 397300000,
    current_volume_24h: 68.55,
    current_price_change_24h: 8.55,
    signal_score: 55,
    age_label: "Age 2mo",
  },
  {
    address: "wifinance",
    symbol: "WIF",
    name: "Women in Finance",
    image_url: "https://cdn.dexscreener.com/cms/images/U6i6SNupWPvZETh3?width=800&height=800&quality=95&format=auto",
    launched_at: "2026-10-16T00:00:00+00:00",
    first_seen_at: "2026-10-16T00:00:00+00:00",
    peak_market_cap: 633880000,
    peak_at: "2026-10-22T00:00:00+00:00",
    current_market_cap: 633880000,
    current_liquidity: 0.02,
    current_volume_24h: 0.01,
    current_price_change_24h: 25.07,
    signal_score: 31,
    age_label: "Age 8d",
  },
];

export function formatMarketCap(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

export function formatVolume(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
  if (n < 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(2)}`;
}

export function formatChange(n: number): string {
  const sign = n >= 0 ? "+" : "";
  if (Math.abs(n) >= 1000) return `${sign}${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}%`;
  return `${sign}${n.toFixed(2)}%`;
}
