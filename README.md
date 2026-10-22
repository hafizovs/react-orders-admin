## Live demo

https://hafizovs.github.io/react-orders-admin/

# Orders admin

Redux Toolkit admin console for order list, detail, and status updates — RTK Query, TanStack Table, MSW.

## Scripts

```bash
pnpm install
pnpm dev          # http://localhost:5013
pnpm check
pnpm build
```

## Manual demo

1. Open `/` — table of seeded orders with status filter.
2. Change the status filter — table rows update.
3. Open an order — detail view with line items and status actions.
4. **Mark processing** (or similar) — PATCH via RTK Query; list cache invalidates via tags.
5. **Simulate 401 on next request** — next fetch shows an error toast.
