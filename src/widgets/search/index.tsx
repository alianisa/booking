import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { Control, useForm } from 'react-hook-form'
import { GuestsSelect } from 'widgets/search/ui/guests-select'
import { Button } from 'shared/ui/button'
import { CitySearch } from './ui/city-search'
import { DateRangePicker } from './ui/date-range-picker'

type Props = {}

const defaultValues = {
  city: '',
  startDate: null,
  endDate: null,
  guests: { adults: 2, childrens: [] },
}

export type SearchControl = Control<typeof defaultValues>

export const Search = (props: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  })
  const onSubmit = (data: any) => console.log('data', data)

  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex md:justify-end">
        <Button variant="secondary" full>
          <AdjustmentsHorizontalIcon className="mr-2 h-5 w-5" />
          Фильтры
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-wrap gap-4 md:flex-nowrap">
            <CitySearch control={control} />
            <DateRangePicker control={control} />
            <GuestsSelect control={control} />
          </div>
          <Button full>Найти</Button>
        </div>
      </form>
    </div>
  )
}
