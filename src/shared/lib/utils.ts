import { ClassValue, clsx } from 'clsx'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNoun = ({ number, words }: { number: number; words: string[] }) => {
  const absNights = Math.abs(number)
  const lastTwoDigits = absNights % 100
  const lastDigit = lastTwoDigits % 10
  const baseText = `${number} `
  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return baseText + words[2]
  }
  if (lastDigit > 1 && lastDigit < 5) {
    return baseText + words[1]
  }
  if (lastDigit === 1) {
    return baseText + words[0]
  }
  return baseText + words[2]
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const parseQuery = (query: { [key: string]: any }) => {
  const newQuery: { [key: string]: any } = {}
  if (query.city) newQuery['city'] = query.city
  if (query.checkInDate) newQuery['checkInDate'] = new Date(query.checkInDate)
  if (query.checkOutDate) newQuery['checkOutDate'] = new Date(query.checkOutDate)
  if (query.persons) newQuery['persons'] = Number(query.persons)
  if (query.filters) {
    const filters = query.filters.split(',')
    if (filters.length > 0) {
      newQuery['filters'] = {}
      for (const filter of filters) {
        newQuery['filters'][filter] = true
      }
    }
  }

  return newQuery
}

export const serializeQuery = (formValues: { [key: string]: any }) => {
  const serializedQuery: { [key: string]: any } = {}
  if (formValues.city) serializedQuery['city'] = formValues.city
  if (formValues.checkInDate) serializedQuery['checkInDate'] = format(formValues.checkInDate, 'yyyy-MM-dd')
  if (formValues.checkOutDate) serializedQuery['checkOutDate'] = format(formValues.checkOutDate, 'yyyy-MM-dd')
  serializedQuery['persons'] = formValues.persons
  if (formValues.filters) {
    const activeFilters = Object.keys(formValues.filters).filter((filter) => formValues.filters[filter])
    if (activeFilters.length > 0) serializedQuery['filters'] = activeFilters.join(',')
  }

  return serializedQuery
}
