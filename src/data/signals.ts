export interface EarlySignal {
  id: string;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  tokenImage: string;
  caller: string;
  callerName?: string;
  thesis: string;
  entryMcap: number;
  targetMcap?: number;
  postedAt: string;
  isEarly: boolean;
  unlocksAt?: string;
  likes: number;
  views: number;
}

export interface FlexPost {
  id: string;
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  tokenImage: string;
  trader: string;
  traderName?: string;
  entryMcap: number;
  exitMcap: number;
  multiple: number;
  pnlSol: number;
  note?: string;
  proofImage?: string;
  postedAt: string;
  likes: number;
}

export const MOCK_SIGNALS: EarlySignal[] = [
  {
    id: "sig-1",
    tokenAddress: "catonfonepump",
    tokenSymbol: "landscape",
    tokenName: "catonfone",
    tokenImage: "https://cdn.dexscreener.com/cms/images/CRqhkbA2fyOUWIaF?width=800&height=800&quality=95&format=auto",
    caller: "7xKz...9mPq",
    callerName: "AlphaBee",
    thesis: "Stealth launch, strong TG velocity, chart structure clean. Expecting $10M+ within 48h if volume holds.",
    entryMcap: 180000,
    targetMcap: 10000000,
    postedAt: "2026-10-24T08:12:00Z",
    isEarly: true,
    unlocksAt: "2026-10-25T20:00:00Z",
    likes: 42,
    views: 890,
  },
  {
    id: "sig-2",
    tokenAddress: "babytrollpump",
    tokenSymbol: "BABYTROLL",
    tokenName: "Baby Troll",
    tokenImage: "https://cdn.dexscreener.com/cms/images/jp1a7LAdqn87wGMg?width=800&height=800&quality=95&format=auto",
    caller: "3nRw...kL2a",
    callerName: "SolSniper",
    thesis: "Narrative fit + low float. Early bag holders still accumulating. Risk: high volatility.",
    entryMcap: 420000,
    targetMcap: 5000000,
    postedAt: "2026-10-24T14:30:00Z",
    isEarly: true,
    unlocksAt: "2026-10-26T00:00:00Z",
    likes: 28,
    views: 512,
  },
  {
    id: "sig-3",
    tokenAddress: "cyber1savagepump",
    tokenSymbol: "SAVAGE",
    tokenName: "Cyber Savage",
    tokenImage: "https://cdn.dexscreener.com/cms/images/ed5mLS02PkNjDufq?width=800&height=800&quality=95&format=auto",
    caller: "9jq5...RP2V",
    callerName: "HiveQueen",
    thesis: "Already printed. Public signal for education — this was called at 200k.",
    entryMcap: 200000,
    targetMcap: 2000000,
    postedAt: "2026-10-20T11:00:00Z",
    isEarly: false,
    likes: 156,
    views: 3200,
  },
  {
    id: "sig-4",
    tokenAddress: "acfundpump",
    tokenSymbol: "AC",
    tokenName: "American Children Fund",
    tokenImage: "https://cdn.dexscreener.com/cms/images/JW9Y-e3N42Vtb0oi?width=800&height=800&quality=95&format=auto",
    caller: "4pLm...xQ9z",
    thesis: "Fresh narrative, organic volume spike. Watching for hold above $2M.",
    entryMcap: 850000,
    postedAt: "2026-10-23T19:45:00Z",
    isEarly: true,
    unlocksAt: "2026-10-25T18:00:00Z",
    likes: 19,
    views: 340,
  },
];

export const MOCK_FLEXES: FlexPost[] = [
  {
    id: "flex-1",
    tokenAddress: "catonfonepump",
    tokenSymbol: "landscape",
    tokenName: "catonfone",
    tokenImage: "https://cdn.dexscreener.com/cms/images/CRqhkbA2fyOUWIaF?width=800&height=800&quality=95&format=auto",
    trader: "7xKz...9mPq",
    traderName: "AlphaBee",
    entryMcap: 180000,
    exitMcap: 27000000000,
    multiple: 150000,
    pnlSol: 420.5,
    note: "Never selling the last 10%.",
    postedAt: "2026-10-22T16:00:00Z",
    likes: 312,
  },
  {
    id: "flex-2",
    tokenAddress: "babytrollpump",
    tokenSymbol: "BABYTROLL",
    tokenName: "Baby Troll",
    tokenImage: "https://cdn.dexscreener.com/cms/images/jp1a7LAdqn87wGMg?width=800&height=800&quality=95&format=auto",
    trader: "2bNm...hY4w",
    entryMcap: 95000,
    exitMcap: 1240000000,
    multiple: 13052,
    pnlSol: 88.2,
    postedAt: "2026-10-21T09:30:00Z",
    likes: 97,
  },
  {
    id: "flex-3",
    tokenAddress: "cyber1savagepump",
    tokenSymbol: "SAVAGE",
    tokenName: "Cyber Savage",
    tokenImage: "https://cdn.dexscreener.com/cms/images/ed5mLS02PkNjDufq?width=800&height=800&quality=95&format=auto",
    trader: "8cKp...tR1n",
    traderName: "DegenWizard",
    entryMcap: 310000,
    exitMcap: 1870000,
    multiple: 6.03,
    pnlSol: 14.7,
    note: "Scaled out 70%, rest moonbag.",
    postedAt: "2026-10-19T22:15:00Z",
    likes: 54,
  },
];
