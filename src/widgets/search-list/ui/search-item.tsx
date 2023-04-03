import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Hotel } from 'pages/playground/mocks'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { cn, formatNoun } from 'shared/lib/utils'

type Props = {
  item: Hotel
  nights: number
  loading: boolean
  variant: 'list' | 'grid'
}

export const SearchItem = ({ item, nights, variant }: Props) => {
  return (
    <div
      key={item.name}
      className={cn(
        'group flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all hover:border-gray-400 hover:shadow-md md:flex-row md:gap-4 md:p-4',
        variant === 'grid' && 'gap-0 md:flex-col md:gap-0 md:p-0'
      )}
    >
      <Images images={item.images} variant={variant} />
      <div className={cn('flex flex-1 flex-col p-2 md:flex-row md:p-0', variant === 'grid' && 'md:p-2')}>
        <div className="flex flex-1 flex-col">
          <p className="text-2xl font-semibold">{item.name}</p>
          <div className="flex flex-col text-gray-700">
            <span className="flex items-center">
              <MapPinIcon className="mr-1 h-4 w-4" />
              {item.adress}
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-1 h-4 w-4" />
              {item.distanceToCenter} км до центра
            </span>
          </div>
          <div
            className={cn(
              'mt-2 flex flex-1 items-end justify-between gap-4',
              variant === 'grid' && 'flex-col items-start gap-2'
            )}
          >
            <div
              className={cn(
                'hidden max-h-12 max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden md:flex',
                variant === 'grid' && 'max-h-12 basis-full'
              )}
            >
              {item.features.map((feature) => (
                <p key={feature}>
                  {feature}
                  <span>&nbsp;·</span>
                </p>
              ))}
            </div>
            <div
              className={cn(
                'flex flex-1 flex-col justify-end md:basis-1/4 md:items-end',
                variant === 'grid' && 'md:basis-full md:items-start'
              )}
            >
              <p className="text-2xl font-semibold">{item.price} ₽</p>
              <p className="text-gray-500">
                Цена за {formatNoun({ number: nights, words: ['ночь', 'ночи', 'ночей'] })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Images = ({ images, variant }: { images: string[]; variant: Props['variant'] }) => {
  const [realIndex, setRealIndex] = useState(0)
  return (
    <Swiper
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
        <SwiperSlide key={image + index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} className="h-full w-full select-none object-cover" alt="hotel image" />
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
        <div className={cn(baseStyles, 'left-0 translate-x-2')} onClick={() => swiper.slidePrev()}>
          <ChevronLeftIcon className="h-5 w-5" />
        </div>
      )}
      {swiper.realIndex < imagesLength - 1 && (
        <div className={cn(baseStyles, 'right-0 -translate-x-2')} onClick={() => swiper.slideNext()}>
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      )}
    </>
  )
}
