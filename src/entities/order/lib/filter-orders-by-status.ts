import type { Order, OrderStatus } from '../model/types'

export type OrderStatusFilter = OrderStatus | 'all'

export function filterOrdersByStatus(
  orders: Order[],
  statusFilter: OrderStatusFilter,
): Order[] {
  if (statusFilter === 'all') {
    return orders
  }
  return orders.filter((order) => order.status === statusFilter)
}
