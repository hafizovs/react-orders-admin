import { createApi } from '@reduxjs/toolkit/query/react'

import type { Order, OrderStatus } from '../model/types'
import { baseQueryWithAuthHandling } from './base-query'

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: baseQueryWithAuthHandling,
  tagTypes: ['Order', 'OrderList'],
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => 'orders',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Order' as const, id })),
              { type: 'OrderList', id: 'LIST' },
            ]
          : [{ type: 'OrderList', id: 'LIST' }],
    }),
    getOrderById: builder.query<Order, string>({
      query: (id) => `orders/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Order', id }],
    }),
    updateOrderStatus: builder.mutation<
      Order,
      { id: string; status: OrderStatus }
    >({
      query: ({ id, status }) => ({
        url: `orders/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: 'Order', id },
        { type: 'OrderList', id: 'LIST' },
      ],
    }),
  }),
})

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
} = ordersApi
