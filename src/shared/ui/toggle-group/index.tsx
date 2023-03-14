import clsx from 'clsx'
import React from 'react'
import { Button } from '../button'
import { IconButton } from '../icon-button'

type Props = {
  data: { label: string | JSX.Element; value: string }[]
  onChange: (value: string) => void
  value?: string
  variant?: 'text' | 'icon'
  className?: string
}

export const ToggleGroup = ({
  data,
  onChange,
  value = data[0].value,
  variant = 'text',
  className,
  ...props
}: Props) => {
  const handleClick = (newValue: string) => {
    if (newValue !== value) {
      onChange(newValue)
    }
  }

  return (
    <div className={clsx('flex', className)} {...props}>
      {data.map((item, index) => {
        if (variant === 'text')
          return (
            <Button
              onClick={() => handleClick(item.value)}
              key={index}
              variant={value === item.value ? 'primary' : 'secondary'}
              className={clsx(
                '-ml-1 rounded-none focus:ring-0',
                index === 0 && 'rounded-l-md',
                index === data.length - 1 && 'rounded-r-md'
              )}
            >
              {item.label}
            </Button>
          )
        return (
          <IconButton
            icon={item.label as JSX.Element}
            onClick={() => handleClick(item.value)}
            key={index}
            variant={value === item.value ? 'primary' : 'secondary'}
            className={clsx(
              '-ml-1 rounded-none focus:ring-0',
              index === 0 && 'rounded-l-md',
              index === data.length - 1 && 'rounded-r-md'
            )}
          />
        )
      })}
    </div>
  )
}
