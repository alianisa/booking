import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getHolidays, serializeQuery } from 'shared/lib'
import { HotelSearch } from 'widgets'

const popularPlaces = [
  { city: 'Москва', img: '/moscow.webp' },
  { city: 'Санкт-Петербург', img: '/spb.webp' },
  { city: 'Казань', img: '/kazan.webp' },
  { city: 'Сочи', img: '/sochi.jpg' },
]

const { saturday, sunday } = getHolidays()

export default function IndexPage() {
  const router = useRouter()
  const onSubmit = (data: any) => {
    const serializedQuery = serializeQuery(data)
    router.push({ pathname: '/search', query: { ...serializedQuery } })
  }
  return (
    <>
      <Head>
        <title>Бронирование отелей</title>
        <meta name="description" content="Next.js template for building apps with Radix UI and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Забронируйте отель всего за <br className="hidden sm:inline" />
            несколько кликов
          </h1>
        </div>
        <HotelSearch queryValues={{}} filters={false} onSubmit={onSubmit} />
        <div className="flex flex-col items-start gap-2 md:mt-5">
          <p className="text-2xl">Популярные направления</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPlaces.map(({ city, img }) => (
              <Link
                key={city}
                href={{
                  pathname: '/search',
                  query: {
                    ...serializeQuery({ city: city, checkInDate: saturday, checkOutDate: sunday, persons: 2 }),
                  },
                }}
              >
                <div className="relative flex h-72 rounded-md">
                  <img src={img} alt="Фото города" className="h-full w-full rounded-md object-cover" />
                  <div className="absolute flex h-full w-full flex-col justify-end">
                    <div className="rounded-bl-md rounded-br-md bg-gradient-to-t from-black p-2 pt-10">
                      <p className="text-xl font-bold text-white">{city}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
