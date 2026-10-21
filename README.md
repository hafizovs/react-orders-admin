# 13 — Orders Admin

**Live:** https://hafizovs.github.io/react-orders-admin/

Redux Toolkit admin console for order list, detail, and status updates.

**CV line:** RTK Query cache tags, client UI slice, and TanStack Table in a Feature-Sliced Design app

## Stack

Vite, React 19, TypeScript, Tailwind CSS v4, **Redux Toolkit + RTK Query**, TanStack Table, React Router, Zod, MSW, sonner. Architecture: Feature-Sliced Design. Module Federation remote `orders` on port **5013**.


## How to run

```bash
# from portfolio_react/
pnpm install
pnpm dev
```

Open **http://localhost:5013**

See also [docs/RUNBOOK.md](../docs/RUNBOOK.md).

## Scripts

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

From the monorepo root:

```bash
pnpm dev
pnpm check
```

## Manual demo

1. Open `/` — table of seeded orders with status filter.
2. Change the status filter — table rows update (client `ui` slice + selector helper).
3. Open an order — detail view with line items and status action buttons.
4. Click **Mark processing** (or similar) — PATCH via RTK Query; list cache invalidates via tags.
5. Click **Simulate 401 on next request** — next fetch shows a sonner toast from the custom `baseQuery`.

## Interview talking points

- Server state in RTK Query vs ephemeral UI in a small slice
- `providesTags` / `invalidatesTags` after mutations
- MSW-backed REST under `/api/orders`
- Only portfolio app using Redux (see `docs/architecture.md`)
