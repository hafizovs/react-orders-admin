export const ORDER_STATUSES = [
  'pending',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
] as const

export type OrderStatus = (typeof ORDER_STATUSES)[number]

export type Order = {
  id: string
  customerName: string
  email: string
  totalCents: number
  status: OrderStatus
  createdAt: string
  lineItems: OrderLineItem[]
}

export type OrderLineItem = {
  sku: string
  name: string
  quantity: number
  unitPriceCents: number
}
