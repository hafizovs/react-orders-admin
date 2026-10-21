import { toast } from 'sonner'

import {
  getAllowedStatusActions,
  useUpdateOrderStatusMutation,
  type Order,
  type OrderStatus,
} from '@/entities/order'
import { Button } from '@/shared/ui'

type ChangeOrderStatusActionsProps = {
  order: Order
}

export function ChangeOrderStatusActions({
  order,
}: ChangeOrderStatusActionsProps) {
  const [updateStatus, { isLoading }] = useUpdateOrderStatusMutation()
  const actions = getAllowedStatusActions(order.status)

  async function applyStatus(nextStatus: OrderStatus) {
    try {
      await updateStatus({ id: order.id, status: nextStatus }).unwrap()
      toast.success(`Order ${order.id} → ${nextStatus}`)
    } catch {
      toast.error('Failed to update order status')
    }
  }

  if (actions.length === 0) {
    return (
      <p className="text-sm text-[var(--muted-foreground)]">
        No status changes available.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <Button
          key={action.nextStatus}
          type="button"
          variant={action.nextStatus === 'cancelled' ? 'destructive' : 'default'}
          size="sm"
          disabled={isLoading}
          onClick={() => void applyStatus(action.nextStatus)}
        >
          {action.label}
        </Button>
      ))}
    </div>
  )
}
