import React from 'react'
import { FullscreenControl, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'
import { cn } from 'shared/lib/utils'

type Props = {
  coords: number[]
  height: number
  className?: string
}

export const HotelMap = ({ coords, height, className }: Props) => {
  return (
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
  )
}
