import Head from 'next/head'
import { searchListMock } from 'pages/playground/mocks'
import { Search } from 'widgets/search'
import { SearchList } from 'widgets/search-list'
import { Map } from 'widgets/search/ui/map'

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Booking search</title>
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col py-10">
        <Search />
        {/* <Map hotels={searchListMock} /> */}
        <div className="mt-10 h-[400px] w-full animate-pulse rounded-md bg-gray-200"></div>
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
