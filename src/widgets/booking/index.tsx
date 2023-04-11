import { useState } from 'react'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { differenceInCalendarDays, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { formatNoun } from 'shared/lib/utils'
import { ModalImages } from 'widgets/modal-images'
import { Button } from 'shared/ui/button'
import { About } from './about'
import { Images } from './images'

type Item = {
  hotelName: string
  hotelAdress: string
  coords: string
  checkInDate: string
  checkOutDate: string
  checkInTime: string
  checkOutTime: string
  name: string
  size: number
  beds: string
  price: number
  images: string[]
  features: {
    [key: string]: string[]
  }
  description: string
  id: number
  guests: {
    adults: number
    childrens?: number[]
  }
}

type Props = {
  item: Item
}

export const Booking = ({ item }: Props) => {
  const [showModalImages, setShowModalImages] = useState(false)
  const [showModalAbout, setShowModalAbout] = useState(false)
  const nights = differenceInCalendarDays(new Date(item.checkOutDate), new Date(item.checkInDate))

  return (
    <>
      <div
        key={item.name}
        className="flex w-full flex-col rounded-md border border-gray-300 shadow-sm transition-all md:flex-row md:gap-4 md:p-4"
      >
        <Images images={item.images} setShowModalImages={setShowModalImages} />
        <div className="flex flex-1 flex-col gap-2 p-2 md:flex-row md:p-0">
          <div className="flex flex-1 flex-col">
            <p className="text-2xl font-semibold">{item.hotelName}</p>
            <div className="flex flex-col text-gray-700">
              <span className="flex items-center">
                <MapPinIcon className="mr-1 h-4 w-4" />
                {item.hotelAdress}
              </span>
            </div>
            <span>
              {item.beds}
              <span>
                &nbsp;·&nbsp;{item.size} м<sup>2</sup>
              </span>
            </span>
            <span>
              {`для ${formatNoun({
                number: item.guests.adults,
                words: ['взрослого', 'взрослых', 'взрослых'],
              })} на ${formatNoun({ number: nights, words: ['ночь', 'ночи', 'ночей'] })}`}
            </span>
            <p className="mt-1 cursor-pointer text-blue-700 hover:text-red-500" onClick={() => setShowModalAbout(true)}>
              Подробнее о номере
            </p>
          </div>
          <div className="flex gap-4 border-t border-gray-300 pt-2 md:mt-0 md:flex-col md:border-l md:border-t-0 md:pt-0 md:pl-4">
            <div className="flex flex-1 flex-col">
              <span className="font-semibold text-gray-700">Заезд</span>
              <span className="font-bold">{format(new Date(item.checkInDate), 'd MMMM, E', { locale: ru })}</span>
              <span className="text-sm">с {item.checkInTime}</span>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-semibold text-gray-700">Выезд</span>
              <span className="font-bold">{format(new Date(item.checkOutDate), 'd MMMM, E', { locale: ru })}</span>
              <span className="text-sm">до {item.checkOutTime}</span>
            </div>
          </div>
        </div>
      </div>
      <ModalImages open={showModalImages} onOpenChange={setShowModalImages} images={item.images} title="Фотографии" />
      <About item={item} open={showModalAbout} onOpenChange={setShowModalAbout} />
    </>
  )
}
