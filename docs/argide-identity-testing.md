# Testing Argide end-user identity & visibility from this app

How to point this store at a **local** Argide stack and exercise every part of the
end-user identity + visibility feature (`ArgideSettings`, `update`, `data-*` attrs,
custom attributes, verified/unverified tiers, visibility gating).

---

## 1. Start the Argide stack

The dashboard serves the widget bundle; the backend serves the API.

```bash
cd ../Ourguide-B2B

# Build the embed bundles into apps/web/public (needed once, and after any
# change to packages/client, packages/widget, packages/copilot).
pnpm --filter @argide/widget build
pnpm --filter @argide/copilot build
pnpm --filter @argide/universal build

pnpm dev:fullstack        # dashboard -> :3000, backend API -> :4000
```

> `next dev` alone does **not** rebuild the bundles — they are gitignored build
> outputs copied into `apps/web/public/` by each package's `build` script.

## 2. Start this app on a free port

Argide's dashboard already owns `:3000`, so use the dedicated script:

```bash
npm run dev:argide        # -> http://localhost:3002
```

## 3. Configure

`.env.local` already has the block below (added for this testing setup). The
defaults in `app/layout.tsx` still point at staging, so **deleting this block
restores the old behaviour**.

```bash
NEXT_PUBLIC_ARGIDE_SCRIPT_URL=http://localhost:3000/argide-b2b.iife.js
NEXT_PUBLIC_ARGIDE_API_URL=http://localhost:4000
NEXT_PUBLIC_ARGIDE_PRODUCT_ID=<a product that exists in your LOCAL Argide MongoDB>
NEXT_PUBLIC_ARGIDE_IDENTITY_MODE=attributes   # jwt | attributes | both
NEXT_PUBLIC_ARGIDE_VISIBILITY=true            # "false" defers the widget
NEXT_PUBLIC_ARGIDE_TEST_PANEL=true            # floating dev panel
```

**The product id must exist in your local Argide database.** If it doesn't, the
loader still injects the widget but every API call fails.

Restart `npm run dev:argide` after changing any `NEXT_PUBLIC_*` value — they are
inlined at build time.

---

## 4. The test panel

With `NEXT_PUBLIC_ARGIDE_TEST_PANEL=true`, a panel appears bottom-left with one
button per behaviour, plus a live view of `window.ArgideSettings` and an action log.
The chat widget sits bottom-right, so they don't overlap.

To see results: open the Argide dashboard (`http://localhost:3000`) → your product →
**Conversations**. Send at least one chat message from the store first, otherwise
there is no conversation to annotate.

---

## 5. What to test

### A. Unverified identity + custom attributes
1. Panel → **Full identity + custom attrs**.
2. Send a message in the chat widget.
3. Dashboard → Conversations: the **card shows the user's name**. Open it → **Details**:
   Name / Email / User ID are filled, badge reads **Unverified**, and a **Custom
   attributes** section lists `plan: pro`, `seats: 5`, `role: …`.

### B. An update never deletes data (partial update)
1. Panel → **Partial: name only**.
2. Dashboard → refresh the conversation → **Name changes to "Renamed Only", but
   Email, User ID, and all custom attributes are still there.**

### C. Custom attributes merge key-by-key
1. Panel → **Merge custom: plan only** (sends only `plan: "enterprise"`).
2. Dashboard → `plan` is now `enterprise` **and `seats: 5` survived**.
3. Panel → **Add custom attr: tier=gold** → `plan`, `seats` and `tier` all present.

### D. Verified tier (JWT)
1. Sign in to the store.
2. Panel → **Identify with JWT**.
3. Dashboard → badge flips to **Verified**.

> Requires the local product to have its Argide auth secret set to the same value as
> `OURGUIDE_AUTH_SECRET` in this app's `.env.local`, **and** an OpenAPI spec whose
> auth type is `jwt`. Without that, identify is rejected and the badge stays as-is.
> The unverified path (A–C) needs none of this.

### E. Verified is a one-way latch
1. Do **D** first (badge = Verified).
2. Panel → **Update after identify**.
3. Dashboard → the name updates but the badge **stays Verified** — a plain
   attributes update can never downgrade a verified session.

Setting `NEXT_PUBLIC_ARGIDE_IDENTITY_MODE=both` makes sign-in do this automatically
(attributes first, then JWT).

### F. Visibility gating
1. Set `NEXT_PUBLIC_ARGIDE_VISIBILITY=false`, restart.
2. Load the store → **no widget, no launcher** (but `window.argide` works — the panel
   still functions).
3. Panel → **update visibility=true** → the widget appears. **update visibility=false**
   → it collapses. (There are no `show` / `hide` commands — `update` is the only
   visibility control.)
4. Sign in → `AuthContext` calls `update({ visibility: true })` and the widget appears
   — the "reveal after login" flow. Signing out re-hides it.
5. Open DevTools → Network, click **update visibility=true/false**: **no request is
   sent**. Visibility is client-only and never reaches the backend.

### G. Multi-page `data-*` seeding
1. Uncomment the `NEXT_PUBLIC_ARGIDE_DATA_*` lines in `.env.local`, restart.
2. The script tag now carries `data-user-id` / `data-name` / `data-email`, so the
   identity is seeded **at boot with no `update` call**. Check the panel's
   `window.ArgideSettings` — the values are already there. Send a message → the
   dashboard shows that name.

### H. The Custom attributes section is omitted when empty
Start a conversation from a browser with no custom attributes set (e.g. a fresh
incognito window, no panel buttons pressed). Its Details pane shows **no Custom
attributes section at all** — not an empty one.

---

## 6. How the app is wired

| File | Role |
|---|---|
| `app/layout.tsx` | The embed `<Script>`. All config now env-driven, with the staging values as defaults. Emits `data-visibility` and the optional `data-user-id` / `data-name` / `data-email`. |
| `lib/argideClient.ts` | Wrapper over `window.argide(...)`: `identify`, `update`, `resetAndPreserveSession`, `resetAndClearSession`, plus `argideSetVisible()` (a thin `update({visibility})`) and `getArgideSettings()`. |
| `context/AuthContext.tsx` | On sign-in, sends the user per `NEXT_PUBLIC_ARGIDE_IDENTITY_MODE` and reveals a deferred widget. On sign-out, resets and re-hides it. |
| `components/ArgideTestPanel.tsx` | The dev panel (only when `NEXT_PUBLIC_ARGIDE_TEST_PANEL=true`). |
| `types/ourguide.d.ts` | Types for `window.argide` and `window.ArgideSettings`. |

## 7. Reverting to staging

Delete the Argide block from `.env.local` (a pre-change backup is at
`.env.local.bak-argide`) and run `npm run dev`. The hardcoded staging defaults in
`app/layout.tsx` take over and the app behaves exactly as before.
