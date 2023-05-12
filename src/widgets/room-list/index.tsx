import { cn } from 'shared/lib'
import { Room } from './ui'

type Props = {
  items: any[]
  nights: number
  className?: string
}

export const RoomList = ({ items, nights, className }: Props) => {
  return (
    <div className={cn('mt-5 flex w-full flex-col gap-5', className)}>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <Room room={item} nights={nights} key={item.name + index} />
        ))}
      </div>
    </div>
  )
}
