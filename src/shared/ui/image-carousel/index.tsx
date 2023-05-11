import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { cn } from 'shared/lib'

type Props = {
  images: string[]
}

export const ImageCarousel = ({ images }: Props) => {
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
        'relative h-[320px] cursor-pointer rounded-md object-cover md:h-[640px] lg:h-[960px] xl:h-[1024px]'
      )}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image + index}>
          <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  )
}

const SwiperButtons = () => {
  const swiper = useSwiper()
  const imagesLength = swiper.slides.length
  const baseStyles =
    'hidden md:block text-white bg-black/50 rounded-full absolute top-1/2 z-10 -translate-y-1/2 transform p-1 transition-all pointer-events-auto opacity-100 select-none hover:bg-white/50 hover:text-black hover:scale-125 active:scale-110'

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
