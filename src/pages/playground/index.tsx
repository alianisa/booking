import { ReactNode, useState } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { cn } from 'shared/lib/utils'
import { Button } from 'shared/ui/button'
import { Checkbox } from 'shared/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'shared/ui/dialog'
import { IconButton } from 'shared/ui/icon-button'
import { Input } from 'shared/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { Select } from 'shared/ui/select'
import { Switch } from 'shared/ui/switch'
import { Textarea } from 'shared/ui/textarea'
import { ToggleGroup } from 'shared/ui/toggle-group'

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
    <div className="mx-auto flex max-w-7xl flex-col items-center py-10">
      <Block title="Buttons:">
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" disabled>
            Disabled
          </Button>
          <Button size="sm">Primary</Button>
          <Button size="md">Primary</Button>
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
        </div>
        <div className="flex items-center gap-4">
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="sm" disabled />
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="sm" />
          <IconButton icon={<Cog6ToothIcon className="h-6 w-6" />} variant="secondary" size="md" />
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
      </Block>
      <Block title="Dialog:">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Input name="name" value="Pedro Duarte" label="Name" />
              <Input name="username" value="@peduarte" label="Username" />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Block>
      <Block title="Popover:">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Open</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-slate-500">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <Input name="width" defaultValue="100%" />
                <Input name="maxWidth" defaultValue="300px" />
                <Input name="height" defaultValue="25px" />
                <Input name="maxHeight" defaultValue="none" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Block>
    </div>
  )
}

const Block = ({ title, children, className }: { title?: string; children: ReactNode; className?: string }) => {
  return (
    <div className={cn('flex w-full flex-col gap-2 px-4', className)}>
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}
