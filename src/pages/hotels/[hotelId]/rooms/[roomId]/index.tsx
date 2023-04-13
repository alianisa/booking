import Head from 'next/head'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { parseQuery } from 'shared/lib/utils'
import { Booking } from 'widgets/booking'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { Textarea } from 'shared/ui/textarea'
import { bookMock } from './mock'

const defaultValues = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  comment: '',
}

export default function BookingPage() {
  const router = useRouter()
  const query = router.query
  const { checkInDate, checkOutDate, guests } = parseQuery(query)

  const { handleSubmit, control } = useForm({
    defaultValues,
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
                    rules={{ required: 'Обязательное поле' }}
                    render={({ field, fieldState }) => (
                      <Input {...field} error={fieldState.error as { message: string } | undefined} label="Фамилия" />
                    )}
                  />
                </div>
                <div className="flex-1">
                  <Controller
                    control={control}
                    name="firstName"
                    rules={{ required: 'Обязательное поле' }}
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
                    rules={{ required: 'Обязательное поле' }}
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
                    rules={{ required: 'Обязательное поле' }}
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        error={fieldState.error as { message: string } | undefined}
                        label="Мобильный телефон"
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
