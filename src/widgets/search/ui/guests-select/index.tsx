import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useController } from 'react-hook-form'
import { formatNoun } from 'shared/lib/utils'
import { SearchControl } from 'widgets/search'
import { Button } from 'shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { AdultsSelector } from './adults-selector'
import { ChildrenSelector } from './children-selector'

type Props = {
  control: SearchControl
}

export const GuestsSelect = ({ control }: Props) => {
  const {
    field: { value, onChange },
  } = useController({
    name: 'guests',
    control,
  })
  const guestsCount = value.adults + value.childrens.length
  return (
    <div className="flex-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="group" full>
            <div className="flex w-full flex-nowrap items-center justify-between gap-2 whitespace-nowrap text-gray-900">
              {formatNoun({ number: guestsCount, words: ['гость', 'гостя', 'гостей'] })}
              <ChevronDownIcon className="ml-auto h-5 w-5 group-data-[state=open]:rotate-180" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="flex flex-col gap-2">
            <AdultsSelector value={value.adults} onChange={(adults) => onChange({ ...value, adults: adults })} />
            <ChildrenSelector
              value={value.childrens}
              onChange={(childrens) => onChange({ ...value, childrens: childrens })}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
