import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'
import { ImageCarousel } from 'shared/ui'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  images: string[]
  title: string
}

export const ModalImages = ({ open, onOpenChange, images, title }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed z-50 flex max-h-[90%] w-[95%] flex-col overflow-hidden rounded-md bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0">
            <div className="mb-2 flex w-full flex-col space-y-2 text-center">
              <p className="text-lg font-semibold text-slate-900">{title}</p>
            </div>
            <div className="flex-1">
              <ImageCarousel images={images} />
            </div>
            <Dialog.Close className="absolute top-6 right-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none data-[state=open]:bg-gray-100">
              <XMarkIcon className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
