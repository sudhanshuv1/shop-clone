"use client";

import { CROSS_ORIGIN_URL } from "./destination";

export default function OpenViaScriptButton() {
  return (
    <button
      type="button"
      onClick={() => window.open(CROSS_ORIGIN_URL, "_blank", "noopener,noreferrer")}
      className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
    >
      Open with window.open()
    </button>
  );
}
