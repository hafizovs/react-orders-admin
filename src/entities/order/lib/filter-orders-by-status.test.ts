import { describe, expect, it } from 'vitest'

import type { Order } from '../model/types'
import { filterOrdersByStatus } from './filter-orders-by-status'

const orders: Order[] = [
  {
    id: '1',
    customerName: 'A',
    email: 'a@test.com',
    totalCents: 100,
    status: 'pending',
    createdAt: '2025-01-01T00:00:00.000Z',
    lineItems: [
      { sku: 'x', name: 'Item', quantity: 1, unitPriceCents: 100 },
    ],
  },
  {
    id: '2',
    customerName: 'B',
    email: 'b@test.com',
    totalCents: 200,
    status: 'shipped',
    createdAt: '2025-01-02T00:00:00.000Z',
    lineItems: [
      { sku: 'y', name: 'Item', quantity: 1, unitPriceCents: 200 },
    ],
  },
]

describe('filterOrdersByStatus', () => {
  it('returns all orders when filter is all', () => {
    expect(filterOrdersByStatus(orders, 'all')).toHaveLength(2)
  })

  it('filters by a single status', () => {
    const result = filterOrdersByStatus(orders, 'shipped')
    expect(result.map((o) => o.id)).toEqual(['2'])
  })
})
