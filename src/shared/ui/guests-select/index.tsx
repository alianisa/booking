import React from 'react'
import { ChevronDownIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { formatNoun } from 'shared/lib/utils'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

export type Guests = {
  adults: number
  childrens: number[]
}

type Props = {
  guests: Guests
  onChange: (guests: Guests) => void
}

export const GuestsSelect = ({ guests, onChange }: Props) => {
  const guestsCount = guests.adults + guests.childrens.length
  return (
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
          <AdultsSelector value={guests.adults} onChange={(value) => onChange({ ...guests, adults: value })} />
          <ChildrenSelector value={guests.childrens} onChange={(value) => onChange({ ...guests, childrens: value })} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

type AdultsSelectorProps = {
  value: number
  onChange: (value: number) => void
}

const AdultsSelector = ({ value, onChange }: AdultsSelectorProps) => {
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

const childrenOptions = [
  { label: 'до 1 года', value: '0' },
  { label: '1 год', value: '1' },
  { label: '2 года', value: '2' },
  { label: '3 года', value: '3' },
  { label: '4 года', value: '4' },
  { label: '5 лет', value: '5' },
  { label: '6 лет', value: '6' },
  { label: '7 лет', value: '7' },
  { label: '8 лет', value: '8' },
  { label: '9 лет', value: '9' },
  { label: '10 лет', value: '10' },
  { label: '11 лет', value: '11' },
  { label: '12 лет', value: '12' },
  { label: '13 лет', value: '13' },
  { label: '14 лет', value: '14' },
  { label: '15 лет', value: '15' },
  { label: '16 лет', value: '16' },
  { label: '17 лет', value: '17' },
]
type ChildrenSelectorProps = {
  value: number[]
  onChange: (value: number[]) => void
}

const ChildrenSelector = ({ value, onChange }: ChildrenSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      {value.map((age, index) => (
        <div
          className="flex w-full items-center justify-between gap-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 shadow-sm"
          key={age + index}
        >
          Ребенок: {age === 0 ? 'До 1 года' : formatNoun({ number: age, words: ['год', 'года', 'лет'] })}
          <XMarkIcon
            className="h-5 w-5 cursor-pointer text-gray-700"
            onClick={() => onChange(value.filter((_, childrenIndex) => index !== childrenIndex))}
          />
        </div>
      ))}
      {value.length < 4 && (
        <select
          className="block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none transition-all hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed"
          onChange={(e) => onChange([...value, Number(e.target.value)])}
          value=""
        >
          <option value="" disabled>
            Добавить ребенка
          </option>
          {childrenOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
