import { StatusFilterSelect } from '@/features/filter-orders'
import { SimulateUnauthorizedButton } from '@/features/demo-unauthorized'
import { OrdersTable } from '@/widgets/orders-table'

export function OrdersListPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-h)]">
            Orders
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Admin list powered by RTK Query cache and TanStack Table.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusFilterSelect />
          <SimulateUnauthorizedButton />
        </div>
      </header>
      <OrdersTable />
    </div>
  )
}
