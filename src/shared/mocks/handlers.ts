import { http, HttpResponse } from 'msw'

import type { OrderStatus } from '@/entities/order'

import {
  getFailNextWithUnauthorized,
  getOrderById,
  getOrders,
  setFailNextWithUnauthorized,
  setOrders,
} from './db'

function unauthorizedIfSimulated(): HttpResponse<{ message: string }> | null {
  if (getFailNextWithUnauthorized()) {
    setFailNextWithUnauthorized(false)
    return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  return null
}

type PatchBody = { status?: OrderStatus }

export const handlers = [
  http.get('/api/orders', () => {
    const denied = unauthorizedIfSimulated()
    if (denied) {
      return denied
    }
    return HttpResponse.json(getOrders())
  }),

  http.get('/api/orders/:id', ({ params }) => {
    const denied = unauthorizedIfSimulated()
    if (denied) {
      return denied
    }
    const id = String(params.id)
    const order = getOrderById(id)
    if (!order) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 })
    }
    return HttpResponse.json(order)
  }),

  http.patch('/api/orders/:id', async ({ params, request }) => {
    const denied = unauthorizedIfSimulated()
    if (denied) {
      return denied
    }
    const id = String(params.id)
    const existing = getOrderById(id)
    if (!existing) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 })
    }

    const body = (await request.json()) as PatchBody
    if (!body.status) {
      return HttpResponse.json(
        { message: 'status is required' },
        { status: 400 },
      )
    }

    const updated = { ...existing, status: body.status }
    setOrders(getOrders().map((order) => (order.id === id ? updated : order)))
    return HttpResponse.json(updated)
  }),

  http.post('/api/demo/unauthorized-next', () => {
    setFailNextWithUnauthorized(true)
    return HttpResponse.json({ ok: true })
  }),
]
