export type Hotel = {
  name: string
  city: string
  adress: string
  distanceToCenter: number
  images: string[]
  features: any[]
  price: number
  coords: string
}

export const searchListMock: Hotel[] = [
  {
    name: 'Cosmos Moscow Vdnh',
    city: 'Москва',
    adress: 'Москва, проспект Мира, 150',
    coords: '55.822276,37.647037',
    distanceToCenter: 7.9,
    images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp', '/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
    features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
    price: 3776,
  },
  {
    name: 'Soluxe Hotel',
    city: 'Москва',
    adress: 'Москва, улица Вильгельма Пика, 16',
    coords: '55.84487,37.634721',
    distanceToCenter: 9.9,
    images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp', '/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
    features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
    price: 11200,
  },
  // {
  //   name: 'Cosmos Moscow Vdnh',
  //   city: 'Москва',
  //   adress: 'Москва, проспект Мира, 150',
  //   distanceToCenter: 7.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 3776,
  // },
  // {
  //   name: 'Soluxe Hotel',
  //   city: 'Москва',
  //   adress: 'Москва, улица Вильгельма Пика, 16',
  //   distanceToCenter: 9.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 11200,
  // },
  // {
  //   name: 'Cosmos Moscow Vdnh',
  //   city: 'Москва',
  //   adress: 'Москва, проспект Мира, 150',
  //   distanceToCenter: 7.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 3776,
  // },
  // {
  //   name: 'Soluxe Hotel',
  //   city: 'Москва',
  //   adress: 'Москва, улица Вильгельма Пика, 16',
  //   distanceToCenter: 9.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 11200,
  // },
  // {
  //   name: 'Cosmos Moscow Vdnh',
  //   city: 'Москва',
  //   adress: 'Москва, проспект Мира, 150',
  //   distanceToCenter: 7.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 3776,
  // },
  // {
  //   name: 'Soluxe Hotel',
  //   city: 'Москва',
  //   adress: 'Москва, улица Вильгельма Пика, 16',
  //   distanceToCenter: 9.9,
  //   images: ['/hotel1.webp', '/hotel2.webp', '/hotel3.webp'],
  //   features: ['Wifi', 'Бассейн', 'Парковка', 'Кондционер в номере', 'Тренажерный зал', 'Оплата картой'],
  //   price: 11200,
  // },
]
