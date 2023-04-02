import { forwardRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import DatePicker from 'react-datepicker'
import { capitalize } from 'shared/lib/utils'
import { Button } from 'shared/ui/button'
import { IconButton } from 'shared/ui/icon-button'

export type NullableDate = Date | null
export type Dates = [start: NullableDate, end: NullableDate]

type Props = {
  startDate?: NullableDate
  endDate?: NullableDate
  onChange: (dates: Dates) => void
}

export const DateRangePicker = ({ startDate = null, endDate = null, onChange }: Props) => {
  return (
    <div className="flex">
      <DatePicker
        showPopperArrow={false}
        minDate={new Date()}
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
        customInput={<ButtonInput />}
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
                size="sm"
                variant="secondary"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                icon={<ChevronLeftIcon className="h-5 w-5 text-gray-600" />}
              />

              <IconButton
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
  )
}

const ButtonInput = forwardRef(({ value, onClick }: any, ref: any) => {
  return (
    <Button variant="secondary" onClick={onClick} ref={ref} className="min-h-[42px] min-w-[158.77px]" full>
      {value ? (
        <p className="mr-auto text-gray-900">{value}</p>
      ) : (
        <p className="mr-auto text-gray-500">заезд - выезд</p>
      )}
    </Button>
  )
})

ButtonInput.displayName = 'ButtonInput'
