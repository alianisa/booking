import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { differenceInCalendarDays, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Book, Room } from 'shared/types'
import { formatNoun } from 'shared/lib'
import { ModalAbout, ModalImages } from 'shared/ui'
import { Images } from './ui'

type Props = {
  data: {
    book: Book
    room: Room
  }
  checkInDate: Date
  checkOutDate: Date
  persons: number
}

const formatDescription = (persons: number, nights: number) => {
  const personsPart = `для ${formatNoun({
    number: persons,
    words: ['гость', 'гостя', 'гостей'],
  })}`

  const nigtsPart = `на ${formatNoun({
    number: nights,
    words: ['ночь', 'ночи', 'ночей'],
  })}`

  return `${personsPart} ${nigtsPart}`
}

export const Booking = ({ data, checkInDate, checkOutDate, persons }: Props) => {
  const [showModalImages, setShowModalImages] = useState(false)
  const [showModalAbout, setShowModalAbout] = useState(false)
  const nights = differenceInCalendarDays(checkOutDate, checkInDate)
  const { book, room } = data
  if (!checkInDate) return null
  if (!checkOutDate) return null
  if (!persons) return null
  return (
    <>
      <div className="flex w-full flex-col rounded-md border border-gray-300 shadow-sm transition-all md:flex-row md:gap-4 md:p-4">
        <Images images={room.images} setShowModalImages={setShowModalImages} />
        <div className="flex flex-1 flex-col gap-2 p-2 md:flex-row md:p-0">
          <div className="flex flex-1 flex-col">
            <p className="text-2xl font-semibold">{book.hotelName}</p>
            <div className="flex flex-col text-gray-700">
              <span className="flex items-center">
                <MapPinIcon className="mr-1 h-4 w-4" />
                {book.hotelAdress}
              </span>
            </div>
            <span>
              {room.beds}
              <span>
                &nbsp;·&nbsp;{room.size} м<sup>2</sup>
              </span>
            </span>
            <span>{formatDescription(persons, nights)}</span>
            <p className="mt-1 cursor-pointer text-blue-700 hover:text-red-500" onClick={() => setShowModalAbout(true)}>
              Подробнее о номере
            </p>
            <p className="mt-2 text-3xl font-semibold">{book.price} ₽</p>
          </div>
          <div className="flex gap-4 border-t border-gray-300 pt-2 md:mt-0 md:flex-col md:border-l md:border-t-0 md:pt-0 md:pl-4">
            <div className="flex flex-1 flex-col">
              <span className="font-semibold text-gray-700">Заезд</span>
              <span className="font-bold">{format(checkInDate, 'd MMMM, E', { locale: ru })}</span>
              <span className="text-sm">с {book.checkInTime}</span>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-semibold text-gray-700">Выезд</span>
              <span className="font-bold">{format(checkOutDate, 'd MMMM, E', { locale: ru })}</span>
              <span className="text-sm">до {book.checkOutTime}</span>
            </div>
          </div>
        </div>
      </div>
      <ModalImages open={showModalImages} onOpenChange={setShowModalImages} images={room.images} title="Фотографии" />
      <ModalAbout item={room} open={showModalAbout} onOpenChange={setShowModalAbout} />
    </>
  )
}
