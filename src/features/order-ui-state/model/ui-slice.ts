import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { OrderStatusFilter } from '@/entities/order'

type UiState = {
  selectedOrderId: string | null
  statusFilter: OrderStatusFilter
}

const initialState: UiState = {
  selectedOrderId: null,
  statusFilter: 'all',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedOrderId(state, action: PayloadAction<string | null>) {
      state.selectedOrderId = action.payload
    },
    setStatusFilter(state, action: PayloadAction<OrderStatusFilter>) {
      state.statusFilter = action.payload
    },
  },
})

export const { setSelectedOrderId, setStatusFilter } = uiSlice.actions

export const selectSelectedOrderId = (state: { ui: UiState }) =>
  state.ui.selectedOrderId

export const selectStatusFilter = (state: { ui: UiState }) =>
  state.ui.statusFilter
