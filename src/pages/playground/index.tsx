import { Button } from 'shared/ui/button'
import { Checkbox } from 'shared/ui/checkbox'
import { IconButton } from 'shared/ui/icon-button'
import { Input } from 'shared/ui/input'
import { Select } from 'shared/ui/select'
import { Switch } from 'shared/ui/switch'
import { Textarea } from 'shared/ui/textarea'
import { ToggleGroup } from 'shared/ui/toggle-group'
import { ReactNode, useState } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function Playground() {
  const [toggleGroupValue, setToggleGroupValue] = useState('data2')
  const [toggleGroupValue2, setToggleGroupValue2] = useState('date')
  const [toggleGroupValue3, setToggleGroupValue3] = useState('variant1')
  const selectOptions = [
    { label: 'value1', value: 'value1' },
    { label: 'value2', value: 'value2' },
    { label: 'value3', value: 'value3' },
  ]
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center py-20">
      <Block title="Buttons:">
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" disabled>
            Disabled
          </Button>
          <Button size="sm">Primary</Button>
          <Button size="md">Primary</Button>
          <Button size="lg">Primary</Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" disabled>
            Disabled
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="secondary" size="md">
            Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button leftIcon={<Cog6ToothIcon className="h-6 w-6" />} variant="primary" size="sm" disabled>
            Disabled
          </Button>
          <Button leftIcon={<Cog6ToothIcon className="h-6 w-6" />} size="sm">
            Primary
          </Button>
          <Button leftIcon={<Cog6ToothIcon className="h-6 w-6" />} size="md">
            Primary
          </Button>
          <Button leftIcon={<Cog6ToothIcon className="h-6 w-6" />} size="lg">
            Primary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button rightIcon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="sm" disabled>
            Disabled
          </Button>
          <Button variant="secondary" rightIcon={<Cog6ToothIcon className="h-6 w-6" />} size="sm">
            Primary
          </Button>
          <Button variant="secondary" rightIcon={<Cog6ToothIcon className="h-6 w-6" />} size="md">
            Primary
          </Button>
          <Button variant="secondary" rightIcon={<Cog6ToothIcon className="h-6 w-6" />} size="lg">
            Primary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="sm" disabled />
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="sm" />
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="md" />
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="lg" />
        </div>
        <div className="flex items-center gap-4">
          <ToggleGroup
            value={toggleGroupValue}
            data={[
              { label: 'data1', value: 'data1' },
              { label: 'data2', value: 'data2' },
              { label: 'data3', value: 'data3' },
            ]}
            onChange={(value) => setToggleGroupValue(value)}
          />
          <ToggleGroup
            value={toggleGroupValue2}
            data={[
              { label: 'Sort by date', value: 'date' },
              { label: 'Sort by price', value: 'price' },
            ]}
            onChange={(value) => setToggleGroupValue2(value)}
          />
          <ToggleGroup
            value={toggleGroupValue3}
            data={[
              { label: <Cog6ToothIcon className="h-6 w-6" />, value: 'variant1' },
              { label: <Cog6ToothIcon className="h-6 w-6" />, value: 'variant2' },
            ]}
            onChange={(value) => setToggleGroupValue3(value)}
          />
          <ToggleGroup
            variant="icon"
            value={toggleGroupValue3}
            data={[
              { label: <Cog6ToothIcon className="h-6 w-6" />, value: 'variant1' },
              { label: <Cog6ToothIcon className="h-6 w-6" />, value: 'variant2' },
            ]}
            onChange={(value) => setToggleGroupValue3(value)}
          />
        </div>
      </Block>
      <Block title="Inputs:">
        <div className="flex items-center gap-4">
          <Input size="sm" name="sm1" label="Label" placeholder="small size" error="This is an error message." />
          <Input size="sm" name="sm2" label="Label" placeholder="small size" hint="This is a hint text to help user." />
          <Input
            size="sm"
            name="sm3"
            label="Label"
            placeholder="small size"
            hint="This is a hint text to help user."
            disabled
          />
        </div>
        <div className="flex items-center gap-4">
          <Input name="md1" label="Label" placeholder="medium size" error="This is an error message." />
          <Input name="md2" label="Label" placeholder="medium size" hint="This is a hint text to help user." />
          <Input name="md3" label="Label" placeholder="medium size" hint="This is a hint text to help user." disabled />
        </div>
        <div className="flex items-center gap-4">
          <Input size="lg" name="lg1" label="Label" placeholder="large size" error="This is an error message." />
          <Input size="lg" name="lg2" label="Label" placeholder="large size" hint="This is a hint text to help user." />
          <Input
            size="lg"
            name="lg3"
            label="Label"
            placeholder="large size"
            hint="This is a hint text to help user."
            disabled
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            name="filled1"
            label="Label"
            placeholder="medium size"
            error="This is an error message."
            variant="filled"
          />
          <Input
            name="filled2"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            variant="filled"
          />
          <Input
            name="filled3"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            disabled
            variant="filled"
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            name="search1"
            label="Label"
            placeholder="leftElement"
            error="This is an error message."
            variant="filled"
            leftElement={<Cog6ToothIcon className="h-6 w-6" />}
          />
          <Input
            name="search2"
            label="Label"
            placeholder="rightElement"
            hint="This is a hint text to help user."
            variant="filled"
            rightElement={<Cog6ToothIcon className="h-6 w-6" />}
          />
          <Input
            name="search3"
            label="Label"
            placeholder="rightElement"
            hint="This is a hint text to help user."
            disabled
            variant="filled"
            rightElement={<>test</>}
          />
        </div>
      </Block>
      <Block title="Checkboxes:">
        <div className="flex items-center gap-4">
          <Checkbox name="checkbox1" label="Label sm" size="sm" />
          <Checkbox name="checkbox2" label="Label md" defaultChecked />
          <Checkbox name="checkbox3" label="Label md" disabled defaultChecked />
        </div>
      </Block>
      <Block title="Switches:">
        <div className="flex items-center gap-4">
          <Switch name="switch1" label="size sm" size="sm" />
          <Switch name="switch2" label="size md" size="md" defaultChecked />
          <Switch name="switch3" label="size sm" size="sm" disabled />
          <Switch name="switch4" label="size md" size="md" defaultChecked disabled />
        </div>
      </Block>
      <Block title="Textarea:">
        <div className="flex items-center gap-4">
          <Textarea name="textarea1" label="Label" placeholder="medium size" error="This is an error message." />
          <Textarea
            variant="filled"
            name="textarea2"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
          />
          <Textarea
            name="textarea3"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            disabled
          />
        </div>
      </Block>
      <Block title="Select:">
        <div className="flex items-center gap-4">
          <Select
            size="sm"
            name="select1"
            label="Label"
            placeholder="small size"
            error="This is an error message."
            options={selectOptions}
          />
          <Select
            size="sm"
            variant="filled"
            name="select2"
            label="Label"
            placeholder="small size"
            hint="This is a hint text to help user."
            options={selectOptions}
          />
          <Select
            size="sm"
            name="select3"
            label="Label"
            placeholder="small size"
            hint="This is a hint text to help user."
            disabled
            options={selectOptions}
          />
        </div>
        <div className="flex items-center gap-4">
          <Select
            name="select1"
            label="Label"
            placeholder="medium size"
            error="This is an error message."
            options={selectOptions}
          />
          <Select
            variant="filled"
            name="select2"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            options={selectOptions}
          />
          <Select
            name="select3"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            disabled
            options={selectOptions}
          />
        </div>
        <div className="flex items-center gap-4">
          <Select
            size="lg"
            name="select1"
            label="Label"
            placeholder="large size"
            error="This is an error message."
            options={selectOptions}
          />
          <Select
            size="lg"
            variant="filled"
            name="select2"
            label="Label"
            placeholder="large size"
            hint="This is a hint text to help user."
            options={selectOptions}
          />
          <Select
            size="lg"
            name="select3"
            label="Label"
            placeholder="large size"
            hint="This is a hint text to help user."
            disabled
            options={selectOptions}
          />
        </div>
      </Block>
    </div>
  )
}

const Block = ({ title, children }: { title?: string; children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}
