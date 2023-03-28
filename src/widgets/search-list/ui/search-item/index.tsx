import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { cn, getNightsText } from 'shared/lib/utils'
import { Item } from 'widgets/search-list'

type Props = {
  item: Item
  nights: number
  loading: boolean
  variant: 'list' | 'grid'
}

export const SearchItem = ({ item, nights, variant }: Props) => {
  return (
    <div
      key={item.name}
      className={cn(
        'flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all duration-100 hover:border-gray-400 hover:shadow-md md:flex-row md:gap-4 md:p-4',
        variant === 'grid' && 'gap-0 md:flex-col md:gap-0 md:p-0'
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.images[0]}
        className={cn(
          'h-auto w-full rounded-tl-md rounded-tr-md object-cover md:h-40 md:w-40 md:rounded-md',
          variant === 'grid' && '!rounded-bl-none !rounded-br-none md:h-auto md:w-full'
        )}
        alt="hotel image"
      />
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
              {item.features.map((feature) => (
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
              <p className="text-gray-500">{getNightsText('Цена за', nights)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Skeleton = ({ variant }: { variant: 'list' | 'grid' }) => {
  return (
    <div
      className={cn(
        'flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all duration-100 hover:border-gray-400 hover:shadow-md md:flex-row md:p-4',
        variant === 'grid' && 'md:flex-col md:p-0'
      )}
    >
      <div
        className={cn('h-72 w-full animate-pulse md:mr-4 md:h-40 md:w-40', variant === 'grid' && 'md:h-72 md:w-full')}
      >
        <div className="h-full w-full rounded-md bg-gray-200"></div>
      </div>

      <div className={cn('flex flex-1 flex-col p-2 md:flex-row md:p-0', variant === 'grid' && 'md:p-2')}>
        <div className="flex flex-1 flex-col">
          <div
            className={cn(
              'mb-2 h-8 w-3/4 animate-pulse rounded bg-gray-200 lg:w-2/4',
              variant === 'grid' && 'lg:w-3/4'
            )}
          ></div>
          <div
            className={cn(
              'mb-1 h-6 w-3/5 animate-pulse rounded bg-gray-200 lg:w-1/4',
              variant === 'grid' && 'lg:w-3/5'
            )}
          ></div>
          <div
            className={cn('h-6 w-2/5 animate-pulse rounded bg-gray-200 lg:w-1/5', variant === 'grid' && 'lg:w-2/5')}
          ></div>
          <div
            className={cn(
              'mt-2 flex flex-1 items-end justify-between gap-4',
              variant === 'grid' && 'items-start md:flex-col'
            )}
          >
            <div
              className={cn(
                'hidden max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden md:flex',
                variant === 'grid' && 'w-full'
              )}
            >
              <div className="mb-1 h-6 w-4/5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-2/4 animate-pulse rounded bg-gray-200"></div>
            </div>
            <div className={cn('flex flex-col md:basis-1/4 md:items-end', variant === 'grid' && 'md:items-start')}>
              <div className="my-2 h-8 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
