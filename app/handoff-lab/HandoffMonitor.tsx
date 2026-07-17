"use client";

// Makes the handoff visible. The whole exchange — note written, lock dropped,
// note claimed — runs in about a second and leaves nothing behind, so a
// snapshot of "current state" shows you nothing. This logs TRANSITIONS instead.
//
// It reads the widget's own storage keys directly; nothing here is a mock. If
// this panel says the note was written, the note was written.

import { useCallback, useEffect, useRef, useState } from "react";
import { readProductId } from "./lab-config";

type Note = {
  conversationId: string;
  originTabId: string;
  ts: number;
  widgetOpen?: boolean;
  approved?: boolean;
  inFlightToolCallIds?: string[];
};

type Snapshot = {
  productId: string | null;
  conversationId: string | null;
  note: Note | null;
  noteRaw: string | null;
  lockHeld: boolean | null;
};

type Event = { at: number; text: string; tone: "note" | "lock" | "conv" };

const noteKey = (productId: string) => `og2-handoff-${productId}`;
const convKey = (productId: string) => `og2-conv-${productId}`;
const lockName = (productId: string, conversationId: string) =>
  `og2-run-${productId}-${conversationId}`;

function readSnapshotSync(): Omit<Snapshot, "lockHeld"> {
  const productId = readProductId();
  if (!productId) {
    return { productId: null, conversationId: null, note: null, noteRaw: null };
  }
  const conversationId = sessionStorage.getItem(convKey(productId));
  const noteRaw = localStorage.getItem(noteKey(productId));
  let note: Note | null = null;
  if (noteRaw) {
    try {
      note = JSON.parse(noteRaw) as Note;
    } catch {
      note = null;
    }
  }
  return { productId, conversationId, note, noteRaw };
}

/** Is anyone holding the run lock? `query()` lists every held lock in the
 *  origin, so this sees the OTHER tab's hold too — which is the point. */
async function readLockHeld(productId: string, conversationId: string | null): Promise<boolean | null> {
  if (!conversationId) return null;
  if (!navigator.locks?.query) return null;
  try {
    const state = await navigator.locks.query();
    const name = lockName(productId, conversationId);
    return (state.held ?? []).some((l) => l.name === name);
  } catch {
    return null;
  }
}

const short = (id: string | null | undefined) => (id ? `${id.slice(0, 12)}…` : "—");

export default function HandoffMonitor() {
  const [snap, setSnap] = useState<Snapshot>({
    productId: null,
    conversationId: null,
    note: null,
    noteRaw: null,
    lockHeld: null,
  });
  const [events, setEvents] = useState<Event[]>([]);
  const prev = useRef<Snapshot | null>(null);

  const push = useCallback((text: string, tone: Event["tone"]) => {
    setEvents((list) => [{ at: Date.now(), text, tone }, ...list].slice(0, 40));
  }, []);

  useEffect(() => {
    let alive = true;

    const tick = async () => {
      const base = readSnapshotSync();
      const lockHeld = base.productId
        ? await readLockHeld(base.productId, base.conversationId)
        : null;
      if (!alive) return;
      const next: Snapshot = { ...base, lockHeld };
      const before = prev.current;

      if (before) {
        const hadNote = !!before.note;
        const hasNote = !!next.note;
        if (!hadNote && hasNote) {
          push(
            `handoff note WRITTEN — origin ${short(next.note?.originTabId)}, ` +
              `${next.note?.inFlightToolCallIds?.length ?? 0} in-flight tool call(s)`,
            "note",
          );
        }
        if (hadNote && !hasNote) {
          push("handoff note CLEARED — a tab claimed the run (or it was reclaimed)", "note");
        }
        if (before.lockHeld === true && next.lockHeld === false) {
          push("run lock RELEASED — this document stopped driving the run", "lock");
        }
        if (before.lockHeld === false && next.lockHeld === true) {
          push("run lock HELD — a document is driving the run", "lock");
        }
        if (before.conversationId !== next.conversationId) {
          push(`conversation id → ${short(next.conversationId)}`, "conv");
        }
      }

      prev.current = next;
      setSnap(next);
    };

    void tick();
    const id = window.setInterval(() => void tick(), 200);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [push]);

  const clearNote = () => {
    if (!snap.productId) return;
    localStorage.removeItem(noteKey(snap.productId));
    push("note cleared BY THE LAB (manual reset)", "note");
  };

  // Wall clock plus the gap since the PREVIOUS event. The gaps are the story —
  // "note written, lock released 4ms later, claimed 900ms after that" — and
  // time-since-page-load tells you none of it.
  const clock = (at: number) => {
    const d = new Date(at);
    return `${d.toLocaleTimeString([], { hour12: false })}.${String(d.getMilliseconds()).padStart(3, "0")}`;
  };
  const gap = (i: number) => {
    const older = events[i + 1];
    if (!older) return "";
    const ms = events[i].at - older.at;
    return ms < 1000 ? `+${ms}ms` : `+${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <section className="rounded-2xl border border-stone-200 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-stone-200">
        <div>
          <h2 className="text-sm font-medium text-stone-900">Handoff monitor</h2>
          <p className="mt-1 text-xs text-stone-400">
            Polling the widget&apos;s own keys every 200ms. Open this page in both tabs.
          </p>
        </div>
        <button
          type="button"
          onClick={clearNote}
          className="shrink-0 rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 transition-colors hover:bg-stone-50"
        >
          Clear note
        </button>
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-stone-200 border-b border-stone-200">
        <Cell label="Product">
          {snap.productId ? short(snap.productId) : <Missing>no embed</Missing>}
        </Cell>
        <Cell label="Conversation">
          {snap.conversationId ? short(snap.conversationId) : <Missing>none yet</Missing>}
        </Cell>
        <Cell label="Note on disk">
          {snap.note ? (
            <span className="text-emerald-600">present</span>
          ) : (
            <span className="text-stone-400">absent</span>
          )}
        </Cell>
        <Cell label="Run lock">
          {snap.lockHeld === null ? (
            <Missing>n/a</Missing>
          ) : snap.lockHeld ? (
            <span className="text-emerald-600">held</span>
          ) : (
            <span className="text-amber-600">free</span>
          )}
        </Cell>
      </dl>

      {snap.noteRaw && (
        <pre className="px-5 py-4 text-[11px] leading-relaxed text-stone-500 bg-stone-50 overflow-x-auto border-b border-stone-200">
          {JSON.stringify(snap.note, null, 2)}
        </pre>
      )}

      <div className="px-5 py-4">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-[0.15em]">Timeline</p>
        {events.length === 0 ? (
          <p className="mt-3 text-sm text-stone-400">
            Nothing yet. Trigger something below and watch the note appear.
          </p>
        ) : (
          <ol className="mt-3 space-y-2">
            {events.map((e, i) => (
              <li key={`${e.at}-${e.text}`} className="flex gap-3 text-sm">
                <span className="shrink-0 font-mono text-xs text-stone-400 tabular-nums pt-0.5">
                  {clock(e.at)}
                </span>
                <span className="shrink-0 w-14 font-mono text-xs text-stone-300 tabular-nums pt-0.5">
                  {gap(i)}
                </span>
                <span className={e.tone === "lock" ? "text-stone-500" : "text-stone-600"}>
                  {e.text}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-5 py-4">
      <dt className="text-[10px] font-medium text-stone-400 uppercase tracking-[0.15em]">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-mono text-stone-600 break-all">{children}</dd>
    </div>
  );
}

function Missing({ children }: { children: React.ReactNode }) {
  return <span className="text-stone-300">{children}</span>;
}
