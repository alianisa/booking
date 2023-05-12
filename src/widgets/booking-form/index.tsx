import React, { forwardRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z } from 'zod'
import { Button, Input, Textarea } from 'shared/ui'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  comment: '',
}

const schema = z.object({
  firstName: z.string().min(1, { message: 'Обязательное поле' }),
  lastName: z.string().min(1, { message: 'Обязательное поле' }),
  email: z.string().min(1, { message: 'Обязательное поле' }).email({ message: 'Неверный email' }),
  phone: z.string().min(16, { message: 'Обязательное поле' }),
  comment: z.string(),
})

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  comment: string
}

type Props = {
  onSubmit: (formData: FormData) => Promise<void>
}

export const BookingForm = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 flex w-full flex-col">
        <p className="mb-2 text-xl font-semibold">Контактные данные</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex-1">
              <Controller
                control={control}
                name="lastName"
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
                  <PhoneInput
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
  )
}

type PhoneInputProps = {
  name: string
  value: string
  error?: {
    message: string
  }
  label?: string
  onChange: (...event: any[]) => void
}

const PhoneInput = forwardRef(({ value, onChange, name, label, error }: PhoneInputProps, ref) => {
  return (
    <InputMask value={value} mask="+7(999)999-99-99" maskPlaceholder={null} onChange={onChange}>
      <Input name={name} ref={ref} type="tel" label={label} error={error} />
    </InputMask>
  )
})

PhoneInput.displayName = 'PhoneInput'
