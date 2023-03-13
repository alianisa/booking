import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = {
  name: string
  label?: string
  size?: 'sm' | 'md'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Checkbox = ({ name, label, size = 'md', className, ...props }: Props) => {
  const inputStyles = clsx(
    'rounded border-gray-300 text-gray-800 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-100 cursor-pointer',
    size === 'sm' && 'h-4 w-4',
    size === 'md' && 'h-5 w-5'
  )
  const labelStyles = clsx(
    'text-md ml-3 select-none font-medium text-gray-700 cursor-pointer',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base',
    props?.disabled && '!cursor-not-allowed opacity-60'
  )
  return (
    <div className={clsx('flex items-center', props?.disabled && 'cursor-not-allowed', className)}>
      <input {...props} name={name} id={name} type="checkbox" className={inputStyles} />
      {label && (
        <label htmlFor={name} className={labelStyles}>
          {label}
        </label>
      )}
    </div>
  )
}
