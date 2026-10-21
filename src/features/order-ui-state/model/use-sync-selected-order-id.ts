import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store/hooks'

import { setSelectedOrderId } from './ui-slice'

export function useSyncSelectedOrderId(orderId: string | undefined) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (orderId) {
      dispatch(setSelectedOrderId(orderId))
    }
  }, [dispatch, orderId])
}
