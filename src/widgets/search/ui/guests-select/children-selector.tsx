import { XMarkIcon } from '@heroicons/react/24/outline'
import { formatNoun } from 'shared/lib/utils'

type ChildrenSelectorProps = {
  value: number[]
  onChange: (value: number[]) => void
}
const CHILDREN_OPTIONS = [
  { label: 'до 1 года', value: '0' },
  { label: '1 год', value: '1' },
  { label: '2 года', value: '2' },
  { label: '3 года', value: '3' },
  { label: '4 года', value: '4' },
  { label: '5 лет', value: '5' },
  { label: '6 лет', value: '6' },
  { label: '7 лет', value: '7' },
  { label: '8 лет', value: '8' },
  { label: '9 лет', value: '9' },
  { label: '10 лет', value: '10' },
  { label: '11 лет', value: '11' },
  { label: '12 лет', value: '12' },
  { label: '13 лет', value: '13' },
  { label: '14 лет', value: '14' },
  { label: '15 лет', value: '15' },
  { label: '16 лет', value: '16' },
  { label: '17 лет', value: '17' },
]

export const ChildrenSelector = ({ value, onChange }: ChildrenSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      {value.map((age, index) => (
        <div
          className="flex w-full items-center justify-between gap-2 rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 shadow-sm"
          key={age + index}
        >
          Ребенок: {age === 0 ? 'До 1 года' : formatNoun({ number: age, words: ['год', 'года', 'лет'] })}
          <XMarkIcon
            className="h-5 w-5 cursor-pointer text-gray-700"
            onClick={() => onChange(value.filter((_, childrenIndex) => index !== childrenIndex))}
          />
        </div>
      ))}
      {value.length < 4 && (
        <select
          className="block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 placeholder-gray-500 shadow-sm outline-none transition-all hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed"
          onChange={(e) => onChange([...value, Number(e.target.value)])}
          value=""
        >
          <option value="" disabled>
            Добавить ребенка
          </option>
          {CHILDREN_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
