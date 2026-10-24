## Live demo

https://hafizovs.github.io/react-orders-admin/

# Orders admin

## About

Redux Toolkit admin console for an order list, order detail, and status updates. RTK Query loads and patches orders, TanStack Table renders the list, and MSW backs the API. Status changes invalidate the list cache via tags.

## Capabilities

- Seeded orders table with a status filter
- Detail view with line items and status actions
- Status PATCH that refreshes the list through RTK Query cache tags
- **Simulate 401 on next request** shows an error toast

## Functionality

- Open `/` and filter the seeded orders by status
- Open an order and read its line items
- Update status, for example **Mark processing**, and see the list refresh
- **Simulate 401 on next request** and read the error toast

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
