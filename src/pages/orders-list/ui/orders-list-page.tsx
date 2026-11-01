import { StatusFilterSelect } from '@/features/filter-orders'
import { SimulateUnauthorizedButton } from '@/features/demo-unauthorized'
import { OrdersTable } from '@/widgets/orders-table'

export function OrdersListPage() {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-4 px-3 py-6 sm:gap-6 sm:px-4 sm:py-8">
      <header className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-2">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold text-[var(--text-h)] sm:text-2xl">
            Orders
          </h1>
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
            Admin list powered by RTK Query cache and TanStack Table.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <StatusFilterSelect />
          <SimulateUnauthorizedButton className="w-full whitespace-normal sm:w-auto" />
        </div>
      </header>
      <OrdersTable />
    </div>
  )
}
