# Informational Pages — Design Spec

**Date:** 2026-07-11
**Status:** Approved (pending spec review)

## Goal

Add five new, content-complete pages to the eBay-clone store. Every link that
opens one of these pages must open it in a **new browser tab**. No existing
feature may break.

## Scope

### New pages (5 routes)

| Route | Rendering | Purpose |
|---|---|---|
| `/about` | Server component | Company story, mission, values, stats |
| `/careers` | Server component | Open roles, culture/perks, how to apply |
| `/privacy` | Server component | Privacy Policy (standard sections + "last updated") |
| `/terms` | Server component | Terms of Service (standard sections + "last updated") |
| `/contact` | Server page + client `ContactForm` child | Support details + working message form |

- The 4 static pages are React Server Components. Each exports `metadata`
  (e.g. `title: "About Us"`) so browser tabs read `About Us | eBay` via the
  existing title template in `app/layout.tsx`.
- `/contact` uses a server `page.tsx` (holds `metadata` + static intro/support
  info) that renders a `"use client"` `ContactForm` component (form state +
  `Toast` feedback).

### Contact backend (mirrors existing route/model conventions)

- **Model** `lib/db/models/ContactMessage.ts`
  - Collection: `contact_messages`, `{ timestamps: true }`, model-cache guard
    (`mongoose.models.ContactMessage || mongoose.model(...)`) like every other
    model.
  - Fields: `name` (string, required), `email` (string, required),
    `subject` (string, required), `message` (string, required),
    `status` (enum `new | read | archived`, default `new`), timestamps.
- **Route** `app/api/contact/route.ts`
  - `POST` — **public, no auth** (a contact form must work for logged-out
    visitors). Accepts JSON. Validates: all fields required, email matches a
    basic regex, length caps (name ≤ 120, subject ≤ 200, message ≤ 5000).
    On success: `dbConnect()` → `ContactMessage.create()` → `201` with the
    created record's public shape. On validation failure: `400` with `{ error }`.
    On unexpected failure: `500`.
  - `GET` — **admin-only** (parity with every other route: `getAuthUser`,
    `role === "admin"`). Returns the message list. No admin UI page is built in
    this scope; the endpoint exists for convention/parity only.

### Links + "open in new tab"

- **Footer** (`components/Footer.tsx`): add a new **"Company"** column listing
  all 5 links. Adjust the links grid from `sm:grid-cols-4` to a responsive
  5-column layout (e.g. `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`) so existing
  columns don't visually break.
- **Navbar** (`components/Navbar.tsx`): repoint the two existing placeholder
  links — **About** (`/help` → `/about`) and **Contact**
  (`/help?tab=contact` → `/contact`) — in **both** the desktop nav (~L385-398)
  and the mobile nav (~L892-899).
- **New-tab rule:** every link that points to one of the 5 new pages gets
  `target="_blank" rel="noopener noreferrer"`. This applies to all footer
  "Company" links and the repointed navbar About/Contact links. `next/link`
  supports `target`, so `<Link href=... target="_blank" rel="noopener noreferrer">`.

## Data flow (contact form)

1. Visitor opens `/contact` → sees support info + form (name, email, subject, message).
2. Submit → client-side validation (required + email format) → `POST /api/contact` (JSON body).
3. Server validates + stores → `201`.
4. Client shows success `Toast`, resets the form. Any error → error `Toast`.

## Styling

Match existing pages (`app/schedule-repair/page.tsx`, `app/price-match/page.tsx`):
- Container: `w-full max-w-3xl mx-auto px-6 sm:px-8`.
- Type: `font-heading` / `font-display`, stone palette (`text-stone-900`,
  `text-stone-400`, borders `border-stone-200`).
- Controls: existing `input` and `btn btn--primary` utility classes; reuse the
  `Toast` component for contact feedback.
- Legal/informational pages: simple prose sections with the same header
  treatment; a `Last updated: <date>` line on Privacy and Terms.

## Content

Real, complete copy (no lorem ipsum), written for the "eBay" demo clone. Legal
text is generic/standard e-commerce boilerplate with a visible "last updated"
date — appropriate for a demo app, not presented as a specific real company's
binding policy.

## Non-breaking guarantees

- **Only new files added:** 5 page files (+ 1 client form component), 1 model,
  1 API route.
- **Only edits to existing files:**
  - `components/Footer.tsx` — add "Company" column + grid class tweak.
  - `components/Navbar.tsx` — repoint 2 links (desktop + mobile = ~4 spots) and
    add `target`/`rel`.
- No existing route, model, API path, or component name is reused or renamed.

## Verification

- `npm run build` passes (TypeScript typecheck + Next lint).
- `npm run dev`: load `/about`, `/careers`, `/privacy`, `/terms`, `/contact`
  and confirm each renders.
- Submit the contact form → success toast; confirm a `contact_messages` document
  is created (or the POST returns `201`).
- Confirm footer + navbar links carry `target="_blank"` (open in a new tab).
- Confirm existing pages (`/help`, `/blog`, home, cart, etc.) still work.

## Out of scope

- Admin UI to view contact messages (endpoint exists; no page).
- Email/notification delivery of contact messages.
- Rate limiting / captcha on the public contact endpoint.
