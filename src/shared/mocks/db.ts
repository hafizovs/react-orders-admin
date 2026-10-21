import { seedOrders, type SeedOrder } from './seed'

let orders: SeedOrder[] = structuredClone(seedOrders)
let failNextWithUnauthorized = false

export function getOrders(): SeedOrder[] {
  return orders
}

export function setOrders(next: SeedOrder[]): void {
  orders = next
}

export function getOrderById(id: string): SeedOrder | undefined {
  return orders.find((order) => order.id === id)
}

export function getFailNextWithUnauthorized(): boolean {
  return failNextWithUnauthorized
}

export function setFailNextWithUnauthorized(value: boolean): void {
  failNextWithUnauthorized = value
}

export function resetMockDb(): void {
  orders = structuredClone(seedOrders)
  failNextWithUnauthorized = false
}
