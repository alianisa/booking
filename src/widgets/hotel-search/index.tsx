import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Control, useForm } from 'react-hook-form'
import { serializeQuery } from 'shared/lib/utils'
import { SearchFilters } from 'widgets/hotel-search/ui/search-filters'
import { Button } from 'shared/ui/button'
import { DateRangePicker } from 'shared/ui/date-range-picker'
import { GuestsSelect } from 'shared/ui/guests-select'
import { CitySearch } from './ui/city-search'

type Props = { queryValues: { [key: string]: any } }

const defaultValues = {
  city: '',
  checkInDate: null,
  checkOutDate: null,
  guests: { adults: 2, childrenAges: [] },
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

export const HotelSearch = ({ queryValues }: Props) => {
  const router = useRouter()
  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues,
  })
  const [filtersCount, setFiltersCount] = useState(0)

  const onSubmit = (data: any) => {
    const serializedQuery = serializeQuery(data)
    router.push({ query: { ...serializedQuery } })
    console.log(data)
  }

  useEffect(() => {
    const initialValue = { ...defaultValues, ...queryValues }
    reset(initialValue)
    const filtersCount = Object.entries(initialValue.filters).filter(([key, value]) => !!value).length
    setFiltersCount(filtersCount)
  }, [queryValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="search-form">
      <div className="flex flex-col gap-4">
        <div className="md:flex md:justify-end">
          <SearchFilters
            control={control}
            onReset={() => setValue('filters', defaultValues.filters)}
            filtersCount={filtersCount}
          />
        </div>
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
