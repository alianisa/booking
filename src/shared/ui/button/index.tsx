import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { cn } from 'shared/lib/utils'

type Props = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  children: React.ReactNode
  full?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', full, className, children, ...props }, ref) => {
    const styles = cn(
      'inline-flex items-center justify-center rounded-md border font-medium shadow-sm transition-colors focus:ring-2 disabled:pointer-events-none disabled:opacity-60 focus:ring-blue-500 outline-none whitespace-nowrap ',
      variant === 'primary' &&
        'bg-gray-800 border-gray-800 text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-600',
      variant === 'secondary' && 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100',
      size === 'sm' && 'py-1 px-3 text-sm',
      size === 'md' && 'text-md px-4 py-2',
      full ? 'w-full' : '',
      className
    )

    return (
      <div className={clsx(props.disabled && 'cursor-not-allowed')}>
        <button {...props} className={styles} ref={ref}>
          {children}
        </button>
      </div>
    )
  }
)
Button.displayName = 'Button'
