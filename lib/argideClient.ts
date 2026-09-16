"use client";

type ArgideCommand =
  | "identify"
  | "update"
  | "resetUser"
  | "resetAndPreserveSession"
  | "resetAndClearSession";

type ArgideIdentifyPayload = {
  token: string;
  name?: string;
};

function safeArgideCall(command: ArgideCommand, payload?: unknown) {
  if (typeof window === "undefined") return;
  const fn = window.argide;
  if (typeof fn !== "function") return;
  fn(command, payload);
}

export function argideIdentify(payload: ArgideIdentifyPayload) {
  safeArgideCall("identify", payload);
}

/** Merge a patch into the end-user identity. Never deletes existing keys. */
export function argideUpdate(patch: ArgideSettings) {
  safeArgideCall("update", patch);
}

/** Visibility is client-only — there is no show/hide command, only `update`. */
export function argideSetVisible(visible: boolean) {
  argideUpdate({ visibility: visible });
}

/** Deprecated upstream alias for `argideResetAndPreserveSession`. */
export function argideResetUser() {
  safeArgideCall("resetUser");
}

export function argideResetAndPreserveSession() {
  safeArgideCall("resetAndPreserveSession");
}

export function argideResetAndClearSession() {
  safeArgideCall("resetAndClearSession");
}

export function getArgideSettings(): ArgideSettings | undefined {
  if (typeof window === "undefined") return undefined;
  return window.ArgideSettings;
}
