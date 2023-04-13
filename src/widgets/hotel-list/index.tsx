import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon, ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { Hotel as HotelType } from 'pages/search/mocks'
import { cn } from 'shared/lib'
import { Button, ToggleGroup } from 'shared/ui'
import { Hotel, HotelSkeleton } from './ui'

type Props = {
  items: HotelType[]
  nights: number
  loading: boolean
  fetchNextPage: () => void
  fetchPreviousPage: () => void
  hasNextPage: boolean
  hasPreviousPage: boolean
  className?: string
}

export const HotelList = ({
  items,
  nights,
  loading,
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  className,
}: Props) => {
  const router = useRouter()
  const { city, filters, ...linkParams } = router.query
  const [variant, setVariant] = useState<'list' | 'grid'>('list')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const sortedItems = items.sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))
  return (
    <div className={cn('mt-5 flex w-full flex-col gap-5', className)}>
      <div className="flex justify-between">
        <ToggleGroup
          variant="icon"
          value={sort}
          data={[
            { label: 'Сначала дешевые', value: 'asc' },
            { label: 'Сначала дорогие', value: 'desc' },
          ]}
          onChange={(value) => setSort(value as 'asc' | 'desc')}
        />
        <ToggleGroup
          variant="icon"
          value={variant}
          data={[
            { label: <ListBulletIcon className="h-6 w-6" />, value: 'list' },
            { label: <Squares2X2Icon className="h-6 w-6" />, value: 'grid' },
          ]}
          onChange={(value) => setVariant(value as 'list' | 'grid')}
          className="hidden sm:flex"
        />
      </div>
      <div
        className={cn(
          variant === 'list' && 'flex flex-col gap-4',
          variant === 'grid' && 'grid grid-cols-1  gap-4 sm:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {!loading &&
          sortedItems.map((hotel, index) => (
            <Link
              href={{ pathname: `/hotels/${hotel.id}`, query: linkParams }}
              className="flex"
              key={hotel.name + index}
            >
              <Hotel item={hotel} nights={nights} variant={variant} />
            </Link>
          ))}
        {loading && Array.from(Array(10)).map((item, index) => <HotelSkeleton key={index} variant={variant} />)}
      </div>
      <div className="flex w-full justify-between gap-4">
        <Button variant="secondary" disabled={!hasPreviousPage || loading} onClick={fetchPreviousPage}>
          <ChevronLeftIcon className="mr-2 h-4 w-4 [&>path]:stroke-[3]" />
          Назад
        </Button>
        <Button variant="secondary" disabled={!hasNextPage || loading} onClick={fetchNextPage}>
          Далее
          <ChevronRightIcon className="ml-2 h-4 w-4 [&>path]:stroke-[3]" />
        </Button>
      </div>
    </div>
  )
}