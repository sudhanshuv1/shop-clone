import type { Metadata } from "next";
import Link from "next/link";
import HandoffMonitor from "../HandoffMonitor";
import { TIER2_ROUTE } from "../lab-config";

export const metadata: Metadata = {
  title: "Handoff · anchor tier",
  description: "Routes reachable only through a _blank link, and routes reachable both ways.",
};

const CARD = "rounded-2xl border border-stone-200 p-6";
const NOTE = "mt-4 text-sm text-stone-500 leading-relaxed";
const EXPECT = "mt-3 text-sm text-stone-400 leading-relaxed";
const TRIGGER =
  "inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700";

export default function HandoffNavigatePage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-10">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          Test fixture · navigate_to_page
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Following a link.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          With no navigate function registered, the widget gets to the resolved
          route by finding a link to it on this page and clicking it. Which link
          it picks is the whole test.
        </p>
        <p className="mt-4 text-sm text-stone-400 leading-relaxed max-w-lg">
          Reload this page first if you registered a navigate function on the lab
          — it wins over everything here. Drive these by asking the agent to take
          you somewhere; don&apos;t name the link.
        </p>
      </header>

      <div className="pb-10">
        <HandoffMonitor />
      </div>

      <section className="pb-12 grid gap-4">
        <div className={CARD}>
          <a
            href={TIER2_ROUTE}
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER}
          >
            Checkout
          </a>
          <p className={NOTE}>
            The only link to{" "}
            <code className="text-stone-600">{TIER2_ROUTE}</code> anywhere on the
            page — and it opens a tab. Nothing in the header or footer links
            there, which is why this route was chosen: for anywhere else, the
            in-place link in the page chrome would be preferred and this case
            would never be reached.
          </p>
          <p className={EXPECT}>
            Say: <span className="text-stone-500">&quot;take me to checkout&quot;</span>.
            Expect a tab to open with the run following it — the note must be
            written before the link is followed, never after.
          </p>
        </div>

        <div className={CARD}>
          <div className="flex flex-wrap gap-3">
            <a
              href="/wishlist"
              target="_blank"
              rel="noopener noreferrer"
              className={TRIGGER}
            >
              Wishlist in a new tab
            </a>
            <a
              href="/wishlist"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50"
            >
              Wishlist in place
            </a>
          </div>
          <p className={NOTE}>
            The same route reachable both ways. Moving this tab is what the agent
            promised the user, so the in-place link should win — opening a tab
            when it did not have to is a worse answer, even though the handoff
            would cope.
          </p>
          <p className={EXPECT}>
            Say: <span className="text-stone-500">&quot;take me to my wishlist&quot;</span>.
            Expect no new tab, no note, and the run to stay in this tab.
          </p>
        </div>

        <div className={CARD}>
          <h2 className="text-sm font-medium text-stone-900">
            When the tab cannot open at all
          </h2>
          <p className={NOTE}>
            A link the page clicks by itself only opens a tab if a real gesture
            happened moments earlier. Ask for checkout and then leave the page
            alone — don&apos;t move the mouse or type — so the agent&apos;s
            navigation lands with no gesture behind it.
          </p>
          <p className={EXPECT}>
            Expect this tab to move to checkout in place, with no note written.
            The link is skipped rather than clicked into a blocked popup, which
            used to report a navigation that never happened.
          </p>
        </div>
      </section>

      <div className="pb-24">
        <Link
          href="/handoff-lab"
          className="text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
        >
          Back to the lab
        </Link>
      </div>
    </div>
  );
}
