"use client";

// Registers a host navigate function that opens the route in a NEW tab, via the
// embed's own `window.argide('setNavigate', fn)` bridge. This is the only way to
// reach the navigate_to_page ack-site watch: that code path only runs when a
// host navigateFn exists.
//
// Two constraints the buttons below have to respect, both verified in the embed:
//  - The bridge only accepts a FUNCTION. There is no unset — a reload is the
//    only way back to "no navigateFn", which the anchor-tier tests need.
//  - The client captures navigateFn when sendMessage is called, so pick the
//    mode BEFORE sending the message you want it to affect.

import { useEffect, useState } from "react";

type Mode = "new-tab" | "same-tab";

export default function NavigateFnToggle() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // The embed installs window.argide asynchronously; poll briefly for it.
    const id = window.setInterval(() => {
      if (typeof window.argide === "function") {
        setReady(true);
        window.clearInterval(id);
      }
    }, 200);
    return () => window.clearInterval(id);
  }, []);

  const apply = (next: Mode) => {
    if (typeof window.argide !== "function") return;
    const fn =
      next === "new-tab"
        ? (path: string) => {
            window.open(path, "_blank");
          }
        : (path: string) => {
            window.location.assign(path);
          };
    window.argide("setNavigate", fn);
    setMode(next);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!ready}
          onClick={() => apply("new-tab")}
          className={[
            "rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:opacity-40",
            mode === "new-tab"
              ? "bg-stone-900 text-white"
              : "border border-stone-200 text-stone-500 hover:bg-stone-50",
          ].join(" ")}
        >
          navigateFn opens a new tab
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={() => apply("same-tab")}
          className={[
            "rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:opacity-40",
            mode === "same-tab"
              ? "bg-stone-900 text-white"
              : "border border-stone-200 text-stone-500 hover:bg-stone-50",
          ].join(" ")}
        >
          navigateFn stays in this tab
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-50"
        >
          Reload to unregister
        </button>
      </div>
      <p className="mt-3 text-sm text-stone-500">
        {!ready
          ? "Waiting for the embed to load…"
          : mode === null
            ? "No host navigateFn yet — navigate_to_page will fall through to its anchor tier."
            : mode === "new-tab"
              ? "Registered. Ask the agent to take you to any page: it should open a tab AND hand the run over."
              : "Registered. Ask the agent to take you to any page: this tab navigates and keeps the run."}
      </p>
    </div>
  );
}
