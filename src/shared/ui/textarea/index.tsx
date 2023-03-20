import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from 'shared/lib/utils'

type Props = {
  name: string
  label?: string
  full?: boolean
  hint?: string
  variant?: 'outline' | 'filled'
  error?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef(
  ({ variant = 'outline', full, name, label, hint, error, className, ...props }: Props, ref) => {
    const styles = cn(
      'block w-full rounded-md border text-gray-900 placeholder-gray-500 shadow-sm outline-none transition-all duration-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed py-2 px-3',
      variant === 'outline' && 'border-gray-300 bg-white text-base hover:border-gray-400',
      variant === 'filled' && 'border-gray-100 bg-gray-100 hover:bg-gray-200 focus:bg-white',
      props?.disabled && variant === 'outline' && 'hover:!border-gray-300',
      props?.disabled && variant === 'filled' && 'hover:border-gray-100 hover:bg-gray-100',
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
          <textarea {...props} ref={ref as any} id={name} name={name} className={styles} />
        </div>
        {hint && !error && <p className="mt-2 text-sm text-gray-600">{hint}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
