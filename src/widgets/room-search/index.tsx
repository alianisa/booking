import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { serializeQuery } from 'shared/lib'
import { Button, DateRangePicker, GuestsSelect } from 'shared/ui'

type Props = { queryValues: { [key: string]: any } }

const defaultValues = {
  checkInDate: null,
  checkOutDate: null,
  guests: { adults: 2, childrenAges: [] },
}

export const RoomSearch = ({ queryValues }: Props) => {
  const router = useRouter()
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
  })

  const onSubmit = (data: any) => {
    const serializedQuery = serializeQuery(data)
    router.push({ query: { ...serializedQuery, hotelId: router.query.hotelId } })
    console.log(data)
  }

  useEffect(() => {
    const initialValue = { ...defaultValues, ...queryValues }
    reset(initialValue)
  }, [queryValues, reset])

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
