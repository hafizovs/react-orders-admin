import type { Order } from '@/entities/order'

export type SeedOrder = Order

export const seedOrders: SeedOrder[] = [
  {
    id: 'ord-1001',
    customerName: 'Alice Chen',
    email: 'alice@example.com',
    totalCents: 8997,
    status: 'pending',
    createdAt: '2025-10-18T09:15:00.000Z',
    lineItems: [
      {
        sku: 'MUG-01',
        name: 'Ceramic mug',
        quantity: 3,
        unitPriceCents: 2999,
      },
    ],
  },
  {
    id: 'ord-1002',
    customerName: 'Bob Rivera',
    email: 'bob@example.com',
    totalCents: 15499,
    status: 'processing',
    createdAt: '2025-10-17T14:22:00.000Z',
    lineItems: [
      {
        sku: 'BAG-12',
        name: 'Travel backpack',
        quantity: 1,
        unitPriceCents: 15499,
      },
    ],
  },
  {
    id: 'ord-1003',
    customerName: 'Carol Smith',
    email: 'carol@example.com',
    totalCents: 4598,
    status: 'shipped',
    createdAt: '2025-10-16T11:00:00.000Z',
    lineItems: [
      {
        sku: 'TEE-M',
        name: 'Organic tee (M)',
        quantity: 2,
        unitPriceCents: 2299,
      },
    ],
  },
  {
    id: 'ord-1004',
    customerName: 'Dan Okonkwo',
    email: 'dan@example.com',
    totalCents: 3200,
    status: 'delivered',
    createdAt: '2025-10-10T08:45:00.000Z',
    lineItems: [
      {
        sku: 'HAT-03',
        name: 'Wool cap',
        quantity: 1,
        unitPriceCents: 3200,
      },
    ],
  },
  {
    id: 'ord-1005',
    customerName: 'Eve Nguyen',
    email: 'eve@example.com',
    totalCents: 1299,
    status: 'cancelled',
    createdAt: '2025-10-09T16:30:00.000Z',
    lineItems: [
      {
        sku: 'PIN-07',
        name: 'Enamel pin',
        quantity: 1,
        unitPriceCents: 1299,
      },
    ],
  },
]
