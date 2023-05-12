import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeftIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { differenceInCalendarDays } from 'date-fns'
import { Hotel, Room } from 'shared/types'
import { parseQuery, serializeQuery, useCoords } from 'shared/lib'
import { HotelImages, HotelMap, RoomList, RoomSearch } from 'widgets'

type Props = {
  data: { hotel: Hotel; rooms: Room[] }
  query: any
}

export default function HotelPage({ data, query }: Props) {
  const hotel = data.hotel
  const rooms = data.rooms
  const queryValues = parseQuery(query)
  const coords = useCoords(hotel.address)
  const facilities = Object.entries(hotel.facilities)
  const nights = differenceInCalendarDays(queryValues.checkOutDate, queryValues.checkInDate)
  return (
    <>
      <Head>
        <title>{hotel.name}</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <Link
          className="mb-2 inline-flex w-fit cursor-pointer items-center gap-1 hover:text-red-500"
          href={{
            pathname: '/search',
            query: {
              ...serializeQuery({
                city: hotel.city,
                checkInDate: queryValues.checkInDate,
                checkOutDate: queryValues.checkOutDate,
                persons: queryValues.persons,
              }),
            },
          }}
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <p className="text-lg">Гостиницы</p>
        </Link>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">{hotel.name}</h2>
          <div className="flex flex-col text-lg">
            <span className="flex items-center">
              <MapPinIcon className="mr-1 h-5 w-5" />
              {hotel.address}
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-1 h-5 w-5" />
              {hotel.distanceToCity} км до центра
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 md:h-[300px] md:flex-row">
          <HotelImages images={hotel.images} />
          <HotelMap coords={coords} height={300} className="h-[200px] md:h-[300px]" />
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Доступные номера</p>
          <RoomSearch queryValues={queryValues} />
          <RoomList items={rooms as any} nights={nights} />
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Расположение</p>
          <HotelMap coords={coords} height={400} className="h-[400px]" />
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Про отель</p>
          <p>{hotel.description}</p>
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-semibold">Удобства и услуги</p>
          <div className="columns-1 gap-2 md:columns-3 lg:columns-4">
            {facilities.map(([title, features]) => (
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
              <p>с {hotel?.checkInTime ?? 'fix'}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Время выезда:</p>
              <p>до {hotel?.checkOutTime ?? 'fix'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ resolvedUrl, query }: GetServerSidePropsContext) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${resolvedUrl}`)
  const data = await res.json()

  return { props: { data, query } }
}
