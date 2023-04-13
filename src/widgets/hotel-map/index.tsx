import React from 'react'
import { FullscreenControl, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'
import { cn } from 'shared/lib'

type Props = {
  coords: [number, number] | null
  height: number
  className?: string
}

export const HotelMap = ({ coords, height, className }: Props) => {
  if (!coords) return <div className={cn('animate-pulse rounded-md bg-gray-200 md:basis-1/4', `h-[${height}px]`)}></div>
  return (
    <div className="overflow-hidden rounded-md md:basis-1/4">
      <Map
        defaultState={{
          center: coords,
          zoom: 14,
        }}
        height={height}
        width={'100%'}
        className={cn(className)}
      >
        <Placemark geometry={coords} />
        <FullscreenControl />
        <ZoomControl options={{ size: 'small', position: { top: 43, right: 10 } }} />
      </Map>
    </div>
  )
}
