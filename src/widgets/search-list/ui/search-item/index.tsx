import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { getNightsText } from 'shared/lib/utils'
import { Item } from 'widgets/search-list'

type Props = {
  item: Item
  nights: number
  loading: boolean
}

export const SearchItem = ({ item, nights, loading }: Props) => {
  return (
    <div
      key={item.name}
      className="flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all duration-100 hover:border-gray-400 hover:shadow-md md:flex-row md:p-4"
    >
      {loading ? (
        <div className="h-72 w-full animate-pulse md:mr-4 md:h-40 md:w-40">
          <div className="h-full w-full rounded-md bg-gray-200"></div>
        </div>
      ) : (
        <img
          src={item.images[0]}
          className="h-auto w-full  rounded-md object-cover md:mr-4 md:h-40 md:w-40"
          alt="hotel image"
        />
      )}
      <div className="flex flex-col p-2 md:flex-1 md:flex-row md:p-0">
        <div className="flex flex-1 flex-col">
          {loading ? (
            <>
              <div className="mb-2 h-8 w-3/4 animate-pulse rounded bg-gray-200 lg:w-2/4"></div>
              <div className="mb-1 h-6 w-3/5 animate-pulse rounded bg-gray-200 lg:w-1/4"></div>
              <div className="h-6 w-2/5 animate-pulse rounded bg-gray-200 lg:w-1/5"></div>
              <div className="mt-auto hidden  max-w-md flex-wrap gap-x-1 overflow-hidden md:flex">
                <div className="mb-1 h-6 w-4/5 animate-pulse rounded bg-gray-200"></div>
                <div className="h-6 w-2/4 animate-pulse rounded bg-gray-200"></div>
              </div>
            </>
          ) : (
            <>
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
              <div className="mt-auto hidden max-h-12 max-w-md flex-wrap gap-x-1 overflow-hidden md:flex">
                {item.features.map((feature) => (
                  <p key={feature}>
                    {feature}
                    <span>&nbsp;·</span>
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="mt-auto flex flex-col">
          {loading ? (
            <>
              <div className="my-2 h-8 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold">{item.price} ₽</p>
              <p className="text-gray-500">{getNightsText('Цена за', nights)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
