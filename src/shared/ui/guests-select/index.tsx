import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useController } from 'react-hook-form'
import { formatNoun } from 'shared/lib'
import { Button, Popover, PopoverContent, PopoverTrigger } from 'shared/ui'
import { AdultsSelector } from './adults-selector'

type Props = {
  control: any
}

export const GuestsSelect = ({ control }: Props) => {
  const {
    field: { value, onChange },
  } = useController({
    name: 'persons',
    control,
  })

  return (
    <div className="flex-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="group" full>
            <div className="flex w-full flex-nowrap items-center justify-between gap-2 whitespace-nowrap text-gray-900">
              {formatNoun({ number: value, words: ['гость', 'гостя', 'гостей'] })}
              <ChevronDownIcon className="ml-auto h-5 w-5 group-data-[state=open]:rotate-180" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="flex flex-col gap-2">
            <AdultsSelector value={value} onChange={(value) => onChange(value)} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
