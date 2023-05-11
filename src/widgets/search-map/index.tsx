import { Map, ZoomControl } from '@pbe/react-yandex-maps'
import { Hotel } from 'shared/types'
import { useCoords } from 'shared/lib'
import { Mark } from './ui'

type Props = {
  hotels: Hotel[]
  city: string | undefined
}

export const SearchMap = ({ hotels, city }: Props) => {
  const coords = useCoords(city)
  if (!coords) return <div className="mt-5 h-[400px] w-full animate-pulse rounded-md bg-gray-200"></div>
  return (
    <div className="mt-5 overflow-hidden rounded-md">
      <Map state={{ center: coords, zoom: 10 }} height={400} width={'100%'}>
        {hotels.map((hotel, index) => (
          <Mark hotel={hotel} key={hotel.name + index} />
        ))}
        <ZoomControl options={{ size: 'small', position: { top: 16, right: 16 } }} />
      </Map>
    </div>
  )
}
