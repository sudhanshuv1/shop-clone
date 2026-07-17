"use client";

/**
 * Dev-only panel for exercising the Argide end-user identity + visibility features.
 * Rendered only when NEXT_PUBLIC_ARGIDE_TEST_PANEL="true". See docs/argide-identity-testing.md.
 */

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { apiGet } from "@/lib/api";
import {
  argideIdentify,
  argideResetAndClearSession,
  argideResetAndPreserveSession,
  argideUpdate,
  getArgideSettings,
} from "@/lib/argideClient";

type LogEntry = { at: string; text: string };

export function ArgideTestPanel() {
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  const [settings, setSettings] = useState<ArgideSettings | undefined>();
  const [log, setLog] = useState<LogEntry[]>([]);

  // The embed mutates window.ArgideSettings in place, so poll it rather than
  // trying to observe it.
  useEffect(() => {
    const id = window.setInterval(() => setSettings({ ...(getArgideSettings() ?? {}) }), 500);
    return () => window.clearInterval(id);
  }, []);

  const note = useCallback((text: string) => {
    setLog((prev) =>
      [{ at: new Date().toLocaleTimeString(), text }, ...prev].slice(0, 8)
    );
  }, []);

  // Falls back to demo values so the unverified path is testable while logged out.
  const identity = {
    user_id: user?.id ?? "demo-user-1",
    name: user?.name ?? "Demo Shopper",
    email: user?.email ?? "demo.shopper@example.com",
    role: user?.role ?? "buyer",
  };

  const sendFullIdentity = () => {
    argideUpdate({ ...identity, plan: "pro", seats: 5 });
    note(`update: full identity + custom attrs (plan=pro, seats=5, role=${identity.role})`);
  };

  const sendNameOnly = () => {
    argideUpdate({ name: "Renamed Only" });
    note("update: name only — user_id/email/custom attrs must SURVIVE in the dashboard");
  };

  const mergeOneCustomAttr = () => {
    argideUpdate({ plan: "enterprise" });
    note("update: plan=enterprise only — seats=5 must SURVIVE (key-by-key merge)");
  };

  const addNewCustomAttr = () => {
    argideUpdate({ tier: "gold" });
    note("update: new custom attr tier=gold — plan/seats must survive");
  };

  const identifyWithJwt = async () => {
    if (!user) {
      note("identify: sign in first — /api/argide-token needs an authenticated user");
      return;
    }
    try {
      const data = await apiGet<{ token: string }>("/api/argide-token");
      argideIdentify({ token: data.token, name: user.name });
      note("identify: JWT sent — dashboard badge should become VERIFIED");
    } catch (err) {
      note(`identify FAILED: ${err instanceof Error ? err.message : "unknown error"}`);
    }
  };

  const updateAfterIdentify = () => {
    argideUpdate({ name: "Post-Verify Rename" });
    note("update after identify — badge must STAY Verified (one-way latch)");
  };

  return (
    <div className="fixed bottom-4 left-4 z-[9999] w-[330px] font-mono text-[11px]">
      <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between bg-zinc-800 px-3 py-2 text-left font-semibold"
        >
          <span>Argide identity test panel</span>
          <span className="text-zinc-400">{open ? "▾" : "▸"}</span>
        </button>

        {open && (
          <div className="max-h-[70vh] space-y-3 overflow-y-auto p-3">
            <Group title="Unverified identity (update)">
              <Btn onClick={sendFullIdentity}>Full identity + custom attrs</Btn>
              <Btn onClick={sendNameOnly}>Partial: name only (never-delete)</Btn>
              <Btn onClick={mergeOneCustomAttr}>Merge custom: plan only</Btn>
              <Btn onClick={addNewCustomAttr}>Add custom attr: tier=gold</Btn>
            </Group>

            <Group title="Verified identity (identify)">
              <Btn onClick={identifyWithJwt}>Identify with JWT {user ? "" : "(sign in first)"}</Btn>
              <Btn onClick={updateAfterIdentify}>Update after identify (latch)</Btn>
            </Group>

            <Group title="Visibility (update only — no show/hide commands)">
              <Btn onClick={() => { argideUpdate({ visibility: true }); note("update visibility=true (no network)"); }}>
                update visibility=true
              </Btn>
              <Btn onClick={() => { argideUpdate({ visibility: false }); note("update visibility=false (no network)"); }}>
                update visibility=false
              </Btn>
            </Group>

            <Group title="Reset">
              <Btn onClick={() => { argideResetAndPreserveSession(); note("resetAndPreserveSession"); }}>
                resetAndPreserveSession
              </Btn>
              <Btn onClick={() => { argideResetAndClearSession(); note("resetAndClearSession"); }}>
                resetAndClearSession
              </Btn>
            </Group>

            <div>
              <p className="mb-1 font-semibold text-zinc-400">window.ArgideSettings</p>
              <pre className="max-h-32 overflow-auto rounded bg-black/50 p-2 text-[10px] leading-snug text-emerald-300">
                {settings ? JSON.stringify(settings, null, 2) : "(not loaded)"}
              </pre>
            </div>

            {log.length > 0 && (
              <div>
                <p className="mb-1 font-semibold text-zinc-400">Actions</p>
                <ul className="space-y-1">
                  {log.map((entry, i) => (
                    <li key={`${entry.at}-${i}`} className="leading-snug text-zinc-300">
                      <span className="text-zinc-500">{entry.at}</span> {entry.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1 font-semibold text-zinc-400">{title}</p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function Btn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-zinc-600 bg-zinc-800 px-2 py-1 text-left hover:bg-zinc-700"
    >
      {children}
    </button>
  );
}
