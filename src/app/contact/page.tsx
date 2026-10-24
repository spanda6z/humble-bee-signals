"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-space)] text-3xl font-bold sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-neutral-400">
          Questions, partnership ideas, or bug reports — we read everything.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5 rounded-2xl border border-white/5 bg-[#121212]/80 p-6"
      >
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">
            Message
          </label>
          <textarea
            required
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#f5c542]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c542]/30"
          />
        </div>

        <button type="submit" className="btn-gold w-full rounded-full py-2.5 text-sm">
          ✈ Send message
        </button>

        {sent && (
          <p className="text-center text-sm text-emerald-400">
            Message received (demo). In production this would send to your backend.
          </p>
        )}
      </form>

      <p className="mt-8 text-center text-sm text-neutral-500">
        📧 hello@humblebee.signals
      </p>
    </div>
  );
}
