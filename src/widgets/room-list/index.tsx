import { cn } from 'shared/lib'
import { Room } from './ui'

type Props = {
  items: any[]
  nights: number
  className?: string
}

export const RoomList = ({ items, nights, className }: Props) => {
  const isEmpty = items.length <= 0
  if (isEmpty)
    return (
      <div className="mt-5 flex w-full flex-col items-center gap-2 text-center">
        <p className="text-lg font-bold">К сожалению, под ваши критерии не подходит ни один номер.</p>
        <p>Попробуйте изменить параметры поиска.</p>
      </div>
    )
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
