import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getNightsText = (base: string, nights: number) => {
  const absNights = Math.abs(nights)
  const lastTwoDigits = absNights % 100
  const lastDigit = lastTwoDigits % 10
  const nightForms = ['ночь', 'ночи', 'ночей']
  const baseText = `${base} ${nights} `
  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return baseText + nightForms[2]
  }
  if (lastDigit > 1 && lastDigit < 5) {
    return baseText + nightForms[1]
  }
  if (lastDigit === 1) {
    return baseText + nightForms[0]
  }
  return baseText + nightForms[2]
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
