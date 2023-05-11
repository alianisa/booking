export type Hotel = {
  id: number
  name: string
  city: string
  adress: string
  distanceToCenter: number
  images: string[]
  facilities: { [key: string]: string[] }
  price: number
}
