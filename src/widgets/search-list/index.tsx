import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from 'shared/ui/button'
import { SearchItem } from './ui/search-item'

export type Item = {
  name: string
  city: string
  adress: string
  distanceToCenter: number
  images: string[]
  features: any[]
  price: number
}

type Props = {
  items: Item[]
  nights: number
  loading: boolean
  fetchNextPage: () => void
  fetchPreviousPage: () => void
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export const SearchList = ({
  items,
  nights,
  loading,
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
}: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((item, index) => (
        <SearchItem item={item} nights={nights} key={item.name + index} loading={loading} />
      ))}
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
