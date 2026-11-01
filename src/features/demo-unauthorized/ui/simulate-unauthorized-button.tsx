import { toast } from 'sonner'

import { useGetOrdersQuery } from '@/entities/order'
import { Button } from '@/shared/ui'

type SimulateUnauthorizedButtonProps = {
  className?: string
}

export function SimulateUnauthorizedButton({
  className,
}: SimulateUnauthorizedButtonProps) {
  const { refetch, isFetching } = useGetOrdersQuery()

  async function handleClick() {
    await fetch('/api/demo/unauthorized-next', { method: 'POST' })
    toast.message('Next API request will return 401')
    void refetch()
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={className}
      onClick={() => void handleClick()}
      disabled={isFetching}
    >
      Simulate 401 on next request
    </Button>
  )
}
