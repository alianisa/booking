import React from 'react'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from 'shared/lib'
import { Button } from 'shared/ui'

type Props = {
  alert: { status: 'error' | 'success'; message: string } | null
  hotelHref: {
    pathname: string
    query: {
      [x: string]: any
    }
  }
}

export const BookingAlert = ({ alert, hotelHref }: Props) => {
  const router = useRouter()
  if (!alert) return null
  const handleButton = () => {
    if (alert.status === 'error') {
      router.push(hotelHref)
    }
    router.push('/')
  }

  const buttonText = alert.status === 'error' ? 'Выбрать другие даты' : 'На главную'

  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed z-50 flex flex-col overflow-hidden rounded-md bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0">
            <p
              className={cn(
                'mb-4 text-center text-xl font-semibold',
                alert.status === 'error' ? 'text-red-500' : 'text-slate-900'
              )}
            >
              {alert.message}
            </p>
            <div className="flex-1">
              <Button variant="secondary" full onClick={handleButton}>
                {buttonText}
              </Button>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
