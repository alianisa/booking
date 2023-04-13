import { useState } from 'react'
import { autoUpdate, offset, size, useFloating } from '@floating-ui/react-dom'
import { useCombobox } from 'downshift'
import { useController } from 'react-hook-form'
import { cn } from 'shared/lib'
import { useIsomorphicLayoutEffect } from 'shared/lib'
import { fetchCities } from 'shared/api'
import { Input, Tag } from 'shared/ui'
import { SearchControl } from 'widgets'

type Props = {
  control: SearchControl
}

export const CitySearch = ({ control }: Props) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: 'city',
    control,
    rules: { required: true },
  })
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
  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, setInputValue } = useCombobox({
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
    selectedItem: value,
  })

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      return autoUpdate(refs.reference.current as any, refs.floating.current as any, update)
    }
  }, [isOpen, update, refs.floating, refs.reference])

  return (
    <div className="flex basis-full flex-col gap-2 md:basis-2/3">
      <Input
        error={!!error}
        placeholder="Город"
        {...getInputProps({ ref: refs.reference as any })}
        onBlur={() => setInputValue(value ?? '')}
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
              className={cn('flex flex-col py-2 px-3 shadow-sm', highlightedIndex === index && 'bg-gray-100')}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item}</span>
            </li>
          ))}
      </ul>
      <div className="hidden gap-2 md:flex">
        <Tag onClick={() => onChange('Москва')}>Москва</Tag>
        <Tag onClick={() => onChange('Санкт‑Петербург')}>Санкт‑Петербург</Tag>
      </div>
    </div>
  )
}
