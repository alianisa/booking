import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { cn } from 'shared/lib/utils'

type Props = {
  name: string
  label?: string
  size?: 'sm' | 'md'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Checkbox = ({ name, label, size = 'md', className, ...props }: Props) => {
  const inputStyles = clsx(
    'peer ounded border-gray-300 text-gray-800 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60 transition-colors cursor-pointer',
    size === 'sm' && 'h-4 w-4',
    size === 'md' && 'h-5 w-5'
  )
  const labelStyles = clsx(
    'text-md ml-3 select-none font-medium text-gray-700 cursor-pointer peer-disabled:opacity-60 peer-disabled:cursor-not-allowed',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base'
  )
  return (
    <div className={cn('flex items-center', className)}>
      <input {...props} name={name} id={name} type="checkbox" className={inputStyles} />
      {label && (
        <label htmlFor={name} className={labelStyles}>
          {label}
        </label>
      )}
    </div>
  )
}
