import { SelectHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { cn } from 'shared/lib'

type Props = {
  name: string
  label?: string
  type?: string
  full?: boolean
  hint?: string
  variant?: 'outline' | 'filled'
  size?: 'sm' | 'md'
  error?: string
  options: { value: any; label: string }[]
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>

export const Select = forwardRef(
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
      className,
      options,
      placeholder,
      ...props
    }: Props,
    ref
  ) => {
    const styles = cn(
      'block w-full rounded-md border text-gray-900 placeholder-gray-500 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed',
      variant === 'outline' && 'border-gray-300 bg-white text-base hover:border-gray-400',
      variant === 'filled' && 'border-gray-100 bg-gray-100 hover:bg-gray-200 focus:bg-white',
      props?.disabled && variant === 'outline' && 'hover:!border-gray-300',
      props?.disabled && variant === 'filled' && 'hover:border-gray-100 hover:bg-gray-100',
      size === 'sm' && 'py-1 px-2',
      size === 'md' && 'py-2 px-3',
      error && '!border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500',
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
          <select
            {...props}
            ref={ref as any}
            name={name}
            id={name}
            className={styles}
            defaultValue={props.defaultValue ?? ''}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={name + option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {hint && !error && <p className="mt-2 text-sm text-gray-600">{hint}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
