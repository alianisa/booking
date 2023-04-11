import { useState } from 'react'
import Link from 'next/link'
import { formatNoun } from 'shared/lib/utils'
import { ModalImages } from 'widgets/modal-images'
import { Button } from 'shared/ui/button'
import { About } from './about'
import { Images } from './images'

type Item = {
  id: number
  name: string
  size: number
  beds: string
  price: number
  images: string[]
  features: {
    [key: string]: string[]
  }
  description: string
}

type Props = {
  item: Item
  nights: number
}

export const Room = ({ item, nights }: Props) => {
  const [showModalImages, setShowModalImages] = useState(false)
  const [showModalAbout, setShowModalAbout] = useState(false)
  const features = Object.values(item.features).flat()

  return (
    <>
      <div
        key={item.name}
        className="flex w-full flex-col rounded-md border border-gray-300 shadow-sm transition-all md:flex-row md:gap-4 md:p-4"
      >
        <Images images={item.images} setShowModalImages={setShowModalImages} />
        <div className="flex flex-1 flex-col p-2 md:flex-row md:p-0">
          <div className="flex flex-1 flex-col">
            <p className="text-2xl font-semibold">{item.name}</p>
            <span className="text-gray-700">
              {item.beds}
              <span>
                &nbsp;·&nbsp;{item.size} м<sup>2</sup>
              </span>
            </span>
            <div className="mt-2 max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden md:flex">
              <div className="flex max-h-12 max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden">
                {features.map((feature) => (
                  <p key={feature}>
                    {feature}
                    <span>&nbsp;·</span>
                  </p>
                ))}
              </div>
              <p className="cursor-pointer text-blue-700 hover:text-red-500" onClick={() => setShowModalAbout(true)}>
                Подробнее о номере
              </p>
            </div>
            <div className="mt-4 flex flex-1 items-center justify-between gap-4 md:basis-1/4 md:justify-end">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold">{item.price} ₽</p>
                <p className="text-gray-500">
                  Цена за {formatNoun({ number: nights, words: ['ночь', 'ночи', 'ночей'] })}
                </p>
              </div>
              <Link href="/booking">
                <Button>Забронировать</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalImages open={showModalImages} onOpenChange={setShowModalImages} images={item.images} title="Фотографии" />
      <About item={item} open={showModalAbout} onOpenChange={setShowModalAbout} />
    </>
  )
}
