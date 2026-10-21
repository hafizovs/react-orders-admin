import { describe, expect, it } from 'vitest'

import { orderSchema, updateOrderStatusSchema } from './schema'

const validOrder = {
  id: 'ord-1',
  customerName: 'Jane Doe',
  email: 'jane@example.com',
  totalCents: 4999,
  status: 'pending' as const,
  createdAt: '2025-10-01T12:00:00.000Z',
  lineItems: [
    { sku: 'SKU-1', name: 'Widget', quantity: 2, unitPriceCents: 2499 },
  ],
}

describe('orderSchema', () => {
  it('accepts a valid order payload', () => {
    expect(orderSchema.parse(validOrder)).toEqual(validOrder)
  })

  it('rejects invalid status in update body', () => {
    expect(() =>
      updateOrderStatusSchema.parse({ status: 'unknown' }),
    ).toThrow()
  })
})
