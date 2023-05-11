import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { cn } from 'shared/lib'

type Props = {
  images: string[]
  variant: 'list' | 'grid'
}

export const Images = ({ images, variant }: Props) => {
  const [realIndex, setRealIndex] = useState(0)
  return (
    <Swiper
      resistanceRatio={0}
      modules={[Navigation, Pagination]}
      onRealIndexChange={(swiper) => setRealIndex(swiper.realIndex)}
      pagination={{
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return `<span class="${className} !bg-white"></span>`
        },
      }}
      className={cn(
        'relative h-auto w-full rounded-tl-md rounded-tr-md object-cover md:h-48 md:w-48 md:rounded-md',
        variant === 'grid' && '!rounded-bl-none !rounded-br-none md:h-auto md:w-full'
      )}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image + index} className="h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${image}`}
            className="h-full w-full select-none object-cover"
            alt="hotel image"
          />
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  )
}

const SwiperButtons = () => {
  const swiper = useSwiper()
  const imagesLength = swiper.slides.length
  const baseStyles = cn(
    'text-white bg-black/50 rounded-full absolute top-1/2 z-10 -translate-y-1/2 transform p-1 pointer-events-none opacity-0 transition-all hidden lg:block',
    'group-hover:pointer-events-auto group-hover:opacity-100 select-none hover:bg-white/50 hover:text-black hover:scale-125 active:scale-110'
  )
  return (
    <>
      {swiper.realIndex > 0 && (
        <div
          className={cn(baseStyles, 'left-0 translate-x-2')}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
            swiper.slidePrev()
          }}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </div>
      )}
      {swiper.realIndex < imagesLength - 1 && (
        <div
          className={cn(baseStyles, 'right-0 -translate-x-2')}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
            swiper.slideNext()
          }}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      )}
    </>
  )
}
