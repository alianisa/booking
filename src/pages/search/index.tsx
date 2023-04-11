import Head from 'next/head'
import { searchListMock } from 'pages/playground/mocks'
import { HotelSearch } from 'widgets/hotel-search'
import { SearchList } from 'widgets/search-list'
import { SearchMap } from 'widgets/search-map'

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Booking search</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-5">
        <HotelSearch />
        {/* <SearchMap hotels={searchListMock} /> */}
        <div className="mt-5 h-[400px] w-full animate-pulse rounded-md bg-gray-200"></div>
        <SearchList
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
