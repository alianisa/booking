import Head from 'next/head'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { searchListMock } from 'pages/search/mocks'
import { parseQuery } from 'shared/lib'
import { HotelList, HotelSearch, SearchMap } from 'widgets'

export default function SearchPage() {
  const router = useRouter()
  const query = router.query
  const queryValues = parseQuery(query)
  const { city, checkInDate, checkOutDate } = queryValues
  const title =
    city && checkInDate && checkOutDate
      ? `${city}, ${format(checkInDate, 'dd.MM')} - ${format(checkOutDate, 'dd.MM')}`
      : 'Поиск отелей'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <HotelSearch queryValues={queryValues} />
        {/* <SearchMap hotels={searchListMock} city={city as string | undefined} /> */}
        <div className="mt-5 h-[400px] w-full animate-pulse rounded-md bg-gray-200"></div>
        <HotelList
          items={searchListMock}
          nights={2}
          loading={false}
          fetchNextPage={console.log}
          fetchPreviousPage={console.log}
          hasNextPage={true}
          hasPreviousPage={false}
        />
      </div>
    </>
  )
}
