import { cn } from 'shared/lib/utils'
import { ItemSkeleton, Room } from './ui'

type Props = {
  items: any[]
  nights: number
  loading: boolean
  className?: string
}

export const RoomList = ({ items, nights, loading, className }: Props) => {
  return (
    <div className={cn('mt-5 flex w-full flex-col gap-5', className)}>
      <div className="flex flex-col gap-4">
        {!loading && items.map((item, index) => <Room room={item} nights={nights} key={item.name + index} />)}
        {/* {loading && Array.from(Array(10)).map((item, index) => <ItemSkeleton key={index} />)} */}
      </div>
    </div>
  )
}
