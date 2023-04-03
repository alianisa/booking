export const fetchCities = async (query: string) => {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + process.env.NEXT_PUBLIC_DADATA_API_KEY,
    },
    body: JSON.stringify({ query: query, from_bound: { value: 'city' }, to_bound: { value: 'city' } }),
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const cities = data.suggestions.map((suggestion: any) => suggestion.data.city)
    return cities
  } catch (error) {
    console.log(error)
  }
}
