import type { Metadata } from "next";
import OpenViaScriptButton from "./OpenViaScriptButton";
import { CROSS_ORIGIN_URL } from "./destination";

export const metadata: Metadata = {
  title: "Cross-origin tab test",
  description: "Four ways of opening a new tab on a third-party origin.",
};

const LINK_CLASS =
  "inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700";

export default function CrossOriginPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          Test fixture
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Cross-origin tab.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          Each trigger below opens{" "}
          <span className="text-stone-500">{CROSS_ORIGIN_URL}</span> in a new
          tab, but by a different route. They differ in what the new tab can
          reach back into, and in when it becomes cross-origin.
        </p>
      </header>

      <section className="pb-24 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 p-6 flex flex-col">
          <h2 className="font-heading text-sm font-semibold text-stone-900">
            Anchor with noopener
          </h2>
          <p className="mt-2 mb-5 text-sm text-stone-500 leading-relaxed grow">
            The ordinary safe link. The new tab gets{" "}
            <code className="text-stone-600">window.opener === null</code> and
            sends no referrer.
          </p>
          <a
            href={CROSS_ORIGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            Open safe link
          </a>
        </div>

        <div className="rounded-2xl border border-stone-200 p-6 flex flex-col">
          <h2 className="font-heading text-sm font-semibold text-stone-900">
            window.open() from JS
          </h2>
          <p className="mt-2 mb-5 text-sm text-stone-500 leading-relaxed grow">
            Script-driven, fired from a click handler. The path a popup blocker
            cares about — outside a user gesture it would be blocked.
          </p>
          <OpenViaScriptButton />
        </div>

        <div className="rounded-2xl border border-stone-200 p-6 flex flex-col">
          <h2 className="font-heading text-sm font-semibold text-stone-900">
            Anchor keeping the opener
          </h2>
          <p className="mt-2 mb-5 text-sm text-stone-500 leading-relaxed grow">
            <code className="text-stone-600">rel=&quot;opener&quot;</code> opts
            back into a live{" "}
            <code className="text-stone-600">window.opener</code>, since{" "}
            <code className="text-stone-600">target=&quot;_blank&quot;</code>{" "}
            implies <code className="text-stone-600">noopener</code> in modern
            browsers. The handle exists, but the origins differ — so the new tab
            can only call <code className="text-stone-600">opener.location</code>
            , never read it.
          </p>
          {/* eslint-disable-next-line react/jsx-no-target-blank -- handing the new tab a live opener IS what this card demonstrates */}
          <a
            href={CROSS_ORIGIN_URL}
            target="_blank"
            rel="opener"
            className={LINK_CLASS}
          >
            Open with opener
          </a>
        </div>

        <div className="rounded-2xl border border-stone-200 p-6 flex flex-col">
          <h2 className="font-heading text-sm font-semibold text-stone-900">
            Redirect via same-origin
          </h2>
          <p className="mt-2 mb-5 text-sm text-stone-500 leading-relaxed grow">
            The tab opens on this origin at{" "}
            <code className="text-stone-600">/cross-origin/redirect</code>, which
            then 302s it away. It becomes cross-origin after load.
          </p>
          <a
            href="/cross-origin/redirect"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            Open via redirect
          </a>
        </div>
      </section>
    </div>
  );
}
