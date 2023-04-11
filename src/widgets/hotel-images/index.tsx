import React, { useState } from 'react'
import { ModalImages } from 'widgets/modal-images'

type Props = {
  images: string[]
}

export const HotelImages = ({ images }: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div
        className="grid cursor-pointer grid-cols-2 grid-rows-1 gap-2 md:basis-3/4 md:grid-cols-4 md:grid-rows-2"
        onClick={() => setShowModal(true)}
      >
        <div className="col-span-2 row-span-2 hidden md:block">
          <img src={images[0]} className="pointer-events-none h-full w-full select-none rounded-md object-cover" />
        </div>
        <div className="col-span-2 row-span-1 hidden md:block">
          <img src={images[1]} className="pointer-events-none h-full w-full select-none rounded-md object-cover" />
        </div>
        <div>
          <img src={images[2]} className="pointer-events-none h-full w-full select-none rounded-md object-cover" />
        </div>
        <div className="relative">
          <div className="absolute flex h-full w-full items-center justify-center rounded-md bg-black/50 text-xl font-bold text-white">
            {images.length} фото
          </div>
          <img src={images[3]} className="pointer-events-none h-full w-full select-none rounded-md object-cover" />
        </div>
      </div>
      <ModalImages open={showModal} onOpenChange={setShowModal} images={images} title="Фотографии" />
    </>
  )
}
