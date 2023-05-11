import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Hotel as HotelType } from 'shared/types'
import { cn, formatNoun } from 'shared/lib'
import { Images } from './images'

type Props = {
  item: HotelType
  nights: number
  variant: 'list' | 'grid'
}

export const Hotel = ({ item, nights, variant }: Props) => {
  const facilities = item.facilities['Удобства Отеля']
  return (
    <div
      key={item.name}
      className={cn(
        'group flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all hover:border-gray-400 hover:shadow-md md:flex-row md:gap-4 md:p-4',
        variant === 'grid' && 'gap-0 md:flex-col md:gap-0 md:p-0'
      )}
    >
      <Images images={item.images} variant={variant} />
      <div className={cn('flex flex-1 flex-col p-2 md:flex-row md:p-0', variant === 'grid' && 'md:p-2')}>
        <div className="flex flex-1 flex-col">
          <p className="text-2xl font-semibold">{item.name}</p>
          <div className="flex flex-col text-gray-700">
            <span className="flex items-center">
              <MapPinIcon className="mr-1 h-4 w-4" />
              {item.adress}
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-1 h-4 w-4" />
              {item.distanceToCenter} км до центра
            </span>
          </div>
          <div
            className={cn(
              'mt-2 flex flex-1 items-end justify-between gap-4',
              variant === 'grid' && 'flex-col items-start gap-2'
            )}
          >
            <div
              className={cn(
                'hidden max-h-12 max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden md:flex',
                variant === 'grid' && 'max-h-12 basis-full'
              )}
            >
              {facilities.map((feature) => (
                <p key={feature}>
                  {feature}
                  <span>&nbsp;·</span>
                </p>
              ))}
            </div>
            <div
              className={cn(
                'flex flex-1 flex-col justify-end md:basis-1/4 md:items-end',
                variant === 'grid' && 'md:basis-full md:items-start'
              )}
            >
              <p className="text-2xl font-semibold">{item.price} ₽</p>
              <p className="text-gray-500">
                Цена за {formatNoun({ number: nights, words: ['ночь', 'ночи', 'ночей'] })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
