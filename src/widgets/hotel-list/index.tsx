import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { Hotel as HotelType } from 'shared/types'
import { cn } from 'shared/lib'
import { ToggleGroup } from 'shared/ui'
import { Hotel } from './ui'

type Props = {
  items: HotelType[]
  nights: number
  className?: string
}

export const HotelList = ({ items, nights, className }: Props) => {
  const router = useRouter()
  const { city, filters, ...linkParams } = router.query
  const [variant, setVariant] = useState<'list' | 'grid'>('list')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const sortedItems = items.sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))
  const isEmpty = sortedItems.length <= 0
  if (isEmpty)
    return (
      <div className="mt-20 flex w-full flex-col items-center gap-2 text-center">
        <p className="text-lg font-bold">К сожалению, под ваши критерии не подходит ни один отель.</p>
        <p>Попробуйте изменить параметры поиска.</p>
      </div>
    )
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
        {sortedItems.map((hotel, index) => (
          <Link href={{ pathname: `/hotels/${hotel.id}`, query: linkParams }} className="flex" key={hotel.name + index}>
            <Hotel item={hotel} nights={nights} variant={variant} />
          </Link>
        ))}
      </div>
    </div>
  )
}
