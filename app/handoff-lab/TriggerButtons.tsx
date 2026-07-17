"use client";

// The window.open shapes the widget has to tell apart. Each button is a page
// doing something entirely ordinary — no widget API is called here. Detection
// happens inside the widget's window.open watch.

import { CROSS_ORIGIN_URL, LANDING_PATH } from "./lab-config";

const BTN =
  "inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700";

/** Plain open: returns a real Window, so the return value alone proves a tab
 *  opened. The easy case. */
export function OpenPlainButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() => window.open(`${LANDING_PATH}?via=window.open-plain`, "_blank")}
    >
      Open plain script tab
    </button>
  );
}

/** noopener: returns null even though the tab DID open. Before the noopener fix
 *  this looked identical to a popup block and the run stayed behind. */
export function OpenNoopenerButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() =>
        window.open(`${LANDING_PATH}?via=window.open-noopener`, "_blank", "noopener,noreferrer")
      }
    >
      Open detached script tab
    </button>
  );
}

/** `_self` navigates THIS tab — no tab opens. It hands back a truthy window
 *  (this one), so only the target name gives it away. */
export function OpenSelfButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() => window.open(`${LANDING_PATH}?via=window.open-self`, "_self")}
    >
      Open script tab in place
    </button>
  );
}

/** Cross-origin: a tab opens, but localStorage is per-origin so no note can
 *  reach it. Must report reachable:false and keep the run here. */
export function OpenCrossOriginButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() => window.open(CROSS_ORIGIN_URL, "_blank")}
    >
      Open foreign script tab
    </button>
  );
}

/** Fires 6s later, long after the click's transient activation expires. Chrome
 *  popup-blocks it: no tab, so arming would strand the run in a dead handoff. */
export function OpenBlockedButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() => {
        window.setTimeout(
          () => window.open(`${LANDING_PATH}?via=window.open-blocked`, "_blank"),
          6000,
        );
      }}
    >
      Open delayed script tab
    </button>
  );
}

/** Cross-origin FIRST, then the same-origin tab the user actually follows.
 *  A strict first-signal-wins rule latches on the cross-origin open and never
 *  arms — the bug the upgrade rule fixes. */
export function OpenPopupThenTabButton() {
  return (
    <button
      type="button"
      className={BTN}
      onClick={() => {
        window.open(CROSS_ORIGIN_URL, "_blank");
        window.open(`${LANDING_PATH}?via=after-foreign-popup`, "_blank");
      }}
    >
      Open foreign popup then home tab
    </button>
  );
}
