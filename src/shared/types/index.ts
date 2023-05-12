export type Hotel = {
  id: number
  name: string
  city: string
  address: string
  distanceToCity: number
  images: string[]
  facilities: { [key: string]: string[] }
  price: number
  description?: string
  checkInTime?: string
  checkOutTime?: string
}

export type Room = {
  images: string[]
  facilities: { [key: string]: string[] }
  description: string
  beds: string
  price: number
  size: number
  persons: number
  hotel: string
  id: string
  name: string
}

export type Book = {
  price: number
  city: string
  checkOutTime: string
  checkInTime: string
  hotelAdress: string
  hotelName: string
}
