# Testing the new-tab handoff from this app

When a tool opens a new tab, the run is supposed to move into it: the old tab
writes a note to `localStorage`, drops its lock and stops streaming; the new tab
reads the note on boot, takes the lock, and the agent's next step arrives there.

The fixtures live at **`/handoff-lab`**. Everything below is driven through the
real widget against a real backend — none of it is mocked.

---

## 1. Start the stack

Same as `argide-identity-testing.md`:

```bash
cd ../Ourguide-B2B-main
pnpm --filter @argide/widget build     # rebuild BOTH after ANY packages/client change
pnpm --filter @argide/copilot build
pnpm dev:fullstack                     # dashboard :3000, backend :4000
```

```bash
cd ../e-commerce
npm run dev -- -p 3001
```

> **Build both, not just the widget.** The script tag loads
> `argide-b2b.iife.js`, which is only a loader: it asks the API which mode the
> product is in and then injects `argide-b2b-widget.iife.js` *or*
> `argide-b2b-copilot.iife.js`. Only those two carry the client code, and
> building the wrong one means testing the old bundle while everything looks
> fine. Rebuilding `@argide/universal` changes nothing here — it holds no
> client code at all.
>
> To check what you are actually running, grep the served bundle for something
> your change added:
>
> ```bash
> grep -c '"_self"' apps/web/public/argide-b2b-widget.iife.js   # 1 = the target gate is live
> ```
>
> `next dev` never rebuilds any of this.

Then open <http://localhost:3001/handoff-lab>.

## 2. How to read the monitor

The panel at the top of every lab page polls the widget's own storage keys
(`og2-handoff-<productId>`, `og2-conv-<productId>`) and the Web Lock
`og2-run-<productId>-<conversationId>` every 200ms, and logs **transitions**.
The whole handoff takes about a second and leaves nothing behind, so the
timeline — not the current state — is what you read.

A healthy handoff logs, in order:

```
+0.0s  handoff note WRITTEN — origin tab_a1b2…, 1 in-flight tool call(s)
+0.0s  run lock RELEASED — this document stopped driving the run
+0.9s  handoff note CLEARED — a tab claimed the run
```

Open the lab in **both** tabs to watch both halves. Nothing appears until a run
is actually in flight — send the agent a message first.

## 3. Driving each tool

- **`perform_action`** — ask the agent to click a trigger by its label:
  *"click Open home link"*.
- **`highlight`** — ask the agent to point it out, then click it yourself:
  *"highlight Open home link so I can click it"*. The detection happens inside
  your click, not when the highlight appears.
- **`navigate_to_page`** — ask for a destination, never an element:
  *"take me to checkout"*.

Every trigger is labelled distinctly so the agent picks the one you mean.

---

## 4. What to test

### Links (`/handoff-lab`)

| Trigger | Expected |
|---|---|
| Open home link | Tab opens, run follows. Note written **then** cleared. |
| Open foreign link | Tab opens, **no** note, run stays. Result says unreachable. |
| Open home link in place | No tab, no note, no handoff. |
| Download the report file | File saves, no handoff. |
| Email support directly | Mail app, no handoff, no claim a page opened. |

Run each one **twice** — once via `perform_action`, once via `highlight`. The
two use different detection paths that meet at the same place.

### Scripts (`/handoff-lab`)

| Trigger | Expected |
|---|---|
| Open plain script tab | Handoff. |
| Open detached script tab | **Handoff.** The call returns `null` even though the tab opened — this is the case that used to be missed. |
| Open delayed script tab | Wait the full 6s. Popup blocked, **no** handoff. |
| Open foreign script tab | Tab opens, no handoff. |
| Open script tab in place | `_self` — navigates this tab. **No** handoff, and the note must never appear, not even briefly. |
| Open foreign popup then home tab | Handoff **to the second tab**. |

> **Use an ordinary Chrome window for the delayed case.** A blocked popup is the
> entire point of it, and automated browsers (Playwright, Selenium) and windows
> launched with `--disable-popup-blocking` let it through — the tab opens, the
> run follows, and the case looks broken when it isn't. Verified: in a normal
> window Chrome blocks it and shows the blocked-popup icon in the address bar;
> in an automated one the same call succeeds with no activation behind it.

### Navigation (`/handoff-lab/navigate`)

Reload the page first if you registered a navigate function — it wins over
everything on this page.

| Ask for | Expected |
|---|---|
| "take me to checkout" | The only link to `/checkout` opens a tab; run follows. |
| "take me to my wishlist" | The in-place link wins. No tab, no note. |
| "take me to checkout", then don't touch the page | This tab moves in place, no note. The `_blank` link is skipped rather than clicked into a blocked popup. |

`/checkout` is used deliberately: the header and footer link almost every other
route in place, and an in-place link always wins, so no other route can reach
this case.

### Host navigate function (`/handoff-lab`)

Pick a mode **before** sending the message — the widget captures the navigate
function when the message is sent, and only a reload unregisters it.

| Mode | Ask | Expected |
|---|---|---|
| opens a new tab | "take me to my orders" | Tab opens, run follows. |
| stays in this tab | "take me to my orders" | Ordinary navigation, run stays. |

---

## 5. The parts that aren't about tabs

Two things are worth checking in the widget UI on every successful handoff:

- **The old tab's step settles.** The step that opened the tab must read as
  finished, not spin forever. Its result is posted after the stream closes, so
  the acknowledgement that normally settles it never arrives — the old tab has
  to settle it locally.
- **The old tab is usable.** Composer unblocked, no live Stop button. It no
  longer owns the run and must not be able to cancel what the new tab is
  driving.

And one worth forcing by hand:

- **Losing the run mid-turn.** With a turn in flight, send a message from a
  second tab. The first tab should settle rather than sit streaming forever.

## 6. Known limits

- **Cross-origin tabs can never be handed off** — `localStorage` is per-origin.
  The foreign triggers assert the refusal, not a handoff.
- **A `noopener` open is inferred, not observed.** The call returns `null`
  whether it opened a tab or was blocked, so the gesture behind it decides. A
  blocked `noopener` open therefore arms a handoff nobody claims — the old tab
  takes the run back after 15s.
- **A *second* `noopener` open in the same click is missed.** Opening a window
  spends the gesture (measured: `isActive` goes `true` → `false` across the
  first call), yet Chrome still lets a second open through in that same click.
  So the second one looks exactly like a blocked popup — `null` return, no
  activation — and is not armed. Only matters when a page opens two detached
  tabs from one click and the *second* is the one to follow; the "foreign popup
  then home tab" trigger avoids it by leaving the second open attached.
- **Any same-origin tab that boots while a note is on disk can claim it**, not
  just the tab that was opened. Reloading an unrelated tab of this app during
  those few hundred milliseconds will hand it the run. The note names its
  writer, not its intended reader.
- **The routes `navigate_to_page` can resolve come from the product's route
  registry** in the backend, not from this app's `routes.json`. If "take me to
  checkout" resolves to nothing, that route isn't registered for the product in
  `app/layout.tsx`.
