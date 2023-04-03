import { ClassValue, clsx } from 'clsx'
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
