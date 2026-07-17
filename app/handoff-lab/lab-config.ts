// Shared constants for the new-tab handoff lab.
//
// LANDING_PATH is where every same-origin trigger lands. CROSS_ORIGIN_URL must
// be a real, loadable page on a DIFFERENT origin — the widget refuses to hand a
// run to one (localStorage is per-origin), and that refusal is a case we test.
//
// TIER2_ROUTE is deliberately a route the Navbar/Footer do NOT link. navigateTo
// prefers a same-tab anchor over a target=_blank one, so any route the page
// chrome links same-tab can never exercise the _blank anchor tier.
export const LANDING_PATH = "/handoff-lab/landing";
export const CROSS_ORIGIN_URL = "https://example.com/";
export const TIER2_ROUTE = "/checkout";

/** The productId the embed booted with — the suffix of every storage key the
 *  handoff uses. Read from the script tag rather than hardcoded so the lab
 *  follows whatever product layout.tsx points at. */
export function readProductId(): string | null {
  if (typeof document === "undefined") return null;
  const el = document.querySelector<HTMLScriptElement>("script[data-product-id]");
  return el?.dataset.productId ?? null;
}
