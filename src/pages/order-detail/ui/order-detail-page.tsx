import { Link, useParams } from 'react-router-dom'

import { ChangeOrderStatusActions } from '@/features/change-order-status'
import { useSyncSelectedOrderId } from '@/features/order-ui-state'
import {
  formatMoney,
  OrderStatusBadge,
  useGetOrderByIdQuery,
} from '@/entities/order'
import { Button } from '@/shared/ui'

export function OrderDetailPage() {
  const { id = '' } = useParams()
  useSyncSelectedOrderId(id)
  const { data: order, isLoading, isError } = useGetOrderByIdQuery(id, {
    skip: !id,
  })

  if (!id) {
    return <p className="p-8 text-sm text-red-600">Missing order id.</p>
  }

  if (isLoading) {
    return (
      <p className="p-8 text-sm text-[var(--muted-foreground)]">
        Loading order…
      </p>
    )
  }

  if (isError || !order) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm text-red-600">Order not found.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/">Back to list</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">
            <Link to="/" className="hover:underline">
              Orders
            </Link>
            {' / '}
            {order.id}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-[var(--text-h)]">
            {order.customerName}
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">{order.email}</p>
        </div>
        <OrderStatusBadge status={order.status} className="text-sm" />
      </div>

      <section className="rounded-lg border border-[var(--border)] bg-white p-4">
        <h2 className="text-sm font-medium text-[var(--text-h)]">Line items</h2>
        <ul className="mt-3 divide-y divide-[var(--border)] text-sm">
          {order.lineItems.map((item) => (
            <li
              key={item.sku}
              className="flex justify-between gap-4 py-2 first:pt-0 last:pb-0"
            >
              <span>
                {item.name}{' '}
                <span className="text-[var(--muted-foreground)]">
                  × {item.quantity}
                </span>
              </span>
              <span>{formatMoney(item.unitPriceCents * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-right font-medium">
          Total {formatMoney(order.totalCents)}
        </p>
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-white p-4">
        <h2 className="text-sm font-medium text-[var(--text-h)]">
          Update status
        </h2>
        <div className="mt-3">
          <ChangeOrderStatusActions order={order} />
        </div>
      </section>
    </div>
  )
}
