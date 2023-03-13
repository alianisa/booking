import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon: JSX.Element
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = ({ variant = 'primary', size = 'md', className, icon, ...props }: Props) => {
  return (
    <div className={clsx(props.disabled && 'cursor-not-allowed')}>
      <button
        {...props}
        className={clsx(
          'inline-flex items-center justify-center rounded-md border font-medium shadow-sm ring-offset-0 transition-colors duration-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
          variant === 'primary' && 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600',
          variant === 'secondary' &&
            'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100',
          size === 'sm' && 'p-1',
          size === 'md' && 'p-2',
          size === 'lg' && 'p-3',
          className
        )}
      >
        {icon}
      </button>
    </div>
  )
}
