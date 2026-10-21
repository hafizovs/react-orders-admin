import { configureStore } from '@reduxjs/toolkit'

import { ordersApi } from '@/entities/order'

import { uiSlice } from '@/features/order-ui-state'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ordersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
