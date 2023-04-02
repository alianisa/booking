import React, { useState } from 'react'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { isSaturday, nextSaturday, nextSunday } from 'date-fns'
import { Button } from 'shared/ui/button'
import { DateRangePicker, Dates, NullableDate } from 'shared/ui/date-range-picker'
import { Guests, GuestsSelect } from 'shared/ui/guests-select'
import { Input } from 'shared/ui/input'

type Props = {}

export const Search = (props: Props) => {
  const [startDate, setStartDate] = useState<NullableDate>(null)
  const [endDate, setEndDate] = useState<NullableDate>(null)
  const onChange = (dates: Dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const [guests, setGuests] = useState<{ adults: number; childrens: number[] }>({
    adults: 2,
    childrens: [],
  })

  const setHolidays = () => {
    const today = new Date()
    const saturday = isSaturday(today) ? today : nextSaturday(today)
    const sunday = nextSunday(today)
    setStartDate(saturday)
    setEndDate(sunday)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex md:justify-end">
        <Button variant="secondary" full>
          <AdjustmentsHorizontalIcon className="mr-2 h-5 w-5" />
          Фильтры
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-wrap gap-4 md:flex-nowrap">
          <div className="flex basis-full flex-col gap-2 md:basis-2/3">
            <Input name="city" placeholder="Город" />
            <div className="hidden gap-2 md:flex">
              <Tag>Москва</Tag>
              <Tag>Санкт‑Петербург</Tag>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <DateRangePicker startDate={startDate} endDate={endDate} onChange={onChange} />
            <div className="hidden gap-2 md:flex">
              <Tag onClick={() => setHolidays()}>Ближайшие выходные</Tag>
            </div>
          </div>
          <div className="flex-1">
            <GuestsSelect guests={guests} onChange={(guests: Guests) => setGuests(guests)} />
          </div>
        </div>
        <Button full>Найти</Button>
      </div>
    </div>
  )
}

type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const Tag = ({ children, ...props }: TagProps) => {
  return (
    <div
      className="cursor-pointer rounded-md bg-gray-100 p-1 text-sm text-gray-500 hover:text-gray-700 hover:underline"
      {...props}
    >
      {children}
    </div>
  )
}
