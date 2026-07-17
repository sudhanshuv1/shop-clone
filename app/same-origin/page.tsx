import type { Metadata } from "next";
import OpenViaScriptButton from "./OpenViaScriptButton";
import { SAME_ORIGIN_PATH } from "./destination";

export const metadata: Metadata = {
  title: "Same-origin tab test",
  description: "Four ways of opening a new tab on this same origin.",
};

const TRIGGER_CLASS =
  "inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700";

const CARD_CLASS = "rounded-2xl border border-stone-200 p-6";

const EXPLANATION_CLASS = "mt-4 text-sm text-stone-500 leading-relaxed";

export default function SameOriginPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          Test fixture
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Same-origin tab.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          The same four triggers as the cross-origin fixture, but every one lands
          on <span className="text-stone-500">{SAME_ORIGIN_PATH}</span> — a page
          on this very origin. The landing page reports what it can see, so you
          can compare the methods.
        </p>
      </header>

      <section className="pb-24 grid gap-4 sm:grid-cols-2">
        <div className={CARD_CLASS}>
          <a
            href={`${SAME_ORIGIN_PATH}?via=anchor-noopener`}
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER_CLASS}
          >
            Open safe link
          </a>
          <p className={EXPLANATION_CLASS}>
            A plain <code className="text-stone-600">&lt;a&gt;</code> with{" "}
            <code className="text-stone-600">target=&quot;_blank&quot;</code> and{" "}
            <code className="text-stone-600">rel=&quot;noopener noreferrer&quot;</code>.
            The browser cuts the link back to this tab, so the new one sees{" "}
            <code className="text-stone-600">window.opener === null</code> and no
            referrer — even though both tabs share an origin.
          </p>
        </div>

        <div className={CARD_CLASS}>
          <OpenViaScriptButton className={TRIGGER_CLASS} />
          <p className={EXPLANATION_CLASS}>
            JavaScript calls{" "}
            <code className="text-stone-600">
              window.open(url, &quot;_blank&quot;, &quot;noopener,noreferrer&quot;)
            </code>{" "}
            inside a click handler. It only works because a real click triggered
            it; the same call on a timer would be stopped by the popup blocker.
          </p>
        </div>

        <div className={CARD_CLASS}>
          {/* eslint-disable-next-line react/jsx-no-target-blank -- handing the new tab a live opener IS what this card demonstrates */}
          <a
            href={`${SAME_ORIGIN_PATH}?via=anchor-opener`}
            target="_blank"
            rel="opener"
            className={TRIGGER_CLASS}
          >
            Open with opener
          </a>
          <p className={EXPLANATION_CLASS}>
            The same anchor, but asking for{" "}
            <code className="text-stone-600">rel=&quot;opener&quot;</code>. Every
            modern browser makes{" "}
            <code className="text-stone-600">target=&quot;_blank&quot;</code>{" "}
            imply <code className="text-stone-600">noopener</code>, so this opts
            back in on purpose. The new tab gets a live{" "}
            <code className="text-stone-600">window.opener</code> and, being
            same-origin, can actually read and script this page.
          </p>
        </div>

        <div className={CARD_CLASS}>
          <a
            href="/same-origin/redirect"
            target="_blank"
            rel="noopener noreferrer"
            className={TRIGGER_CLASS}
          >
            Open via redirect
          </a>
          <p className={EXPLANATION_CLASS}>
            Points at{" "}
            <code className="text-stone-600">/same-origin/redirect</code>, a
            server route that answers with a 302 to the landing page. The tab
            takes two hops instead of one, but never leaves this origin.
          </p>
        </div>
      </section>
    </div>
  );
}
