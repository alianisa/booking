import Head from 'next/head'
import { useRouter } from 'next/router'
import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { parseQuery, useCoords } from 'shared/lib'
import { HotelImages, HotelMap, RoomList, RoomSearch } from 'widgets'
import { hotelMock } from './mock'

export default function HotelPage() {
  const hotel = hotelMock.hotel
  const rooms = hotelMock.rooms
  const router = useRouter()
  const query = router.query
  const queryValues = parseQuery(query)
  const coords = useCoords(hotel.adress)
  const features = Object.entries(hotel.features)
  return (
    <>
      <Head>
        <title>{hotel.name}</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">{hotel.name}</h2>
          <div className="flex flex-col text-lg">
            <span className="flex items-center">
              <MapPinIcon className="mr-1 h-5 w-5" />
              {hotel.adress}
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-1 h-5 w-5" />
              {hotel.distanceToCenter} км до центра
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 md:h-[300px] md:flex-row">
          <HotelImages images={hotel.images} />
          <HotelMap coords={coords} height={300} className="h-[200px] md:h-[300px]" />
          {/* <div className="h-[300px] animate-pulse rounded-md bg-gray-200 md:basis-1/4"></div> */}
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Доступные номера</p>
          <RoomSearch queryValues={queryValues} />
          <RoomList items={rooms as any} nights={2} loading={false} />
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Расположение</p>
          <HotelMap coords={coords} height={400} className="h-[400px]" />
          {/* <div className="h-[400px] animate-pulse rounded-md bg-gray-200 md:basis-1/4"></div> */}
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Про отель</p>
          <p>{hotel.description}</p>
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Удобства и услуги</p>
          <div className="columns-1 gap-2 md:columns-3 lg:columns-4">
            {features.map(([title, features]) => (
              <div key={title} className="flex flex-col">
                <p className="font-semibold">{title}</p>
                <div className="mb-2 flex flex-col">
                  {features.map((feature) => (
                    <div key={feature}>{feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Условия заселения</p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <p className="font-semibold">Время заеда:</p>
              <p>с {hotel.checkInTime}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Время выезда:</p>
              <p>до {hotel.checkOutTime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
