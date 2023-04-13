import Head from 'next/head'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { parseQuery } from 'shared/lib'
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
  const { checkInDate, checkOutDate, guests } = parseQuery(query)

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  return (
    <>
      <Head>
        <title>Booking search</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <Booking
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guests={guests}
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
