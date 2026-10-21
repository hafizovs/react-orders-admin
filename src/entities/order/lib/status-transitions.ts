import type { OrderStatus } from '../model/types'

const NEXT_STATUS: Partial<Record<OrderStatus, OrderStatus>> = {
  pending: 'processing',
  processing: 'shipped',
  shipped: 'delivered',
}

export function getForwardStatus(status: OrderStatus): OrderStatus | null {
  return NEXT_STATUS[status] ?? null
}

export function getAllowedStatusActions(
  status: OrderStatus,
): { label: string; nextStatus: OrderStatus }[] {
  const actions: { label: string; nextStatus: OrderStatus }[] = []
  const forward = getForwardStatus(status)
  if (forward) {
    actions.push({
      label: `Mark ${forward}`,
      nextStatus: forward,
    })
  }
  if (status !== 'cancelled' && status !== 'delivered') {
    actions.push({ label: 'Cancel order', nextStatus: 'cancelled' })
  }
  return actions
}
