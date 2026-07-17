import type { Metadata } from "next";
import Link from "next/link";
import OpenerStatus from "./OpenerStatus";

export const metadata: Metadata = {
  title: "Same-origin landing",
  description: "The page the same-origin test fixture opens in a new tab.",
};

export default function SameOriginLandingPage({
  searchParams,
}: {
  searchParams: { via?: string };
}) {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-8">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          New tab · same origin
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          You landed here.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          Opened by{" "}
          <span className="text-stone-500">{searchParams.via ?? "an unknown method"}</span>
          . This page is on the same origin as the store, so the two tabs are
          allowed to see each other.
        </p>
      </header>

      <OpenerStatus />

      <div className="py-10">
        <Link
          href="/same-origin"
          className="text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
        >
          Back to the triggers
        </Link>
      </div>
    </div>
  );
}
