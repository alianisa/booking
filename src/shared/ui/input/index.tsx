import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  name: string
  label?: string
  type?: string
  full?: boolean
  hint?: string
  variant?: 'outline' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  error?: string
  leftElement?: JSX.Element
  rightElement?: JSX.Element
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Input = forwardRef(
  (
    {
      variant = 'outline',
      size = 'md',
      type = 'text',
      full,
      name,
      label,
      hint,
      error,
      leftElement,
      rightElement,
      className,
      ...props
    }: Props,
    ref
  ) => {
    const styles = clsx(
      'block w-full rounded-md border text-gray-900 placeholder-gray-500 shadow-sm outline-none transition-all duration-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed',
      variant === 'outline' && 'border-gray-300 bg-white text-base hover:border-gray-400',
      variant === 'filled' && 'border-gray-100 bg-gray-100 hover:bg-gray-200 focus:bg-white',
      props?.disabled && variant === 'outline' && 'hover:!border-gray-300',
      props?.disabled && variant === 'filled' && 'hover:border-gray-100 hover:bg-gray-100',
      size === 'sm' && 'py-1 px-2',
      size === 'md' && 'py-2 px-3',
      size === 'lg' && 'py-[10px] px-[14px]',
      error && '!border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500',
      leftElement && 'pl-10',
      rightElement && 'pr-10',
      className
    )

    return (
      <div className={clsx('flex flex-col', full && 'w-full')}>
        {label && (
          <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className={clsx('relative', props?.disabled && 'opacity-60')}>
          {leftElement && (
            <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
              {leftElement}
            </div>
          )}
          <input {...props} ref={ref as any} id={name} name={name} className={styles} />
          {rightElement && (
            <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
              {rightElement}
            </div>
          )}
        </div>
        {hint && !error && <p className="mt-2 text-sm text-gray-600">{hint}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
