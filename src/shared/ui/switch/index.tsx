import * as RadixSwitch from '@radix-ui/react-switch'
import clsx from 'clsx'

type Props = {
  name: string
  label?: string
  size?: 'sm' | 'md'
  className?: string
} & RadixSwitch.SwitchProps

export const Switch = ({ name, label, size = 'md', className, ...props }: Props) => {
  const labelStyles = clsx(
    'text-gray-700',
    size === 'sm' && 'pr-2 text-sm',
    size === 'md' && 'pr-3 text-base',
    props?.disabled && 'opacity-60 pointer-events-none'
  )

  const rootStyles = clsx(
    'relative cursor-pointer rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=checked]:bg-gray-800',
    size === 'sm' && 'h-5 w-9',
    size === 'md' && 'h-6 w-11',
    props?.disabled && 'opacity-60 pointer-events-none'
  )

  const thumbStyles = clsx(
    'block rounded-full bg-white transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[22px]',
    size === 'sm' && 'h-4 w-4  translate-x-0.5 data-[state=checked]:translate-x-[18px]',
    size === 'md' && 'h-5 w-5  translate-x-0.5 data-[state=checked]:translate-x-[22px]',
    props?.disabled && 'opacity-60 pointer-events-none'
  )

  return (
    <form>
      <div className={clsx('flex items-center', props.disabled && 'cursor-not-allowed', className)}>
        {label && (
          <label className={labelStyles} htmlFor={name}>
            {label}
          </label>
        )}
        <RadixSwitch.Root {...props} className={rootStyles} id={name}>
          <RadixSwitch.Thumb className={thumbStyles} />
        </RadixSwitch.Root>
      </div>
    </form>
  )
}
