import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'
import { Room } from 'shared/types'

type Props = {
  item: Room
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ModalAbout = ({ item, open, onOpenChange }: Props) => {
  const facilities = Object.entries(item.facilities)
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed z-50 flex h-5/6 w-full max-w-4xl flex-col overflow-y-auto rounded-md bg-white p-6 animate-in duration-300 data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 md:h-auto md:duration-100">
            <div className="flex flex-1 flex-col p-2 md:flex-row md:p-0">
              <div className="flex flex-1 flex-col">
                <p className="text-2xl font-semibold">{item.name}</p>
                <span className="text-gray-700">
                  {item.beds}
                  <span>
                    &nbsp;·&nbsp;{item.size} м<sup>2</sup>
                  </span>
                </span>
                <div className="mt-4 columns-1 gap-2 md:columns-3">
                  {facilities.map(([title, features]) => (
                    <div key={title} className="flex flex-col">
                      <p className="font-semibold">{title}</p>
                      <div className="mb-1 flex flex-col">
                        {features.map((feature) => (
                          <div key={feature}>{feature}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4">{item.description}</p>
              </div>
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
