import { ORDER_STATUSES } from '@/entities/order'
import { setStatusFilter, selectStatusFilter } from '@/features/order-ui-state'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'

const labels: Record<(typeof ORDER_STATUSES)[number] | 'all', string> = {
  all: 'All statuses',
  pending: 'Pending',
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
}

export function StatusFilterSelect() {
  const dispatch = useAppDispatch()
  const statusFilter = useAppSelector(selectStatusFilter)

  return (
    <label className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
      Status
      <select
        className="h-9 rounded-md border border-[var(--border)] bg-white px-3 text-sm text-[var(--text-h)]"
        value={statusFilter}
        onChange={(event) =>
          dispatch(
            setStatusFilter(
              event.target.value as typeof statusFilter,
            ),
          )
        }
      >
        <option value="all">{labels.all}</option>
        {ORDER_STATUSES.map((status) => (
          <option key={status} value={status}>
            {labels[status]}
          </option>
        ))}
      </select>
    </label>
  )
}
