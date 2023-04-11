import { useForm } from 'react-hook-form'
import { Button } from 'shared/ui/button'
import { DateRangePicker } from 'shared/ui/date-range-picker'
import { GuestsSelect } from 'shared/ui/guests-select'

type Props = {}

const defaultValues = {
  startDate: null,
  endDate: null,
  guests: { adults: 2, childrens: [] },
}

export const RoomSearch = (props: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  })
  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="search-form">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-wrap gap-4 md:flex-nowrap">
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
