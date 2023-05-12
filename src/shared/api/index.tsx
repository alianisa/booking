export const fetchCities = async (query: string) => {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + process.env.NEXT_PUBLIC_DADATA_API_KEY,
    },
    body: JSON.stringify({ query: query, from_bound: { value: 'city' }, to_bound: { value: 'city' } }),
  }
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    const cities = data.suggestions.map((suggestion: any) => suggestion.data.city)
    return cities
  } catch (error) {
    console.log(error)
  }
}

export const fetchCoords = async (adress: string) => {
  const url =
    `https://geocode-maps.yandex.ru/1.x/?` +
    new URLSearchParams({
      apikey: process.env.NEXT_PUBLIC_YANDEX_API_KEY as string,
      format: 'json',
      geocode: adress,
    })
  const options = {
    method: 'GET',
  }
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    const coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
    return [coords[1], coords[0]] as [number, number]
  } catch (error) {
    console.log(error)
  }
}

type bookData = {
  hotelId: string
  roomId: string
  bookData: {
    checkInDate: string
    checkOutDate: string
    contacts: {
      firstName: string
      lastName: string
      email: string
      phone: string
    }
    persons: number
    comment?: string
  }
}

export const bookRoom = async (data: bookData) => {
  const url = `/api/hotels/${data.hotelId}/rooms/${data.roomId}`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data.bookData),
  }
  try {
    const response = await fetch(url, options)
    const data = await response.text()
    if (response.status === 422) {
      return { status: 'error', message: data }
    }
    return { status: 'success', message: data }
  } catch (error) {
    console.log(error)
  }
}
