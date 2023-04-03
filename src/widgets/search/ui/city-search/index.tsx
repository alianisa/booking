import { useEffect, useLayoutEffect, useState } from 'react'
import { autoUpdate, offset, size, useFloating } from '@floating-ui/react-dom'
import { useCombobox } from 'downshift'
import { fetchCities } from 'shared/api'
import { cn } from 'shared/lib/utils'
import { Input } from 'shared/ui/input'

type Props = {
  city: string
  onChange: (city: string) => void
}

export const CitySearch = ({ city, onChange }: Props) => {
  const [items, setItems] = useState([])
  const setNewItems = async (query: string) => {
    const cities = await fetchCities(query)
    setItems(cities)
  }
  const { x, y, strategy, refs, update } = useFloating({
    placement: 'bottom',
    middleware: [
      offset(5),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })
  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem, setInputValue } =
    useCombobox({
      id: 'city-search',
      onInputValueChange: ({ inputValue }) => {
        if (inputValue) {
          setNewItems(inputValue)
        }
      },
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          onChange(selectedItem)
        }
      },
      items,
    })

  useEffect(() => {
    setInputValue(city)
  }, [setInputValue, city])

  useLayoutEffect(() => {
    if (isOpen) {
      return autoUpdate(refs.reference.current as any, refs.floating.current as any, update)
    }
  }, [isOpen, update, refs.floating, refs.reference])

  return (
    <div>
      <Input
        placeholder="Город"
        {...getInputProps({ ref: refs.reference as any })}
        onBlur={() => setInputValue(selectedItem ?? '')}
      />
      <ul
        className={cn(
          'z-20 max-h-80 w-full overflow-auto rounded-md border border-gray-200 bg-white p-0 text-gray-900 shadow-md',
          !(isOpen && items.length) && 'hidden'
        )}
        {...getMenuProps({ ref: refs.floating })}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cn(
                'flex flex-col py-2 px-3 shadow-sm',
                highlightedIndex === index && 'bg-gray-100',
                selectedItem === item && 'font-bold'
              )}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
