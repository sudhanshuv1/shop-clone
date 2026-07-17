"use client";

import { useEffect, useState } from "react";

// Reading opener.location.href throws on a cross-origin opener; here it should
// succeed, which is exactly what distinguishes the four methods.
function readOpener() {
  if (!window.opener) return "window.opener is null — the tab was severed from its opener.";
  try {
    return `window.opener is live, and readable: ${window.opener.location.href}`;
  } catch {
    return "window.opener exists but reading it threw — it is being treated as cross-origin.";
  }
}

export default function OpenerStatus() {
  const [status, setStatus] = useState("Checking…");
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setStatus(readOpener());
    setReferrer(document.referrer || "(none sent)");
  }, []);

  return (
    <dl className="mt-8 rounded-2xl border border-stone-200 divide-y divide-stone-200 text-sm">
      <div className="p-5">
        <dt className="text-xs font-medium text-stone-400 uppercase tracking-[0.15em]">
          Opener
        </dt>
        <dd className="mt-2 text-stone-600 break-all">{status}</dd>
      </div>
      <div className="p-5">
        <dt className="text-xs font-medium text-stone-400 uppercase tracking-[0.15em]">
          Referrer
        </dt>
        <dd className="mt-2 text-stone-600 break-all">{referrer}</dd>
      </div>
    </dl>
  );
}
