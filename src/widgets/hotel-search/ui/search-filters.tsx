import { useEffect, useState } from 'react'
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller } from 'react-hook-form'
import { SearchControl } from 'widgets/hotel-search'
import { Checkbox } from 'shared/ui/checkbox'
import { Button } from '../../../shared/ui/button'

const LABELS_MAP = {
  hasWifi: 'Wi-Fi',
  hasAirConditioner: 'Кондиционер',
  hasPool: 'Бассейн',
  hasParking: 'Парковка',
  hasSpa: 'SPA',
  hasSauna: 'Сауна',
  hasRestaraunt: 'Ресторан',
  hasCafe: 'Кафе',
  hasFitness: 'Фитнес',
  hasTransfer: 'Трансфер',
  hasConferenceHall: 'Конференц-зал',
  beachClose: 'Пляж рядом',
  skiSlopeClose: 'Горнолыжный склон рядом',
  airportClose: 'Аэропорт рядом',
  animalsAllowed: 'Можно с животными',
  hasBreakfast: 'Завтрак включён',
  hasTwoMeals: 'Завтрак + обед или ужин включены',
  hasThreeMeals: 'Завтрак, обед и ужин включены',
  hasNoFood: 'Без питания',
} as const

const AMENITIES_FILTERS = [
  'hasWifi',
  'hasAirConditioner',
  'hasPool',
  'hasParking',
  'hasSpa',
  'hasSauna',
  'hasRestaraunt',
  'hasCafe',
  'hasFitness',
  'hasTransfer',
  'hasConferenceHall',
] as const
const FOOD_FILTERS = ['hasBreakfast', 'hasTwoMeals', 'hasThreeMeals', 'hasNoFood'] as const
const LOCATION_FILTERS = ['beachClose', 'skiSlopeClose', 'airportClose'] as const

type Props = {
  control: SearchControl
  onReset: () => void
  filtersCount: number
}

export const SearchFilters = ({ control, onReset, filtersCount }: Props) => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<HTMLElement | null>(null)
  useEffect(() => {
    const element = document.getElementById('search-form')
    setForm(element)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="secondary" full>
          <AdjustmentsHorizontalIcon className="mr-2 h-5 w-5" />
          Фильтры
          {filtersCount > 0 && (
            <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-sm font-bold text-white">
              {filtersCount}
            </div>
          )}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <div className="fixed inset-0 z-50 flex items-end md:justify-end">
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content className="z-50 h-5/6 w-full scale-100 gap-4 overflow-y-auto bg-white p-6 opacity-100 animate-in slide-in-from-bottom duration-300 md:h-full md:w-[420px] md:slide-in-from-right md:slide-in-from-bottom-0">
            <div className="flex w-full flex-col space-y-2 text-center">
              <p className="text-lg font-semibold text-slate-900">Фильтры</p>
            </div>
            <Dialog.Close className="absolute top-6 right-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none data-[state=open]:bg-gray-100">
              <XMarkIcon className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Удобства</p>
                {AMENITIES_FILTERS.map((filter) => (
                  <Controller
                    control={control}
                    key={filter}
                    name={`filters.${filter}`}
                    render={({ field }) => <Checkbox {...field} label={LABELS_MAP[filter]} />}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Питание</p>
                {FOOD_FILTERS.map((filter) => (
                  <Controller
                    control={control}
                    key={filter}
                    name={`filters.${filter}`}
                    render={({ field }) => <Checkbox {...field} label={LABELS_MAP[filter]} />}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Расположение</p>
                {LOCATION_FILTERS.map((filter) => (
                  <Controller
                    control={control}
                    key={filter}
                    name={`filters.${filter}`}
                    render={({ field }) => <Checkbox {...field} label={LABELS_MAP[filter]} />}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
                <div className="flex-1">
                  <Button
                    variant="secondary"
                    full
                    onClick={() => {
                      onReset()
                      if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
                    }}
                  >
                    Сбросить
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    full
                    onClick={() => {
                      if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
                      setOpen(false)
                    }}
                  >
                    Применить
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
