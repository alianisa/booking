import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  full?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', full, leftIcon, rightIcon, className, children, ...props }, ref) => {
    const styles = clsx(
      'inline-flex items-center justify-center rounded-md border font-medium shadow-sm transition-colors duration-100 focus:ring-2 disabled:pointer-events-none disabled:opacity-60 focus:ring-blue-500 outline-none',
      variant === 'primary' &&
        'bg-gray-800 border-gray-800 text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-600',
      variant === 'secondary' && 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100',
      size === 'sm' && 'py-1 px-3 text-sm',
      size === 'md' && 'text-md px-4 py-2',
      size === 'lg' && 'py-3 px-6 text-lg',
      full ? 'w-full' : '',
      className
    )

    return (
      <div className={clsx(props.disabled && 'cursor-not-allowed')}>
        <button {...props} className={styles} ref={ref}>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
      </div>
    )
  }
)
Button.displayName = 'Button'
