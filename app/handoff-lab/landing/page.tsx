import type { Metadata } from "next";
import Link from "next/link";
import HandoffMonitor from "../HandoffMonitor";

export const metadata: Metadata = {
  title: "Handoff landing",
  description: "The page every same-origin handoff trigger opens.",
};

export default function HandoffLandingPage({
  searchParams,
}: {
  searchParams: { via?: string };
}) {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-10">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          New tab · same origin
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          The run should be here.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          Opened by <span className="text-stone-500">{searchParams.via ?? "an unknown method"}</span>.
          If the handoff worked, the widget in this tab is showing the same
          conversation you left behind, and the agent&apos;s next step arrives
          here rather than in the old tab.
        </p>
      </header>

      <div className="pb-10">
        <HandoffMonitor />
      </div>

      <section className="rounded-2xl border border-stone-200 p-6 mb-24">
        <h2 className="text-sm font-medium text-stone-900">What good looks like</h2>
        <ul className="mt-4 space-y-3 text-sm text-stone-500 leading-relaxed">
          <li>
            <span className="text-stone-400">Note on disk: absent</span> — this
            tab claimed it on boot. A note still sitting there means nobody
            adopted, and the old tab will take the run back after fifteen
            seconds.
          </li>
          <li>
            <span className="text-stone-400">Run lock: held</span> — this tab is
            driving now.
          </li>
          <li>
            <span className="text-stone-400">In the widget</span> — your earlier
            messages are here, and the step that opened this tab reads as
            finished rather than spinning.
          </li>
          <li>
            <span className="text-stone-400">In the old tab</span> — the same
            step also reads as finished, and its composer is usable again.
          </li>
        </ul>
      </section>

      <div className="pb-24">
        <Link
          href="/handoff-lab"
          className="text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
        >
          Back to the triggers
        </Link>
      </div>
    </div>
  );
}
