import { Navigate, Route, Routes } from 'react-router-dom'

import { OrderDetailPage } from '@/pages/order-detail'
import { OrdersListPage } from '@/pages/orders-list'

import { Providers } from './providers'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrdersListPage />} />
      <Route path="/orders/:id" element={<OrderDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  )
}
