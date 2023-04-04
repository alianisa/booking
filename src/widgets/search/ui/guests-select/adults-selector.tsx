import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { IconButton } from 'shared/ui/icon-button'

type AdultsSelectorProps = {
  value: number
  onChange: (value: number) => void
}

export const AdultsSelector = ({ value, onChange }: AdultsSelectorProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-col">
        <p>Взрослые</p>
        <p className="text-sm text-gray-500">от 18 лет</p>
      </div>
      <div className="flex items-center gap-4">
        <IconButton
          size="sm"
          variant="secondary"
          icon={<MinusIcon className="h-5 w-5 text-gray-600" />}
          onClick={() => onChange(value > 1 ? value - 1 : value)}
        />
        <p className="text-xl font-bold">{value}</p>
        <IconButton
          size="sm"
          variant="secondary"
          icon={<PlusIcon className="h-5 w-5 text-gray-600" />}
          onClick={() => onChange(value < 9 ? value + 1 : value)}
        />
      </div>
    </div>
  )
}
