import { useMemo } from 'react'
import { Placemark, Map as YMap, YMaps, ZoomControl, useYMaps } from '@pbe/react-yandex-maps'
import { Hotel } from 'pages/playground/mocks'

type Props = {
  hotels: Hotel[]
  defaultState?: {
    center: [x: number, y: number]
    zoom: number
  }
}

export const Map = ({
  hotels,
  defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  },
}: Props) => {
  return (
    <YMaps>
      <div className="mt-10 overflow-hidden rounded-md">
        <YMap defaultState={defaultState} height={400} width={'100%'}>
          {hotels.map((hotel, index) => (
            <Mark hotel={hotel} key={hotel.name + index} />
          ))}
          <ZoomControl options={{ size: 'small', position: { top: 16, right: 16 } }} />
        </YMap>
      </div>
    </YMaps>
  )
}

const Mark = ({ hotel }: { hotel: Hotel }) => {
  const ymaps = useYMaps(['templateLayoutFactory'])
  const coords = hotel.coords.split(',').map((coord) => Number(coord))
  const layout = useMemo(() => {
    if (!ymaps) return ''

    const layout = ymaps.templateLayoutFactory.createClass(
      `<div class='mark-container -translate-x-7 -translate-y-8'>
      <div class="mark-pin relative w-14 h-4 p-2 bg-white rounded-md text-xs flex items-center justify-center border border-gray-300">${hotel.price}₽

      <div class="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2">
      <div class="w-0 h-0  border-l-[5px] border-l-transparent
      border-t-[10px] border-t-white
      border-r-[5px] border-r-transparent"></div>
      </div>

      </div>
      <div class='mark-popup absolute hidden -translate-y-[105px] -translate-x-[116px]'>
      <div class='flex gap-2 w-72 h-20 p-2 bg-white rounded-md items-center'>
      <div class='w-14 h-14 rounded-md shrink-0'>
      <img src=${hotel.images[0]} class='w-full h-full object-cover rounded-md' />
      </div>
      <div class='flex flex-col gap-2 justify-between'>
      <p class='text-sm font-semibold line-clamp-1'>${hotel.name}</p>
      <p class='text-sm font-semibold'>${hotel.price}₽</p>
      </div>
      </div>
      </div>
      </div>`,
      {
        build: function () {
          // @ts-ignore-start
          layout.superclass.build.call(this)
          // @ts-ignore
          const markPin = this.getParentElement().getElementsByClassName('mark-pin')[0]
          // @ts-ignore
          const markPopup = this.getParentElement().getElementsByClassName('mark-popup')[0]
          // @ts-ignore
          this.getData().options.set('shape', {
            type: 'Rectangle',
            coordinates: [
              [-28, -32],
              [28, -16],
            ],
          })
          // @ts-ignore
          this.getData().geoObject.events.add(
            'click',
            () => {
              console.log(hotel.name, 'pressed')
            },
            this
          )
          // @ts-ignore
          this.getData().geoObject.events.add(
            'mouseenter',
            () => {
              markPopup.classList.remove('hidden')
              markPopup.classList.add('flex')
              markPin.classList.add('scale-125')
            },
            this
          )
          // @ts-ignore
          this.getData().geoObject.events.add(
            'mouseleave',
            () => {
              markPopup.classList.remove('flex')
              markPopup.classList.add('hidden')
              markPin.classList.remove('scale-125')
            },
            this
          )
        },
      }
    )
    return layout
  }, [ymaps])

  return (
    <Placemark
      geometry={coords}
      options={{
        iconLayout: layout,
      }}
    />
  )
}