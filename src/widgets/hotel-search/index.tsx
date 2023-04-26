import { useEffect, useState } from 'react'
import { Control, useForm } from 'react-hook-form'
import { Button, DateRangePicker, GuestsSelect } from 'shared/ui'
import { CitySearch, SearchFilters } from './ui'

type Props = { queryValues: { [key: string]: any }; filters?: boolean; onSubmit: (data: any) => void }

const defaultValues = {
  city: '',
  checkInDate: null,
  checkOutDate: null,
  persons: 2,
  filters: {
    hasWifi: false,
    hasAirConditioner: false,
    hasPool: false,
    hasParking: false,
    hasSpa: false,
    hasSauna: false,
    hasRestaraunt: false,
    hasCafe: false,
    hasFitness: false,
    hasTransfer: false,
    hasConferenceHall: false,
    skiSlopeClose: false,
    airportClose: false,
    beachClose: false,
    animalsAllowed: false,
  },
}

export type SearchControl = Control<typeof defaultValues>

export const HotelSearch = ({ queryValues, filters = true, onSubmit }: Props) => {
  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues,
  })
  const [filtersCount, setFiltersCount] = useState(0)

  useEffect(() => {
    const initialValue = { ...defaultValues, ...queryValues }
    reset(initialValue)
    const filtersCount = Object.entries(initialValue.filters).filter(([key, value]) => !!value).length
    setFiltersCount(filtersCount)
  }, [queryValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="search-form">
      <div className="flex flex-col gap-4">
        {filters && (
          <div className="md:flex md:justify-end">
            <SearchFilters
              control={control}
              onReset={() => setValue('filters', defaultValues.filters)}
              filtersCount={filtersCount}
            />
          </div>
        )}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-wrap gap-4 md:flex-nowrap">
            <CitySearch control={control} />
            <DateRangePicker control={control} />
            <GuestsSelect control={control} />
          </div>
          <Button type="submit" full>
            Найти
          </Button>
        </div>
      </div>
    </form>
  )
}
