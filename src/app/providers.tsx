import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import type { ReactNode } from 'react'

import { store } from './store'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </Provider>
  )
}
