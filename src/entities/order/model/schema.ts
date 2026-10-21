import { z } from 'zod'

import { ORDER_STATUSES } from './types'

export const orderStatusSchema = z.enum(ORDER_STATUSES)

export const orderLineItemSchema = z.object({
  sku: z.string().min(1),
  name: z.string().min(1),
  quantity: z.number().int().positive(),
  unitPriceCents: z.number().int().nonnegative(),
})

export const orderSchema = z.object({
  id: z.string().min(1),
  customerName: z.string().min(1),
  email: z.email(),
  totalCents: z.number().int().nonnegative(),
  status: orderStatusSchema,
  createdAt: z.string().datetime(),
  lineItems: z.array(orderLineItemSchema).min(1),
})

export const updateOrderStatusSchema = z.object({
  status: orderStatusSchema,
})

export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>
