import Link from "next/link";
import { MOCK_FLEXES } from "@/data/signals";
import { FlexCard } from "@/components/FlexCard";

export default function FlexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
            Flex Feed
          </h1>
          <p className="mt-2 text-neutral-400">
            Auto-generated PnL cards. Optional proof upload. Branded by the hive.
          </p>
        </div>
        <Link
          href="/post-flex"
          className="btn-gold inline-flex shrink-0 rounded-full px-5 py-2 text-sm font-semibold"
        >
          Post Your Flex
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_FLEXES.map((f) => (
          <FlexCard key={f.id} flex={f} />
        ))}
      </div>
    </div>
  );
}
