import { forwardRef } from 'react'
import { cn } from 'shared/lib/utils'
import { Button } from 'shared/ui/button'

export const ButtonInput = forwardRef(({ value, onClick, error }: any, ref: any) => {
  return (
    <>
      <Button
        variant="secondary"
        onClick={onClick}
        ref={ref}
        className={cn(
          'min-h-[42px] min-w-[158.77px]',
          error && 'border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-1 focus:ring-red-500'
        )}
        full
        type="button"
      >
        {value ? (
          <p className="mr-auto text-gray-900">{value}</p>
        ) : (
          <p className="mr-auto text-gray-500">заезд - выезд</p>
        )}
      </Button>
    </>
  )
})

ButtonInput.displayName = 'ButtonInput'
