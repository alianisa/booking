import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { differenceInCalendarDays, format } from 'date-fns'
import { Hotel } from 'shared/types'
import { parseQuery, serializeQuery } from 'shared/lib'
import { HotelList, HotelSearch, SearchMap } from 'widgets'

type Props = {
  hotels: Hotel[]
  query: any
}

export default function SearchPage({ hotels, query }: Props) {
  const router = useRouter()
  const queryValues = parseQuery(query)
  const { city, checkInDate, checkOutDate } = queryValues
  const title =
    city && checkInDate && checkOutDate
      ? `${city}, ${format(checkInDate, 'dd.MM')} - ${format(checkOutDate, 'dd.MM')}`
      : 'Поиск отелей'
  const nights = differenceInCalendarDays(checkOutDate, checkInDate)
  const onSubmit = (data: any) => {
    const serializedQuery = serializeQuery(data)
    router.push({ query: { ...serializedQuery } })
  }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <HotelSearch queryValues={queryValues} onSubmit={onSubmit} />
        <SearchMap hotels={hotels} city={city as string | undefined} />
        <HotelList items={hotels} nights={nights} />
      </div>
    </>
  )
}

export async function getServerSideProps({ resolvedUrl, query }: GetServerSidePropsContext) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${resolvedUrl}`)
  const hotels = await res.json()

  return { props: { hotels, query } }
}
