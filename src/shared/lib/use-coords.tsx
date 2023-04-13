import { useEffect, useState } from 'react'
import { fetchCoords } from 'shared/api'

export const useCoords = (adress: string | undefined) => {
  const [coords, setCoords] = useState<[number, number] | null>(null)

  useEffect(() => {
    const getCoords = async (adress: string) => {
      const data = await fetchCoords(adress)
      if (data) setCoords(data)
    }
    if (adress) {
      getCoords(adress)
    }
  }, [adress])

  return coords
}
