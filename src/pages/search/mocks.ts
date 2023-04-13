export type Hotel = {
  id: number
  name: string
  city: string
  adress: string
  distanceToCenter: number
  images: string[]
  features: any[]
  price: number
}

export const searchListMock: Hotel[] = [
  {
    id: 1,
    name: 'Cosmos Moscow Vdnh',
    city: 'Москва',
    adress: 'Москва, проспект Мира, 150',
    distanceToCenter: 7.9,
    images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp', '/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
    features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
    price: 3776,
  },
  {
    id: 2,
    name: 'Soluxe Hotel',
    city: 'Москва',
    adress: 'Москва, улица Вильгельма Пика, 16',
    distanceToCenter: 9.9,
    images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp', '/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
    features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
    price: 11200,
  },
]