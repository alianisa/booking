import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { parseQuery, serializeQuery } from 'shared/lib'
import { Button, Input, Textarea } from 'shared/ui'
import { Booking } from 'widgets'
import { bookMock } from './mock'

const defaultValues = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  comment: '',
}

const schema = z.object({
  firstName: z.string().min(1, { message: 'Обязательное поле' }),
  secondName: z.string().min(1, { message: 'Обязательное поле' }),
  email: z.string().min(1, { message: 'Обязательное поле' }).email({ message: 'Неверный email' }),
  phone: z.string().min(1, { message: 'Обязательное поле' }),
})

export default function BookingPage() {
  const router = useRouter()
  const query = router.query
  const { hotelId } = query
  const { checkInDate, checkOutDate, persons } = parseQuery(query)

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  const title = `Бронирование ${bookMock.book.hotelName}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex w-fit cursor-pointer items-center gap-1 hover:text-red-500"
              href={{
                pathname: '/search',
                query: {
                  ...serializeQuery({
                    city: bookMock.book.city,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    persons: persons,
                  }),
                },
              }}
            >
              <p className="text-lg">Гостиницы</p>
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex w-fit cursor-pointer items-center gap-1 hover:text-red-500"
              href={{
                pathname: `/hotels/${hotelId}`,
                query: {
                  ...serializeQuery({
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    persons: persons,
                  }),
                },
              }}
            >
              <p className="text-lg">{bookMock.book.hotelName}</p>
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <p className="cursor-default text-lg">Бронирование</p>
        </div>
        <Booking
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          persons={persons}
          item={{ ...bookMock.book, ...bookMock.room }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 flex w-full flex-col">
            <p className="mb-2 text-xl font-semibold">Контактные данные</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-1">
                  <Controller
                    control={control}
                    name="secondName"
                    render={({ field, fieldState }) => (
                      <Input {...field} error={fieldState.error as { message: string } | undefined} label="Фамилия" />
                    )}
                  />
                </div>
                <div className="flex-1">
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field, fieldState }) => (
                      <Input {...field} error={fieldState.error as { message: string } | undefined} label="Имя" />
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-1">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        error={fieldState.error as { message: string } | undefined}
                        label="Электронная почта"
                      />
                    )}
                  />
                </div>
                <div className="flex-1">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        error={fieldState.error as { message: string } | undefined}
                        label="Мобильный телефон"
                        type="number"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex w-full flex-col">
            <p className="mb-2 text-xl font-semibold">Комментарий отелю</p>
            <div className="flex flex-col gap-2">
              <Controller
                control={control}
                name="comment"
                render={({ field }) => (
                  <Textarea {...field} placeholder="Здесь вы можете написать свои предпочтения и пожелания" />
                )}
              />
            </div>
          </div>
          <Button className="mt-5">Забронировать</Button>
        </form>
      </div>
    </>
  )
}
