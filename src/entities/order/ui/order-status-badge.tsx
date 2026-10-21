import type { OrderStatus } from '../model/types'
import { cn } from '@/shared/lib/cn'

const statusStyles: Record<OrderStatus, string> = {
  pending: 'bg-amber-100 text-amber-900',
  processing: 'bg-blue-100 text-blue-900',
  shipped: 'bg-violet-100 text-violet-900',
  delivered: 'bg-emerald-100 text-emerald-900',
  cancelled: 'bg-zinc-200 text-zinc-700',
}

type OrderStatusBadgeProps = {
  status: OrderStatus
  className?: string
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  )
}
