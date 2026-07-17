import type { Metadata } from "next";
import Link from "next/link";
import HandoffMonitor from "./HandoffMonitor";
import NavigateFnToggle from "./NavigateFnToggle";
import {
  OpenBlockedButton,
  OpenCrossOriginButton,
  OpenNoopenerButton,
  OpenPlainButton,
  OpenPopupThenTabButton,
  OpenSelfButton,
} from "./TriggerButtons";
import { CROSS_ORIGIN_URL, LANDING_PATH } from "./lab-config";

export const metadata: Metadata = {
  title: "New-tab handoff lab",
  description: "Every way a tool can open a new tab, and what the run should do about it.",
};

const TRIGGER =
  "inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700";
const CARD = "rounded-2xl border border-stone-200 p-6";
const NOTE = "mt-4 text-sm text-stone-500 leading-relaxed";
const EXPECT = "mt-3 text-sm text-stone-400 leading-relaxed";

export default function HandoffLabPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-10">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          Test fixture
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          New-tab handoff.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          When a tool opens a tab, the run is supposed to follow the user into
          it. Each trigger below is an ordinary page doing an ordinary thing —
          the widget has to work out, on its own, whether a tab opened and
          whether it can be reached.
        </p>
        <p className="mt-4 text-sm text-stone-400 leading-relaxed max-w-lg">
          Every element is labelled distinctly so you can name it to the agent.
          Ask it to <span className="text-stone-500">click</span> one to test{" "}
          <code className="text-stone-500">perform_action</code>, or to{" "}
          <span className="text-stone-500">highlight</span> one and click it
          yourself to test <code className="text-stone-500">highlight</code>.
        </p>
      </header>

      <div className="pb-10">
        <HandoffMonitor />
      </div>

      <section className="pb-4">
        <h2 className="text-sm font-medium text-stone-900">Links</h2>
        <p className="mt-2 text-sm text-stone-400">
          What the anchor says it will do is readable before the click — so the
          run can be handed over first, and the tab always finds the note
          waiting.
        </p>
      </section>

      <section className="pb-12 grid gap-4 sm:grid-cols-2">
        <div className={CARD}>
          <a
            href={`${LANDING_PATH}?via=anchor-blank`}
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER}
          >
            Open home link
          </a>
          <p className={NOTE}>
            A <code className="text-stone-600">target=&quot;_blank&quot;</code>{" "}
            anchor to a page on this origin.
          </p>
          <p className={EXPECT}>
            Expect: a tab opens, the note appears then clears, the lock moves,
            and the conversation continues in the new tab.
          </p>
        </div>

        <div className={CARD}>
          <a
            href={CROSS_ORIGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER}
          >
            Open foreign link
          </a>
          <p className={NOTE}>
            The same anchor pointed at another origin. Storage does not cross
            origins, so no note could ever reach that tab.
          </p>
          <p className={EXPECT}>
            Expect: the tab opens, nothing is written, the run stays here. The
            tool result should say it is unreachable rather than pretend.
          </p>
        </div>

        <div className={CARD}>
          <a
            href={`${LANDING_PATH}?via=anchor-same-tab`}
            className={TRIGGER}
          >
            Open home link in place
          </a>
          <p className={NOTE}>
            An ordinary anchor with no{" "}
            <code className="text-stone-600">target</code>.
          </p>
          <p className={EXPECT}>
            Expect: no tab, no note, no handoff — this is the case that must
            stay boring.
          </p>
        </div>

        <div className={CARD}>
          <a
            href="/handoff-lab/report.txt"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER}
          >
            Download the report file
          </a>
          <p className={NOTE}>
            Carries <code className="text-stone-600">download</code> alongside{" "}
            <code className="text-stone-600">_blank</code>. The browser saves the
            file instead of opening a page.
          </p>
          <p className={EXPECT}>
            Expect: no handoff. Arming here would strand the run for a download.
          </p>
        </div>

        <div className={CARD}>
          <a
            href="mailto:support@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER}
          >
            Email support directly
          </a>
          <p className={NOTE}>
            A <code className="text-stone-600">mailto:</code> link — it hands off
            to a mail app, not a browsing context.
          </p>
          <p className={EXPECT}>
            Expect: no handoff, and no claim that a page was opened.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <h2 className="text-sm font-medium text-stone-900">Scripts</h2>
        <p className="mt-2 text-sm text-stone-400">
          Nothing in the markup says these will open a tab — the page decides at
          click time. The only signal is the{" "}
          <code className="text-stone-500">window.open</code> call itself.
        </p>
      </section>

      <section className="pb-12 grid gap-4 sm:grid-cols-2">
        <div className={CARD}>
          <OpenPlainButton />
          <p className={NOTE}>
            <code className="text-stone-600">window.open(url, &quot;_blank&quot;)</code> — hands
            back a live window object, so a tab demonstrably opened.
          </p>
          <p className={EXPECT}>Expect: handoff, same as the plain link.</p>
        </div>

        <div className={CARD}>
          <OpenNoopenerButton />
          <p className={NOTE}>
            Adds{" "}
            <code className="text-stone-600">&quot;noopener,noreferrer&quot;</code>. The tab
            opens, but the call hands back <code className="text-stone-600">null</code> —
            indistinguishable, by return value alone, from being blocked.
          </p>
          <p className={EXPECT}>
            Expect: handoff. This is the case that used to be missed, and the
            reason the gesture — not the return value — decides.
          </p>
        </div>

        <div className={CARD}>
          <OpenBlockedButton />
          <p className={NOTE}>
            Calls <code className="text-stone-600">window.open</code> six seconds
            after the click, by which time the browser no longer trusts it and
            blocks the popup.
          </p>
          <p className={EXPECT}>
            Expect: no tab and no handoff. Wait the full six seconds — arming
            here would send the run to a tab that never existed. Needs a normal
            Chrome window: automated and popup-blocker-disabled browsers let the
            tab through and the case proves nothing.
          </p>
        </div>

        <div className={CARD}>
          <OpenCrossOriginButton />
          <p className={NOTE}>
            <code className="text-stone-600">window.open</code> pointed at another
            origin.
          </p>
          <p className={EXPECT}>Expect: no handoff, the run stays here.</p>
        </div>

        <div className={CARD}>
          <OpenSelfButton />
          <p className={NOTE}>
            <code className="text-stone-600">window.open(url, &quot;_self&quot;)</code> — the
            same call, aimed at this tab. No tab opens; this one navigates. It
            still hands back a window object, so only the target name gives it
            away.
          </p>
          <p className={EXPECT}>
            Expect: an ordinary navigation, no note, no handoff. Handing over
            here is the worst case there is — this document unloads and takes
            the timer that would undo it, so the run answers a click that
            worked with a failure instead.
          </p>
        </div>

        <div className={CARD}>
          <OpenPopupThenTabButton />
          <p className={NOTE}>
            Two opens from one click: a foreign popup first, then the tab on this
            origin the user actually follows — the shape of an analytics or
            sign-in popup firing ahead of the real navigation.
          </p>
          <p className={EXPECT}>
            Expect: handoff to the second tab. Stopping at the first tab seen
            would strand the run behind a popup.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <h2 className="text-sm font-medium text-stone-900">Navigation</h2>
        <p className="mt-2 text-sm text-stone-400">
          <code className="text-stone-500">navigate_to_page</code> resolves a
          route on the server, then this page decides how to get there. Ask the
          agent to take you somewhere rather than naming an element.
        </p>
      </section>

      <section className="pb-12 grid gap-4">
        <div className={CARD}>
          <NavigateFnToggle />
          <p className={NOTE}>
            Registers a navigate function for this app, which is what a real host
            router does. When it opens a tab instead of moving this one, the run
            still has to follow.
          </p>
          <p className={EXPECT}>
            Pick a mode <span className="text-stone-500">before</span> sending
            the message — the choice is captured when the message is sent, and
            only a reload clears it.
          </p>
        </div>

        <div className={CARD}>
          <Link
            href="/handoff-lab/navigate"
            className="text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
          >
            Anchor-tier fixtures →
          </Link>
          <p className={NOTE}>
            With no navigate function registered, the widget looks for a matching
            link on the page instead. That page holds the two cases worth
            separating: a route reachable only through a{" "}
            <code className="text-stone-600">_blank</code> link, and one where an
            in-place link is also available.
          </p>
        </div>
      </section>

      <div className="pb-24">
        <Link
          href="/same-origin"
          className="text-sm font-medium text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-900"
        >
          The plain browser-behaviour fixtures live here
        </Link>
      </div>
    </div>
  );
}
