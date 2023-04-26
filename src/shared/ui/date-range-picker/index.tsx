import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import DatePicker from 'react-datepicker'
import { useController } from 'react-hook-form'
import { capitalize, getHolidays } from 'shared/lib'
import { IconButton, Tag } from 'shared/ui'
import { ButtonInput } from './button-input'

export type NullableDate = Date | null
export type Dates = [start: NullableDate, end: NullableDate]

type Props = {
  control: any
}

const today = new Date()

export const DateRangePicker = ({ control }: Props) => {
  const {
    field: { value: startDate, onChange: setStartDate },
    fieldState: { error: startDateError },
  } = useController({
    name: 'checkInDate',
    control,
    rules: { required: true },
  })
  const {
    field: { value: endDate, onChange: setEndDate },
    fieldState: { error: endDateError },
  } = useController({
    name: 'checkOutDate',
    control,
    rules: { required: true },
  })

  const onChange = (dates: Dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const setHolidays = () => {
    const { saturday, sunday } = getHolidays()
    onChange([saturday, sunday])
  }

  const error = startDateError || endDateError

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex">
        <DatePicker
          minDate={today}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          dateFormat="d MMM"
          locale={ru}
          selectsRange
          popperPlacement="bottom"
          popperModifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 5],
              },
            },
          ]}
          customInput={<ButtonInput error={!!error} />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-lg font-bold text-gray-700">
                {capitalize(format(date, 'LLLL yyyy', { locale: ru }))}
              </span>
              <div className="flex gap-2">
                <IconButton
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  icon={<ChevronLeftIcon className="h-5 w-5 text-gray-600" />}
                />

                <IconButton
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  icon={<ChevronRightIcon className="h-5 w-5 text-gray-600" />}
                />
              </div>
            </div>
          )}
        />
      </div>
      <div className="hidden gap-2 md:flex">
        <Tag onClick={() => setHolidays()}>Ближайшие выходные</Tag>
      </div>
    </div>
  )
}
