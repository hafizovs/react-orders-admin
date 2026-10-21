import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import {
  filterOrdersByStatus,
  formatMoney,
  OrderStatusBadge,
  useGetOrdersQuery,
  type Order,
} from '@/entities/order'
import { selectStatusFilter, setSelectedOrderId } from '@/features/order-ui-state'
import { cn } from '@/shared/lib/cn'

export function OrdersTable() {
  const dispatch = useAppDispatch()
  const statusFilter = useAppSelector(selectStatusFilter)
  const { data: orders = [], isLoading, isError } = useGetOrdersQuery()

  const filtered = useMemo(
    () => filterOrdersByStatus(orders, statusFilter),
    [orders, statusFilter],
  )

  const columns = useMemo<ColumnDef<Order>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Order',
        cell: ({ row }) => (
          <Link
            to={`/orders/${row.original.id}`}
            className="font-medium text-[var(--accent)] hover:underline"
            onClick={() => dispatch(setSelectedOrderId(row.original.id))}
          >
            {row.original.id}
          </Link>
        ),
      },
      {
        accessorKey: 'customerName',
        header: 'Customer',
      },
      {
        id: 'total',
        header: 'Total',
        cell: ({ row }) => formatMoney(row.original.totalCents),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <OrderStatusBadge status={row.original.status} />,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created',
        cell: ({ row }) =>
          new Date(row.original.createdAt).toLocaleDateString(undefined, {
            dateStyle: 'medium',
          }),
      },
    ],
    [dispatch],
  )

  const table = useReactTable({
    data: filtered,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading) {
    return <p className="text-sm text-[var(--muted-foreground)]">Loading orders…</p>
  }

  if (isError) {
    return (
      <p className="text-sm text-red-600">
        Could not load orders. Try refreshing the page.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
      <table className="min-w-full divide-y divide-[var(--border)] text-sm">
        <thead className="bg-[var(--muted)]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left font-medium text-[var(--text-h)]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-[var(--border)] bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={cn('hover:bg-[var(--accent-bg)]/40')}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {filtered.length === 0 ? (
        <p className="px-4 py-6 text-center text-sm text-[var(--muted-foreground)]">
          No orders match this filter.
        </p>
      ) : null}
    </div>
  )
}
